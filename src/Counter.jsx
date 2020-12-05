import { useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);
    const increment = (value) => {
        setCount(count+value)
    }

    return (
<div>
    <button onClick={ () => increment(1)}>{count} Pouet</button>
    <button onClick={ () => increment(10)}>+10</button>
</div>
    )
}

export default Counter;