import { Box, TextField, IconButton } from "@mui/material";
import { useRef, KeyboardEvent, ChangeEvent, FormEvent } from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

type TMessageInput = {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value: string;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const MessageInput = (props: TMessageInput) => {
  const { handleSubmit, value, handleInputChange } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  /**
   * "Enter" key submits form instead of breaking line
   * @param event
   */
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      buttonRef.current?.click();
    }
  };

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "16px 24px 40px 24px",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        id="filled-multiline-static"
        label="Message to Next AI"
        multiline
        maxRows={5}
        variant="standard"
        fullWidth
        value={value}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      <Box
        sx={{
          backgroundColor: "action.active",
          borderRadius: 50,
          marginLeft: "8px",
        }}
      >
        <IconButton
          ref={buttonRef}
          type="submit"
          color="primary"
          aria-label="Submit form"
        >
          <SendRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
