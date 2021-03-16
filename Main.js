import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import Button from "./Button";
// import styled from "styled-components/native";
import {
  Container,
  TopSection,
  BottomSection,
  // Title,
  Number,
  Row,
  TouchableOpacityContainer,
} from "./Main.styles";
import { connect } from "react-redux";
import {
  pressNum,
  enter,
  operation,
  clear,
  swap,
  toggleNegative,
} from "./modules";
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
  clearAction,
  swapAction,
  toggleNegativeAction,
}) {
  // const state = useSelector((state) => state);
  const AnimatedRef = useRef();
  console.log({ stack, inputState });
  return (
    <Container>
      <TopSection>
        {/* // it will now search on the stack based on the 2th position of the state stack  cf. toggleNegativeAction(2) and the map func. for TOGGLE_NEGATIVE*/}
        <TouchableOpacityContainer onPress={() => toggleNegativeAction(2)}>
          <Number>{stack[2] || 0}</Number>
        </TouchableOpacityContainer>
        <TouchableOpacityContainer onPress={() => toggleNegativeAction(1)}>
          <Number>{stack[1] || 0}</Number>
        </TouchableOpacityContainer>
        <TouchableOpacityContainer onPress={() => toggleNegativeAction(0)}>
          <Number functionality={inputState} ref={AnimatedRef}>
            {stack[0] || 0}
          </Number>
        </TouchableOpacityContainer>
      </TopSection>
      <BottomSection>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="clear" onPress={clearAction} />
          <Button
            text="pow"
            // onPress={operationAction}
            onPress={(x) => {
              operationAction(x);
              AnimatedRef.current.slideInDown(400);
            }}
          />
          <Button text="swap" onPress={swapAction} />
          <Button
            text="/"
            onPress={(x) => {
              operationAction(x);
              AnimatedRef.current.slideInDown(400);
            }}
          />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="9" onPress={pressNumWithDispatch} />
          <Button text="8" onPress={pressNumWithDispatch} />
          <Button text="7" onPress={pressNumWithDispatch} />
          <Button
            text="X"
            onPress={(x) => {
              operationAction(x);
              AnimatedRef.current.slideInDown(400);
            }}
          />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="6" onPress={pressNumWithDispatch} />
          <Button text="5" onPress={pressNumWithDispatch} />
          <Button text="4" onPress={pressNumWithDispatch} />
          <Button
            text="-"
            onPress={(x) => {
              operationAction(x);
              AnimatedRef.current.slideInDown(400);
            }}
          />
        </Row>
        <Row>
          {/* <Title color="chocolate">iOS • Android • web</Title> */}
          <Button text="3" onPress={pressNumWithDispatch} />
          <Button text="2" onPress={pressNumWithDispatch} />
          <Button text="1" onPress={pressNumWithDispatch} />
          <Button
            text="+"
            onPress={(x) => {
              operationAction(x);
              AnimatedRef.current.slideInDown(400);
            }}
          />
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
        clearAction: clear,
        swapAction: swap,
        toggleNegativeAction: toggleNegative,
      },
      dispatch
    )
)(Main);
