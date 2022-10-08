import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/* +
* 3 - в файле Message.tsx отобразить приходящие данные +
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx +
* 5 - сделать стили в соответствии с дизайном +
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number,
    user: {
        avatar: string,
        name: string,
    },
    message: {
        text: string,
        time: string,
    }
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Brad',  // можно менять
    },
    message: {
        text: 'William Bradley Pitt (born December 18, 1963) is an American actor and film producer. ' +
            'He is the recipient of various accolades, including two Academy Awards, a British Academy Film Award, two Golden Globe Awards, and a Primetime Emmy Award.', // можно менять
        time: '23:59', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: 'https://play-lh.googleusercontent.com/cxhKu1DcaMtaCRtZZMwnpkQ-BioeAwp2f_qjfSte3Dwu3bCzuCCsQjbOtyzchdby5A=s192-rw', // можно менять
        name: 'Angelina', // можно менять
    },
    message: {
        text: 'Tекст друга.....', // можно менять
        time: '11:14', // можно менять
    },
}


const HW1 = () => {

    return (
        <div id={'hw1'}>

            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
