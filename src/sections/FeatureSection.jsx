import FeatureCard from '../components/Features/FeatureCard'
import { featureItems } from '../data/jewelryData'

function FeatureSection() {
  const movingItems = [...featureItems, ...featureItems]

  return (
    <section id="features" className="bg-cream/55 py-7 sm:py-8">
      <div className="luxury-container overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/35 shadow-[0_18px_60px_rgba(80,52,25,0.08)] sm:rounded-[1.75rem]">
        <div className="feature-marquee flex w-max md:grid md:w-auto md:grid-cols-4">
          {movingItems.map((item, index) => (
            <FeatureCard key={`${item.title}-${index}`} item={item} index={index % featureItems.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
