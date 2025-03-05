import { useReducer } from "react";

interface numStateInterface {
    num: number;
}
enum Actions {
    "Increment" = "Increment",
    "Decrement" = "Decrement",
    "Multipy" = "Multipy",
    "Divide" = "Divide",
    "Power" = "Power",
}

type ActionType =
    | { type: Actions.Increment | Actions.Decrement }
    | {
          type: Actions.Divide | Actions.Multipy | Actions.Power;
          payload: {
              byNum: number;
          };
      };

function numReduce(
    state: numStateInterface,
    action: ActionType
): numStateInterface {
    switch (action.type) {
        case Actions.Increment:
            return { num: state.num + 1 };
        case Actions.Decrement:
            return { num: state.num - 1 };
        case Actions.Multipy:
            return { num: state.num * action.payload.byNum };
        case Actions.Divide:
            return { num: state.num / action.payload.byNum };
        case Actions.Power:
            return { num: state.num ** action.payload.byNum };
        default:
            console.error("Invalid Action of Reducer");
            return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(numReduce, { num: 0 });

    return (
        <>
            <div>UseReducer</div>
            <h3>{state.num}</h3>
            <button onClick={() => dispatch({ type: Actions.Increment })}>
                ++
            </button>
            <button onClick={() => dispatch({ type: Actions.Decrement })}>
                --
            </button>
            <button
                onClick={() =>
                    dispatch({ type: Actions.Multipy, payload: { byNum: 2 } })
                }
            >
                *2
            </button>
            <button
                onClick={() =>
                    dispatch({ type: Actions.Divide, payload: { byNum: 2 } })
                }
            >
                /2
            </button>
            <button
                onClick={() =>
                    dispatch({ type: Actions.Power, payload: { byNum: 2 } })
                }
            >
                ^2
            </button>
        </>
    );
}

export default UseReducer;
