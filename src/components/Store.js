import React from 'react'
import { Box, Stack, VStack } from '@chakra-ui/layout'
import Barleft from './Barleft'
import SearchBar from './SearchBar'

function Store() {
    return (
        <Stack flexDirection='row' justifyContent='space-between'>
          <Box>
          <Barleft />
          </Box>  
          <VStack width='75%' >
            <Stack width='100%' justifyContent='center' alignItems='center'>
              <SearchBar></SearchBar>
            </Stack>
          </VStack>
        </Stack>
    )
}

export default Store
