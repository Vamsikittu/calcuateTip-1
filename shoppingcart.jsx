import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <div>
          <div>
            <span>Apple Juice</span>
            <span>+ 2 -</span>
            <span>Rs. 250</span>
          </div>
          <div>
            <span>250ml</span>
            <button>Save for later</button>
            <button>Remove</button>
          </div>
        </div>
        <div>
          <div>
            <span>Grapes Juice</span>
            <span>+ 1 -</span>
            <span>Rs. 250</span>
          </div>
          <div>
            <span>250ml</span>
            <button>Save for later</button>
            <button>Remove</button>
          </div>
        </div>
        <hr />
        <div>
          <span>Sub-Total</span>
          <span>Rs. 500</span>
          <span>2 items</span>
          <button>Checkout</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;