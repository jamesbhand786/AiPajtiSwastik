// Chakra imports
import { Box, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #ffc600 100%)";

  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Box mb={{ base: "0px", "2xl": "10px" }} {...rest}>
      <Text color={textColorPrimary} fontWeight="bold" fontSize="2xl" my="15px">
        Plan Features :
      </Text>
      <Text color={textColorSecondary} fontSize="md" me="26px" mb="20px">
        Basic Al agent functions (text generation, database management){" "}
        <hr style={{ border: "0", marginBottom: "5px" }} />
        10 minutes of text generation (10,000 characters){" "}
        <hr style={{ border: "0", marginBottom: "5px" }} />
        5 image generations <hr style={{ border: "0", marginBottom: "5px" }} />
        10 minutes of speech generation{" "}
        <hr style={{ border: "0", marginBottom: "5px" }} />
        Limited ASR and voice cloning{" "}
        <hr style={{ border: "0", marginBottom: "5px" }} />
        Automatic translation (max 5 texts){" "}
        <hr style={{ border: "0", marginBottom: "5px" }} />{" "}
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Price"
          value="$0 (for 1 Month)	"
        />
        <Information boxShadow={cardShadow} title="Token" value="500 Tokens	" />
        <Information
          boxShadow={cardShadow}
          title="Genius Generations"
          value="1 Free Use"
        />
        <Information
          boxShadow={cardShadow}
          title="Brainpower Levels"
          value="1 - 3"
        />
        <Information
          boxShadow={cardShadow}
          title="Free Generations"
          value="N A"
        />
      </SimpleGrid>
    </Box>
  );
}
