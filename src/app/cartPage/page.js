"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectCarts } from "@/store/cartSlice";
import { selectProducts } from "@/store/productsSlice";
import Link from "next/link";
import styles from "./cartPage.module.css";

const CartPage = () => {
  const carts = useSelector(selectCarts); // Lấy carts từ Redux
  const products = useSelector(selectProducts); // Lấy products từ Redux

  // Tạo một object để dễ dàng lấy thông tin sản phẩm theo productId
  const productMap = products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {});

  return (
    <div className={styles.cartPage}>
      <h1>Your Cart</h1>
      {carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartItems}>
          {carts.map((cartItem) => {
            const product = productMap[cartItem.productId];
            return (
              <div key={product.id} className={styles.cartItem}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className={styles.cartItemImage}
                />
                <h2 className={styles.cartItemName}>{product.name}</h2>
                <p className={styles.cartItemQuantity}>
                  Quantity: {cartItem.quantity}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <Link href="/productsList" passHref>
        <button className={styles.backButton}>Go Back</button>
      </Link>
    </div>
  );
};

export default CartPage;
