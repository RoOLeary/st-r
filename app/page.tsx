"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/ui/card"
import { Play, ArrowRight, Clock } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useRef, useState } from "react"
import { NavBar } from "@/components/nav-bar"
import ProductList from "@/components/product-list"
import BentoGrid from "@/components/bento-grid"
import Fluff from "@/components/fluff"

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

const featuredPosts = [
  {
    title: "The Art of Sustainable Fashion: A Deep Dive",
    excerpt: "Exploring how sustainable practices are reshaping the fashion industry and influencing consumer choices.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=2070",
    category: "Sustainability",
    readTime: "5 min read",
    date: "Mar 15, 2024",
  },
  {
    title: "Spring/Summer 2025: Trends to Watch",
    excerpt: "From vibrant colors to innovative silhouettes, discover the key trends that will define the season.",
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070",
    category: "Trends",
    readTime: "4 min read",
    date: "Mar 12, 2025",
  },
  {
    title: "Artisanal Craftsmanship in Modern Fashion",
    excerpt: "How traditional techniques are being preserved and reimagined in contemporary fashion.",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=2070",
    category: "Craftsmanship",
    readTime: "6 min read",
    date: "Mar 10, 2025",
  },
  {
    title: "The Psychology of Color in Fashion",
    excerpt: "Understanding how color choices influence perception and emotion in fashion design.",
    image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2070",
    category: "Design",
    readTime: "4 min read",
    date: "Mar 8, 2025",
  },
  {
    title: "Minimalism: Less is More",
    excerpt: "Exploring the enduring appeal of minimalist fashion and its impact on modern wardrobes.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
    category: "Style",
    readTime: "3 min read",
    date: "Mar 5, 2025",
  },
]

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <NavBar scrollY={scrollY} />

    {/* Hero Carousel Section */}
      <section ref={heroRef} className="relative">
        <Carousel className="w-full relative" opts={{ loop: true }}>
          <CarouselContent className="h-[60vh] md:h-[80vh]">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full flex items-center justify-center">
                  <div
                    className="absolute inset-0"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                  >
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="object-cover w-full h-full brightness-50"
                    />
                  </div>
                  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                      className="max-w-2xl py-20"
                      style={{
                        transform: `translateY(${scrollY * 0.2}px)`,
                        opacity: Math.max(0, 1 - scrollY / 500),
                      }}
                    >
                      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
                        {slide.title}
                      </h1>
                      <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 md:mb-8">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Carousel Navigation Buttons - Side by Side */}
          <div className="flex flex-row absolute -mt-8 right-16 space-x-4">
            <CarouselPrevious className="bg-transparent text-white rounded-full opacity-80 hover:opacity-100" />
            <CarouselNext className="bg-transparent text-white rounded-full opacity-80 hover:opacity-100" />
          </div>
        </Carousel>
      </section>

      {/* Featured Products Bento Grid */}
     
     <BentoGrid  />

      <section
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pb-16"
        style={{
          transform: `translateY(${Math.max(0, scrollY * 0.1)}px)`,
        }}
      >
        <ProductList />
      </section>
      {/* Featured Posts Section */}
      <section className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-50 mt-24"  style={{
          transform: `translateY(${Math.max(0, scrollY * 0.1)}px)`,
        }}>
        <div className="relative max-w-7xl mx-auto md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Featured Articles</h2>
          <div className="grid gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="group overflow-hidden">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-2 relative h-64 md:h-full min-h-[200px]">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:col-span-3 p-4 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-4">
                      <span className="text-xs md:text-sm font-medium px-2 py-1 bg-primary/10 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <span className="text-xs md:text-sm text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium text-sm md:text-base group-hover:underline">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>  
      <section className="relative w-full mx-auto px-0 sm:px-6 md:px-0"  style={{
          transform: `translateY(${Math.max(0, scrollY * 0.1)}px)`,
        }}>
        <Fluff />
      </section>
    </main>
  )
}
