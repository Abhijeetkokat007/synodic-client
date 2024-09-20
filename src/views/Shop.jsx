// src/pages/Shop.js
import React from "react";

// Sample data for products (you can replace this with dynamic data)
const products = [
  {
    id: 1,
    name: "Space Suit",
    description: "High-tech astronaut suit for space exploration.",
    price: "$4999",
    image:
      "https://media.istockphoto.com/id/1332387319/photo/astronaut-or-cosmonaut-in-space-suit-against-a-white-surface.jpg?b=1&s=170667a&w=0&k=20&c=Q7KsT1-CEdk2AQwb-4KT6i8a9CovneghsOyML-Xdd1g=",
  },
  {
    id: 2,
    name: "Moon Rock",
    description: "Authentic moon rock collected from the lunar surface.",
    price: "$9999",
    image:
      "http://cdn.zmescience.com/wp-content/uploads/2016/10/Lunar_Olivine_Basalt_15555_from_Apollo_15_in_National_Museum_of_Natural_History.jpg",
  },
  {
    id: 3,
    name: "Space Helmet",
    description: "Advanced helmet for astronaut safety and vision.",
    price: "$2999",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.hbt3yNjDo6bpJ2rzKwv-uAHaHa&pid=Api&P=0&h=220",
  },
  {
    id: 1,
    name: "Space Suit",
    description: "High-tech astronaut suit for space exploration.",
    price: "$4999",
    image:
      "https://media.istockphoto.com/id/1332387319/photo/astronaut-or-cosmonaut-in-space-suit-against-a-white-surface.jpg?b=1&s=170667a&w=0&k=20&c=Q7KsT1-CEdk2AQwb-4KT6i8a9CovneghsOyML-Xdd1g=",
  },
  {
    id: 2,
    name: "Moon Rock",
    description: "Authentic moon rock collected from the lunar surface.",
    price: "$9999",
    image:
      "http://cdn.zmescience.com/wp-content/uploads/2016/10/Lunar_Olivine_Basalt_15555_from_Apollo_15_in_National_Museum_of_Natural_History.jpg",
  },
  {
    id: 3,
    name: "Space Helmet",
    description: "Advanced helmet for astronaut safety and vision.",
    price: "$2999",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.hbt3yNjDo6bpJ2rzKwv-uAHaHa&pid=Api&P=0&h=220",
  },
  {
    id: 2,
    name: "Moon Rock",
    description: "Authentic moon rock collected from the lunar surface.",
    price: "$9999",
    image:
      "http://cdn.zmescience.com/wp-content/uploads/2016/10/Lunar_Olivine_Basalt_15555_from_Apollo_15_in_National_Museum_of_Natural_History.jpg",
  },
  {
    id: 3,
    name: "Space Helmet",
    description: "Advanced helmet for astronaut safety and vision.",
    price: "$2999",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.hbt3yNjDo6bpJ2rzKwv-uAHaHa&pid=Api&P=0&h=220",
  },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111435] to-blue-900 text-white">
      <div className="container md:mx-auto mx-4 py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-32 mb-8">
          Space Lab Shop
        </h1>

        {/* Adjusted grid: 1 column full-width on mobile, 2 on medium, 3 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-opacity-15 bg-white text-black p-4 sm:p-6 rounded-lg shadow-lg w-[250px] md:w-full"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-64 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                {product.name}
              </h2>
              <p className="text-white text-sm sm:text-base mb-4">
                {product.description}
              </p>
              <div className="text-lg sm:text-xl font-bold">
                {product.price}
              </div>
              <button className="mt-4 bg-black text-white px-3 py-2 rounded">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
