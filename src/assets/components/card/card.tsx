import React from 'react'
import CardLogin from '../contentCardLogin/cardLogin'
import CardCreate from '../contentCardCreate/cardCreate'
import CardProfile from '../contentCardProfile/cardProfile'
import CardProfileBack from '../contentCardProfile/cardProfileBack'
import './card.modules.scss'
import CreateNetworks from '../contentCardCreate/CreateNetworks'


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
        case "Create":
            contentCard = <CardCreate />
            break;
        case "Profile":
            contentCard = <CardProfile />
            break;
        case "ProfileBack":
            contentCard = <CardProfileBack />
            break;
        case "Networks":
            contentCard = <CreateNetworks />
            break;
        default:
            contentCard = <CardLogin />
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