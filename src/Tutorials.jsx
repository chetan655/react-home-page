import React from "react";
import TutorialItems from "./TutorialItems";
import { TutorialCards } from "./Cards"
import './card.css'

function tutorialCardComponent(tutorial, i){
    return  <TutorialItems 
        image = {tutorial.image}
        header = {tutorial.header}
        meta = {tutorial.meta}
        description = {tutorial.description}
        extra = {tutorial.extra}/>
}

function Tutorials(){
    return(
        <div className="tutorials-comp">
            <p className='cards-heading'>Featured Tutorials</p>
                <div className="row">
                    {TutorialCards.map(tutorialCardComponent)}
                </div>
            <button className="tutorials-button">See All Tutorials</button>
        </div>

    );
}

export default Tutorials