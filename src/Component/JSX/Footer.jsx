import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Styles/Button";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <Wrapper>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div>
                            <Button className="btn hireme-btn">
                                <NavLink to="/"> Get Started </NavLink>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* footer section */}

                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3>Tech Gadgets</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque. </p>
                        </div>
                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="#">
                                <input type="email" name="email" placeholder="YOUR E-MAIL" required />

                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <a href="https://discord.com/login" target='_blank'>
                                        <FaDiscord className="icons" />
                                    </a>

                                </div>
                                <div>
                                    <a href="https://www.instagram.com" target='_blank'>
                                        <FaInstagram className="icons" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/vikaskurmi17560"
                                        target="_blank">
                                        <FaGithub className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <h3>+91 9997235982</h3>
                        </div>
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column ">
                            <p>
                                @{new Date().getFullYear()} Tech Gadgets. All Rights Reserved
                            </p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer
