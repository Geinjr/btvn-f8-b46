// src/components/ProductDetails.jsx
"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "@/store/productsSlice";
import Link from "next/link";
import styles from "./productDetail.module.css";
import { CartIcon } from "@/components";
import { addToCart } from "@/store/cartSlice";

const ProductDetails = () => {
  const router = useRouter();
  const params = useParams();
  const { id: productId } = params;
  const dispatch = useDispatch(); // Kết nối với Redux dispatch
  const products = useSelector(selectProducts); // Lấy sản phẩm từ Redux store
  const handleAddToCart = (product) => {
    const productToAdd = {
      productId: product.id,
      quantity: 1, // Hoặc số lượng mà bạn muốn thêm
    };
    dispatch(addToCart(productToAdd)); // Gọi action để thêm sản phẩm vào giỏ hàng
  };
  // Tìm sản phẩm với `id` tương ứng
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <CartIcon />
      <div className={styles.productDetailsContainer}>
        <h1 className={styles.productName}>{product.name}</h1>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImage}
        />
        <p className={styles.productDescription}>{product.description}</p>
        <div>
          <Link href="/productsList" passHref>
            <button className={styles.backButton}>Go Back</button>
          </Link>
          <button
            className={styles.backButton}
            onClick={(event) => {
              event.stopPropagation();
              handleAddToCart(product);
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
