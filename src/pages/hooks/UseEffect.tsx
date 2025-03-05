import { useEffect, useState } from "react";

function UseEffect() {
    const [count, setCount] = useState<number>(0);
    useEffect(() => {
        alert("Welcome to use effect");
        const timer = setInterval(() => alert("10 seconds passed"), 10000);
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        console.log("count incremented to:", count);
    }, [count]);
    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setCount(count + 1);
    }
    return (
        <>
            <h2>UseEffect</h2>
            <h2>{count}</h2>
            <button onClick={handleClick}>++</button>
        </>
    );
}

export default UseEffect;
