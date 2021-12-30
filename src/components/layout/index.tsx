import React from 'react';
import LayoutComponent from './layout_component';

import Bases, { Header } from 'Bases';

import styled, { css } from 'styled-components';

const StyledMain = styled.main.attrs(() => {})`
  ${(props) => {
    const desktopHeight = props.theme.size.$header_desktop_line_height;
    const mobileHeight = props.theme.size.$header_mobile_line_height;

    return css`
      padding-top: ${desktopHeight};

      @media screen and (max-width: 1000px){
        padding-top: ${mobileHeight};
      }
    `;
  }}
`;

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {/* <StyledMain> */}
      {children}
      {/* </StyledMain> */}
    </>
  );
};

export default Layout;

export { LayoutComponent };
