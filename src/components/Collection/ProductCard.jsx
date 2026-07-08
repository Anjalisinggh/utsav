import { useState } from 'react'
import { sharedIcons } from '../../data/jewelryData'
import { formatPrice } from '../../utils/formatPrice'

function ProductCard({ product }) {
  const HeartIcon = sharedIcons.heart
  const [saved, setSaved] = useState(false)

  return (
    <article className="group relative min-w-0 rounded-[1.15rem] bg-white p-2 shadow-[0_12px_34px_rgba(80,52,25,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(80,52,25,0.18)] sm:rounded-[1.5rem] sm:p-3">
      <a href={`/products/${product.id}/${product.slug}`} aria-label={`View ${product.name} details`} className="absolute inset-0 z-10 rounded-[1.15rem] sm:rounded-[1.5rem]" />
      <div className="relative overflow-hidden rounded-[0.95rem] bg-ivory sm:rounded-[1.1rem]">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[1.08/1] w-full object-cover transition duration-500 group-hover:scale-110 sm:aspect-[4/3]"
          loading="lazy"
        />
        <button
          type="button"
          aria-label={`${saved ? 'Remove' : 'Save'} ${product.name}`}
          aria-pressed={saved}
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
            setSaved((value) => !value)
          }}
          className={`absolute right-2 top-2 z-20 grid size-8 place-items-center rounded-full shadow-lg transition hover:bg-espresso hover:text-white sm:right-3 sm:top-3 sm:size-9 ${
            saved ? 'bg-espresso text-white' : 'bg-white/90 text-cocoa'
          }`}
        >
          <HeartIcon />
        </button>
      </div>
      <div className="px-2 pb-2 pt-3 sm:pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 font-serif text-[1.35rem] font-semibold leading-tight text-espresso sm:text-2xl">{product.name}</h3>
        </div>
        <p className="mt-1.5 line-clamp-2 min-h-9 text-xs leading-5 text-stone-600 sm:mt-2 sm:min-h-10 sm:text-sm">{product.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 sm:mt-4">
          <span className="inline-flex rounded-full bg-ivory px-4 py-2 text-xs font-bold text-cocoa">
            {formatPrice(product)}
          </span>
          {product.rating && <span className="text-xs font-semibold text-stone-500">{product.rating} rating</span>}
        </div>
      </div>
    </article>
  )
}

export default ProductCard


