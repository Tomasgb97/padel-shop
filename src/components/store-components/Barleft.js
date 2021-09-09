import React from 'react'
import { Box, VStack, Divider } from '@chakra-ui/layout';

function Barleft() {
    return (
        <VStack boxShadow='6px -3px 14px rgba(0, 0, 0, 0.3)' width={'25%'} height='100%' position='fixed' bgColor='white'>
            <Box mb='7rem' justifySelf='flex-start' alignSelf='flex-start'>
            <video muted autoPlay loop>
            <source src="/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            </Box>
            <VStack width='40%'>
            <img alt='head logo' src='/head.png'></img>
            <Divider orientation='horizontal' />
            <img alt='varlion logo' src='/varlion.png'></img>
            <Divider orientation='horizontal' />
            <img alt='dunlop logo' src='/dunlop.png'></img>
            </VStack>
        </VStack>
    )
}

export default Barleft
