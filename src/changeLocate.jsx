import styled from "styled-components";
import useMousePosition from "./mouseMoveEvent";
import { useEffect, useState } from "react";
import Timer from "./Timer";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.color ? "purple" : "blue")};
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  transform: translate(-50%, -50%);
`;

function ChangeCircleLocate() {
  const [fixedX, setFixedX] = useState(Math.floor(Math.random() * (1080 - 1 + 1)) + 1); // 고정된 공의 Y 좌표
  const [fixedY, setFixedY] = useState(Math.floor(Math.random() * (1920 - 1 + 1)) + 1); // 고정된 공의 Y 좌표
  const [count, setCount] = useState(0);

  const [isTimerEnded, setIsTimerEnded] = useState(true);

  const { x, y } = useMousePosition();
  const [isColliding, setIsColliding] = useState(false);

  const fixedCircle = { x: fixedX, y: fixedY, radius: 50 }; 

  const detectCollision = (circle1, circle2) => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
  };

  useEffect(() => {
    if(isTimerEnded){
        const collided = detectCollision(fixedCircle, {x:x, y:y, radius:50});
        setIsColliding(collided);

        if (collided) {
        console.log("충돌 발생!");
        setFixedX(Math.floor(Math.random() * (1920 - 1 + 1)) + 1)
        setFixedY(Math.floor(Math.random() * (1080 - 1 + 1)) + 1)
        setCount(count + 1);
        }
    }
  }, [fixedX, fixedY, x, y]);

  const handleTimerEnd = () => {
    setIsTimerEnded(false);
  };

  return (
    <>
        <h1>{count}</h1>
        <div>
            x: {fixedX} y: {fixedY}
        </div>
        <Circle top={fixedY} left={fixedX} color={isColliding}/>
        <Timer  onTimerEnd={handleTimerEnd} />
    </>
  );
}

export default ChangeCircleLocate;
