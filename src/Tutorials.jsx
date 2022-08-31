import React from "react";
import TutorialItems from "./TutorialItems";
import { TutorialCards } from "./Cards"
import './card.css'

function Tutorials(){
    return(
        <div className="tutorials-comp">
            <p className='cards-heading'>Featured Tutorials</p>
                <div className="row">
                    <TutorialItems 
                    image = {TutorialCards[0].image}
                    header = {TutorialCards[0].header}
                    meta = {TutorialCards[0].meta}
                    description = {TutorialCards[0].description}
                    extra = {TutorialCards[0].extra}/>
                    <TutorialItems 
                    image = {TutorialCards[1].image}
                    header = {TutorialCards[1].header}
                    meta = {TutorialCards[1].meta}
                    description = {TutorialCards[1].description}
                    extra = {TutorialCards[1].extra}/>
                    <TutorialItems 
                    image = {TutorialCards[2].image}
                    header = {TutorialCards[2].header}
                    meta = {TutorialCards[2].meta}
                    description = {TutorialCards[2].description}
                    extra = {TutorialCards[2].extra}/>
                </div>
            <button className="tutorials-button">See All Tutorials</button>
        </div>

    );
}

export default Tutorials