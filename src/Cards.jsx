import { faker } from "@faker-js/faker"

const ArticleCards = [
    {
        image: faker.image.avatar(),
        header: faker.name.fullName(),
        meta: faker.name.jobTitle(),
        description: faker.name.jobDescriptor(),
        extra: faker.name.jobType()
    },
    {
        image: faker.image.avatar(),
        header: faker.name.fullName(),
        meta: faker.name.jobTitle(),
        description: faker.name.jobDescriptor(),
        extra: faker.name.jobType()
    },
    {
        image: faker.image.avatar(),
        header: faker.name.fullName(),
        meta: faker.name.jobTitle(),
        description: faker.name.jobDescriptor(),
        extra: faker.name.jobType()
    }
]

const TutorialCards = [
    {
        image: faker.image.avatar(),
        header: faker.name.fullName(),
        meta: faker.name.jobTitle(),
        description: faker.name.jobDescriptor(),
        extra: faker.name.jobType()
    },
    {
        image: faker.image.avatar(),
        header: faker.name.fullName(),
        meta: faker.name.jobTitle(),
        description: faker.name.jobDescriptor(),
        extra: faker.name.jobType()
    },
    {
        image: faker.image.avatar(),
        header: faker.word.noun(),
        meta: faker.word.preposition(),
        description: faker.word.verb(),
        extra: faker.word.adjective()
    }
]

export default ArticleCards;

export {TutorialCards, ArticleCards};