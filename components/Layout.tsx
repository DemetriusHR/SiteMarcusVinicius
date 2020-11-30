import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import HeadPage from "./HeadPage";
import GlobalStyle from "../styles/GlobalStyles";
import Header from "./Header";

const LayoutWrapper: StyledComponent<"div", any, {}, never> = styled.div`
  background-color: var(--background);
  color: var(--textcolor);

  .background {
    background-color: var(--background);
  }

  .font-decorative {
    font-family: "Cinzel Decorative", cursive;
  }

  .text-color-2 {
    color: var(--textcolor1);
  }
  
  .map-wrapper {
    width: calc(100% - 4rem);
  }
`;

const Layout: React.FC = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    <HeadPage />
    <Header />
    {children}
  </LayoutWrapper>
);

export default Layout;
