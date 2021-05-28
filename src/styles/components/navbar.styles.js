import styled from 'styled-components'

export const Bar = styled.header`
  background: antiquewhite;
  margin-bottom: 1.45rem;
  display: flex;
  align-items: center;
  padding: 0.8em 0 0.8em 0;
  justify-content: space-evenly;
  & a {
    color: black;
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    &:hover {
      filter: drop-shadow(0px 0px 10px white);
    }
    @media only screen and (max-width: 768px) {
      ${({ dropdown }) => `display: ${dropdown ? 'flex' : 'none'};};`}
      margin: 10px;
    }
  }
  #logo-text {
    font-size: 32px;
    font-family: cursive;
  }
  & div {
    display: flex;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MobileBar = styled.div`
  #bars {
    display: none;
    font-size: 24px;
    cursor: pointer;
    color: black;
    &:hover {
      filter: drop-shadow(0px 0px 10px white);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #logo, #logo-text {
      display: block;
    }
    #logo {
      margin-left: 40px;
    }
    #bars {
      display: block;
      margin-right: 40px;
    }
  }
`;
