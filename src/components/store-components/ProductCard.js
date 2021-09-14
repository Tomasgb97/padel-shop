import React from 'react'
import {
    Flex,
    Box,
    Image,
    Icon,
    Tooltip,
    chakra,
    VStack,
    Text
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import ModalInfo from './ModalInfo';



function ProductCard({prod, addprod}) {


    return (
        <Box _hover={{transform: "scale(1.05)", color: "orange"}} transition='0.3s ease' width='25%' margin='2em'>


            <Flex cursor='pointer' rounded='lg' width='100%' boxShadow='lg' flexDir='column'>

                <Box display='flex' justifyContent='center' width='100%' height='20em'>
                    <Image roundedTop='lg' maxH='20em' minH='20em' maxW='100%' src={prod.Photo}></Image>
                </Box>

                <Flex justifyContent='space-between' padding='1em'>
                    <Flex textOverflow='clip' flex='0.7' overflowX='hidden' flexDirection='column'>

                    <Tooltip
                            label={prod.Name}
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                        <Box
                        fontWeight='bold'
                        as='h4'
                        textOverflow="ellipsis"
                        whiteSpace="nowrap"
                        overflowX="clip">{prod.Name}</Box>
                        </Tooltip>

                        <Box fontWeight='500' mb='0.3em' mt='0.3em' as='span'>{prod.Brand}</Box>

                        <Box color='GrayText' as='span'>{prod.Year}</Box>
                        <br />
                        <ModalInfo material={prod.Material} form={prod.Form} description={prod.Description}></ModalInfo>
                    </Flex>

                    <Flex direction='column' alignItems='center' justifyContent='space-between'>

                        <VStack>
                            <Text color='red' textDecor='line-through'>{prod.Oldprice ? '$' + prod.Oldprice : null}</Text>
                            <Text color='black' fontWeight='bold'>{'$' + prod.Price}</Text>
                        </VStack>

                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a onClick={addprod}  href={'#'} display={'flex'}>
                                <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                        
                    </Flex>
                </Flex>
                
            </Flex>
        </Box>
    )
}

export default ProductCard
