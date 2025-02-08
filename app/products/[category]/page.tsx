"use client"

import { NavBar } from "@/components/nav-bar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "next-view-transitions";
export const dynamic = "force-dynamic"; // Enables server-side rendering
import { useEffect, useRef, useState } from "react"

const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
      title: "Discover Timeless Elegance",
      subtitle: "Curated collections that define modern luxury",
    },
    {
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070",
      title: "Spring Collection 2025",
      subtitle: "Embrace the season with our latest designs",
    },
    {
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
      title: "Artisan Crafted",
      subtitle: "Handmade with passion and precision",
    },
  ]

  const categories = [
    {
      name: 'Handcrafted Collection',
      href: '/4624534',
      category: 'accessories',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-01-collection-01.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
      name: 'Organized Desk Collection',
      href: '/9731254',
      category: 'accessories',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-01-collection-02.jpg',
      imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
      name: 'Focus Collection',
      href: '/663719',
      category: 'accessories',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-01-collection-03.jpg',
      imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description: 'Be more productive than enterprise project managers with a single piece of paper.',
    },
    {
      name: 'Handcrafted Collection',
      href: '/4624534',
      category: 'accessories',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-01-collection-01.jpg',
      imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
      description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.',
    },
    {
      name: 'Organized Desk Collection',
      href: '/9731254',
      category: 'accessories',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-01-collection-02.jpg',
      imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
      description: 'The rest of the house will still be a mess, but your desk will look great.',
    },
    {
      name: 'Focus Collection',
      href: '/663719',
      category: 'accessories',
      imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-01-collection-03.jpg',
      imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
      description: 'Be more productive than enterprise project managers with a single piece of paper.',
    },
  ]

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { category, id } = params;
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Fetch data dynamically if needed
//   const res = await fetch(`https://api.example.com/products/${category}/${id}`);
//   const product = await res.json();

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
        <NavBar scrollY={scrollY} dark={true} />
       
        <section
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-12 md:mt-10"
            style={{ transform: `translateY(${Math.max(0, scrollY * 0.1)}px)` }}
            >
            <h1 className="text-5xl font-bold uppercase max-sm:mt-8">
              {category}
            </h1>
            <div className="bg-white">
              <div className="mx-auto py-16 sm:py-16 lg:max-w-7xl">
                
                <p className="mt-4 text-base text-gray-500">
                  Each season, we collaborate with world-class designers to create a collection inspired by the natural world.
                </p>

                <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 gap-12">
                  {categories.map((category) => (
                    <Link key={category.name} href={`/products/${category.category}${category.href}`} className="group block">
                      <img
                        alt={category.imageAlt}
                        src={category.imageSrc}
                        className="aspect-3/2 w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-5/6"
                      />
                      <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
                      <p className="mt-2 text-sm text-gray-500">{category.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
        </section>
    </main>
  );
};

export default CategoryPage;



