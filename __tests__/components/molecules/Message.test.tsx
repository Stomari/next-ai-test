import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Message } from "@/components/molecules/Message";

describe("Message component", () => {
  it("renders correctly for user message", () => {
    const props = {
      isUser: true,
      content: "Hello, how are you?",
    };
    render(<Message {...props} />);

    const userMessage = screen.getByText("You");
    const content = screen.getByText("Hello, how are you?");

    expect(userMessage).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it("renders correctly for AI message", () => {
    const props = {
      isUser: false,
      content: "I am doing great, thanks!",
    };
    render(<Message {...props} />);

    const aiMessage = screen.getByText("NextAI");
    const content = screen.getByText("I am doing great, thanks!");

    expect(aiMessage).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
