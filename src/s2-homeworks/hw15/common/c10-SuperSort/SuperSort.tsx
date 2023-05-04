import React, {memo} from 'react'

// добавить в проект иконки и импортировать
const downIcon = require('../down.png')
const noneIcon = require('../none.png')
const upIcon = require('../up.png')

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down;
    } else if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return up;
    }
}


const SuperSort: React.FC<SuperSortPropsType> = memo(({sort, value, onChange, id = 'hw15',}) => {


    const up = '0' + value
    const down = '1' + value



    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >

            <img id={id + '-icon-' + sort} src={icon} style={{width: '15px'}}/>

        </span>
    )
})

export default SuperSort
