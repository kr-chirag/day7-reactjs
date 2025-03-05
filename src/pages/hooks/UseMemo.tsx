import { useMemo, useState } from "react";

function UseMemo() {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    function calc(num: number): number {
        console.log("calculating sum upto", num);
        let sum = 0;
        for (let i = 1; i <= num; i++) sum += i;
        return sum;
    }

    const sumA = useMemo(() => calc(a), [a]);
    const sumB = useMemo(() => calc(b), [b]);

    return (
        <>
            <h3>UseMemo</h3>
            <h2>count a: {a}</h2>
            <h2>
                {/* sum upto {a} is {calc(a)} */}
                sum upto {a} is {sumA}
            </h2>
            <button onClick={() => setA(a + 1)}>a++</button>
            <h2>count b: {b}</h2>
            <h2>
                {/* sum upto {b} is {calc(b)} */}
                sum upto {b} is {sumB}
            </h2>
            <button onClick={() => setB(b + 1)}>b++</button>
        </>
    );
}

export default UseMemo;
