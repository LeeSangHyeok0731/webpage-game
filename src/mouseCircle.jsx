import useMousePosition from "./mouseMoveEvent";
import styled from "styled-components";
import { useEffect } from "react";

const Circle = styled.div`
    background-color: red;
    width:100px;
    height:100px;
    border-radius:50%;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index:-1;
`

function MouseCircle() {
    const { x, y } = useMousePosition();

    useEffect(() => {
       
    }, [x, y])

    return(
        <>
            <Circle style={{ top: `${y}px`, left: `${x}px` }} />
            <p>
                x : {x}, y : {y}
            </p>
        </>
    )
}

export default MouseCircle;