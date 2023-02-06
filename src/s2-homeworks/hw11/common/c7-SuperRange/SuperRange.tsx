import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {


    return (
        <Slider
            sx={{color: 'green', width: '300px', height: '5px'/*стили для слайдера  пишет студент*/}}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.defaultValue}
            onChange={props.onChange}
            min={0}
            max={100}
            className={props.className}
        />
    )
}

export default SuperRange
