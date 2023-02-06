import { render ,screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Test", () => {
    test("should have button in the dom", ()=> {
      render(<Button>Click me</Button>)
      let button = screen.getByText("Click me");
      expect(button).toBeInTheDocument;
    });
});