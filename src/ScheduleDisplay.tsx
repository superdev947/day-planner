// ScheduleDisplay.tsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ScheduleDisplayProps {
  schedule: {
    explanation: string;
    schedule: Array<{
      time: string;
      task: string;
      reason: string;
    }>;
  };
  onReset: () => void;
}

const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({
  schedule,
  onReset,
}) => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Your Optimized Schedule
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        {schedule.explanation}
      </Typography>

      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {schedule.schedule.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" component="span">
                    {item.time}: {item.task}
                  </Typography>
                }
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <CheckCircleIcon color="success" fontSize="small" />
                      {item.reason}
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            {index < schedule.schedule.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={onReset}
        >
          Plan Another Day
        </Button>
      </Box>
    </Paper>
  );
};

export default ScheduleDisplay;
