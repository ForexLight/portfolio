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
                    Weather App
                </Title>
                <Paragraph>
                    App for checking and tracking weather over world
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
                        <span>React-Create-App, TypeScript, Redux, Redux-Thunk, Axios</span>
                    </ListItem>
                    <ListItem ml={4} my={4}>
                        <Meta>Styles</Meta>
                        <span>Css modules, SCSS</span>
                    </ListItem>
                    <Heading as='h3' fontSize={20}>
                        LINK
                    </Heading>
                    <ListItem ml={4} my={4}>
                        <span><a href="https://weatherapp-sooty.vercel.app/">https://weatherapp-sooty.vercel.app/</a></span>
                    </ListItem>
                </List>

                <WorkImage src='/images/works/weatherApp.jpg'/>
            </Container>
        </Layout>
    )
}


export default Work