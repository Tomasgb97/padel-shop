import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Icon,
    Flex,
    Heading,
    VStack
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"
import React from "react"
import { useState} from "react"
import {Box, Text} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { FiShoppingCart } from 'react-icons/fi';
import CartCard from "./CartCard"
import { usersCart } from "../../Cart"

function CartDrawer() {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    const [cart, setCart] = useState(usersCart);

    const totalCartPrice = cart.reduce(function(acc, curr) { return acc + curr.Price * curr.Quantity}, 0);
  
    return (
      <>
        <Button position='fixed'
        right='-1.4%'
        bottom='50%'
        transform='rotate(270deg)'
        rightIcon={<FiShoppingCart/>}
        ref={btnRef}
        colorScheme="orange"
        onClick={onOpen}
        _hover={{transform: "rotate(270deg)", right: "-2.9%", padding: "1em 3em 1em 3em", transition: "0.3s ease"}}>
        Cart
        </Button>
        <Drawer
          size='md'
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          trapFocus={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <Flex alignItems='center' width='70%' justifyContent='space-between'>
                    <Heading fontSize='1.5em'>Your Cart</Heading>
                    <Icon as={FiShoppingCart} h={5} w={5} />
                </Flex>
            </DrawerHeader>
  
            <DrawerBody>
                <Box bgColor='#38a169' width='100%' height='0.3em' rounded='sm' mb='2em'></Box>
              <VStack width='100%' justifyContent='space-evenly'>
                {cart.map((item) => <CartCard key={item.Name} prod={item}></CartCard>)}
              </VStack>
            </DrawerBody>
  
            <DrawerFooter backgroundColor='#ffa50082' as='Flex' justifyContent='space-between'>
                <Text fontWeight='semibold'>$ {totalCartPrice}</Text>
              <Button colorScheme="green">Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default CartDrawer