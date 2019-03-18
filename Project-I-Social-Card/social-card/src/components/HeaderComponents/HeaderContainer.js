import React from 'react';
import './Header.css';
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";



const Header = () => {
    return (
    <div className="headerContainer">
        <ImageThumbnail />
        <div className="cardMain">
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>)
};

export default Header;