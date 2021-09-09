import React from 'react'
import { initfirebase, db, querySnapshot} from '../firebase';
import { useEffect, useState } from 'react';
import { Box, Stack, VStack, Flex } from '@chakra-ui/layout'
import Barleft from './store-components/Barleft'
import SearchBar from './store-components/SearchBar'
import ProductCard from './store-components/ProductCard'

function Store() {

  const [products, setproducts] = useState([])

   useEffect(() => {
    
    db()
    querySnapshot().then(
      function(result) { const info = result.docs.map((product) => product.data())
      setproducts(info)
    console.log(products)})

    
  }, [])

  

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
              <Flex flexDirection='row' justifyContent='space-evenly' flexWrap='wrap' mt='10rem' gap='3em'  width='100%'>
                {products.map(product => <ProductCard prod={product}></ProductCard>)}
              </Flex>
            </Box>
          </VStack>
        </Stack>
    )
}

export default Store
