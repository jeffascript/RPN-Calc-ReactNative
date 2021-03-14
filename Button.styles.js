import styled from "styled-components/native";
import { View, Text } from "react-native";

const Container = styled(View)`
  background-color: ${(props) => (props.isSpecial ? "#9bc23c" : "#fafafa")};
  flex: ${(props) => (props.isSpecial ? 2 : 1)};
  /* justify-content: center; */
  align-items: center;
  border-right-width: 1px;
  border-color: red;
  /* color: white; */
`;

const StyledText = styled(Text)`
  font-size: 36px;
  color: ${(props) => (props.isSpecial ? "white" : "black")};
`;

export { Container, StyledText };
