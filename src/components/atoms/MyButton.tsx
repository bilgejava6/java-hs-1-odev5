import React from 'react'

interface IBtnProps{
    type: string,
    value: string
}
function MyButton(props:IBtnProps) {
  const Btn = ()=>{
    switch (props.type) {
        case 'btn1': return(
            <button className="btn btn-success">{props.value}</button>
        );
        case 'btn2': return(
            <button className="btn btn-primary" style={{borderRadius:'50%'}}>{props.value}</button>
        );
        case 'btn3': return(
            <button className="btn btn-outline-danger" style={{paddingLeft:'20px', paddingRight: '20px'}}>
                <i className="fa-solid fa-exclamation"></i>
            </button>
        );
        default: return(<></>);
    }
  }  
  return (Btn())
}

export default MyButton;