import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import React from "react";

import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    toast.success("Added to cart");
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>Rs.{product.price}</Card.Text>
        {product.countInStock > 0 ? (
          <Button
            variant="primary"
            onClick={() => {
              addToCartHandler({ product, quantity: 1 });
            }}
          >
            Add to cart 
          </Button>
        ) : (
          <Button variant="danger">Unavailable</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
