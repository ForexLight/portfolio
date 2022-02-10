import NextLink from 'next/link';
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button, Link, List, ListItem
} from "@chakra-ui/react";
import Section from "../components/section";
import {SkillSection, Skill} from "../components/skill";
import Paragraph from "../components/paragraph";
import {ChevronRightIcon, Icon} from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import {
    IoLogoLinkedin,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoGoogle,
} from "react-icons/io5";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius='lg'
                    p={3}
                    mb={6}
                    background={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    align='center'
                >Hello i&apos;m new there and just learning new think&apos;s
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
                    <Heading as='h3' variant='section-title'>Work</Heading>
                    <Paragraph>
                        I’m 19 year&apos;s old student of Vinnytsia Technical University on 3rd year of
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
                        photography, <Link href='https://yummyanime.club/users/id962553'>anime</Link>, films
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as='h3' variant='section-title'>Social Link&apos;s</Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/ForexLight'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />}>GitHub</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='mailto:vladbugaets@gmail.com'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGoogle} />}>Gmail</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.instagram.com/vladbugaets/'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>Instagram</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://www.linkedin.com/in/vlad-bugaets-b33088179/'>
                                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin} />}>LinkedIn</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}
export default Page
