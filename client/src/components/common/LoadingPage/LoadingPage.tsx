import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

const LoadingPage: React.FC = () => {
  return (
    <Box position="relative" height="100vh">
      <Box
        position="absolute"
        right="0"
        left="0"
        bottom="0"
        top="0"
        margin="auto"
        width="40px"
        height="40px"
      >
        <CircularProgress disableShrink />
      </Box>
    </Box>
  );
};

export default LoadingPage;
