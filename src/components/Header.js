import React from 'react'
import '../styles/Header.css'

import { Box, Stack, Text } from '@chakra-ui/layout'



function Header() {
    return (
        <Box 
        width='100%'
        height='5rem'
        display='flex'
        className={'nav'}
        >   
            <Box 
            width={{base: '8rem',sm: '8rem', md: '12rem', lg: '15rem'}}
            alignItems='center'
            display='flex'>

            <img src='/logo.png'
            alt='tu tienda padel logo'
            width='100%'></img>
            </Box>


            <Stack
            flex='1'
            flexDirection='row'
            justifyContent='space-evenly'
            alignItems='center'
            justifySelf='center'>
            <Text className='text' cursor='pointer' as='a' fontWeight='700' marginTop='0px'>Home</Text>
            <Text className='text' cursor='pointer' as='a' fontWeight='700' marginTop='0px'>Store</Text>
            <Text className='text' cursor='pointer' as='a' fontWeight='700' marginTop='0px'>Cart</Text>
            </Stack>

        </Box>
    )
}

export default Header
