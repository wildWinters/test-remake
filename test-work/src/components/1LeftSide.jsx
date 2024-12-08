import React, { useEffect, useRef, useState } from "react";
import "../css/1LeftSide.css";

function LeftSide1({ activateModal, setEditMode }) {
    const [timer, setTimer] = useState(new Date());
    const drawTime = useRef(null);

    useEffect(() => {
        const clearTime = setInterval(() => {
            if (drawTime.current) {
                drawTime.current.style.color = `rgba(
                    ${Math.ceil(Math.random() * 255)},
                    ${Math.ceil(Math.random() * 255)},
                    ${Math.ceil(Math.random() * 255)},
                    1
                )`;
            }
            setTimer(new Date());
        }, 1000);

        return () => clearInterval(clearTime);
    }, []);

    const formattedTime = `${timer.getHours()} : ${timer.getMinutes()} : ${timer.getSeconds()}`;

    return (
        <article className = "left-side">
            <h1 className = "timer" ref = {drawTime}>{formattedTime}</h1>
            <button 
                className = "AddUser" 
                onClick = {() => {
                    setEditMode(false);
                    activateModal();
                }}
            >
                Add User
            </button>
        </article>
    );
}

export default React.memo(LeftSide1);
