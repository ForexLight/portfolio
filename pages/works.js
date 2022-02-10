import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWeatherApp from '../public/images/works/weatherApp.jpg'
import thumbFilmApp from '../public/images/works/filmApp.jpg'
import thumbTodoListItem from '../public/images/works/todoListApp.jpg'



const Works = () => (

        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="weather-app" title="WeatherApp" thumbnail={thumbWeatherApp}>
                        A simple react app for tracking weather data over all world
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="film-app"
                        title="FilmApp"
                        thumbnail={thumbFilmApp}
                    >
                        A simple react app for searching film data
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="todo-list"
                        title="Todo List"
                        thumbnail={thumbTodoListItem}
                    >
                        Simple react app for time management by todo system
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
)

export default Works
