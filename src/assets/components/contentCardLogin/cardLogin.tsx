import React, { useState } from 'react'
import Arrow from '../../image/input/arrow.png'
import { Link } from 'react-router-dom'
import "./cardlogin.modules.scss"


export interface CardLoginProps { }

const CardLogin: React.FunctionComponent<CardLoginProps> = props => {


    const [username, setUsername] = useState(String)
    const [password, setPassword] = useState(String)
    const [success, setSuccess] = useState(false)

    const arrowImage = Arrow

    const onChangeUsername = (e: any) => {
        setUsername(e.target.value)
    }

    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const setDataLogin = async (e: any) => {
        e.preventDefault()

        if (username !== "" && password !== "" && username.length > 3 && password.length > 3) {
            const url = "https://api.com.br"
            const data = JSON.stringify({
                username: username,
                password: password
            })

            console.log(data);

            /*             
            await fetch(url, {
                            method: 'POST',
                            mode: 'no-cors',
                            headers: {
                                Accept: 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Content-type': 'application/json'
                            },
                            body: data
                
                        }).then(function reqDone(res: any) {
                            console.log(res);
                            if (res.error !== undefined) {
                                return false
                            }
                            if (res.loginSuccess !== undefined) {
                                console.log(username, password);
                                return false
                            }
                
                            setSuccess(true)
                        }) 
                        
                        */
        } else {
            alert('😢')
        }
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
        <div className={`'animate__animated' ${isAnimation === true && 'animate__bounceOut' || 'animate__bounceInUp' }`}>
            <div className='text-card-login'>
                <h1>Hello</h1>
                <p>Sign in to your account</p>
            </div>
            <div className='input-card-login'>
                <input type="text" name="username" id="username" placeholder='Username' value={username} onChange={onChangeUsername} />
                <input type="text" name="password" id="password" placeholder='Password' value={password} onChange={onChangePassword} />
                <p><a href="#a">Forgot  your password?</a></p>
            </div>
            <div className='actions-card-login'>
                <h2>Sign in</h2>
                <button onClick={setDataLogin}><img src={arrowImage} alt="login" /></button>
            </div>
            <div className='account-card-login'>
                <p>Don’t have an account? <span onClick={ () => ChangeURL("/Create")}>Create</span></p>
            </div>
        </div>
        </>
    )
}

export default CardLogin