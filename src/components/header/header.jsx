import React, { Component } from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

export const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to={"/"}>
                <Logo className="" />
            </Link>
            <div className="options">
                <Link className="option" to={"/shop"}>
                    SHOP
                </Link>
                <Link className="option" to={"/shop"}>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}


