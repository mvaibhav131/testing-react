import { render ,screen } from "@testing-library/react";
import App from "../App"
import { Button } from "./Button";

describe("Button Test", () => {
    test("should have button in the dom", ()=> {
      render(<Button>Click me</Button>)
    //   screen.debug();
      let button = screen.getByText("Click me");
      expect(button).toBeInTheDocument;
    });
     test("should render based on testid",()=> {
        render(<Button>Click me</Button>)
        let button = screen.getByTestId("cButton");
        expect(button).toBeInTheDocument
     })
});