import React, {useState} from 'react';

const Input = props =>{

    return(
        <>
            {isNaN(props.input)?
                <h1 style={{backgroundColor: props.color1, color: props.color2}}>The word is: {props.input}</h1>:
                <h1>The Number is: {props.input}</h1>
            }
        </>
    )
}
export default Input;