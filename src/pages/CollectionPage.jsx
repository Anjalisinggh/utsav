import { categories, collectionItems, heroImages } from '../data/jewelryData'
import PageHero from '../components/Common/PageHero'
import ProductCard from '../components/Collection/ProductCard'

function CollectionPage({ categorySlug }) {
  const selectedCategory = categories.find((category) => category.slug === categorySlug)
  const visibleProducts = selectedCategory
    ? collectionItems.filter((product) => product.category.toLowerCase() === selectedCategory.name.toLowerCase())
    : collectionItems

  return (
    <>
      <PageHero
        eyebrow="The Utsav Edit"
        title="Jewelry selected with restraint and feeling."
        text="Explore warm gold tones, delicate stones, and considered silhouettes made for the moments you keep returning to."
        image={heroImages.detail}
      />

      <section id="collection-shop" className="scroll-mt-24 bg-[#fbf7ef] py-12 sm:scroll-mt-28 sm:py-20">
        <div className="luxury-container">
          <div className="border-y border-espresso/10 py-6 sm:flex sm:flex-row sm:items-end sm:justify-between sm:gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Refine the Edit</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold leading-none text-espresso sm:text-5xl">Pieces with presence</h2>
            </div>
            <div className="mobile-scrollbar -mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:mt-0 sm:flex-wrap sm:justify-end sm:overflow-visible sm:px-0 sm:pb-0">
              <a
                href="/collections"
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 sm:px-5 sm:py-3 ${
                  !selectedCategory
                    ? 'border-espresso bg-espresso text-white'
                    : 'border-espresso/15 bg-[#fffdf8]/75 text-espresso hover:border-cocoa hover:text-cocoa'
                }`}
              >
                All
              </a>
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`/collections/${category.slug}`}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition hover:-translate-y-0.5 sm:px-5 sm:py-3 ${
                    selectedCategory?.name === category.name
                      ? 'border-espresso bg-espresso text-white'
                      : 'border-espresso/15 bg-[#fffdf8]/75 text-espresso hover:border-cocoa hover:text-cocoa'
                  }`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={`${product.id}-${product.slug}`} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CollectionPage
