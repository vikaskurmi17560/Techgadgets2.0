import React from "react";
import styled from "styled-components";
import Product from "./Product";

const GridSkeleton = () => (
  <Wrapper className="section">
    <div className="container grid grid-three-column">
      {[...Array(6)].map((_, idx) => (
        <div className="card" key={idx}>
          <figure>
            <div className="skeleton-image" />
          </figure>
          <div className="card-data">
            <div className="skeleton-title" />
            <div className="card-data-flex">
              <div className="skeleton-price" />
              <div className="skeleton-btn" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </Wrapper>
);

const GridView = ({ products, isLoading }) => {
  if (isLoading) return <GridSkeleton />;
  return (
    <Wrapper className="section">
      <div className="container grid grid-three-column">
        {products.map((curElem) => {
          return <Product key={curElem._id} {...curElem} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .container {
      padding: 0 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr;
    }
    .container {
      padding: 0 0.5rem;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img,
    .skeleton-image {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
      border-radius: 12px;
      object-fit: cover;
    }
    .skeleton-image {
      background: #e0e0e0;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.3s, transform 0.3s;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text}; /* Ensures product name is always theme text color */
      text-transform: capitalize;
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      letter-spacing: 1px;
    }

    .card-data--price,
    .skeleton-price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1.6rem;
      font-weight: 600;
    }
    .skeleton-title {
      width: 60%;
      height: 32px;
      background: #e0e0e0;
      border-radius: 8px;
      animation: skeleton-loading 1.2s infinite linear alternate;
      margin: 2rem 0;
    }
    .skeleton-price {
      width: 40%;
      height: 24px;
      background: #e0e0e0;
      border-radius: 6px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .btn,
    .skeleton-btn {
      margin: 2rem auto;
      background-color: transparent;
      border: 0.1rem solid ${({ theme }) => theme.colors.helper};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      min-width: 120px;
      min-height: 40px;
      color: ${({ theme }) => theme.colors.text};
    }
    .skeleton-btn {
      width: 120px;
      height: 40px;
      background: #e0e0e0;
      border-radius: 8px;
      animation: skeleton-loading 1.2s infinite linear alternate;
      border: none;
    }
    &:hover {
      box-shadow: 0 4px 16px rgba(98, 84, 243, 0.15);
      transform: translateY(-4px) scale(1.03);
      background-color: #fff;
    }
    &:hover a {
      color: ${({ theme }) => theme.colors.helper};
    }
    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.4rem;
      font-weight: 500;
      letter-spacing: 1px;
      text-decoration: none;
      transition: color 0.2s;
    }
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

export default GridView;