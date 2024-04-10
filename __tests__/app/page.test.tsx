import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

// Mock the useChat hook
jest.mock("ai/react", () => ({
  useChat: jest.fn(() => ({
    messages: [
      { id: 1, role: "user", content: "Hello!" },
      { id: 2, role: "ai", content: "Hi there!" },
    ],
    input: "",
    handleInputChange: jest.fn(),
    handleSubmit: jest.fn(),
  })),
}));

describe("Home page", () => {
  it("should render received messages", () => {
    render(<Home />);

    const message1 = screen.getByText("Hello!");
    const message2 = screen.getByText("Hi there!");

    expect(message1).toBeInTheDocument();
    expect(message2).toBeInTheDocument();
  });

  it("should render a message input", () => {
    render(<Home />);

    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
});
