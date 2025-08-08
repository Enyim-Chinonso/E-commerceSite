import cloth from "../assets/cloth.jpg";
import guyCloth from "../assets/guy-cloth.jpg";
import womanCloth from "../assets/woman-cloth.jpg";
import elan from "../assets/elan-pixabay.jpg";
import whiteHoodie from "../assets/white-hoodie.jpg";
import whiteShirt from "../assets/white-shirt.jpg";
import blackHoodie from "../assets/black-hoodie.jpg";
import blackRoundneck from "../assets/black-roundneck.jpg";
import blackVneck from "../assets/black-vneck.jpg";
import blackXlarge from "../assets/black-xlarge.jpg";
import rolexWatch from "../assets/rolex-watch.jpg";
import rolexMaster from "../assets/rolex-master.jpg";
import rolexSubmariner from "../assets/rolex-submariner.jpg";
import walkingBoot from "../assets/walking-boots.jpg";
import nikeShoe from "../assets/nike-shoe.jpg";
import babyShoes from "../assets/baby-shoes.jpg";

const products = [
  // Sweaters
  {
    id: 1,
    name: "Standard Sweater",
    price: 7500,
    image: elan,
 }, 

  {
    id: 2,
    name: "Cold weather Hoodie",
    price: 8000,
    image: guyCloth,
  },

  {
    id: 3,
    name: "Fine girl sweater",
    price: 6500,
    image: womanCloth,
  },

  // Hoodie/polos
  {
    id: 4,
    name: "Black Hoodie",
    price: 8000,
    image: blackHoodie,
  },

  {
    id: 5,
    name: "White Hoodie",
    price: 8000,
    image: whiteHoodie,
  },

  {
    id: 6,
    name: "White polo",
    price: 7500,
    image: whiteShirt,
  },

  {
    id: 7,
    name: "Black round-neck",
    price: 7000,
    image: blackRoundneck,
  },

  {
    id: 8,
    name: "Black v-neck",
    price: 7000,
    image: blackVneck,
  },

  {
    id: 9,
    name: "Black big polo",
    price: 7500,
    image: blackXlarge,
  },

  // wrist watches
  {
    id: 10,
    name: "Rolex watch",
    price: 20000,
    image: rolexWatch,
  },

  {
    id: 11,
    name: "Rolex GMT master",
    price: 14000,
    image: rolexMaster,
  },

  {
    id: 12,
    name: "Rolex submariner",
    price: 15000,
    image: rolexSubmariner,
  },

  // shoes
  {
    id: 13,
    name: "Walking boot",
    price: 9000,
    image: walkingBoot,
  },

  {
    id: 14,
    name: "Nike shoe",
    price: 10000,
    image: nikeShoe,
  },
  
  {
    id: 15,
    name: "Baby shoe",
    price: 4000,
    image: babyShoes,
  },
];

export default products;
