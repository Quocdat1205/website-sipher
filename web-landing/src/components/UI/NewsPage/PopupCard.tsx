import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getDetailsNews } from "@hooks/api/news";
import LayoutMedium from "./LayoutMedium";
import LayoutTwitter from "./LayoutTwitter";

export interface DetailsNewsProps {
  thumbnail?: string;
  title?: string;
  content?: string;
  description?: string;
  link: string;
  type: "medium" | "twitter";
}
const PopupCard = () => {
  const router = useRouter();
  const { published } = router.query;
  const { data: details, isLoading } = useQuery(["news", published], () => getDetailsNews(published), {
    enabled: !!published,
  });

  return (
    <Modal
      isOpen={!!router.query.published}
      isCentered
      onClose={() => router.push("news", undefined, { scroll: false })}
    >
      <ModalOverlay bg="blackAlpha.900" />
      <ModalContent
        my={["0", `${details && details.type === "medium" ? "0" : "3.75rem"}`]}
        maxW="64rem"
        h={["100%", "auto"]}
        overflow="hidden"
      >
        <ModalBody pos="relative" overflow="hidden" h="100%" w="100%" p={0} bg="about.cardGray" zIndex={99}>
          <ModalCloseButton
            zIndex={1}
            color="main.darkRed"
            size="lg"
            _hover={{ color: "red" }}
            _focus={{ shadow: "none" }}
          />
          {!isLoading && details ? (
            details.type === "medium" ? (
              <LayoutMedium details={details} />
            ) : details.type === "twitter" ? (
              <LayoutTwitter details={details} />
            ) : (
              "Not Found"
            )
          ) : (
            "Loading ..."
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopupCard;
