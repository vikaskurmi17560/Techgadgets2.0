import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/ProductContext";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import { Container } from '../Styles/Container';
import FormatPrice from "../Helper/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "../Helper/Star";
import AddToCart from "./AddToCart";


const SkeletonLoader = () => (
  <SkeletonWrapper>
    <div className="container">
      <div className="grid grid-two-column">
        <div className="product_images">
          <div className="skeleton-image" />
          <div className="skeleton-thumbnails">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton-thumbnail" />
            ))}
          </div>
        </div>
        <div className="product-data">
          <div className="skeleton-title" />
          <div className="skeleton-stars" />
          <div className="skeleton-price" />
          <div className="skeleton-real-price" />
          <div className="skeleton-description" />
          <div className="skeleton-warranty">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="skeleton-warranty-item" />
            ))}
          </div>
          <div className="skeleton-info">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="skeleton-info-item" />
            ))}
          </div>
          <div className="skeleton-addtocart" />
        </div>
      </div>
    </div>
  </SkeletonWrapper>
);

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, isError, singleProduct } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleProduct(id);
    }
  }, [id]);

  if (isSingleLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <div className="page_loading">Network error. Please try again later.</div>;
  }

  if (!singleProduct || !singleProduct._id) {
    return <div className="page_loading">Product not found.</div>;
  }

  const {
    _id: alias,
    name,
    Brand: company,
    Sale_Price: price,
    Description: description,
    category,
    stock,
    Ratings: stars,
    imageUrl,
    Description_Images,
    color,
  } = singleProduct;

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage imgs={[imageUrl, ...(Description_Images || [])]} />
          </div>
          <div className="product-data">
            <h2 className="product-title">{name}</h2>
            <Star stars={stars} reviews={singleProduct.reviews || 0} />
            <p className="product-data-price">
              <span className="mrp-label">MRP:</span>
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              <span className="deal-label">Deal of the Day:</span> <FormatPrice price={price} />
            </p>
            <p className="product-description">{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>TechGadgets Delivered</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                <span className="info-label">Available:</span>
                <span className={stock > 0 ? "in-stock" : "out-stock"}>
                  {stock > 0 ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p>
                <span className="info-label">ID:</span> <span>{alias}</span>
              </p>
              <p>
                <span className="info-label">Brand:</span> <span>{company}</span>
              </p>
              <p>
                <span className="info-label">Category:</span> <span>{category}</span>
              </p>
              <p>
                <span className="info-label">Colors:</span> <span>{color ? color.join(", ") : "N/A"}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const SkeletonWrapper = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  .container {
    padding: 5rem 2rem;
    background: #fff;
    border-radius: 1.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  }
  .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: flex-start;
  }
  .product_images {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f7f7fa;
    border-radius: 1rem;
    padding: 2rem;
    .skeleton-image {
      width: 400px;
      height: 300px;
      background: #e0e0e0;
      border-radius: 12px;
      margin-bottom: 1.2rem;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-thumbnails {
      display: flex;
      gap: 1rem;
      .skeleton-thumbnail {
        width: 70px;
        height: 70px;
        background: #e0e0e0;
        border-radius: 6px;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
    }
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    .skeleton-title {
      width: 60%;
      height: 32px;
      background: #e0e0e0;
      border-radius: 8px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-stars {
      width: 120px;
      height: 24px;
      background: #e0e0e0;
      border-radius: 6px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-price {
      width: 40%;
      height: 24px;
      background: #e0e0e0;
      border-radius: 6px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-real-price {
      width: 50%;
      height: 28px;
      background: #e0e0e0;
      border-radius: 6px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-description {
      width: 100%;
      height: 60px;
      background: #e0e0e0;
      border-radius: 8px;
      animation: skeleton-loading 1.2s infinite linear alternate;
    }
    .skeleton-warranty {
      display: flex;
      gap: 1.5rem;
      width: 100%;
      .skeleton-warranty-item {
        width: 80px;
        height: 60px;
        background: #e0e0e0;
        border-radius: 8px;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
    }
    .skeleton-info {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      width: 100%;
      .skeleton-info-item {
        width: 70%;
        height: 20px;
        background: #e0e0e0;
        border-radius: 6px;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
    }
    .skeleton-addtocart {
      width: 160px;
      height: 44px;
      background: #e0e0e0;
      border-radius: 8px;
      margin-top: 1.5rem;
      animation: skeleton-loading 1.2s infinite linear alternate;
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
  .page_loading {
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    color: ${({ theme }) => theme.colors.btn};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .container {
      padding: 2rem 1rem;
    }
    .product_images {
      .skeleton-image {
        width: 100%;
        height: 180px;
      }
      .skeleton-thumbnails {
        .skeleton-thumbnail {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.bg};
  min-height: 100vh;
  .container {
    padding: 5rem 2rem;
    background: #fff;
    border-radius: 1.5rem;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  }
  .grid-two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: flex-start;
  }
  .product_images {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7fa;
    border-radius: 1rem;
    padding: 2rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    .product-title {
      font-size: 2.8rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom: 0.5rem;
    }
    .product-description {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.text};
      margin-bottom: 1rem;
    }
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #eee;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: #e9e9e9;
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          padding: 0.6rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1.3rem;
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
    .product-data-price {
      font-weight: bold;
      font-size: 1.7rem;
      .mrp-label {
        color: #888;
        margin-right: 0.5rem;
      }
      del {
        color: #b0b0b0;
      }
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
      font-size: 2rem;
      .deal-label {
        font-weight: 600;
        margin-right: 0.5rem;
      }
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      font-size: 1.5rem;
      .info-label {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.helper};
        margin-right: 0.5rem;
      }
      .in-stock {
        color: green;
        font-weight: 600;
      }
      .out-stock {
        color: red;
        font-weight: 600;
      }
      span {
        font-weight: 500;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #eee;
      margin: 2rem 0;
    }
  }
  .page_loading {
    font-size: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    color: ${({ theme }) => theme.colors.btn};
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .container {
      padding: 2rem 1rem;
    }
  }
`;

export default SingleProduct;