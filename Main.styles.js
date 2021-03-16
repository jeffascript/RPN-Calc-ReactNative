import styled from "styled-components/native";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import * as Animatable from "react-native-animatable";

export const Container = styled(View)`
  flex: 1;
  background-color: #676259; //papayawhip
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
  padding-top: ${Platform.OS === "ios" ? "38px" : "5%"};
`;

export const BottomSection = styled(View)`
  /* background-color: green; */
  flex: 1;
`;

export const Number = styled(Animatable.Text)`
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
  /* border-bottom-width: 1px;
  border-color: #ffff; */
`;

export const Row = styled(View)`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #ffff;
`;

export const TouchableOpacityContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-color: #ffff;
`;
