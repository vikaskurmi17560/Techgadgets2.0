import React from "react";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/Cart_Context";
import styled from "styled-components";


export const CartItemSkeleton = () => (
  <SkeletonWrapper>
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <div className="skeleton-image" />
          </figure>
        </div>
        <div>
          <div className="skeleton-title" />
          <div className="color-div">
            <div className="skeleton-color-label" />
            <div className="skeleton-color-style" />
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <div className="skeleton-price" />
      </div>
      <div className="skeleton-amount-toggle" />
      <div className="cart-hide">
        <div className="skeleton-total-price" />
      </div>
      <div>
        <div className="skeleton-trash" />
      </div>
    </div>
  </SkeletonWrapper>
);

const CartItem = ({ id, name, imageUrl, color, price, amount, isLoading }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  if (isLoading) return <CartItemSkeleton />;

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={imageUrl} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
              aria-label={`Selected color ${color}`}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

const SkeletonWrapper = styled.div`
  .cart_heading {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 0;
    border-bottom: 1px solid #eee;
  }
  .cart-image--name {
    display: flex;
    align-items: center;
    gap: 1rem;
    figure {
      margin: 0;
      .skeleton-image {
        width: 60px;
        height: 60px;
        background: #e0e0e0;
        border-radius: 8px;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
    }
    .skeleton-title {
      width: 100px;
      height: 20px;
      background: #e0e0e0;
      border-radius: 6px;
      margin-bottom: 0.5rem;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .color-div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .skeleton-color-label {
        width: 40px;
        height: 16px;
        background: #e0e0e0;
        border-radius: 4px;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
      .skeleton-color-style {
        width: 20px;
        height: 20px;
        background: #e0e0e0;
        border-radius: 50%;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
    }
  }
  .skeleton-price,
  .skeleton-total-price {
    width: 60px;
    height: 20px;
    background: #e0e0e0;
    border-radius: 6px;
    animation: skeleton-loading 1.2s infinite linear alternate;
    margin: 0 auto;
  }
  .skeleton-amount-toggle {
    width: 80px;
    height: 32px;
    background: #e0e0e0;
    border-radius: 8px;
    animation: skeleton-loading 1.2s infinite linear alternate;
    margin: 0 auto;
  }
  .skeleton-trash {
    width: 28px;
    height: 28px;
    background: #e0e0e0;
    border-radius: 50%;
    animation: skeleton-loading 1.2s infinite linear alternate;
    margin: 0 auto;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: #f5f5f5;
    }
  }
`;

export default CartItem;
