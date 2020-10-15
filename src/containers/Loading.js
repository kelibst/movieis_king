import React from 'react'

const svgStyle = {
    width: '3.75em',
    transformOrigin: 'center',
    animation: 'rotate 2s linear infinite',
    position: 'absolute',
    left: '50%'
}


const circleStyle = {
    fill: 'none',
    stroke: '#f3f3f3',
    strokeWidth: '2',
    strokeDasharray: '0, 200',
    strokeDashoffset: '0',
    strokeLinecap: 'round',
    animation: 'dash 2s ease-in-out infinite'
}


const Loading = () => (
    <svg viewBox="25 25 50 50" style={svgStyle}>
      <circle cx="50" cy="50" r="20" style={circleStyle} />
    </svg>
);


export default Loading
