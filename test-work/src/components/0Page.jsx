import React, { useState, useCallback, useMemo } from "react";
import LeftSide1 from "./1LeftSide";
import { ModalUser9 } from "./9Modal";
import { RightBlock } from "./2RightBlock";
import "../css/0Page.css";

export function Page() {
    const [urlImg, setUtlImg] = useState(null);
    const [activatePortal, setActivatePortal] = useState(false);
    const [timeCreateUser, setTimeCreateUser] = useState(null);
    const [userHTML, setUserHTML] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editingUserIndex, setEditingUserIndex] = useState(null);

    const setUserPortal = useCallback((index = null) => {
        setActivatePortal(true);
        setTimeCreateUser(new Date());
        setEditingUserIndex(index);
    }, []);

    const closeModal = useCallback(() => {
        setActivatePortal(false);
        setEditingUserIndex(null);
    }, []);

    const memoizedUserHTML = useMemo(() => userHTML, [userHTML]);

    return (
        <>
            <LeftSide1 
                setEditMode = {setEditMode} 
                activateModal = {setUserPortal} 
            />
            <RightBlock
                editMode = {editMode}
                setEditMode = {setEditMode}
                userHTML = {memoizedUserHTML}
                setUserHTML = {setUserHTML}
                setUserPortal = {setUserPortal}
            />
            {activatePortal && (
                <ModalUser9
                    urlImg = {urlImg}
                    setUtlImg = {setUtlImg}
                    onClose = {closeModal}
                    setUserHTML = {setUserHTML}
                    timeCreateUser = {timeCreateUser}
                    editMode = {editMode}
                    editingUserIndex = {editingUserIndex}
                />
            )}
        </>
    );
}
