import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
import styled from "styled-components";

const Product = ({ _id, name, imageUrl, Sale_Price, category }) => {
  return (
    <Wrapper>
      <NavLink to={`/singleproduct/${_id}`}>
        <div className="card">
          <figure>
            <img src={imageUrl} alt={name} />
            <figcaption className="caption">{category}</figcaption>
          </figure>
          <div className="card-data">
            <div className="card-data-flex">
              <h3 title={name}>{name}</h3>
              <p className="card-data--price">
                <FormatPrice price={Sale_Price} />
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  .card {
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: box-shadow 0.3s, transform 0.3s;
    display: flex;
    flex-direction: column;
    min-height: 370px;
    height: 100%;
    overflow: hidden;
    position: relative;

    &:hover {
      box-shadow: 0 8px 24px rgba(98, 84, 243, 0.18);
      transform: translateY(-4px) scale(1.03);
      background-color: #fff;
    }

    .card-data {
      padding: 0 2rem 2rem 2rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .card-data-flex {
      margin: 2rem 0 0 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 1rem;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
      margin: 0;
      font-weight: 500;
      font-size: 2rem;
      letter-spacing: 0.5px;
      line-height: 1.2;
      max-width: 160px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-word;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
      font-size: 1.5rem;
      font-weight: 600;
      margin-left: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.2s;
      display: block;
      height: 100%;
    }
    &:hover a {
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    min-height: 220px;
    width: 100%;
    margin: 0;
    background: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem 1rem 0 0;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.18);
      transition: width 0.2s linear;
      cursor: pointer;
      border-radius: 1rem 1rem 0 0;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.08);
      filter: brightness(0.95);
    }
    img {
      max-width: 90%;
      height: 180px;
      object-fit: cover;
      border-radius: 1rem 1rem 0 0;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
      font-weight: 500;
      letter-spacing: 1px;
    }
  }
`;

export default Product;