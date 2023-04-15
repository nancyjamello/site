import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// Define an interface for the props of the VideoPlayer component
interface VideoPlayerProps {
  videoindex: number; // The videoindex prop is a number
}

const VideoModal = (props: VideoPlayerProps)  => {
  // Get the videoindex prop from the props object
  const videoindex = props.videoindex;
  
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleOpen = () => setIsOpen(true);
  const handleCancel = () => setIsOpen(false);
  // const handleOk = () => setIsOpen(false);
  const handleToggle = () => setShowPassword(!showPassword);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleOk = async () => {
    // Fetch the vercel function URL
    setIsOpen(false)
    const response = await fetch(`/api/redirect?password=${password}&index=${videoindex}`);
    // Get the website link from the response
    // const data = await response.json()
    const link = await response.text();
    // Go to the website link
    navigate(`../video?url=${link}`);
  };
  
  return (
    <>
      <Button variant="solid" colorScheme="blue" onClick={handleOpen}>Open Video</Button>

      <Modal isOpen={isOpen} onClose={handleCancel}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleToggle}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={handleCancel}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleOk}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default VideoModal;