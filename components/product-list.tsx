import { Link } from "next-view-transitions";

const products = [
    {
      id: 917726,
      name: 'Earthen Bottle',
      href: '#',
      category: "bottles",
      price: '$48',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 660776,
      name: 'Nomad Tumbler',
      href: '#',
      category: "tumblers",
      price: '$35',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 939023,
      name: 'Focus Paper Refill',
      href: '#',
      category: "bottles",
      price: '$89',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 830671,
      name: 'Machined Mechanical Pencil',
      href: '#',
      category: "tumbler",
      price: '$35',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 381562,
        name: 'Earthen Bottle',
        href: '#',
        category: "bottles",
        price: '$48',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
      },
      {
        id: 998840,
        name: 'Nomad Tumbler',
        href: '#',
        category: "tumbler",
        price: '$35',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
      },
      {
        id: 738202,
        name: 'Focus Paper Refill',
        href: '#',
        category: "bottles",
        price: '$89',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
      },
      {
        id: 432353,
        name: 'Machined Mechanical Pencil',
        href: '#',
        category: "bottles",
        price: '$35',
        imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
  ]
  
  export const ProductList = () => {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="sr-only">Products</h2>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Products</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.category}/${product.id}`} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default ProductList;