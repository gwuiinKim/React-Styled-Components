import React from "react";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Button>Hello</Button>
      <Button danger>Hello</Button>
    </div>
  );
}

export default App;

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
