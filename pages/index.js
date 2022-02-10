import NextLink from 'next/link';
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button, Link
} from "@chakra-ui/react";
import Section from "../components/section";
import {SkillSection, Skill} from "../components/skill";
import Paragraph from "../components/paragraph";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Page = () => {
    return (
        <Container>
            <Box borderRadius='lg' p={3} mb={6} background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} align='center'>
                Hello i'm new there and just learning new think's
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as='h2' variant='page-title'>
                        Vlad Bugaets
                    </Heading>
                    <p>front-end developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}}
                    align='center'
                >
                    <Image borderColor='whiteAlpha.800'
                           borderWidth={2}
                           borderStyle='solid'
                           maxWidth='80px'
                           display='inline-block'
                           borderRadius='full'
                           src='/images/head.png'
                           alt='my head'
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as='h3' variant='section-title'>
                    Work
                </Heading>
                <Paragraph>
                    I’m 19 year's old student of Vinnytsia Technical University on 3rd year of
                    education, cybersecurity specialty.
                </Paragraph>
                <Paragraph>
                    Have deep theoretic knowledge about web development but have no
                    commercial experience in this.
                </Paragraph>
                <Paragraph>
                    Have a lot of power to learning new technologies, improving myself as a
                    specialist.
                </Paragraph>
                <Box align='center' my={4}>
                    <NextLink href='/works'>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>
                            My works
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as='h3' variant='section-title'>
                    Skill Set
                </Heading>
                <SkillSection>
                    <Skill>Html</Skill>
                    Born in small town near Vinnytsia
                </SkillSection>
                <SkillSection>
                    <Skill>CSS</Skill>
                    Born in small town near Vinnytsia
                </SkillSection>
                <SkillSection>
                    <Skill>JS</Skill>
                    Born in small town near Vinnytsia
                </SkillSection>
                <SkillSection>
                    <Skill>React</Skill>
                    Born in small town near Vinnytsia
                </SkillSection>
            </Section>
            <Section delay={0.3}>
                <Heading as='h3' variant='section-title'>
                    Hobbies ❤️
                </Heading>
                <Paragraph>
                    Sport(basketball, gym), <Link href='https://www.tiktok.com/@whitelantern12'>video-editing</Link>,
                    playing computer games, <Link href='https://open.spotify.com/user/31j5c32tonmnb2pjbbly6la57oha?si=7a3e8982a9b241a1'>music</Link>,
                    photography
                </Paragraph>
            </Section>
        </Container>
    )
}
export default Page
