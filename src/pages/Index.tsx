
import Navigation from "@/components/Navigation";
import CoffeeCard from "@/components/CoffeeCard";
import { Coffee } from "@/types/coffee";
import { motion } from "framer-motion";

const coffees: Coffee[] = [
  {
    id: "1",
    name: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral and citrus notes",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    origin: "Ethiopia",
    roastLevel: "Light",
  },
  {
    id: "2",
    name: "Colombian Supremo",
    description: "Sweet and balanced with caramel notes",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    origin: "Colombia",
    roastLevel: "Medium",
  },
  {
    id: "3",
    name: "Sumatra Dark Roast",
    description: "Bold and earthy with dark chocolate notes",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    origin: "Indonesia",
    roastLevel: "Dark",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-cream/20">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="text-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-coffee mb-4"
          >
            Discover Exceptional Coffee
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Carefully sourced and expertly roasted for the perfect cup
          </motion.p>
        </section>

        {/* Featured Products */}
        <section className="py-12">
          <h2 className="text-3xl font-semibold text-coffee mb-8">Featured Coffees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coffees.map((coffee, index) => (
              <motion.div
                key={coffee.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <CoffeeCard coffee={coffee} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quality Promise */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-semibold text-coffee mb-6">Our Quality Promise</h2>
            <p className="text-gray-600">
              Every bean is carefully selected and roasted to perfection, ensuring you experience 
              the finest coffee in every cup. From farm to your cup, we maintain the highest 
              standards of quality and sustainability.
            </p>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Index;
