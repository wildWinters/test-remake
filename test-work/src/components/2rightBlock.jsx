import React, { useCallback } from "react";
import "../css/2RightBlock.css";

export function deleteUsers(indexToDelete, setUserHTML) {
    setUserHTML(prevUserHTML =>
        prevUserHTML.filter((_, index) => index !== indexToDelete)
    );
}

export const RightBlock = React.memo(({ 
    userHTML, 
    setUserPortal, 
    setUserHTML, 
    setEditMode, 
    editMode 
}) => {
    const handleDelete = useCallback((index) => {
        deleteUsers(index, setUserHTML);
    }, [setUserHTML]);

    return (
        <article className = "article article-users">
            <h1 className = "list-of-users">Users:</h1>
            {userHTML.map((value, index) => {
                const publicDate = new Date(value.publlicationTime);
                const createDate = new Date(value.timeCreateUser);

                return (
                    <div className = "user-container" key = {index}>
                        <img
                            className = "user-img"
                            src = {value.img || "/img/profile.png"}
                            alt = "user-img"
                        />
                        <div className = "users-corner">
                            <p className = "name-surname">
                                {`${value.name} ${value.surName} ${value.age} years`}
                            </p>
                            <p className = "email">Your Email: {value.email}</p>
                            <p className = "createUserTime">
                                Create User time: {createDate.toLocaleString()}
                            </p>
                            <p className = "publicationTime">
                                Publication time: {publicDate.toLocaleString()}
                            </p>
                            <div className = "options">
                                <button 
                                    className = "delete button" 
                                    onClick = {() => handleDelete(index)}
                                >
                                    Delete
                                </button>
                                <button 
                                    id = {index} 
                                    className = "edit button" 
                                    onClick = {() => { 
                                        setEditMode(true);
                                        setUserPortal(index);    
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </article>
    );
});
