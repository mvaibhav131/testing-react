import { fireEvent, render ,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
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
     });

     test("should render the empty button",()=> {
      render(<Button></Button>)
      let button =screen.getByTestId("cButton")
      expect(button).toBeEmptyDOMElement();
     })

     test("should change theme",()=>{
      render(<App></App>)
      let h3= screen.getByText("Theme is light")
      expect(h3).toBeInTheDocument();
      expect(h3).toHaveTextContent("light");

      let themeButton = screen.getByText("Change Theme");
      // userEvent.click(themeButton) 
      fireEvent.click(themeButton)
      expect(h3).toHaveTextContent("dark");

     })
});