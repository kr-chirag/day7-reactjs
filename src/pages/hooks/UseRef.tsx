import { useEffect, useRef, useState } from "react";

function UseRef() {
    const renderCount = useRef<number>(0);
    const inputElement = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    }, [count]);

    function increment(): void {
        setCount(count + 1);
    }

    function decrement(): void {
        setCount(count - 1);
    }

    return (
        <>
            <h3>UseRef</h3>
            <h3>count: {count}</h3>
            <div>
                <button onClick={increment}>++</button>{" "}
                <button onClick={decrement}>--</button>
            </div>
            <h3>render count: {renderCount.current}</h3>
            <div>
                <input type="text" ref={inputElement} />
            </div>
            <button onClick={() => inputElement.current?.focus()}>
                focus on input
            </button>
        </>
    );
}

export default UseRef;
