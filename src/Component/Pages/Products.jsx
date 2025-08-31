import styled from "styled-components";
import FilterSection from "../JSX/FilterSection";
import ProductList from "../JSX/ProductList";
import Sort from "../JSX/Sort";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid-filter-column">
        <div className="filter-section">
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    display: grid;
    grid-template-columns: 0.2fr 1fr;
  }

  .filter-section {
    display: block;
    position: static;
  }

  @media (min-width: 1024px) {
    .filter-section {
      position: sticky;
      top: 100px; /* adjust as needed for your header */
      align-self: flex-start;
      z-index: 2;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
    .filter-section {
      position: static;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
    .filter-section {
      position: static;
      margin-bottom: 2rem;
    }
  }
`;

export default Products;