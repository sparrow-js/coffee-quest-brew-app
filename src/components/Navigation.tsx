
import { Coffee, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-coffee hover:text-coffee-light transition-colors">
            <Coffee className="h-6 w-6" />
            <span className="font-semibold text-xl">Bean & Brew</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link to="/shop" className="text-gray-600 hover:text-coffee transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-coffee transition-colors">About</Link>
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-coffee transition-colors" />
              <span className="absolute -top-2 -right-2 bg-coffee text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
