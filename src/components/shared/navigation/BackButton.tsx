import { Button } from "@chakra-ui/react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BackButtonComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button onClick={() => navigate(-1)} colorScheme="teal" variant="outline">
      {t("shared.actions.back")}
    </Button>
  );
};

// Important: don't provide paranthisis[BackButtonComponent()] at the end
export const BackButton = memo(BackButtonComponent);
