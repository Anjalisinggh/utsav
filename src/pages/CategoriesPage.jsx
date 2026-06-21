import { categories, collectionItems } from '../data/jewelryData'
import CategoryCard from '../components/Categories/CategoryCard'
import FadeIn from '../components/Common/FadeIn'
import PageHero from '../components/Common/PageHero'
import PrimaryButton from '../components/Common/PrimaryButton'
import SectionHeader from '../components/Common/SectionHeader'
import ProductCard from '../components/Collection/ProductCard'

function CategoriesPage({ categorySlug }) {
  const selectedCategory = categories.find((category) => category.name.toLowerCase() === categorySlug)
  const visibleProducts = selectedCategory
    ? collectionItems.filter((product) => product.category.toLowerCase() === selectedCategory.name.toLowerCase())
    : collectionItems

  return (
    <>
      <PageHero
        eyebrow="Jewelry Categories"
        title="Discover your signature glow."
        text="Circular forms, soft reflections, and warm metal tones make every category feel considered."
        image={categories[0].image}
      />

      <section className="py-16 sm:py-24">
        <div className="luxury-container">
          <div className="flex flex-col gap-5 rounded-[2rem] bg-white/70 p-5 shadow-[0_18px_55px_rgba(80,52,25,0.1)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Shop By Category</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">
                {selectedCategory ? selectedCategory.name : 'All categories'}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="/categories"
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
                  href={`/categories/${category.name.toLowerCase()}`}
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

          {!selectedCategory && (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {categories.map((category, index) => (
                <FadeIn key={category.name} delay={index * 0.08}>
                  <a href={`/categories/${category.name.toLowerCase()}`} className="block">
                    <CategoryCard category={category} />
                  </a>
                </FadeIn>
              ))}
            </div>
          )}

          <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${selectedCategory ? 'mt-10' : 'mt-16'}`}>
            {visibleProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="luxury-container grid overflow-hidden rounded-[2rem] bg-espresso text-white shadow-[0_28px_90px_rgba(52,35,20,0.2)] lg:grid-cols-[1fr_0.9fr]">
          <FadeIn className="flex min-h-full flex-col justify-between p-8 sm:p-12">
            <SectionHeader
              eyebrow="Layer With Intention"
              title="Build your signature stack."
              text="Mix rings, necklaces, and bracelets with warm metals and soft proportions designed to complement each other."
              tone="light"
            />
            <PrimaryButton href="/categories" className="self-start" variant="light">
              View Collections
            </PrimaryButton>
          </FadeIn>
          <img
            src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85"
            alt="Luxury jewelry capsule"
            className="h-full min-h-96 w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}

export default CategoriesPage
