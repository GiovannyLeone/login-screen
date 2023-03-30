import React from 'react' 
import "./scss/scroll-view.scss";

export interface SrollViewProps {} 

const SrollView: React.FunctionComponent<SrollViewProps> = props => {
    return(
    <>
    <div className='scroll'>
        <div className="bar"></div>
        <div className="label">Scroll Right</div>
    </div>
    </>
)}

export default SrollView