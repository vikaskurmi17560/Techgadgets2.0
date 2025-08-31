import React, { useState } from "react";
import styled from "styled-components";


export const MyImageSkeleton = () => (
  <Wrapper>
    <div className="thumbnails-row">
      {[...Array(4)].map((_, i) => (
        <figure key={i}>
          <div className="skeleton-thumbnail" />
        </figure>
      ))}
    </div>
    <div className="main-image-container">
      <div className="skeleton-main-image" />
    </div>
  </Wrapper>
);

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const formattedImgs = imgs.map((img) =>
    typeof img === "string" ? { url: img, filename: "product-image" } : img
  );
  const [mainImage, setMainImage] = useState(formattedImgs[0]);

  return (
    <Wrapper>
      <div className="thumbnails-row">
        {formattedImgs.map((curElm, index) => (
          <figure
            key={index}
            className={mainImage.url === curElm.url ? "active" : ""}
          >
            <img
              src={curElm.url}
              alt={curElm.filename || "product-image"}
              className="thumbnail-image"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
      <div className="main-image-container">
        <img
          src={mainImage.url}
          alt={mainImage.filename || "main product image"}
          className="main-image"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  .thumbnails-row {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    margin-bottom: 1.5rem;
    figure {
      margin: 0;
      border: 2px solid transparent;
      border-radius: 8px;
      transition: border 0.2s;
      &.active {
        border: 2px solid ${({ theme }) => theme.colors.btn};
      }
      .thumbnail-image,
      .skeleton-thumbnail {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 6px;
        cursor: pointer;
        box-shadow: ${({ theme }) => theme.colors.shadow};
        transition: transform 0.2s;
      }
      .skeleton-thumbnail {
        background: #e0e0e0;
        animation: skeleton-loading 1.2s infinite linear alternate;
      }
      .thumbnail-image:hover {
        transform: scale(1.08);
      }
    }
  }

  .main-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7fa;
    border-radius: 1rem;
    padding: 2rem;
    .main-image,
    .skeleton-main-image {
      max-width: 400px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      object-fit: contain;
      background: #fff;
    }
    .skeleton-main-image {
      height: 300px;
      background: #e0e0e0;
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

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .thumbnails-row {
      gap: 0.7rem;
      figure {
        .thumbnail-image,
        .skeleton-thumbnail {
          width: 50px;
          height: 50px;
        }
      }
    }
    .main-image-container {
      padding: 1rem;
      .main-image,
      .skeleton-main-image {
        max-width: 100%;
        height: 180px;
      }
    }
  }
`;

export default MyImage;