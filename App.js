import React from "react";
import { View, Text } from "react-native";
// import styled from "styled-components/native";
import { Container, Top, Bottom, Title, Number } from "./styles";

export default function App() {
  return (
    <Container>
      <Top>
        {/* <Title color="palevioletred">Expo with 💅 Styled Components</Title> */}
        <Number>0</Number>
        <Number>0</Number>
        <Number>0</Number>
      </Top>
      <Bottom>
        <Title color="chocolate">iOS • Android • web</Title>
      </Bottom>
      {/* 
     

      <View></View> */}
    </Container>
  );
}
