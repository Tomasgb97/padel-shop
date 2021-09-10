import React from 'react'
import { initfirebase, db, querySnapshot} from '../firebase';
import { useEffect, useState } from 'react';
import { Box, Stack, VStack, Flex } from '@chakra-ui/layout'
import Barleft from './store-components/Barleft'
import SearchBar from './store-components/SearchBar'
import ProductCard from './store-components/ProductCard'
import CartDrawer from './store-components/CartDrawer';


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
          <CartDrawer></CartDrawer>
          <Box>
            <Barleft />
          </Box>  
          <VStack width='75%'>
            <Stack width='100%' justifyContent='center' alignItems='center'>
              <SearchBar ></SearchBar>
            </Stack>
            <Box width='90%'>
              <Flex flexDirection='row' as='div' data-aos='fade-up' justifyContent='flex-start' flexWrap='wrap' mt='10rem' gap='3em'  width='100%'>
                {products.map(product => <ProductCard key={product.name} prod={product}></ProductCard>)}
              </Flex>
            </Box>
          </VStack>
        </Stack>
    )
}

export default Store
