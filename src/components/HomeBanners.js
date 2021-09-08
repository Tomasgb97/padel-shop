import React from 'react'
import { Heading, Box, Stack, Divider, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';

function HomeBanners({ima, title, text}) {
    return (
        <Box boxShadow='2px 6px 11px 4px rgba(140,140,140,0.47)' bgColor='#fffdfb73' width='30%' padding='2em 1em 0em 2em' borderRadius='30' mt='5rem' border='2px solid white' >
            <Stack direction='row'>
                <Stack direction='column'>
                    <Heading mb='1em'>{title}</Heading>
                    <Text fontWeight='300' fontFamily='sans-serif'>{text}</Text>
                    <img alt='logo tu tiend padel' width='33%' src='/logo.png'></img>
                </Stack>
                <Box  width='100%' position='relative' right='-20%'>
                <Img  filter ='drop-shadow(0 0.5em 0.75rem black);' alt='vairo grahpeno 9.1 speed padel racket' src={ima}></Img>
                </Box>
            </Stack>
        </Box>
    )
}

export default HomeBanners
