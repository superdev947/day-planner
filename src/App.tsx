import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
  Typography,
  Box,
} from "@mui/material";
import TaskInput from "./TaskInput";
import LoadingIndicator from "./LoadingIndicator";
import ScheduleDisplay from "./ScheduleDisplay";
import { generateSchedule } from "./gemini";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  const [schedule, setSchedule] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTasksSubmit = async (tasks: string[]) => {
    setLoading(true);

    try {
      // Simulate LLM API call (in a real app, you'd call OpenAI API here)
      const generatedSchedule = await generateSchedule(tasks);
      setSchedule(generatedSchedule);
    } catch (error) {
      console.error("Error generating schedule:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            color="primary"
          >
            Daily Task Optimizer
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ mb: 3 }}>
            Enter your tasks and we'll create the perfect schedule for your day!
          </Typography>

          {!loading && !schedule && <TaskInput onSubmit={handleTasksSubmit} />}

          {loading && <LoadingIndicator />}

          {!loading && schedule && (
            <ScheduleDisplay
              schedule={schedule}
              onReset={() => {
                setSchedule(null);
              }}
            />
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
