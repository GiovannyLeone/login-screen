import React, { useState } from 'react'
import Arrow from '../../image/input/arrow.svg'
import { Link } from 'react-router-dom'
import "./cardCreate.modules.scss"

import createBgTop from '../../image/background/createBgTop.svg'
import createBgBottom from '../../image/background/createBgBottom.svg'


export interface CardCreateProps { }

const CardCreate: React.FunctionComponent<CardCreateProps> = props => {

    const arrowImage = Arrow

    function animation(animation: string) {
        return `animate__animated animate__${animation}`
    }


    const [isAnimation, setAnimation] = useState(false);
    function ChangeURL(pLink: any) {
        setAnimation(true)
        setTimeout(() => {
            window.location.href = `${pLink}`
        }, 850);
    }

    return (
        <>
            <div id='card' className={animation(`bounceInUp ${isAnimation === true && 'animate__bounceOut' || 'animate__bounceInUp'}`)}>
            <img src={createBgTop} className='svg-bg-top' />
            <img src={createBgBottom} className='svg-bg-bottom' />
            
                <div className='text-card-create'>
                    <h1>Create account</h1>
                </div>
                <div className='input-card-create'>
                    <input type="text" name="username" id="username" placeholder='Username' />
                    <input type="text" name="username" id="password" placeholder='Password' />
                    <input type="text" name="username" id="email" placeholder='E-mail' />
                    <input type="text" name="username" id="mobile" placeholder='Mobile' />
                </div>
                <div className='actions-card-create'>
                    <h2>Create</h2>
                    <button><img src={arrowImage} alt="login" /></button>
                </div>
                <div className='account-card-create'>
                    <p>You have an account? <span onClick={() => ChangeURL("/")}>Login</span></p>
                    <p><br />Or create account using social media</p>
                </div>
            </div>
        </>
    )
}

export default CardCreate