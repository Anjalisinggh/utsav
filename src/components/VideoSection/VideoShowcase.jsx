import { useRef, useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import showcaseVideo from '../../assests/earring.mp4'
import { categories } from '../../data/jewelryData'
import FadeIn from '../Common/FadeIn'
import SectionHeader from '../Common/SectionHeader'

function VideoShowcase() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setIsPlaying(true)
  }

  return (
    <section id="showcase" className="py-10 sm:py-12">
      <div className="luxury-container grid items-center gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        <FadeIn className="group relative overflow-hidden rounded-[2rem] shadow-[0_26px_80px_rgba(80,52,25,0.16)]">
          <video
            ref={videoRef}
            src={showcaseVideo}
            className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
            playsInline
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <>
              <div className="absolute inset-0 bg-espresso/18" />
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play jewelry showcase"
                className="absolute left-1/2 top-1/2 grid size-17 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-cocoa shadow-[0_18px_45px_rgba(52,35,20,0.24)] transition duration-300 hover:scale-110 hover:bg-cream"
              >
                <FaPlay className="ml-1" />
              </button>
            </>
          )}
        </FadeIn>

        <div>
          <SectionHeader
            eyebrow="Choose The Type"
            title="A shape for every ritual."
            text="Move from subtle daytime polish to candlelit statement pieces with categories designed to layer beautifully."
          />
          <FadeIn delay={0.12} className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-5">
            {categories.slice(0, 3).map((category) => {
              return (

                <article
                  key={category.name}
                  className="group rounded-[999px] bg-white/82 p-1.5 text-center shadow-[0_12px_34px_rgba(80,52,25,0.09)] transition duration-300 hover:-translate-y-2 hover:bg-cream sm:p-2 sm:shadow-[0_18px_45px_rgba(80,52,25,0.1)]"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="mx-auto aspect-square w-full rounded-full object-cover transition duration-500 group-hover:scale-95"
                  />
                  <div className="py-4">
                    <h3 className="font-serif text-base font-semibold text-espresso sm:text-xl">{category.name}</h3>
                  </div>
                </article>
              )
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase



