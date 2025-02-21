
import { Coffee } from "@/types/coffee";
import { Card, CardContent, CardFooter } from "./ui/card";
import { motion } from "framer-motion";

interface CoffeeCardProps {
  coffee: Coffee;
}

const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0 relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4 bg-white">
        <h3 className="font-semibold text-lg text-coffee">{coffee.name}</h3>
        <p className="text-sm text-gray-600">{coffee.origin}</p>
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-coffee-light font-medium">${coffee.price.toFixed(2)}</span>
          <span className="text-xs text-gray-500">{coffee.roastLevel} Roast</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CoffeeCard;
