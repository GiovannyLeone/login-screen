import React, { useState } from 'react'
import "./cardProfile.modules.scss"


import loginBgTop from '../../image/background/loginBgTop.svg'
import loginBgBottom from '../../image/background/loginBgBottom.svg'

import me from '../../image/profile/me-2.png'
import instagram from '../../image/profile/Instagram_icon.png'

import Navegation from './Navegation/Navegation'


export interface CardProfileBackProps { }

function animation(animation: string) {
    return `animate__animated animate__${animation}`
}
const CardProfileBack: React.FunctionComponent<CardProfileBackProps> = props => {



    const [isAnimation, setAnimation] = useState(false);
    function ChangeURL(pLink: any) {
        setAnimation(true)
        setTimeout(() => {
            window.location.href = `${pLink}`
        }, 900);

    }

    return (
        <>
            <div id='card' className={animation(`bounceInUp ${isAnimation === true && 'animate__flipOutY' || 'animate__flipInY'}`)}>
                <img src={loginBgTop} className='svg-bg-top' />
                <img src={loginBgBottom} className='svg-bg-bottom' />

                <div className={`animate__animated`}>
                    <div className='text-card-profile'>
                        <img src={me} alt="Profile Picture" onClick={() => ChangeURL("/Profile")} />
                        <h1>Giovanny Leone</h1>
                    </div>
                    <div className='carrossel-card-profile'>
                            <Navegation />
                    </div>
                    <div className='account-card-login'>
                        <p>Do you like this aplication?</p>
                        <p>give-me a note in the linkedin <span onClick={() => ChangeURL("/Create")}>Click-me</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProfileBack