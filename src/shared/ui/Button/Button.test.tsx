import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";


describe("Button", () => {
    test("with only render", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument()
    });
    test("with theme Clear", () => {
        render(<Button theme={ThemeButton.CLEAR} >Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
        screen.debug()
    });


})