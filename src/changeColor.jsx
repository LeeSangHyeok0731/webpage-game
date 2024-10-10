import { useState, useEffect } from 'react';
import useScrollPosition from './senseScrollEvent';
import styled from 'styled-components';

const ChangeColor = styled.div`
    width:100px;
    height:100px;
    background-color: ${(props) => (props.backgroundColor ? 'tomato' : 'skyblue')};;
`

function ChangeBackgroudColor() {
    const [backgroundColor, setBackgroundColor] = useState(false);
    const scrollPosition = useScrollPosition();
    useEffect(() => {
        if (scrollPosition >= 100 && !backgroundColor) {
            setBackgroundColor(true);
        } else if (scrollPosition < 100 && backgroundColor) {
            setBackgroundColor(false);
        }
    }, [scrollPosition])

    return (
        <div>
            Scroll Position: {scrollPosition}px
            <ChangeColor backgroundColor={backgroundColor}  />
        </div>
    );
}

export default ChangeBackgroudColor;