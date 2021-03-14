import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const StyledTouchableOpacity = styled(TouchableOpacity)`
  background-color: ${(props) => (props.isSpecial ? "#9bc23c" : "#f2f2f2")};
  flex: ${(props) => (props.isSpecial ? 2 : 1)};
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: #ffff;
  /* color: white; */
`;

const StyledText = styled(Text)`
  font-size: 36px;
  color: ${(props) => (props.isSpecial ? "white" : "black")};
`;

export { StyledTouchableOpacity, StyledText };
