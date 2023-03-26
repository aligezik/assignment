import styled from "styled-components"

const HeaderText = styled.h1`
  color: ${({ renk }) => renk || "black"};
  background-color: ${({ bgRenk }) => bgRenk || "black"};
  font-size: 2rem;
  text-align: center;
`

export default HeaderText
