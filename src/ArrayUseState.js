import { useState } from "react";

function ArrayUseState()
{
    const [current , setcurrent] = useState([]);
    function handleArray()
    {
        setcurrent([...current, 
                {
                    id : current.length,
                    value : Math.floor(Math.random()*100)
                }])
    }
    return(
        <>
            <ol>
                {current.map((array) => {
                    return <li key={array.id}>{array.value}</li>
                })}
            </ol>
            <button onClick={handleArray}>Click</button>
        </>
    )
}

export default ArrayUseState;