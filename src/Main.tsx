import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskInput from "./TaskInput";
import LoadingIndicator from "./LoadingIndicator";
import ScheduleDisplay from "./ScheduleDisplay";

const Main: React.FC = () => {
  const [schedule, setSchedule] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleTasksSubmit = async (tasks: string[]) => {
    setLoading(true);

    try {
      // Simulate LLM API call (in a real app, you'd call OpenAI API here)
      const generatedSchedule = await generateScheduleWithLLM(tasks);
      setSchedule(generatedSchedule);
    } catch (error) {
      console.error("Error generating schedule:", error);
    } finally {
      setLoading(false);
    }
  };

  // Mock function to simulate LLM scheduling
  const generateScheduleWithLLM = async (tasks: string[]): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const sampleSchedule = {
          explanation: `We've analyzed your ${tasks.length} tasks and optimized them based on typical constraints. We've grouped similar activities and considered time-sensitive items first.`,
          schedule: tasks.map((task, index) => ({
            time: `${9 + index}:00${index >= 3 ? "PM" : "AM"}`,
            task,
            reason:
              index === 0
                ? "This seems like the most important and time-sensitive task"
                : index === tasks.length - 1
                ? "This can wait until later in the day"
                : "This fits well in your energy levels at this time",
          })),
        };
        resolve(sampleSchedule);
      }, 2000);
    });
  };

  return (
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
  );
};

export default Main;
