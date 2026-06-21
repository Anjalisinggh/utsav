import CategoryCard from '../components/Categories/CategoryCard'
import SectionHeader from '../components/Common/SectionHeader'
import { categories } from '../data/jewelryData'

function CategorySection() {
  return (
    <section id="categories" className="py-20 sm:py-28">
      <div className="luxury-container">
        <SectionHeader
          align="center"
          eyebrow="Jewelry Categories"
          title="Discover your signature glow."
          text="Circular forms, soft reflections, and warm metal tones make every category feel considered."
          className="max-w-2xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a key={category.name} href={`/categories/${category.name.toLowerCase()}`} className="block">
              <CategoryCard category={category} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
