import { Button } from "@chakra-ui/react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const BackButtonComponent = () => {
  console.log("BackButtonComponent");
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} colorScheme="teal" variant="outline">
      ← Back
    </Button>
  );
};

// Important: don't provide paranthisis[BackButtonComponent()] at the end
export const BackButton = memo(BackButtonComponent);
