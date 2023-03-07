import React from 'react'
import Arrow from '../../image/input/arrow.png'
import { Link } from 'react-router-dom'
import "./cardCreate.modules.scss"


export interface CardCreateProps { }

const CardCreate: React.FunctionComponent<CardCreateProps> = props => {

    const arrowImage = Arrow


    return (
        <>
            <div className='text-card-create'>
                <h1>Create account</h1>
            </div>
            <div className='input-card-create'>
                <input type="text" name="username" id="username" placeholder='Username' />
                <input type="text" name="username" id="password" placeholder='Password' />
                <input type="text" name="username" id="password" placeholder='E-mail' />
                <input type="text" name="username" id="password" placeholder='Mobile' />
            </div>
            <div className='actions-card-create'>
                <h2>Create</h2>
                <button><img src={arrowImage} alt="login" /></button>
            </div>
            <div className='account-card-create'>
                <p>Or create account using social media</p>
            </div>
        </>
    )
}

export default CardCreate