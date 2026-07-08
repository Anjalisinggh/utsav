import FadeIn from './FadeIn'

function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden px-4 pb-12 pt-28 sm:min-h-screen sm:items-center sm:pb-20 sm:pt-36">
      <div className="absolute inset-0 bg-cream" />
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/78 via-cocoa/42 to-cream/20" />
      <FadeIn className="luxury-container relative max-w-4xl text-white">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-cream">{eyebrow}</p>
        <h1 className="font-serif text-[3.25rem] font-semibold leading-[0.9] sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-cream/90 sm:mt-6 sm:text-base sm:leading-7">{text}</p>
      </FadeIn>
    </section>
  )
}

export default PageHero

