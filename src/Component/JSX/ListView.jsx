import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormatPrice from "../Helper/FormatPrice";
import { Button } from "../Styles/Button";

const ListSkeleton = () => (
  <Wrapper className="section">
    <div className="container grid">
      {[...Array(6)].map((_, idx) => (
        <div className="card grid grid-two-column" key={idx}>
          <figure>
            <div className="skeleton-image" />
          </figure>
          <div className="card-data">
            <div className="skeleton-title" />
            <div className="skeleton-price" />
            <div className="skeleton-desc" />
            <div className="skeleton-btn" />
          </div>
        </div>
      ))}
    </div>
  </Wrapper>
);

const ListView = ({ products, isLoading }) => {
  if (isLoading) return <ListSkeleton />;
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const {
            _id,
            name,
            imageUrl,
            Sale_Price,
            Description
          } = curElem;
          return (
            <div className="card grid grid-two-column" key={_id}>
              <figure>
                <img src={imageUrl} alt={name} />
              </figure>

              <div className="card-data">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={Sale_Price} />
                </p>
                <p>{Description ? Description.slice(0, 90) : ""}...</p>

                <NavLink to={`/singleproduct/${_id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
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
    img, .skeleton-image {
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
    border: 0.1rem solid rgb(170 170 170 / 40%);

    .card-data {
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    h3, .skeleton-title {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
      background: none;
    }
    .skeleton-title {
      width: 60%;
      height: 32px;
      background: #e0e0e0;
      border-radius: 8px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-price {
      width: 40%;
      height: 24px;
      background: #e0e0e0;
      border-radius: 6px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-desc {
      width: 100%;
      height: 40px;
      background: #e0e0e0;
      border-radius: 8px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-btn {
      width: 120px;
      height: 40px;
      background: #e0e0e0;
      border-radius: 8px;
      margin-top: 1.5rem;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }

    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
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

export default ListView;