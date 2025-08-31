import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <nav aria-label="Breadcrumb">
        <NavLink to="/">Home</NavLink>
        <span className="separator"> / </span>
        <span>{title}</span>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
  .separator {
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default PageNavigation;