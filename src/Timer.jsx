import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled(Link)`
    background-color: white;
    padding: 10px 20px; 
    border: none; 
    cursor: pointer;
    text-decoration: none;
    border-radius: 5px;
    color: black;
    font-size: 18px; 
    z-index:2;

    &:hover {
        background-color: lightgray; 
    } 
`

const Timer = ({ onTimerEnd }) => {
  const [seconds, setSeconds] = useState(0);
  const [state, setState] = useState("")
  const [end, setEnd] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds >= 59) {
          clearInterval(intervalId);
          setState("타임 아웃!")
          setEnd(false);
          onTimerEnd(); // 타이머 종료 시 onTimerEnd 호출
          return 60;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>타이머</h1>
      <p>{seconds} 초</p>
      <p>{state}</p>
      <div>{end ? (
            null
        ) : (
            <BackButton to="/">
                되돌아가기
            </BackButton>
        )}
        </div>
    </div>
  );
};

export default Timer;
