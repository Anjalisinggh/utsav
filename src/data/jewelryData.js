import {
  FaGem,
  FaInstagram,
  FaRegHeart,
  FaShippingFast,
  FaShieldAlt,
  FaStar,
  FaStore,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { GiDiamondRing, GiEarrings, GiNecklaceDisplay } from 'react-icons/gi'
import { IoGiftOutline } from 'react-icons/io5'
import { PiSparkleFill } from 'react-icons/pi'
import { catalogProducts } from './catalogProducts'

const hiddenCatalogIds = new Set([492497750, 491089276, 492496903, 485162877, 495545763, 495994033, 487959814, 482723062, 485162655, 489554589, 485162460, 486849047, 485304100, 492399043])
const featuredCatalogIds = [900000101, 900000102, 900000103, 900000104, 900000106, 900000107, 900000105]

function uniqueByCatalog(products) {
  const seen = new Set()

  return products.filter((product) => {
    if (hiddenCatalogIds.has(Number(product.id))) return false
    const key = `${product.id}-${product.slug}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Collections', href: '/collections' },
  { label: 'Categories', href: '/categories' },
]

export const heroImages = {
  background:
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85',
  detail:
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=720&q=85',
}

export const featureItems = [
  {
    title: 'Free Shipping',
    text: 'Complimentary insured delivery for every signature piece.',
    icon: FaShippingFast,
  },
  {
    title: 'Exclusive Design',
    text: 'Sculptural silhouettes crafted in limited seasonal drops.',
    icon: PiSparkleFill,
  },
  {
    title: 'Good Packaging',
    text: 'Keepsake boxes wrapped with soft suede and warm foil detail.',
    icon: IoGiftOutline,
  },
  {
    title: 'Highest Quality',
    text: 'Ethically sourced stones finished by master goldsmiths.',
    icon: FaShieldAlt,
  },
]

export const aboutImages = {
  editorial:
    'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
  product:
    'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?auto=format&fit=crop&w=640&q=85',
}

export const collectionItems = uniqueByCatalog(catalogProducts).sort((a, b) => {
  const aIndex = featuredCatalogIds.indexOf(Number(a.id))
  const bIndex = featuredCatalogIds.indexOf(Number(b.id))

  if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
  if (aIndex !== -1) return -1
  if (bIndex !== -1) return 1
  return 0
})

export const aboutStats = [
  { value: '18+', label: 'Years of craft' },
  { value: '42K', label: 'Pieces delivered' },
  { value: '96%', label: 'Repeat clients' },
]

export const atelierValues = [
  'Hand-finished metals with softly polished edges.',
  'Small-batch releases designed to avoid overproduction.',
  'Ethically sourced stones selected for warmth and clarity.',
]

export const videoPreview = {
  image:
    'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1100&q=85',
}

export const categories = [
  {
    name: 'Earrings',
    slug: 'earrings',
    icon: GiEarrings,
    image: catalogProducts.find((product) => product.id === 900000101)?.image,
  },
  {
    name: 'Necklaces',
    slug: 'necklaces',
    icon: GiNecklaceDisplay,
    image: catalogProducts.find((product) => product.category === 'Necklaces')?.image,
  },
  {
    name: 'Bangles',
    slug: 'bangles',
    icon: GiDiamondRing,
    image: catalogProducts.find((product) => product.id === 900000104)?.image,
  },
  {
    name: 'Hair Accessories',
    slug: 'hair-accessories',
    icon: PiSparkleFill,
    image: catalogProducts.find((product) => product.id === 900000105)?.image,
  },
  {
    name: 'Mangalsutras',
    slug: 'mangalsutras',
    icon: GiNecklaceDisplay,
    image: catalogProducts.find((product) => product.category === 'Mangalsutras')?.image,
  },
]

export const brandLogos = ['MAISON LUNE', 'AURELIA', 'NOIRGOLD', 'VELVET GEM', 'OPAL & CO']

export const socialLinks = [
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/jewelbizzz/' },
  { label: 'X', icon: FaXTwitter, href: 'https://x.com/Its_Utsavv' },
  { label: 'Meesho', icon: FaStore, href: 'https://www.meesho.com/Utsavv?_ms=3.0.1' },
]

export const sharedIcons = {
  gem: FaGem,
  heart: FaRegHeart,
  star: FaStar,
}




