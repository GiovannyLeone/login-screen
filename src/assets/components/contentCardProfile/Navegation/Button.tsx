import React, { useEffect, useState } from "react";
import mail from "../../../image/profile-back/mail.png";
import mobile from "../../../image/profile-back/mobile.png";
import instagram from "../../../image/profile-back/instagram.png";
import linkedin from "../../../image/profile-back/linkedin.png";
import tiktok from "../../../image/profile-back/tiktok.png";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Button({ title, itemId }: { title: string; itemId: string }) {
  // const visibility = React.useContext(VisibilityContext);


  const [isAnimation, setAnimation] = useState(false);


  //The URL page to the link
  const baseURL = window.location.href
  const domainPage = `${baseURL.split("/")[0]}://${baseURL.split("/")[2]}`

  function ChangeURL(pLink: any) {
    setAnimation(true)
    setTimeout(() => {
      window.location.href = `${pLink}`
    }, 850);

  }



  let text: string = ""
  let link: string | undefined
  let icon: string | undefined

  switch (title) {
    case "Button0":
      text = "E-mail"
      link = `/`
      icon = mail
      break;

    case "Button1":
      text = "Mobile"
      link = `aboutme`
      icon = mobile

      break
          
    case "Button2":
      text = "Instagram"
      link = `aboutme`
      icon = instagram
      break

    case "Button3":
      text = "Linkedin"
      link = `aboutme`
      icon = linkedin
      break

    case "Button4":
      text = "Tiktok"
      link = `aboutme`
      icon = tiktok
      break

    default:
      break;
  }


  return (
    <>
      <div
        role="button"
        tabIndex={0}
        id='btnNavegation'
        onClick={() => ChangeURL(link)} className={`animate__animated ${isAnimation === true && 'animate__bounceOut' || 'animate__bounceInUp'}`}
      >
        <img src={icon} alt="" />
      </div>
    </>
  );
}
