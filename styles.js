import styled from "styled-components/native";
import { View, Text } from "react-native";

const Container = styled(View)`
  flex: 1;
  background-color: papayawhip;
  /* justify-content: center;
  align-items: center; */
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

const Top = styled(View)`
  background-color: blue;
  padding-top: 15%;
`;

const Bottom = styled(View)`
  background-color: green;
  flex: 1;
`;

const Number = styled(Text)`
  color: #ffff;
  background-color: #424242;
  text-align: right;
  padding: 10px;
  font-size: 30px;
  font-weight: bold;
  border-bottom-width: 1px;
`;

export { Container, Title, Top, Bottom, Number };
