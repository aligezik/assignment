import styled from "styled-components"

const Image = styled.img`
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 2rem 0;
  }
`

export default Image
