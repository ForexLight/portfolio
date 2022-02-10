import {Container, Box, Heading, SimpleGrid, Divider} from "@chakra-ui/react";

import Section from "../components/section";
import {WorkGridItem, GridItem, GridItemStyle} from "../components/grid-item";

const Works = () => {
    return(
        <Container>
            <Heading
                as='h3'
                fontSize={36}
                mb={4}
            >
                Works
            </Heading>
            <SimpleGrid
                column={[1,1,2]}
                gap={6}
            >
                <Section>
                    <WorkGridItem id={1} title={1} thumbnail={}>
                        simple film app about searching information film
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
    )
}

export default Works