import React from "react";
import { Text } from "react-native";
import { StyledTouchableOpacity, StyledText } from "./Button.styles";

const Button = ({ text, special, onPress }) => {
  return (
    <StyledTouchableOpacity isSpecial={special} onPress={() => onPress(text)}>
      <StyledText isSpecial={special}>{text}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
