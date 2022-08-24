import React from "react";
import s from "./../Dialogs.module.css"


type MessagePropsType = {
    message:string
}


export const Message = (props:MessagePropsType) => {

    let reactRef = React.createRef<HTMLTextAreaElement>()

    let addMessage =() => {
        let message = reactRef.current?.value
            alert(message)
    }

    return(
      <div className={s.message}>
          {props.message}

          <div>
              <textarea ref={reactRef}></textarea>
              <button onClick={addMessage}>addMessage</button>
          </div>

      </div>
  )
}
