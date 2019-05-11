import React from "react";
import styled, { createGlobalStyle } from "styled-components";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Button>Hello</Button>
      <Button danger>Hello</Button>
      <Anchor href="https://www.google.com/">Go to Google</Anchor>
    </Container>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: grey;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => (props.danger ? "#e74c3c" : "#2ecc71")};
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;
