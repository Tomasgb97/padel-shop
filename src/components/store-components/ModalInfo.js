import { useDisclosure } from "@chakra-ui/hooks";
import { Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,} from "@chakra-ui/modal";

function ModalInfo({description, form, material}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Info</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom' trapFocus={false}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Description</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {description}
              <br></br>
              <Text textTransform='capitalize' fontWeight='semibold'>Form: {form}</Text>
              <Text textTransform='capitalize' fontWeight='semibold'>Material: {material}</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default ModalInfo