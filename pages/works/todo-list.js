import {
    Container,
    List,
    ListItem,
    Heading
} from "@chakra-ui/react";
import { Title, WorkImage, Meta} from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title='weather-app' >
            <Container mt={4}>
                <Title>
                    Todo App
                </Title>
                <Paragraph>
                    Simple react app for time management by todo system
                </Paragraph>
                <List>
                    <Heading as='h3' fontSize={20}>
                        Stack
                    </Heading>
                    <ListItem ml={4} my={4}>
                        <Meta>Programing language</Meta>
                        <span>JavaScript</span>
                    </ListItem>
                    <ListItem ml={4} my={4}>
                        <Meta>React</Meta>
                        <span>React-Create-App, Functional Components, Hooks</span>
                    </ListItem>
                    <ListItem ml={4} my={4}>
                        <Meta>Styles</Meta>
                        <span>CSS</span>
                    </ListItem>

                </List>

                <WorkImage src='/images/works/todoListApp.jpg'/>
            </Container>
        </Layout>
    )
}


export default Work