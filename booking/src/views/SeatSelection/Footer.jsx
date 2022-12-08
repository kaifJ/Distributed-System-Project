import React from 'react';
import { FooterContainerStyle, FooterColorBoxStyle } from './Footer.style';

const Footer = () => {
    return (
        <div style={FooterContainerStyle}>
            <div style={{...FooterColorBoxStyle.container, backgroundColor: "#FF7F7F"}}></div>
            <div>Sold</div>
            <div style={{...FooterColorBoxStyle.container, backgroundColor: "#90EE90"}}></div>
            <div>Available</div>
            <div style={{...FooterColorBoxStyle.container, backgroundColor: "#f39e32"}}></div>
            <div>Selected</div>
        </div>
    )
}

export default Footer