import styled from "styled-components/native";
import { View, Text } from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: papayawhip;
  /* justify-content: center;
  align-items: center; */
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const TopSection = styled(View)`
  /* background-color: blue; */
  padding-top: 10%;
`;

export const BottomSection = styled(View)`
  /* background-color: green; */
  flex: 1;
`;

export const Number = styled(Text)`
  color: ${({ functionality }) =>
    functionality === "append"
      ? "white"
      : functionality === "replace"
      ? "#2e71ef"
      : functionality === "push"
      ? "#9bc23c" //greenish
      : "papayawhip"};
  background-color: #424242;
  text-align: right;
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
  border-bottom-width: 1px;
  border-color: #ffff;
`;

export const Row = styled(View)`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #ffff;
`;
