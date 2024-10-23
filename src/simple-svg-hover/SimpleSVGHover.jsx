import gsap from 'gsap';
import './simplesvg.css';
import { useState } from "react";

const SimpleSVGHover = () => {
  const [activeShape, setActiveShape] = useState('');
  const [animatingShape, setAnimatingShape] = useState('');

  const handleMouseEnter = (e) => {
    const shapeId = e?.target?.getAttribute('id');
    if (shapeId !== activeShape) {
      console.log("Updating active shape to:", shapeId);
      setActiveShape(shapeId);
    }
  };  
  
  const handleMouseLeave = () => {
    setActiveShape('');
  };


  const handleClick = (e) => {
    const shapeId = e?.target?.getAttribute('id');
    if (animatingShape !== shapeId) {
      console.log("Handling click and animating shape: ", shapeId);
      const animation = gsap.timeline();
      animation.to(`#${shapeId}`, {
        onStart: () => setAnimatingShape(shapeId),
        x: (Math.random() > 0.5 ? -1 : 1) * 100000 * Math.random(),
        y: (Math.random() > 0.5 ? -1 : 1) * 100000 * Math.random(),
        duration: 1,
        ease: "expo.out",
      });
      animation.to(`#${shapeId}`, {
        x: 0,
        y: 0,
        duration: 0.2,
        onComplete: () => setAnimatingShape(''),
      });
    }
  }

  return (
    <div className="wrapper">
      {activeShape ? <h1>This is {activeShape}!</h1> : <h1>Hover over a shape</h1>}
      <svg className="svgWrapper" width="360" height="321" viewBox="0 0 360 321" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="shape-group">
          <rect 
            id="rectangle-1"
            onMouseEnter={handleMouseEnter}  
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            y="113" 
            width="202" 
            height="202"
            fill="#D9D9D9"
          />
          <path 
            id="triangle-1"          
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            d="M202 5L338.832 242H65.168L202 5Z"
            fill="#856BC1"
          />
          <circle 
            id="circle-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            cx="107"
            cy="107"
            r="107"
            fill="#6BC186"
          />
        </g>
      </svg>
      {animatingShape ? <h1>Wow, look at {animatingShape} go!</h1> : <h1>Try clicking a shape to make it move</h1>}
    </div>
  );
};

export default SimpleSVGHover;