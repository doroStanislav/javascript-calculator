import React from "react";

const Button = ({value, onClick}) => {
    return (
        <button id={value === '=' ? "equals" : value} onClick={onClick(value)}>
            { value }
        </button>
    );
}

export default Button;