import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .navbar-right {
    padding: 1rem;
    .right-link {
      text-decoration: none;
      margin-left: 1rem;
    }
  }
  .navbar-left {
    text-decoration: none;
  }
`;

export default NavbarStyle;