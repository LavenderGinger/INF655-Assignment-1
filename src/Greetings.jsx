import React from 'react';

function Greeting() {
    const inlineStyle = {
        border: '3px solid blue',
        fontSize: '10px',
    }
    return (
    <div>
        <h1>Hello, Welcome to React!</h1>
        <p style = {inlineStyle}>
            Right now the date is {new Date().toLocaleDateString()}.
        </p>
    </div>
    );
  }

export default Greeting;