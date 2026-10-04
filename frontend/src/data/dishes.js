import PaneerTikka from "../assets/images/paneer tikka.avif";
import ButterChicken from "../assets/images/butter chicken.avif";
import Biryani from "../assets/images/biryani.avif";
import DalMakhani from "../assets/images/dal makhani.avif";
import GarlicNaan from "../assets/images/garlic naan.avif";
import GulabJamun from "../assets/images/gulab jamun.avif";

export const dishes = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Char-grilled cottage cheese marinated in aromatic Indian spices.",
    price: "₹320",
    category: "Starters",
    image:PaneerTikka,
    vegetarian: true,
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Tender chicken simmered in a rich, creamy tomato gravy.",
    price: "₹420",
    category: "Main Course",
    image:ButterChicken,
    vegetarian: false,
  },
  {
    id: 3,
    name: "Biryani",
    description: "Fragrant basmati rice layered with aromatic spices and herbs.",
    price: "₹380",
    category: "Main Course",
    image:Biryani,
    vegetarian: false,
  },
  {
    id: 4,
    name: "Dal Makhani",
    description: "Slow-cooked black lentils finished with butter and cream.",
    price: "₹290",
    category: "Main Course",
    image:DalMakhani,
    vegetarian: true,
  },
  {
    id: 5,
    name: "Garlic Naan",
    description: "Soft tandoor-baked naan topped with garlic and fresh herbs.",
    price: "₹120",
    category: "Indian Breads",
    image:GarlicNaan,
    vegetarian: true,
  },
  {
    id: 6,
    name: "Gulab Jamun",
    description: "Warm milk-solid dumplings served in fragrant sugar syrup.",
    price: "₹160",
    category: "Dessert",
    image:GulabJamun,
    vegetarian: true,
  },
];