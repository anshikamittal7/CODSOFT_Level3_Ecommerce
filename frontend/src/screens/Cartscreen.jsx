import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  deleteItem,
  calculateTotals,
} from "../redux/cartSlice"; // Import your cartSlice actions

const Cartscreen = () => {
  const dispatch = useDispatch();

  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  const increment = (product) => {
    dispatch(addToCart({ product, quantity: 1 }), calculateTotals());
  };

  const decrementHandler = (id) => {
    const item = cartItems.find((i) => i._id === id);
    if (item.quantity === 1) {
      dispatch(deleteItem(id), calculateTotals());
    } else {
      dispatch(decrement(id), calculateTotals());
    }
  };

  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
    dispatch(calculateTotals());
  };

  console.log(cartItems);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, index) => (
            <CartItem
              key={index}
              product={i}
              decrement={decrementHandler} // Use decrementHandler instead of decrement
              increment={increment} // Pass the whole product object
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>Cart is Empty!</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: Rs.{subTotal}</h2>
        <h2>Shipping: Rs.{shipping}</h2>
        <h2>Tax: Rs.{tax}</h2>
        <h2>Total: Rs.{total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({ product, decrement, increment, deleteHandler }) => (
  <div className="cartItem">
    <img src={product.image} alt={product.name} />
    <article>
      <h3>{product.name}</h3>
      <p>Rs.{product.price}</p>
    </article>

    <div>
      <button onClick={() => decrement(product._id)}>-</button>
      <p>{product.quantity || 0}</p>
      <button onClick={() => increment(product)}>+</button>
    </div>
    <div>
      <AiFillDelete onClick={() => deleteHandler(product._id)} />
    </div>
  </div>
);

export default Cartscreen;
