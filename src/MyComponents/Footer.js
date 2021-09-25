import React from 'react'


export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "800vh",
        width: "100%",
        paddingLeft: "15px"
    }
    return (
        
       

    <footer className = "bg-dark text-light py-3" style = {footerStyle} >
      <p>© 2021 Buynsellprojects.com. All rights reserved.</p>
      <p>Built with ☕ by Vikas Singh</p>
        </footer>
    )
}
