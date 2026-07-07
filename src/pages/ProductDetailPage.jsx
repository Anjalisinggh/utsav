import { useEffect, useState } from 'react'
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { collectionItems } from '../data/jewelryData'
import ProductCard from '../components/Collection/ProductCard'

function ProductDetailPage({ productId, productSlug }) {
  const product =
    collectionItems.find((item) => String(item.id) === String(productId) && item.slug === productSlug) ||
    collectionItems.find((item) => item.slug === productSlug)
  const [activeImage, setActiveImage] = useState(product?.image || '')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setActiveImage(product?.image || '')
    setQuantity(1)
  }, [product?.image])

  if (!product) {
    return (
      <section className="px-4 pb-20 pt-36">
        <div className="luxury-container rounded-[2rem] bg-white p-8 text-center shadow-[0_18px_55px_rgba(80,52,25,0.1)]">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Product Not Found</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold text-espresso">This piece is no longer available.</h1>
          <a
            href="/collections"
            className="mt-8 inline-flex rounded-full bg-espresso px-7 py-3 text-sm font-bold text-white transition hover:bg-cocoa"
          >
            Back to Collections
          </a>
        </div>
      </section>
    )
  }

  const detailLines = product.details
    ? product.details.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
    : []
  const galleryImages = Array.from(new Set([product.image, ...(product.images || [])]))
    .filter((image) => image && image.includes('/images/products/'))
  const categorySlug = product.category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const relatedProducts = collectionItems
    .filter((item) => item.category === product.category && String(item.id) !== String(product.id))
    .slice(0, 3)
  const whatsappUrl = 'https://wa.me/919820392106'
  const ratingValue = Number(product.rating || 4.1)
  const ratingPercent = Math.min(100, Math.max(0, (ratingValue / 5) * 100))

  return (
    <>
      <section className="px-4 pb-16 pt-32 sm:pt-36">
        <div className="luxury-container">
          <a href="/collections" className="text-sm font-bold text-cocoa transition hover:text-espresso">
            Back to Collections
          </a>

          <div className="mt-8 rounded-[2rem] bg-white p-4 shadow-[0_24px_80px_rgba(80,52,25,0.12)] sm:p-6 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:p-8">
            <div>
              <div className="relative overflow-hidden rounded-[1.5rem] bg-ivory">
                <img
                  src={activeImage || product.image}
                  alt={product.name}
                  className="aspect-square w-full object-contain"
                />
              </div>

              {galleryImages.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {galleryImages.slice(0, 4).map((image) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`overflow-hidden rounded-[0.9rem] border bg-white p-1 transition hover:-translate-y-0.5 ${
                        activeImage === image ? 'border-cocoa shadow-[0_12px_28px_rgba(80,52,25,0.16)]' : 'border-sand/40'
                      }`}
                    >
                      <img src={image} alt={product.name} className="aspect-square w-full rounded-[0.65rem] object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <article className="mt-8 lg:mt-0">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">{product.category}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-espresso sm:text-6xl">
                  {product.name}
                </h1>
                <span className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-cocoa">In Stock</span>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-stone-600">
                <span className="text-amber-400">*****</span>
                {product.rating && <span>{product.rating} rating</span>}
                {product.reviewCount > 0 && <span>({product.reviewCount} reviews)</span>}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-3xl font-bold text-cocoa">{product.price}</span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-stone-600">{product.description}</p>

              <div className="mt-7 border-t border-sand/40 pt-6">
                <p className="text-sm font-bold text-espresso">Quantity</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full bg-ivory p-1">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                      className="grid size-9 place-items-center rounded-full text-cocoa transition hover:bg-cream"
                    >
                      <FiMinus />
                    </button>
                    <span className="min-w-10 text-center text-sm font-bold text-espresso">{quantity}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQuantity((value) => value + 1)}
                      className="grid size-9 place-items-center rounded-full text-cocoa transition hover:bg-cream"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-espresso px-7 py-3 text-sm font-bold text-white transition hover:bg-cocoa"
                  >
                    Contact Us
                  </a>
                  <a
                    href={`/collections/${categorySlug}`}
                    className="rounded-full bg-ivory px-7 py-3 text-sm font-bold text-espresso transition hover:bg-cream"
                  >
                    More {product.category}
                  </a>
                  <button
                    type="button"
                    aria-label={`Save ${product.name}`}
                    className="grid size-11 place-items-center rounded-full border border-sand/60 text-cocoa transition hover:bg-cream"
                  >
                    <FiHeart />
                  </button>
                </div>
              </div>
            </article>
          </div>

          <section className="mt-12 rounded-[2rem] bg-white p-6 shadow-[0_18px_55px_rgba(80,52,25,0.09)] sm:p-8">
            <div className="flex flex-wrap justify-center gap-6 border-b border-sand/40 pb-4 text-sm font-bold text-stone-400">
              <span className="text-stone-400">Description</span>
              <span className="text-espresso">Additional Information</span>
              <span className="text-stone-400">Review</span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[1.5rem] bg-ivory/65 p-6 text-center">
                <p className="font-serif text-5xl font-semibold text-espresso">{ratingValue.toFixed(1)}</p>
                <p className="mt-1 text-sm font-bold text-stone-500">out of 5</p>
                <p className="mt-3 text-amber-400">*****</p>
                <p className="mt-2 text-xs font-semibold text-stone-500">{product.reviewCount || 245} reviews</p>
              </div>

              <div>
                {detailLines.length > 0 ? (
                  <dl className="grid gap-3 text-sm text-stone-600 sm:grid-cols-2">
                    {detailLines.map((line) => {
                      const [label, ...valueParts] = line.split(':')
                      const value = valueParts.join(':').trim()

                      return (
                        <div key={line} className="rounded-[1rem] border border-sand/30 bg-ivory/45 p-4">
                          {value ? (
                            <>
                              <dt className="font-bold text-cocoa">{label}</dt>
                              <dd className="mt-1">{value}</dd>
                            </>
                          ) : (
                            <dd>{line}</dd>
                          )}
                        </div>
                      )
                    })}
                  </dl>
                ) : (
                  <p className="text-sm leading-7 text-stone-600">{product.description}</p>
                )}

                <div className="mt-8 space-y-3">
                  {[5, 4, 3, 2, 1].map((star, index) => (
                    <div key={star} className="grid grid-cols-[3rem_1fr] items-center gap-3 text-xs font-bold text-stone-500">
                      <span>{star} Star</span>
                      <span className="h-2 overflow-hidden rounded-full bg-cream">
                        <span
                          className="block h-full rounded-full bg-amber-400"
                          style={{ width: `${Math.max(8, ratingPercent - index * 18)}%` }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <div className="luxury-container">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">You May Also Like</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">More from {product.category}</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={`${item.id}-${item.slug}`} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductDetailPage