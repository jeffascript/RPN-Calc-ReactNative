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

//state,actions

//inputState = append || replace ||  push

export const reducer = (
  state = { stack: [], inputState: "replace" },
  { type, payload }
) => {
  switch (type) {
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
