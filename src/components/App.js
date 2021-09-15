
import {
  Heading,
  Box,
  Stack,
  Divider,
  Text,
  VStack
} from '@chakra-ui/layout';
import HomeBanners from './HomeBanners';
import { Img } from '@chakra-ui/react';



function App() {

 

  return (
    <div className="main">
      <Box textAlign='center' width='100%'>
      <Heading fontStyle='italic'>THIS PROJECT IS NOT FINISHED</Heading>
      </Box>

      

      <Box 
      bgColor='black'
      display='flex'
      width='100%'
      height='35rem'
      borderTop='2px solid black'
      borderBottom='2px solid black'
      mt='5rem'>
        <video flex='1' width='100%' muted autoPlay loop>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </Box>


    

      <Stack direction='row' justifyContent='center' width='100%' bgColor='#ffec0bb0' mt='9rem' padding='4em 0em 4em 0em'>
        <Stack direction='row' width='70%' justifyContent='space-around'>
          <Stack direction='row'>
            <Box>
              <img width='60rem' alt='Box advertiing free shipping from $450 and above' src='/shipping-box.png'></img>
            </Box>
            <Stack justifyContent='center' direction='column'>
              <Text fontWeight='700'>Free shipping.</Text>
              <Text mt='0px' fontWeight='600' color='green.500'>From $450</Text>
            </Stack>
          </Stack>
          <Divider orientation='vertical' />
          <Stack direction='row'>
          <Box>
              <img width='60rem' alt='tag advertising free changes' src='/change-fees.png'></img>
            </Box>
            <Stack justifyContent='center' direction='column'>
              <Text fontWeight='700'>No change Fees</Text>
              <Text mt='0px' fontWeight='600' color='green.500'>Free</Text>
            </Stack>
          </Stack>
          <Divider orientation='vertical' />
          <Stack direction='row'>
          <Box>
              <img width='60rem' alt='card advertising pay methods' src='/credit-debit.png'></img>
            </Box>
            <Stack justifyContent='center' direction='column'>
              <Text fontWeight='700'>All cards accepted</Text>
              <Text mt='0px' fontWeight='600' color='green.500'>Debit and Credit</Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      
      <VStack px='5em' width='100%'>
      <Stack data-aos='slide-left' width='100%' alignItems='flex-end'><HomeBanners title='TOP PLAY' text='The best quality padel rackets, imported directly from Spain.' ima='/paleta1.png' /></Stack>
      
      <Stack data-aos='slide-down' width='100%' alignItems='center'><HomeBanners title='NEXT-GEN' text='The lastest models. Always whats next' ima='/paleta2.png' /></Stack>

      <Stack data-aos='slide-right' width='100%' alignItems='flex-start'><HomeBanners title='TOP PLAY' text='The best quality padel rackets, imported directly from Spain.' ima='/pelotas1.png' /></Stack>
      </VStack>



      <Stack data-aos='slide-up' direction='row' alignItems='center' justifyContent='center' width='100%'>
          <Stack justifyContent='space-around' flexWrap='wrap' direction='row' width='60%'>
            <Img width='25%' src='/head.png'></Img>
            <Img width='35%' src='/dunlop.png'></Img>
            <Img width='25%' src='/adidas.png'></Img>
            <Img width='25%' src='/bullpadel.png'></Img>
            <Img width='25%' src='/nox.png'></Img>
            <Stack direction='row' justifyContent='center' width='60%'><Img width='40%' src='/wpt.png'></Img></Stack>
          </Stack>
        </Stack>


        <Box zIndex='-1' width='100%' position='fixed' top='0px' transform='rotatex(180deg) rotatey(180deg)' >
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'>
        <rect fill='#FFFFFF' width='1600' height='800'/>
        <g fill-opacity='1'>
 
        <polygon  fill='#e1ffde' points='1600 260 0 560 0 450 1600 150'/>
        <polygon  fill='#d0ffcb' points='1600 360 0 660 0 550 1600 250'/>
        <polygon  fill='#beffb6' points='1600 460 0 760 0 650 1600 350'/>
      <polygon  fill='#AAFF9F' points='1600 800 0 800 0 750 1600 450'/></g></svg>
      </Box>

        <Box
        width='100%'
        zIndex='-1'
        >


      <Box display='contents' zIndex='-1' width='100%'>
      <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 1600 800'>
        
        <g fill-opacity='1'>
        <polygon  fill='#e1ffde' points='1600 260 0 560 0 450 1600 150'/>
        <polygon  fill='#d0ffcb' points='1600 360 0 660 0 550 1600 250'/>
        <polygon  fill='#beffb6' points='1600 460 0 760 0 650 1600 350'/>
      <polygon  fill='#AAFF9F' points='1600 800 0 800 0 750 1600 450'/></g></svg>
      </Box>
      </Box>


  

      
    </div>
  );
}

export default App;
