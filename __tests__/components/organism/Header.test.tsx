import { render, fireEvent } from "@testing-library/react";
import { Header } from "@/components/organism/Header";
import { ColorModeContext } from "@/theme/CustomThemeProvider";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "@/theme/theme";

describe("Header component", () => {
  it("render the title", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Next AI App")).toBeInTheDocument();
  });

  it("toggles color mode when switch is clicked", () => {
    const toggleColorModeMock = jest.fn();

    const { getByRole } = render(
      <ColorModeContext.Provider
        value={{ toggleColorMode: toggleColorModeMock }}
      >
        <ThemeProvider theme={darkTheme}>
          <Header />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );

    const switchElement = getByRole("checkbox");
    fireEvent.click(switchElement);

    expect(toggleColorModeMock).toHaveBeenCalledTimes(1);
  });
});
