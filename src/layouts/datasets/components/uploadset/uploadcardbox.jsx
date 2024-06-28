import { useState } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  Progress,
  Center,
  Flex,
  CloseButton,
  useToast,
} from '@chakra-ui/react';
import { MdCloudUpload } from 'react-icons/md';
import { FaCloudUploadAlt, FaDropbox, FaPlus } from 'react-icons/fa';
import { AddIcon } from '@chakra-ui/icons';
import Card from 'components/card/Card';

const UploadCardBox = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const toast = useToast();

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Simulating upload progress for demonstration purposes
    let progress = 0;
    const interval = setInterval(() => {
      progress = progress + Math.random() * 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        toast({
          title: 'Upload complete!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    }, 500);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={5}>
      <VStack spacing={4} alignItems="stretch">
        <Flex alignItems={'center'}>
          <FaCloudUploadAlt />
          <Text fontSize="sm" ml={2}>
            Upload from cloud
          </Text>
        </Flex>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .pdf"
          style={{ display: 'none' }}
          id="file-upload"
        />
        <Card>
        <Flex justifyContent='space-between' >
          <Flex alignItems={'center'}>
            <FaDropbox />
            <Text fontSize="sm" ml={2}>
              Dropbox
            </Text>
          </Flex>
          <label htmlFor="file-upload">
            <Button
              as="span"
              leftIcon={<AddIcon width='10px' />}
              variant="outline"
            >
              <Text fontSize={15} fontWeight={400}>
                Attach File
              </Text>{" "}
            </Button>
          </label>
        </Flex>
        </Card>
        {selectedFiles.length > 0 && (
          <VStack spacing={2} align="stretch">
            {selectedFiles.map((file, index) => (
              <Box key={index} borderWidth="1px" p={2} borderRadius="md">
                <Text>{file.name}</Text>
                <Progress mt={2} value={uploadProgress} />
              </Box>
            ))}
            <Center>
              <Button
                colorScheme="teal"
                onClick={handleUpload}
                isDisabled={uploadProgress > 0}
              >
                Upload
              </Button>
            </Center>
          </VStack>
        )}
      </VStack>
      {selectedFiles.length > 0 && (
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={() => setSelectedFiles([])}
        />
      )}
    </Box>
  );
};

export default UploadCardBox;
