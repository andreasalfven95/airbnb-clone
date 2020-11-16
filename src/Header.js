import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__icon"
                    src="https://image.myvr.com/fb7f73ee2a52e6f7/db2a8a28ac9d094e/airbnb-new-logo-2014.png"
                    alt=""
                />
            </Link>

            <div className="header__center">
                <input type="text" />
                <SearchIcon></SearchIcon>
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
