type CategoryCardProps = {
  name: string
  image: string
}

function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <button
      className="
        overflow-hidden
        rounded-lg
        border
        bg-white
        text-center
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <img
        src={image}
        alt={name}
        className="h-32 w-full object-cover"
      />

      <h3 className="p-4 font-semibold">
        {name}
      </h3>
    </button>
  )
}

export default CategoryCard