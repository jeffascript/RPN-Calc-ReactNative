import React from "react";
import { View, Text } from "react-native";
import Button from "./Button";
// import styled from "styled-components/native";
import {
  Container,
  TopSection,
  BottomSection,
  // Title,
  Number,
  Row,
} from "./styles";

export default function App() {
  return (
    <Container>
      <TopSection>
        {/* <Title color="palevioletred">Expo with 💅 Styled Components</Title> */}
        <Number>0</Number>
        <Number>0</Number>
        <Number>0</Number>
      </TopSection>
      <BottomSection>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="clear" />
          <Button text="pow" />
          <Button text="swap" />
          <Button text="/" />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="9" />
          <Button text="8" />
          <Button text="7" />
          <Button text="X" />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="6" />
          <Button text="5" />
          <Button text="4" />
          <Button text="-" />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="3" />
          <Button text="2" />
          <Button text="1" />
          <Button text="+" />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="0" />
          <Button text="." />
          <Button text="enter" />
        </Row>
      </BottomSection>
    </Container>
  );
}
