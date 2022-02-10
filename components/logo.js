import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 17px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {

    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link href='/'>
            <a href="">
                <LogoBox>
                    <img src={footPrintImg} width={20} height={20} alt="logo"/>

                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontWeight='bold'
                        ml={3}
                    >
                        Vlad Bugaets
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo