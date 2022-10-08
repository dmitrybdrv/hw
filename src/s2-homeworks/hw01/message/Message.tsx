import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";


export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>

            <div className={s.imageAndText}>
                <img id={'hw1-avatar-' + props.message.id} src={props.message.user.avatar}/>

                <div className={s.text}>

                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>

                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        
                       <p>{props.message.message.text}</p>

                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}

                {/**/}
            </div>

        </div>
    )
}

export default Message
