import React from 'react'

function ErrorBox({closeBox}) {
    return (
        <div ref={closeBox} >
            <p style={{color: "red"}} >Please Enter the Mobile number</p>
        </div>
    )
}

export default ErrorBox
