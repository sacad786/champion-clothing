import React, { Component } from 'react'
import './custom-button.scss'

export const CustomButton = ({children, ...otherProps}) => {
    return (
        <div>
            <button className="custom-button" {...otherProps}>
                {children}
            </button>
        </div>
    )
}

