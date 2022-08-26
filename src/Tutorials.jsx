import React from "react";
import { Card, Image} from 'semantic-ui-react'
import { faker } from '@faker-js/faker';
//import 'semantic-ui-css/semantic.min.css';

const card1 = {
    cardImage: faker.image.avatar(),
    name: faker.name.fullName(),
    meta: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    extra: faker.name.jobType()
}

const card2 = {
    cardImage: faker.image.avatar(),
    name: faker.name.fullName(),
    meta: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    extra: faker.name.jobType()
}

const card3 = {
    cardImage: faker.image.avatar(),
    name: faker.name.fullName(),
    meta: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    extra: faker.name.jobType()
}


function Tutorials(){
    return(
        <div className="tutorials-comp">
            <p className='cards-heading'>Featured Tutorials</p>
            <Card.Group className="tutorials-card-group">
                <Card className="tutorials-card-1">
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src={card1.cardImage}
                        />
                        <Card.Header>{card1.name}</Card.Header>
                        <Card.Meta>{card1.meta}</Card.Meta>
                        <Card.Description>{card1.description}</Card.Description>
                        <Card.Content extra>{card1.extra}</Card.Content>
                    </Card.Content>
                </Card>

                <Card className="tutorials-card-2">
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src={card2.cardImage}
                        />
                        <Card.Header>{card2.name}</Card.Header>
                        <Card.Meta>{card2.meta}</Card.Meta>
                        <Card.Description>{card2.description}</Card.Description>
                        <Card.Content extra>{card2.extra}</Card.Content>
                    </Card.Content>
                </Card>

                <Card className="tutorials-card-3">
                    <Card.Content>
                        <Image
                        floated='right'
                        size='mini'
                        src={card3.cardImage}
                        />
                        <Card.Header>{card3.name}</Card.Header>
                        <Card.Meta>{card3.meta}</Card.Meta>
                        <Card.Description>{card3.description}</Card.Description>
                        <Card.Content extra>{card3.extra}</Card.Content>
                    </Card.Content>
                </Card>
            </Card.Group>
            <button className="tutorials-button">See All Tutorials</button>
        </div>

    );
}

export default Tutorials