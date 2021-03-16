/**
  {
   type: "SOMECONST",
  payload: {
   data
   }
  }
 */
const PRESS_NUM = "PRESS_NUM";
const ENTER = "ENTER";
const OPERATION = "OPERATION";
const CLEAR = "CLEAR";
const SWAP = "SWAP";
const TOGGLE_NEGATIVE = "TOGGLE_NEGATIVE";
//action
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});

export const operation = (op) => ({
  type: OPERATION,
  payload: op,
});

export const clear = () => ({
  type: CLEAR,
});

export const swap = () => ({
  type: SWAP,
});

export const toggleNegative = (idx) => ({
  type: TOGGLE_NEGATIVE,
  payload: idx,
});
const doOperation = (x, y, op) => {
  const a = parseFloat(x);
  const b = parseFloat(y);

  if (op === "pow") {
    return Math.pow(a, b); //alterantively ${(b ** a)}
  } else if (op === "+") {
    return b + a;
  } else if (op === "-") {
    return b - a;
  } else if (op === "X") {
    return b * a;
  } else if (op === "/") {
    return b / a;
  }
  return 0;
};

const switchNegative = (x) => {
  if (x.startsWith("-")) {
    return x.slice(1);
  }
  return `-${x}`;
};

//state,actions

//inputState = append || replace ||  push

const initialState = { stack: [], inputState: "replace" };
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_NEGATIVE: {
      return {
        ...state, // inputState:state.inputState now included by the spread syntax
        stack: state.stack.map((x, i) =>
          payload === i ? switchNegative(x) : x
        ),
      };
    }
    case SWAP: {
      return {
        ...state,
        stack: [state.stack[1], state.stack[0], ...state.stack.slice(2)], // retrning a new array where 2nd item becomes 1st, and 1st becomes 2nd; while i return the rest of the stack with sliced from the 3rd item
        inputState: "push",
      };
    }
    case CLEAR: {
      return initialState;
    }
    case OPERATION: {
      // const x = parseFloat(state.stack[0]);
      // const y = parseFloat(state.stack[1]);
      // {
      //   if (payload === "pow") {
      //     return {
      //       stack: [`${Math.pow(y, x)}`, ...state.stack.slice(2)], //alterantively ${(y ** x)}
      //       inputState: "push",
      //     };
      //   }
      // }
      return {
        stack: [
          `${doOperation(state.stack[0], state.stack[1], payload)}`,
          ...state.stack.slice(2),
        ],
        inputState: "push",
      };
    }
    case ENTER: {
      return {
        stack: [state.stack[0] || "0", ...state.stack],
        inputState: "replace",
      };
    }

    case PRESS_NUM: {
      if (state.inputState === "append") {
        return {
          ...state, //not necessary since we are changing all the state var
          stack: [(state.stack[0] || "0") + payload, ...state.stack.slice(1)],
          inputState: "append",
        };
        // `${state}${payload}`; //return state + payload
      } else if (state.inputState === "replace") {
        return {
          ...state, //not necessary since we are changing all the state var
          stack: [payload, ...state.stack.slice(1)],
          inputState: "append",
        };
        // `${state}${payload}`; //return state + payload
      } else if (state.inputState === "push") {
        return {
          ...state, //not necessary since we are changing all the state var
          stack: [payload, ...state.stack],
          inputState: "append",
        };
      }
    }

    default:
      return state;
  }
};
