
export interface Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  origin: string;
  roastLevel: "Light" | "Medium" | "Dark";
}
