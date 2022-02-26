import React from 'react'

export default function Alert(props) {
    const capitalize = (str)=>{
        let word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.status} d-flex align-items-center" role="alert"`}>
    <div>
      <strong>{capitalize(props.alert.status)}</strong>: {props.alert.msg}
    </div>
  </div>
  )
}
