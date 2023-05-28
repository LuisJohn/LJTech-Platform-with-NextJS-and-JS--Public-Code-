import React from 'react'

const RegisterPop = (props) => {

    let modalOpen = props.modalOpen;
  return (

    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box relative">

            <label 
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={()=>{props.setModalOpen(!modalOpen)}} 
            >✕</label>
            {props.children}
        </div>
    </div>
    
  )
}

export default RegisterPop