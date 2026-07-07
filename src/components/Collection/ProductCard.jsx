import { useState } from 'react'
import { sharedIcons } from '../../data/jewelryData'
import { formatPrice } from '../../utils/formatPrice'

function ProductCard({ product }) {
  const HeartIcon = sharedIcons.heart
  const [saved, setSaved] = useState(false)

  return (
    <article className="group relative min-w-0 rounded-[1.5rem] bg-white p-3 shadow-[0_18px_50px_rgba(80,52,25,0.1)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(80,52,25,0.18)]">
      <a href={`/products/${product.id}/${product.slug}`} aria-label={`View ${product.name} details`} className="absolute inset-0 z-10 rounded-[1.5rem]" />
      <div className="relative overflow-hidden rounded-[1.1rem] bg-ivory">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-110"
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
          className={`absolute right-3 top-3 z-20 grid size-9 place-items-center rounded-full shadow-lg transition hover:bg-espresso hover:text-white ${
            saved ? 'bg-espresso text-white' : 'bg-white/90 text-cocoa'
          }`}
        >
          <HeartIcon />
        </button>
      </div>
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-2xl font-semibold leading-tight text-espresso">{product.name}</h3>
        </div>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-stone-600">{product.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
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

