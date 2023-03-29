import React, { useEffect, useState } from "react";
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

  switch (title) {
    case "Button0":
      text = "E-mail"
      link = `/`

      break;

    case "Button1":
      text = "Mobile"
      link = `aboutme`

      break;

    case "Button2":
      text = "Instagram"
      link = `/`

      break;

    case "Button3":
      text = "Twitter"
      link = `/`

      break;
    default:
      break;
  }


  return (
    <div
      role="button"
      tabIndex={0}
      id='btnNavegation'
    >
      <button onClick={() => ChangeURL(link)} className={`animate__animated ${isAnimation === true && 'animate__bounceOut' || 'animate__bounceInUp'}`}>{text}</button>
    </div>
  );
}
