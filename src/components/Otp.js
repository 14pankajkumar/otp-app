import React, {createRef, useState} from 'react'

function Otp() {
    const ref0 = createRef();
    const ref1 = createRef();
    const ref2 = createRef();
    const ref3 = createRef();
    const ref4 = createRef();
    const ref5 = createRef();
    const [otp, setOtp] = useState("")

    return (
        <div style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', borderRadius: 5, justifyContent: 'center'}}>
            <input
                
                ref={ref0}
                maxLength="1"
                value={otp.slice(0,1)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if(e.target.value !== '' && e.target.value.length===1) {
                        setOtp(otp + e.target.value);
                        ref1.current.focus();
                    } else {
                        if (e.target.value.length>1) {
                            setOtp(e.target.value.slice(1,2) + otp.slice(1))
                            ref1.current.focus()
                        } else {
                            setOtp(otp.slice(1))
                        }
                    }
                }}
            />
            <input
                
                ref={ref1}
                maxLength="1"
                value={otp.slice(1,2)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if(e.target.value !== '' && e.target.value.length===1) {
                        setOtp(otp + e.target.value);
                        ref2.current.focus();
                    } else {
                        if (e.target.value>1) {
                            setOtp(otp.slice(0, 1) + e.target.value.slice(1,2) + otp.slice(2));
                            ref2.current.focus();
                        } else {
                            setOtp(otp.slice(0,1) + otp.slice(2))
                            ref0.current.focus()
                        }
                    }
                }}
            />
            <input
                
                ref={ref2}
                maxLength="1"
                value={otp.slice(2,3)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if(e.target.value !== '' && e.target.value.length===1) {
                        setOtp(otp + e.target.value);
                        ref3.current.focus();
                    } else {
                        if (e.target.length>1) {
                            setOtp(otp.slice(0, 2) + e.target.value.slice(1,2) + otp.slice(3));
                            ref3.current.focus();
                        } else {
                            setOtp(otp.slice(0, 2)+ otp.slice(3));
                            ref1.current.focus();
                        }
                    }
                }}
            />
            <input
                
                ref={ref3}
                maxLength="1"
                value={otp.slice(3,4)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if(setOtp(otp+(e.target.value)) !== '' && e.target.value.length===1) {
                        setOtp(otp + e.target.value);
                        ref4.current.focus();
                    } else {
                        if (e.target.value.length>1) {
                            setOtp(otp.slice(0, 3) + e.target.value.slice(1,2) + otp.slice(4));
                            ref4.current.focus();
                        } else {
                            setOtp(otp.slice(0, 3)+ otp.slice(4));
                            ref2.current.focus();
                        }
                    }
                }}
            />
            <input
                
                ref={ref4}
                maxLength="1"
                value={otp.slice(4,5)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if(e.target.value !== '' && e.target.value.length===1) {
                        setOtp(otp + e.target.value);
                        ref5.current.focus();
                    } else {
                        if (e.target.value.length>1) {
                            setOtp(otp.slice(0, 4) + e.target.value.slice(1,2) + otp.slice(5));
                            ref5.current.focus();
                        } else {
                            setOtp(otp.slice(0, 4)+ otp.slice(5));
                            ref3.current.focus();
                        }
                    }
                }}
            />
            <input
                
                ref={ref5}
                maxLength="1"
                value={otp.slice(5)}
                style={{
                    fontSize: 24, 
                    width: 38, 
                    height: 40, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifySelf: 'center', 
                    textAlign: 'center', 
                    marginRight: 5
                }}
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                }}
                onChange={(e) => {
                    if(e.target.value !== '' && e.target.value.length===1) {
                        setOtp(otp + e.target.value)
                        ref5.current.blur();
                    } else {
                        if (e.target.value.length>1) {
                            setOtp(otp.slice(0, 5) + e.target.value.slice(1,2));
                            ref5.current.blur();
                        } else {
                            setOtp(otp.slice(0, 5));
                            ref4.current.focus();
                        }
                    }
                }}
            />
        </div>
    )
}

export default Otp
