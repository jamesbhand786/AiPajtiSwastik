import * as React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Spacer, Text, Box, FormControl, FormLabel, Input, Button, ButtonGroup } from '@chakra-ui/react'
import Uploadset from '../uploadset';
export default function UploadStepper() {

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs orientation='vertical'>
        <TabList>
          <Tab>Setup</Tab>
          <Tab>Upload</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontSize='md' fontWeight={500} my={5}>Configure Dataset</Text>
            <FormControl>
              <FormLabel>Name *</FormLabel>
              <Input placeholder='Enter name'         variant='search'
 />              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
              <Spacer my={4} />
              <FormLabel>Description</FormLabel>
              <Input placeholder='Enter description'   variant='search'/>              <ButtonGroup variant='outline' spacing='6' mt={10}>
                <Button>Cancel</Button>
                <Button colorScheme='blue'>Continue</Button>
              </ButtonGroup>
            </FormControl>
          </TabPanel>
          <TabPanel>
          <Uploadset />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}