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
        eyebrow="The Collection"
        title="A complete edit of luminous essentials."
        text="Browse sculptural rings, fluid necklaces, and polished finishing pieces built for layering, gifting, and collecting."
        image={heroImages.detail}
      />

      <section id="collection-shop" className="scroll-mt-24 py-10 sm:scroll-mt-28 sm:py-24">
        <div className="luxury-container">
          <div className="rounded-[1.35rem] bg-white/82 p-4 shadow-[0_14px_42px_rgba(80,52,25,0.09)] sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:rounded-[2rem] sm:p-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Shop By Category</p>
              <h2 className="mt-1 font-serif text-3xl font-semibold text-espresso sm:mt-2 sm:text-4xl">New season signatures</h2>
            </div>
            <div className="mobile-scrollbar -mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:mt-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              <a
                href="/collections"
                className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5 sm:px-5 sm:py-3 ${
                  !selectedCategory
                    ? 'border-espresso bg-espresso text-white'
                    : 'border-sand/70 bg-ivory text-espresso hover:bg-espresso hover:text-white'
                }`}
              >
                All
              </a>
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`/collections/${category.slug}`}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-bold transition hover:-translate-y-0.5 sm:px-5 sm:py-3 ${
                    selectedCategory?.name === category.name
                      ? 'border-espresso bg-espresso text-white'
                      : 'border-sand/70 bg-ivory text-espresso hover:bg-espresso hover:text-white'
                  }`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-6 lg:grid-cols-3">
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
