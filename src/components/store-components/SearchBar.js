import React from 'react'
import { Stack, Heading, VStack } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { Button } from '@chakra-ui/react'

function SearchBar() {
    return (

        <Stack direction='row' padding='0.5em' width='70%' borderRadius='5px' height='4rem' border='1px solid white' bgColor='#b1aaaa26' justifyContent='space-evenly' alignItems='center'>
            <Heading fontSize='1em'>Filter By:</Heading>
            <VStack>
                <Heading fontSize='0.8em' as='h4'>Brand</Heading>
                <Select placeholder='---' size='sm'>
                    <option value='vairo'>Vairo</option>
                    <option value='bullpadel'>Bullpadel</option>
                    <option value='adidas'>Adidas</option>
                    <option value='nox'>Nox</option>
                </Select>
            </VStack>

            <VStack>
                <Heading fontSize='0.8em' as='h4'>Year</Heading>
                <Select placeholder='---' size='sm'>
                    <option value='2020'>2020 </option>
                    <option value='2021'>2021</option>
                </Select>
            </VStack>

            <VStack>
                <Heading fontSize='0.8em' as='h4'>Price</Heading>
                <Select placeholder='---' size='sm'>
                    <option value='120'> less than $120</option>
                    <option value='160'>less than $160</option>
                    <option value='200'>less than $200</option>
                    <option value='250'>less than $250</option>
                </Select>
            </VStack>

            <Button>Apply</Button>

        </Stack>
        
    )
}

export default SearchBar
