import React from 'react'
import CardCreate from '../contentCardCreate/cardCreate'
import CardLogin from '../contentCardLogin/cardLogin'
import './card.modules.scss'


export interface cardProps { }

const Card: React.FunctionComponent<cardProps> = props => {



    let page = window.location.href.split("/")[3]
    let contentCard;


    function animation(animation: string) {
        return `animate__animated animate__${animation}`
    }

    switch (page) {
        case "":
            contentCard = <CardLogin />
            break;
        default:
            if (contentCard = <CardCreate />) {
                animation("bounceOutDown")
            }
            break;
    }

    console.log(page);

    return (
        <>
            <div id='wrapper'>
                {contentCard}
            </div>
        </>
    )
}

export default Card