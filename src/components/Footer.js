import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Bookstore. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
