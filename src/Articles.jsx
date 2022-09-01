import React from "react";
import ArticleItems from "./ArticleItems";
import { ArticleCards } from "./Cards"
import './card.css'

function articleCardComponent(article, i){
    return  <ArticleItems 
        image = {article.image}
        header = {article.header}
        meta = {article.meta}
        description = {article.description}
        extra = {article.extra}/>
}

function Articles(){
    return(
        <div className="articles-comp">
            <p className='cards-heading'>Featured Articles</p>
                <div className="row">
                    {ArticleCards.map(articleCardComponent)}
                </div>
            <button className="articles-button">See All Articles</button>
        </div>

    );
}

export default Articles