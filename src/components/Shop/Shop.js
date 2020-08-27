import React from "react";
import "./Shop.css";
import Courses from "../Courses/Courses";
import Cart from "../Cart/Cart";
import fakeData from "../../fakeData";
import { useState } from "react";

const Shop = () => {
  const show15 = fakeData.slice(0, 15);
  const [courses] = useState(show15);
  const [cart, setCart] = useState([]);

  const handleEnrollBtn = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="course-container">
        {courses.map((course) => (
          <Courses handleEnrollBtn={handleEnrollBtn} course={course} key={course.id}></Courses>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
