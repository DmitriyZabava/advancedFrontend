import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui/Button/Button";


describe("Button", () => {
    test("with only render", () => {
        render(<Button>Test</Button>);
        expect(screen.getByText("Test")).toBeInTheDocument()
    });
    test("with theme Clear", () => {
        render(<Button theme={ButtonTheme.CLEAR} >Test</Button>);
        expect(screen.getByText("Test")).toHaveClass("clear");
        screen.debug()
    });


})