import React from "react";
import ArticleItems from "./ArticleItems";
import { ArticleCards } from "./Cards"
import './card.css'

function Articles(){
    return(
        <div className="articles-comp">
            <p className='cards-heading'>Featured Articles</p>
                <div className="row">
                    <ArticleItems 
                    image = {ArticleCards[0].image}
                    header = {ArticleCards[0].header}
                    meta = {ArticleCards[0].meta}
                    description = {ArticleCards[0].description}
                    extra = {ArticleCards[0].extra}/>
                    <ArticleItems 
                    image = {ArticleCards[1].image}
                    header = {ArticleCards[1].header}
                    meta = {ArticleCards[1].meta}
                    description = {ArticleCards[1].description}
                    extra = {ArticleCards[1].extra}/>
                    <ArticleItems 
                    image = {ArticleCards[2].image}
                    header = {ArticleCards[2].header}
                    meta = {ArticleCards[2].meta}
                    description = {ArticleCards[2].description}
                    extra = {ArticleCards[2].extra}/>
                </div>
            <button className="articles-button">See All Articles</button>
        </div>

    );
}

export default Articles