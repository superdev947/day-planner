import React, { useState } from "react";
import { Box, TextField, Button, Chip, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskInputProps {
  onSubmit: (tasks: string[]) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onSubmit }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [currentTask, setCurrentTask] = useState<string>("");

  const handleAddTask = () => {
    if (currentTask.trim() && !tasks.includes(currentTask.trim())) {
      setTasks([...tasks, currentTask.trim()]);
      setCurrentTask("");
    }
  };

  const handleRemoveTask = (taskToRemove: string) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tasks.length > 0) {
      onSubmit(tasks);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        What do you want to accomplish today?
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Add a task"
          value={currentTask}
          onChange={(e) => setCurrentTask(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && (e.preventDefault(), handleAddTask())
          }
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          disabled={!currentTask.trim()}
          sx={{ minWidth: "120px" }}
        >
          <AddIcon /> Add
        </Button>
      </Stack>

      {tasks.length > 0 && (
        <>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Your tasks:
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", gap: 1 }}
            >
              {tasks.map((task) => (
                <Chip
                  key={task}
                  label={task}
                  onDelete={() => handleRemoveTask(task)}
                  deleteIcon={<DeleteIcon />}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            fullWidth
            size="large"
          >
            Optimize My Day!
          </Button>
        </>
      )}
    </Box>
  );
};

export default TaskInput;
