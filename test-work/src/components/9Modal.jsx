import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "../css/9Modal.css";

export function ModalUser9({ 
    onClose, 
    setUserHTML, 
    timeCreateUser, 
    editMode, 
    editingUserIndex, 
    setUtlImg, 
    urlImg 
}) {
    const in1 = useRef(null);
    const in2 = useRef(null);
    const in3 = useRef(null);
    const in4 = useRef(null);
    const inputFile = useRef(null);

    const handleFileChange = () => {
        const file = inputFile.current.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                setUtlImg(reader.result);
            };
        }
    };

    const closeModalAndAddUsersCard = () => {
        if ([in1.current.value, in2.current.value, in3.current.value, in4.current.value].every(field => field === "")) {
            alert("Заповніть хоча б одне поле для редагування.");
            return;
        }

        setUserHTML(prev => {
            const updatedUsers = [...prev];
            if (editMode && editingUserIndex !== null) {
                const user = updatedUsers[editingUserIndex];
                updatedUsers[editingUserIndex] = {
                    ...user,
                    name: in1.current.value || user.name,
                    surName: in2.current.value || user.surName,
                    age: in3.current.value || user.age,
                    email: in4.current.value || user.email,
                    img: urlImg || user.img,
                };
            } else {
                updatedUsers.push({
                    name: in1.current.value,
                    surName: in2.current.value,
                    age: in3.current.value,
                    email: in4.current.value,
                    img: urlImg || "/img/profile.png",
                    publlicationTime: new Date(),
                    timeCreateUser: timeCreateUser,
                });
            }
            return updatedUsers;
        });

        onClose();
    };

    return ReactDOM.createPortal(
        <div className = "dark_mode">
            <img
                className = "exit"
                src = "/img/exitus.png"
                alt = "exit"
                onClick = {onClose}
            />
            <div className = "register_form">
                <h1 className = "h1_add_user">{editMode ? "Edit User Info" : "Add info about yourself"}</h1>
                <img 
                    src = {urlImg || "/img/profile.png"} 
                    alt = "user" 
                    className = "user-img"
                />
                <input ref = {in1} type = "text" placeholder = "Name" />
                <input ref = {in2} type ="text" placeholder = "Surname" />
                <input ref = {in3} type = "number" min = {0} placeholder = "Enter your age" />
                <input ref = {in4} type = "email" placeholder = "Enter your email" />
                <input
                    ref = {inputFile}
                    type = "file"
                    accept = "image/*"
                    onChange = {handleFileChange}
                />
                <button className = "set-Channges" onClick = {closeModalAndAddUsersCard}>
                    {editMode ? "Update User" : "Set User Card"}
                </button>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
}
