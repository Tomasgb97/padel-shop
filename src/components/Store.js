import React from 'react'
import { Box, Stack, VStack } from '@chakra-ui/layout'
import Barleft from './store-components/Barleft'
import SearchBar from './store-components/SearchBar'
import ProductCard from './store-components/ProductCard'

function Store() {
    return (
        <Stack flexDirection='row' justifyContent='space-between'>
          <Box>
          <Barleft />
          </Box>  
          <VStack width='75%'>
            <Stack width='100%' justifyContent='center' alignItems='center'>
              <SearchBar></SearchBar>
            </Stack>
            <Box width='90%'>
              <Stack mt='10rem' padding='1em' width='100%'>
                <ProductCard></ProductCard>
              </Stack>
            </Box>
          </VStack>
        </Stack>
    )
}

export default Store
