// LoadingIndicator.tsx
import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const LoadingIndicator: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        gap: 3,
      }}
    >
      <CircularProgress size={80} thickness={4} />
      <Typography variant="h6" align="center">
        Analyzing your tasks and creating the perfect schedule...
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary">
        Our AI is considering time constraints, energy levels, and priorities.
      </Typography>
    </Box>
  );
};

export default LoadingIndicator;
