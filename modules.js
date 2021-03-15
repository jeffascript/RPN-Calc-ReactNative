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

//action
export const pressNum = (n) => ({
  type: PRESS_NUM,
  payload: n,
});

export const enter = () => ({
  type: ENTER,
});

//state,actions

//inputState = append || replace ||  push

export const reducer = (
  state = { stack: [], inputState: "replace" },
  { type, payload }
) => {
  switch (type) {
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
      }
    }

    default:
      return state;
  }
};
