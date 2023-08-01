import { useSelector } from "react-redux";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { HiShoppingCart } from "react-icons/hi";

const Cart = (props) => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <div
      style={{ display: "flex", position: "relative", height: "30px" }}
      onClick={() =>
        setOpen((prev) => {
          return !prev;
        })
      }
    >
      <div
        className={
          open && cart.length > 0 ? "cart-selected cart-button" : "cart-button"
        }
      >
        {isDesktop ? (
          <p style={{ color: "#888888" }}>{`My Cart (${cart.length})`} </p>
        ) : (
          <div style={{ display: "flex" }}>
            <HiShoppingCart />
            <p>{`(${cart.length})`}</p>
          </div>
        )}
      </div>
      {open && cart.length > 0 && (
        <div className="cart-box">
          {cart.map((item) => {
            return (
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "10px" }}>
                  <img
                    style={{ width: "80px", height: "120px" }}
                    src={item.imageUrl}
                    alt="img"
                  ></img>
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{`${item.quantity}x $${item.price}`}</p>
                  <p>{`Size: ${item.label}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
