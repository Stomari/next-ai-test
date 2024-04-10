import { render, fireEvent } from "@testing-library/react";
import { MessageInput } from "@/components/molecules/MessageInput";
import "@testing-library/jest-dom";

describe("MessageInput component", () => {
  it("calls handleSubmit when form is submitted", () => {
    const handleSubmitMock = jest.fn();
    const handleInputChangeMock = jest.fn();

    const { getByLabelText } = render(
      <MessageInput
        handleSubmit={handleSubmitMock}
        value=""
        handleInputChange={handleInputChangeMock}
      />
    );

    const inputElement = getByLabelText("Message to Next AI");
    fireEvent.change(inputElement, { target: { value: "Test message" } });

    const formElement = inputElement.closest("form");
    fireEvent.submit(formElement!!);

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    expect(handleInputChangeMock).toHaveBeenCalledTimes(1);
  });

  it("calls handleInputChange when input value changes", () => {
    const handleSubmitMock = jest.fn();
    const handleInputChangeMock = jest.fn();

    const { getByLabelText } = render(
      <MessageInput
        handleSubmit={handleSubmitMock}
        value=""
        handleInputChange={handleInputChangeMock}
      />
    );

    const inputElement = getByLabelText("Message to Next AI");
    fireEvent.change(inputElement, { target: { value: "Test message" } });

    expect(handleInputChangeMock).toHaveBeenCalledTimes(1);
  });

  it('submits form when "Enter" key is pressed', () => {
    const handleSubmitMock = jest.fn((e) => e.preventDefault());
    const handleInputChangeMock = jest.fn();

    const { getByLabelText } = render(
      <MessageInput
        handleSubmit={handleSubmitMock}
        value=""
        handleInputChange={handleInputChangeMock}
      />
    );

    const inputElement = getByLabelText("Message to Next AI");
    fireEvent.change(inputElement, { target: { value: "Test message" } });
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    expect(handleInputChangeMock).toHaveBeenCalledTimes(1);
  });
});
