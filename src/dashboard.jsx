import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import AddToCard from "./components/AddToCard";

export const Dashboard = () => {
  const [showAdToCard, setShowAdToCard] = useState("hidden");
  const [uname, setuname] = useState("");
  const [product, setproduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setuname(decodedToken.name);
      console.log(decodedToken);
    } else {
      setuname("");
      console.log("No token found");
    }
  });

  //getProduct
  useEffect(() => {
    fetch("https://m6024.myxvest.ru/lilies/products.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setproduct(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggleAddToCard = (index) => {
    setShowAdToCard(showAdToCard === "hidden" ? "absolute" : "hidden");
    setSelectedProduct(index);
    console.log(selectedProduct);
  };
  return (
    <div className="ml-[320px]">
      <SideBar />
      <div className="flex flex-col p-[68px] gap-[53px] h-[100vh]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-[23px]">
              Good morning, {uname}!
            </span>
            <span className="text-[14px] text-[#000000B0]">
              What delicious meal are you craving today?
            </span>
          </div>
          <div className="w-[50px] h-[50px]">
            <img src="dashboard-profile-photo.png" alt="user" />
          </div>
        </div>
        <div className="flex flex-wrap gap-[30px] overflow-y-scroll mb-[-68px]">
          {product.map((product, index) => (
            <Card
              key={index}
              Rasm={product.image}
              Click={() => toggleAddToCard(product)}
              Name={product.name}
              Description={product.description}
              Price={product.price}
              AddToCardClick={() => toggleAddToCard(product)}
            />
          ))}
        </div>
      </div>
      <AddToCard
        showAdToCard={showAdToCard}
        hideAddToCard={toggleAddToCard}
        product={selectedProduct}
      />
    </div>
  );
};
