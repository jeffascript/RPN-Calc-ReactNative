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
} from "./Main.styles";
import { connect } from "react-redux";
import { pressNum, enter, operation } from "./modules";
import { bindActionCreators } from "redux";

//  const mapDispatchToProps = (dispatch) => {
//    return{
//      pressNumWithDispatch: () => dispatch(pressNum())
//    }, dispatch
//  };

function Main({
  calculatorState: { stack, inputState },
  pressNumWithDispatch,
  enterAction,
  operationAction,
}) {
  // const state = useSelector((state) => state);

  console.log({ stack, inputState });
  return (
    <Container>
      <TopSection>
        {/* <Title color="palevioletred">Expo with 💅 Styled Components</Title> */}
        <Number>{stack[2] || 0}</Number>
        <Number>{stack[1] || 0}</Number>
        <Number functionality={inputState}>{stack[0] || 0}</Number>
      </TopSection>
      <BottomSection>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="clear" />
          <Button text="pow" onPress={operationAction} />
          <Button text="swap" />
          <Button text="/" onPress={operationAction} />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="9" onPress={pressNumWithDispatch} />
          <Button text="8" onPress={pressNumWithDispatch} />
          <Button text="7" onPress={pressNumWithDispatch} />
          <Button text="X" onPress={operationAction} />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="6" onPress={pressNumWithDispatch} />
          <Button text="5" onPress={pressNumWithDispatch} />
          <Button text="4" onPress={pressNumWithDispatch} />
          <Button text="-" onPress={operationAction} />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="3" onPress={pressNumWithDispatch} />
          <Button text="2" onPress={pressNumWithDispatch} />
          <Button text="1" onPress={pressNumWithDispatch} />
          <Button text="+" onPress={operationAction} />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="0" onPress={pressNumWithDispatch} />
          <Button text="." onPress={pressNumWithDispatch} />
          <Button text="enter" special={true} onPress={enterAction} />
        </Row>
      </BottomSection>
    </Container>
  );
}
// export default Main;
export default connect(
  (state) => ({ calculatorState: state }),
  (dispatch) =>
    bindActionCreators(
      {
        pressNumWithDispatch: pressNum,
        enterAction: enter,
        operationAction: operation,
      },
      dispatch
    )
)(Main);
