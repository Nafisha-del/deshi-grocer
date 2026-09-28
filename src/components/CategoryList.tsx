import CategoryCard from "./CategoryCard"

type CategoryListProps = {
  selectedCategory: string
  onCategorySelect: (category: string) => void
}

function CategoryList({
  selectedCategory,
  onCategorySelect,
}: CategoryListProps) {
  const categories = [
    {
      name: "Fruits",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
    },
    {
      name: "Vegetables",
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7",
    },
    {
      name: "Rice & Grains",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    },
    {
      name: "Dairy",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da",
    },
    { 
        name: "Meats", image: "https://images.unsplash.com/photo-1723893905879-0e309c2a8e06", 
    }, 
    { 
        name: "Fish & Seafood", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62", 
    },
    {
      name: "Snacks",
      image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab",
    },
    {
      name: "Beverages",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    },
  ]

  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-bold">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            onClick={() => onCategorySelect(category.name)}
            isSelected={selectedCategory === category.name}
          />
        ))}
      </div>
    </section>
  )
}

export default CategoryList