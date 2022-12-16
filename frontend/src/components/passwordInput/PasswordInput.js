import React, { useState } from 'react'
import "./PasswordInput.scss"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"

export const PasswordInput = ({ placeholder, value, onChange, onPaste, name }) => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

  return (
    <div className='password' >
        <input 
        type={ showPassword ? "text" : "password" } 
        placeholder={placeholder} 
        required 
        name={name}
        value={value} 
        onChange={onChange}
        onPaste={onPaste}
        />
        <div className="icon" onClick={togglePassword}>
            {showPassword ? (
            <AiOutlineEyeInvisible size={20} />
            ) : (
            <AiOutlineEye size={20} />
            )}
</div>
     </div>
  )
}
