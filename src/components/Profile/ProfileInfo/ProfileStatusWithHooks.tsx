import React, {ChangeEvent, MouseEventHandler, useEffect, useState} from "react";

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWIthHooks = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

   useEffect(() =>{
       setStatus(props.status)
   }, [props.status])

    const activateEditMode = () => {
        debugger
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        debugger
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                </div>
            }
            {
                editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
                           value={status}/>
                </div>}
        </div>
    )
}