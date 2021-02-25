import React from 'react'

const UserInput = (props) => {
    const style={border:'5px solid red'};
    return (
        <div>
            <input style={style} type='text' onChange={props.change} value={props.currentName}>
            </input>
        </div>
    )
}

export default UserInput


