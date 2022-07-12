import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;font-family: 'Bebas Neue', cursive !important;
  font-size: 2rem;
  background: transparent;
  border: 0.05rem solid var(--mainGrey);
  border-color: ${props =>
    props.cart ? "var(--mainOrange)" : "var(--mainGrey)"};
  color: var(--mainGrey);
  color: ${props => (props.cart ? "var(--brown)" : "var(--mainGrey)")};
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--mainGrey);
    background: ${props =>
      props.cart ? "var(--mainOrange)" : "var(--mainGrey)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
