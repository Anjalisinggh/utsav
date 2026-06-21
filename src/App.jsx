import { useCallback, useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import AboutPage from './pages/AboutPage'
import CategoriesPage from './pages/CategoriesPage'
import CollectionPage from './pages/CollectionPage'
import HomePage from './pages/HomePage'

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/categories': CategoriesPage,
  '/collections': CollectionPage,
}

function getPathname() {
  return window.location.pathname || '/'
}

function App() {
  const [route, setRoute] = useState(getPathname)

  const navigate = useCallback((path) => {
    setRoute(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (window.location.hash.startsWith('#/')) {
      const path = window.location.hash.slice(1) || '/'
      window.history.replaceState({}, '', path)
      navigate(path)
    }

    const onPopState = () => navigate(getPathname())

    const onClick = (event) => {
      const anchor = event.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return

      event.preventDefault()
      window.history.pushState({}, '', href)
      navigate(href)
    }

    window.addEventListener('popstate', onPopState)
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('popstate', onPopState)
      document.removeEventListener('click', onClick)
    }
  }, [navigate])

  const categoryMatch = route.match(/^\/categories\/(.+)$/)
  const collectionMatch = route.match(/^\/collections\/(.+)$/)
  const isRoutedPage = Boolean(routes[route] || categoryMatch || collectionMatch)
  const ActivePage = routes[route] || HomePage

  return (
    <MainLayout hideNavbar={route === '/' || !isRoutedPage}>
      {categoryMatch && <CategoriesPage categorySlug={categoryMatch[1]} />}
      {collectionMatch && <CollectionPage categorySlug={collectionMatch[1]} />}
      {!categoryMatch && !collectionMatch && <ActivePage />}
    </MainLayout>
  )
}

export default App
