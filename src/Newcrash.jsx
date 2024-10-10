import React, { useState, useEffect } from 'react';

const Ball = ({ x, y, radius }) => {
  const ballStyle = {
    position: 'absolute',
    left: `${x - radius}px`,
    top: `${y - radius}px`,
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    borderRadius: '50%',
    backgroundColor: 'blue',
  };
  return <div style={ballStyle}></div>;
};

const CrashCircle = () => {
  const [ball1, setBall1] = useState({ x: 100, y: 100, radius: 20, vx: 2, vy: 2 });
  const [ball2, setBall2] = useState({ x: 200, y: 200, radius: 20, vx: -2, vy: -2 });

  useEffect(() => {
    const updatePositions = () => {
      // Ball 1 위치 업데이트
      setBall1(prev => ({
        ...prev,
        x: prev.x + prev.vx,
        y: prev.y + prev.vy,
      }));

      // Ball 2 위치 업데이트
      setBall2(prev => ({
        ...prev,
        x: prev.x + prev.vx,
        y: prev.y + prev.vy,
      }));

      // 두 공이 충돌하는지 체크
      const dx = ball1.x - ball2.x;
      const dy = ball1.y - ball2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance <= ball1.radius + ball2.radius) {
        console.log('충돌 발생!');
      }
    };

    const intervalId = setInterval(updatePositions, 16); // 약 60 FPS
    return () => clearInterval(intervalId); // 컴포넌트가 언마운트될 때 인터벌 클리어
  }, [ball1, ball2]); // 공의 상태가 변할 때마다 실행

  return (
    <div>
      <Ball x={ball1.x} y={ball1.y} radius={ball1.radius} />
      <Ball x={ball2.x} y={ball2.y} radius={ball2.radius} />
    </div>
  );
};

export default CrashCircle;
