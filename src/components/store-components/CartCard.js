import React, { useState, useEffect } from 'react'
import {
    Flex,
    Box,
    VStack,
    Heading,
    Text
} from '@chakra-ui/layout'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Icon
  } from "@chakra-ui/react"
  import { Image } from '@chakra-ui/image'
  import { FiTrash2 } from 'react-icons/fi'
  import { deleteProduct } from '../../Cart'


function CartCard({prod}, refresh) {


    return (
        <Box
        rounded='lg'
        width='100%'
        shadow='md'
        padding='1em'
        _hover={{transform: "scale(1.02)", transition: "0.3s ease"}}>
            <Flex>
                <VStack justifyContent='space-around' alignItems='flex-start'>
                    <Heading fontSize='0.8em' as='h5'>{prod.Name}</Heading>
                    <NumberInput width='35%' defaultValue={prod.Quantity} min={1} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Flex justifyContent='space-between' width='35%'>
                    <Icon onClick={ () => { deleteProduct(prod)} } cursor='pointer' as={FiTrash2} h={5} w={5}></Icon>
                    <Text>${prod.Price}</Text>
                    </Flex>
                </VStack>

                <Box width='30%'>
                    <Image src={prod.Photo}></Image>
                </Box>
            </Flex>
        </Box>
    )
}

export default CartCard
