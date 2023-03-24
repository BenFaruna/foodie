import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from './actions/cartActions';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id}>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-quantity">Quantity: {item.quantity}</div>
                  <div className="item-price">${item.price * item.quantity}</div>
                </div>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total:</span> ${totalPrice}
          </div>
          <button className="clear-cart" onClick={handleClearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
