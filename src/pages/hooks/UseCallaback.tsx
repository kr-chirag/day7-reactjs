import { memo, useCallback, useState } from "react";

function RenderArray({ arr, idk }: { arr: string[]; idk: () => void }) {
    console.log("rendering array");
    idk();
    return (
        <>
            {arr.map((str, idx) => (
                <h2 key={idx}>{str}</h2>
            ))}
        </>
    );
}

const RenderArray2 = memo(RenderArray);

function UseCallaback() {
    const [arr] = useState<string[]>(["one", "two", "three"]);
    const [count, setCount] = useState<number>(0);
    function idk() {
        console.log("idk...");
    }
    const idk2 = useCallback(idk, []);
    return (
        <>
            <h3>UseCallaback</h3>
            <h3>
                {count} <button onClick={() => setCount(count + 1)}>++</button>
            </h3>
            <RenderArray2 arr={arr} idk={idk2} />
        </>
    );
}

export default UseCallaback;
