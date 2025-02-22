
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoffeeCard from "@/components/CoffeeCard";
import { Coffee } from "@/types/coffee";
import { motion } from "framer-motion";
import { Star, Award, GemIcon, Trophy, CheckCircle, ThumbsUp } from "lucide-react";

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

const features = [
  {
    icon: Star,
    title: "精选咖啡豆",
    description: "从世界各地精心挑选最优质的咖啡豆"
  },
  {
    icon: Award,
    title: "专业烘焙",
    description: "采用先进工艺，确保每一批咖啡豆都完美烘焙"
  },
  {
    icon: GemIcon,
    title: "品质保证",
    description: "严格的品质控制，只为带给您最佳咖啡体验"
  },
  {
    icon: Trophy,
    title: "获奖产品",
    description: "多次获得国际咖啡品鉴大赛奖项"
  },
  {
    icon: CheckCircle,
    title: "可持续发展",
    description: "支持环保种植，践行公平贸易"
  },
  {
    icon: ThumbsUp,
    title: "顾客好评",
    description: "超过98%的顾客满意度"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-cream">
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
            className="text-xl text-coffee-light max-w-2xl mx-auto"
          >
            Carefully sourced and expertly roasted for the perfect cup
          </motion.p>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white rounded-3xl shadow-sm">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-coffee text-center mb-12"
            >
              我们的特色
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-coffee-cream/50 hover:bg-coffee-cream transition-colors duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-coffee/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-coffee" />
                    </div>
                    <h3 className="text-xl font-semibold text-coffee mb-2">{feature.title}</h3>
                    <p className="text-coffee-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            <p className="text-coffee-light">
              Every bean is carefully selected and roasted to perfection, ensuring you experience 
              the finest coffee in every cup. From farm to your cup, we maintain the highest 
              standards of quality and sustainability.
            </p>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
