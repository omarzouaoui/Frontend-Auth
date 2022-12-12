import React from 'react'
import {Header} from "../header/Header.js"
import {Footer} from "../footer/Footer.js"

export const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='--pad' style={{minHeight: "80vh"}} >
        {children}
    </div>
    <Footer/>
    </>
  )
}
