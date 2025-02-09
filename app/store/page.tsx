"use client"

import { useState, useMemo } from "react"
import { Dialog } from "@headlessui/react"
import { NavBar } from "@/components/nav-bar"

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "black", label: "Black" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
]

const products = [
  { id: 1, name: "Basic Tee 8-Pack", href: "#", price: "$256", category: "tees", color: "blue", imageSrc: "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg" },
  { id: 2, name: "Basic Tee", href: "#", price: "$32", category: "tees", color: "black", imageSrc: "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg" },
  { id: 3, name: "Ziggs Tee", href: "#", price: "$32", category: "crewnecks", color: "white", imageSrc: "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg" },
  { id: 4, name: "Basic Tee 8-Pack", href: "#", price: "$256", category: "pants-shorts", color: "green", imageSrc: "https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg" },
]

function FilterSection({ filters, selectedFilters, toggleFilter, clearFilters, resetFilters }) {
  return (
    <form className="divide-y divide-gray-200">
      {filters.map((section) => (
        <fieldset key={section.id} className="py-6">
          <legend className="text-sm font-medium text-gray-900 flex justify-between">
            {section.name}
            <button type="button" onClick={() => clearFilters(section.id)} className="text-sm text-blue-500 hover:text-blue-700">
              Clear
            </button>
          </legend>
          <div className="space-y-3 pt-4">
            {section.options.map((option, index) => (
              <label key={`${section.id}-${option.value}-${index}`} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters[section.id]?.has(option.value) || false}
                  onChange={() => toggleFilter(section.id, option.value)}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button onClick={resetFilters} className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">Reset All</button>
    </form>
  )
}

export default function Store() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({})
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFilter = (filterId, value) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev }
      const currentSet = new Set(updated[filterId] || [])

      if (currentSet.has(value)) {
        currentSet.delete(value)
      } else {
        currentSet.add(value)
      }

      updated[filterId] = currentSet.size ? currentSet : undefined
      return { ...updated }
    })
  }

  const clearFilters = (filterId) => {
    setSelectedFilters((prev) => {
      const updated = { ...prev }
      delete updated[filterId]
      return updated
    })
  }

  const resetFilters = () => {
    setSelectedFilters({})
    setSearchQuery("")
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilters = Object.entries(selectedFilters).every(([filterId, values]) => {
        if (!values) return true
        return values.has(product[filterId])
      })
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilters && matchesSearch
    })
  }, [selectedFilters, searchQuery])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavBar dark={true} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold uppercase">STORE</h1>
        <div className="py-6">
          <input type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-4 py-2 border rounded-lg" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="hidden lg:block col-span-1">
            <FilterSection filters={filters} selectedFilters={selectedFilters} toggleFilter={toggleFilter} clearFilters={clearFilters} />
          </aside>
          <section className="lg:col-span-3">
            {filteredProducts.length ? (
              <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <li key={`product-${product.id}`} className="border p-4">
                    <img src={product.imageSrc} alt={product.name} className="w-full h-48 object-cover mb-2" />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm">{product.price}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No products found.</p>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}
