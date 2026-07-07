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

      <section id="collection-shop" className="scroll-mt-28 py-16 sm:py-24">
        <div className="luxury-container">
          <div className="flex flex-col gap-5 rounded-[2rem] bg-white/70 p-5 shadow-[0_18px_55px_rgba(80,52,25,0.1)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Shop By Category</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">New season signatures</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="/collections"
                className={`rounded-full border px-5 py-3 text-xs font-bold transition hover:-translate-y-0.5 ${
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
                  className={`rounded-full border px-5 py-3 text-xs font-bold transition hover:-translate-y-0.5 ${
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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