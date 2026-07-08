function CategoryCard({ category }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.2rem] bg-white p-2 shadow-[0_14px_38px_rgba(80,52,25,0.09)] sm:rounded-[2rem] sm:p-3 sm:shadow-[0_20px_55px_rgba(80,52,25,0.1)] transition duration-300 hover:-translate-y-2">
      <img
        src={category.image}
        alt={category.name}
        className="aspect-[4/3] w-full rounded-[1rem] object-cover transition duration-500 group-hover:scale-105 sm:aspect-square sm:rounded-[1.45rem]"
      />
      <div className="absolute inset-x-4 bottom-4 rounded-full bg-white/88 px-4 py-2.5 text-center shadow-xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:px-5 sm:py-3">
        <h3 className="font-serif text-xl font-semibold text-espresso sm:text-2xl">{category.name}</h3>
      </div>
    </article>
  )
}

export default CategoryCard

