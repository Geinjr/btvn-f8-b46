"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { selectProducts } from "@/store/productsSlice";
import styles from "./style.module.css";
import Link from "next/link";
import { CartIcon } from "@/components";

const ProductList = () => {
  const dispatch = useDispatch(); // Kết nối với Redux dispatch
  const products = useSelector(selectProducts); // Lấy sản phẩm từ Redux store
  const handleAddToCart = (product) => {
    const productToAdd = {
      productId: product.id,
      quantity: 1, // Hoặc số lượng mà bạn muốn thêm
    };
    dispatch(addToCart(productToAdd)); // Gọi action để thêm sản phẩm vào giỏ hàng
  };

  return (
    <>
      <CartIcon />
      <div className={styles.container}>
        <h1 className={styles.title}>Danh sách sản phẩm</h1>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <Link
                href={`/productsList/${product.id}`}
                className={styles.productLink}
              >
                <div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <h2 className={styles.productName}>{product.name}</h2>
                </div>
              </Link>
              <button
                className={styles.productButton}
                onClick={(event) => {
                  event.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Thêm vào giỏ
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
