import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from "@material-ui/core"

function Header() {
    return (
        <div className="header">
            <img
                className="header_icon"
                src="https://image.myvr.com/fb7f73ee2a52e6f7/db2a8a28ac9d094e/airbnb-new-logo-2014.png"
                alt=""
            />

            <div className="header_center">
                <input type="text" />
                <SearchIcon></SearchIcon>
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
