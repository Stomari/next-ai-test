import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AiIcon from "@mui/icons-material/GroupWork";

type TMessage = {
  isUser: boolean;
  content: string;
};

export const Message = (props: TMessage) => {
  const { isUser, content } = props;
  return (
    <Box sx={{ marginBottom: "32px" }}>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: isUser ? "end" : "start",
          marginBottom: "8px",
        }}
      >
        {!isUser && <AiIcon />}
        <Typography
          sx={{
            textAlign: isUser ? "right" : "left",
            fontWeight: "bold",
            color: "text.primary",
            marginRight: isUser ? "8px" : "",
            marginLeft: !isUser ? "8px" : "",
          }}
        >
          {isUser ? "You" : "NextAI"}
        </Typography>
        {isUser && <AccountCircleIcon />}
      </Box>
      <Typography sx={{ textAlign: isUser ? "right" : "left" }}>
        {content}
      </Typography>
    </Box>
  );
};
