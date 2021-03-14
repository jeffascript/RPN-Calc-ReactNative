import React from "react";
// import { Text } from "react-native";
import { Container, StyledText } from "./Button.styles";

const Button = ({ text, special }) => {
  return (
    <Container isSpecial={special}>
      <StyledText isSpecial={special}>{text}</StyledText>
    </Container>
  );
};

export default Button;
