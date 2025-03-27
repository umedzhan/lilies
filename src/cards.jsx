import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import { jwtDecode } from "jwt-decode";

export const Cards = () => {
  const [product, setproduct] = useState([]);

  let uname = jwtDecode(localStorage.getItem("token")).name;

  useEffect(() => {
    fetch("https://m6024.myxvest.ru/lilies/getOrder.php", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setproduct(data.orders || []); // ✅ Faqat `orders` massivini olish
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

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
        <div className="flex flex-wrap gap-[30px] overflow-y-auto max-h-[calc(100vh-150px)] mb-[-68px]">
          {product.map((item, index) => (
            <Card
              key={index}
              Rasm={item.image || "default.png"} // ✅ `product.product` emas
              Click={() => {}}
              Name={item.name || "No name"}
              Description={item.description || "No description"}
              Price={item.price || "0"}
              AddToCardClick={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
