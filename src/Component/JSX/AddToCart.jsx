import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { useCartContext } from "../Context/Cart_Context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { _id, color = [], stock } = product;

  const [selectedColor, setSelectedColor] = useState(color[0] || "");
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prev) => (prev < stock ? prev + 1 : stock));
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {color.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={
                selectedColor === curColor ? "btnStyle active" : "btnStyle"
              }
              onClick={() => setSelectedColor(curColor)}
            >
              {selectedColor === curColor ? (
                <FaCheck className="checkStyle" />
              ) : null}
            </button>
          ))}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        onClick={() => addToCart(_id, selectedColor, amount, product)}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart;