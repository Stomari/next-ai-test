"use client";

import { Box } from "@mui/material";
import { useChat } from "ai/react";
import { Message } from "@/components/molecules/Message";
import { MessageInput } from "@/components/molecules/MessageInput";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100% - 60px)",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {messages.map((message) => (
          <Message
            key={message.id}
            isUser={message.role === "user"}
            content={message.content}
          />
        ))}
      </Box>

      <MessageInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        value={input}
      />
    </Box>
  );
}
