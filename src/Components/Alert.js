import React from 'react'
import { useLocation } from 'react-router-dom';

function Alert(props) {
    const capitalize = (word)=>{
        if(word==='danger'){
            word="Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    const location = useLocation()
    if(location.pathname!== "/contact" && props.alert!==null){
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )}
    else{
        return(
            <div></div>
        )
    }
}

export default Alert