import React from 'react'
import {Flex,Box,Image,Icon,Tooltip, chakra, VStack, Text} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import ModalInfo from './ModalInfo';


function ProductCard({product}) {
    return (
        <Flex cursor='pointer' rounded='lg' width='25%' boxShadow='lg' flexDir='column'>
            <Box width='100%' height='20em'>
                <Image src={'https://vairo.com/padel/wp-content/uploads/2021/02/pala-grapheno-9.1-speed-frente.jpg'}></Image>
            </Box>

            <Flex justifyContent='space-between' padding='1em'>
                <Flex flexDirection='column'>
                    <Box fontWeight='bold' as='h4'>Nombre producto</Box>
                    <Box fontWeight='500' mb='0.3em' mt='0.3em' as='span'>Marca producto</Box>
                    <Box color='GrayText' as='span'>anio producto</Box>
                    <br />
                    <ModalInfo description='description of product'></ModalInfo>
                </Flex>

                <Flex direction='column' alignItems='center' justifyContent='space-between'>

                <VStack>
                        <Text color='red' textDecor='line-through'>$Orig price</Text>
                        <Text fontWeight='bold'>$New price</Text>
                    </VStack>

                    <Tooltip
                        label="Add to cart"
                        bg="white"
                        placement={'top'}
                        color={'gray.800'}
                        fontSize={'1.2em'}>
                        <chakra.a href={'#'} display={'flex'}>
                            <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} />
                        </chakra.a>
                    </Tooltip>
                    
                </Flex>
            </Flex>
            
        </Flex>
    )
}

export default ProductCard
