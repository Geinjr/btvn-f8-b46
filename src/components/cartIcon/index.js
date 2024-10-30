"use client";

import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { selectCarts } from "@/store/cartSlice";
import styles from "./cartIcon.module.css"; // Import CSS module

const CartIcon = () => {
  const carts = useSelector(selectCarts);

  // Tính tổng số lượng sản phẩm trong giỏ
  const totalQuantity = carts.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.cartIcon}>
      <Link href="/cartPage" passHref>
        <i className="fa-solid fa-cart-shopping"></i>
        {totalQuantity > 0 && (
          <span className={styles.cartCount}>{totalQuantity}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
