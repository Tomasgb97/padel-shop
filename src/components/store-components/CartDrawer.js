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
import {Box, Text} from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { FiShoppingCart } from 'react-icons/fi';
import CartCard from "./CartCard"

function CartDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button position='fixed' right='-1.5%' bottom='50%' transform='rotate(270deg)' rightIcon={<FiShoppingCart/>} ref={btnRef} colorScheme="orange" onClick={onOpen}>
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
                <CartCard></CartCard>
              </VStack>
            </DrawerBody>
  
            <DrawerFooter backgroundColor='#ffa50082' as='flex' justifyContent='space-between'>
                <Text fontWeight='semibold'>$ TOTAL PRICE</Text>
              <Button colorScheme="green">Checkout</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default CartDrawer