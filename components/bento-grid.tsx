import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Link } from "next-view-transitions";

export const BentoGrid = ({ scrollY }:any) => {
  return (
    <section
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-12 md:mt-10"
      style={{ transform: `translateY(${Math.max(0, scrollY * 0.1)}px)` }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Featured Collections</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 auto-rows-fr">
        {/* Main Featured Product */}
       
            <Card className="col-span-2 row-span-2 group relative overflow-hidden">
            <Link href={`/products/signature-collection`}>
                <AspectRatio ratio={1}>
                    <img
                    src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070"
                    alt="Featured Product"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Signature Collection</h3>
                    <p className="text-xs md:text-sm text-gray-200">Starting from $299</p>
                </div>
            </Link>
            </Card>
       

        {/* Secondary Products */}
        {[
          {
            src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005",
            alt: "Product 2",
            title: "Modern Essentials",
            category: "modern-essentials"
          },
          {
            src: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2070",
            alt: "Product 3",
            title: "Summer Collection",
            category: "summer-essentials"
          },
          {
            src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071",
            alt: "Product 4",
            title: "Accessories",
            category: "accessories"
          },
          {
            src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
            alt: "Product 5",
            title: "New Arrivals",
            category: "new-arrivals"
          },
        ].map((product, index) => (
          <Card key={index} className="relative group overflow-hidden">
            <Link href={`/products/${product.category}`}>
                <AspectRatio ratio={1}>
                <img
                    src={product.src || "/placeholder.svg"}
                    alt={product.alt}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="text-sm md:text-base font-medium">{product.title}</h3>
                </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default BentoGrid; 