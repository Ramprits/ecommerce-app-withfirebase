import React from "react";
import { Spinner } from "@chakra-ui/core";
const Loading = () => {
  return (
    <div className="has-text-centered" style={{ marginTop: "5em" }}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default Loading;
