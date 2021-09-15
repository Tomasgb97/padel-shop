import React from 'react'
import {db, querySnapshot} from '../firebase';
import { useEffect, useState } from 'react';
import { Box, Stack, VStack, Flex } from '@chakra-ui/layout'
import Barleft from './store-components/Barleft'
import SearchBar from './store-components/SearchBar'
import ProductCard from './store-components/ProductCard'
import CartDrawer from './store-components/CartDrawer';
import { usersCart } from '../Cart';



function Store() {

  const [products, setproducts] = useState([])

   useEffect(() => {
    
   
    db();
    querySnapshot().then(
      function(result) { const info = result.docs.map((product) => product.data())
      setproducts(info)})

    
  }, []);

  



  const [cart, setCart] = useState(usersCart);  //sets localstorage cart as statewhen store is opened.

  const totalCartPrice = cart.reduce(function(acc, curr) { return acc + curr.Price * curr.Quantity}, 0); //sums every product and multiply its prices with the amount of each one on the cart


  const deleteProduct = (product) => {   //deletes product from the cart array, set that to state and then pushes than array to local storage
 
    const indexOfProduct = cart.findIndex(element => element.Name == product.Name);

    if(indexOfProduct >= 1){
 
        setCart(cart.slice(0, indexOfProduct).concat(cart.slice(indexOfProduct + 1)));
        localStorage.setItem("cart", JSON.stringify(cart));

     }else if(indexOfProduct == 0){

      setCart(cart.slice(indexOfProduct+1));
       localStorage.setItem("cart", JSON.stringify([]));
     }
    
    };

    const addProduct = (product) => {  //adds a product to the cart array, set that to state and then pushes than array to local storage


      const indexOfProduct = cart.findIndex(element => element.Name == product.Name); //checks if the added product already exists in the array
   
      if(indexOfProduct >= 0){
   
           if(isNaN(cart[indexOfProduct].Quantity)){ //if there product is not on the array it adds one
   
           cart[indexOfProduct].Quantity = 1
           setCart(cart)
   
           }
           else{
   
          if(cart[indexOfProduct].Quantity == 10){   //if the product is already on the array it sums 1 but with a max of 10 units for each product
            cart[indexOfProduct].Quantity = 10
          }else{
            cart[indexOfProduct].Quantity += 1
          }
           setCart(cart)
           }
           
      }
      else{
   
           product.Quantity = 1;
           cart.push(product);
           setCart(cart)
      }
   
       localStorage.setItem("cart", JSON.stringify(cart));
      };

      const changeQuantity = (product, value) => { //sets the queantity of a product to adiferent number if is modified from the cart component using input

        const indexOfProduct = cart.findIndex(element => element.Name == product.Name);

        cart[indexOfProduct].Quantity = value;
        setCart(cart);
        localStorage.setItem("cart", JSON.stringify(cart))
      }


  

    return (
        <Stack flexDirection='row' justifyContent='space-between'>
          <CartDrawer changeQuantity={changeQuantity} totalcart={totalCartPrice} cart={cart} deleteprod={deleteProduct}></CartDrawer>
          <Box>
            <Barleft />
          </Box>  
          <VStack width='75%'>
            <Stack width='100%' justifyContent='center' alignItems='center'>
              <SearchBar ></SearchBar>
            </Stack>
            <Box width='90%'>
              <Flex flexDirection='row' as='div' data-aos='fade-up' justifyContent='flex-start' flexWrap='wrap' mt='10rem' gap='3em'  width='100%'>
                {products.map(product => <ProductCard key={product.name} addprod={() => {addProduct(product)}} prod={product}></ProductCard>)}
              </Flex>
            </Box>
          </VStack>
        </Stack>
    )
}

export default Store
