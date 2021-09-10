import React from 'react'
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


function CartCard() {
    return (
        <Box rounded='lg' width='100%' shadow='md'padding='1em'>
            <Flex>
                <VStack justifyContent='space-around' alignItems='flex-start'>
                    <Heading fontSize='0.8em' as='h5'> Product name</Heading>
                    <NumberInput width='35%' min={0} max={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Flex justifyContent='space-between' width='35%'>
                    <Icon cursor='pointer' as={FiTrash2} h={5} w={5}></Icon>
                    <Text>$Price</Text>
                    </Flex>
                </VStack>

                <Box width='30%'>
                    <Image src='https://vairo.com/padel/wp-content/uploads/2021/02/pala-carbon-pink-frente-1.jpg'></Image>
                </Box>
            </Flex>
        </Box>
    )
}

export default CartCard
