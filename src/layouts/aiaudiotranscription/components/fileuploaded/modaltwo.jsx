import { useDisclosure } from '@chakra-ui/react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';

function DualModalsExample() {
  // State management for modal 1
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();

  // State management for modal 2
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();

  return (
    <>
      {/* Button to open Modal 1 */}
      <Button onClick={onOpenModal1}>Open Modal 1</Button>
      {/* Modal 1 */}
      <Modal isOpen={isOpenModal1} onClose={onCloseModal1}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal 1</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This is the content of modal 1.</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal1}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Button to open Modal 2 */}
      <Button mt={4} onClick={onOpenModal2}>Open Modal 2</Button>
      {/* Modal 2 */}
      <Modal isOpen={isOpenModal2} onClose={onCloseModal2}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal 2</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>This is the content of modal 2.</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onCloseModal2}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DualModalsExample;