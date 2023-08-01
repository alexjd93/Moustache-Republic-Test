import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { productApi } from "../../api/productApi";
import { useMediaQuery } from "react-responsive";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [option, setOption] = useState(null);
  const [warning, setWarning] = useState(false);
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const myImageStyle = isDesktop
    ? { width: "100%", height: "600px" }
    : { width: "100%", height: "600px" };

  const getProduct = useCallback(async () => {
    const data = await productApi.getProduct();
    setProduct(data);
  }, []);

  const setCart = useCallback(() => {
    if (option !== null) {
      const proObj = {
        ...option,
        title: product.title,
        price: product.price,
        imageUrl: product.imageURL,
      };
      dispatch(addToCart(proObj));
    } else {
      setWarning(true);
    }
  }, [option, dispatch]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <div className={isDesktop ? "product-page-desktop" : "product-page-mobile"}>
      {product && (
        <>
          <div>
            <img src={product.imageURL} style={myImageStyle}></img>
          </div>

          <div className={isDesktop ? "product-detail" : ""}>
            <h2>{product.title}</h2>

            <div className="product-detail-price">
              <p>{product.price}</p>
            </div>

            <div className="product-detail-description">
              <p>{product.description}</p>
            </div>

            <div className="product-detail-size">
              <span style={{ color: "#888888" }}>
                SIZE <span style={{ color: "#C90000" }}>*</span>
              </span>
            </div>

            <ul className="product-size">
              {product.sizeOptions.map((size) => {
                let selected;
                if (option) {
                  selected = size.id === option.id;
                }

                return (
                  <li
                    className={selected ? "product-selected" : ""}
                    key={size.id}
                    onClick={() => setOption(size)}
                  >
                    {size.label}
                  </li>
                );
              })}
            </ul>
            <button className="product-button " onClick={() => setCart()}>
              ADD TO CART
            </button>
            {warning && (
              <span style={{ color: "red" }}>Please select an item</span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
