import CategoryCard from '../components/Categories/CategoryCard'
import SectionHeader from '../components/Common/SectionHeader'
import { categories } from '../data/jewelryData'

function CategorySection() {
  return (
    <section id="categories" className="py-12 sm:py-28">
      <div className="luxury-container">
        <SectionHeader
          align="center"
          eyebrow="The Collections"
          title="Choose the piece that sets the tone."
          text="From delicate studs to sculptural drops, each category is edited for balance, proportion, and everyday elegance."
          className="max-w-2xl"
        />
        <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a key={category.name} href={`/collections/${category.slug}`} className="block">
              <CategoryCard category={category} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection


