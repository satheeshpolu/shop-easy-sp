import { Heading } from "@chakra-ui/react";

const UnderDevelopment = () => {
  return (
    <Heading
      fontSize={{ base: "3xl", md: "4xl" }}
      style={{ color: "#e54c41ff", textAlign: "center" }}
      mb={8}
    >
      (Under Development)
    </Heading>
  );
};

export default UnderDevelopment;
