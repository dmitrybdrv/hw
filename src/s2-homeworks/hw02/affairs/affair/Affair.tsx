import React from 'react'
import {AffairType} from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}


function Affair(props: AffairPropsType) {

    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }

    const nameClass = s.name + ' ' + s2[props.affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[props.affair.priority]
    const affairClass = s.affair + ' ' + s2[props.affair.priority]


    return (
        <div id={'hw2-affair-' + props.affair._id} className={affairClass}>

            <div id={'hw2-name-' + props.affair.name} className={nameClass}>{props.affair.name}</div>

            <div id={'hw2-priority-' + props.affair.priority} hidden>{props.affair.priority}</div>

            <button id={'hw2-button-delete-' + props.affair._id} className={buttonClass}
                    onClick={() => deleteCallback(props.affair._id)}> x
            </button>

        </div>
    )
}

export default Affair
