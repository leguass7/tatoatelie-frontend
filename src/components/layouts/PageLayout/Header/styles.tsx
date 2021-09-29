import styled from 'styled-components'

export const ImageContainer = styled.div<{ color: string }>`
  display: block;
  margin: 0 auto;
  padding: 0;
  a {
    text-decoration: none;
    outline: none;
  }
  img {
    outline: none;
    display: block;
    max-width: 100%;
    width: 160px;
    margin: 0 auto;
    margin-top: -38px;
  }
  p {
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-weight: bold;
    color: ${({ color }) => color};
  }
`
