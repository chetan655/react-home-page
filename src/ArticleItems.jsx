import React from "react";
import { Card } from 'semantic-ui-react'
import './card.css'

function ArticleItems(props){
    return(
        <div className="column">
            <Card
                image={props.image}
                header={props.header}
                meta={props.meta}
                description={props.description}
                extra={props.extra}
            />
        </div>
    )
}

export default ArticleItems;