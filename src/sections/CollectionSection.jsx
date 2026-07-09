import ProductCard from '../components/Collection/ProductCard'
import FadeIn from '../components/Common/FadeIn'
import PrimaryButton from '../components/Common/PrimaryButton'
import { collectionItems } from '../data/jewelryData'

function CollectionSection() {
  return (
    <section id="collections" className="pb-20 sm:pb-28">
      <div className="luxury-container rounded-[2rem] bg-cream/55 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)] sm:p-6 lg:p-8">
        <div className="grid gap-5 lg:grid-cols-[0.82fr_1.8fr]">
          <FadeIn className="rounded-[1.5rem] bg-white/55 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">The Edit</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-none text-espresso sm:text-5xl">
              New pieces, quietly unforgettable.
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              An intimate selection of polished essentials, sculptural accents, and pieces made to live close to the skin.
            </p>
            <PrimaryButton href="/collections" className="mt-7">
              Shop the Edit
            </PrimaryButton>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-3">
            {collectionItems.slice(0, 3).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionSection
