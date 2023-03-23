import { fireEvent, render ,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import App from "../App";
import { Button } from "./Button";

describe("Button Test", () => {

    test("should have button in the dom", ()=> {
      render(<Button>Click me</Button>)
    //   screen.debug();
      let button = screen.getByText("Click me");
      expect(button).toBeInTheDocument;
    });
    
     test("should render based on testid",()=> {
        render(<Button>Click me</Button>);
        let button = screen.getByTestId("cButton");
        expect(button).toBeInTheDocument
     });

     test("should render the empty button",()=> {
      render(<Button></Button>)
      let button =screen.getByTestId("cButton");
      expect(button).toBeEmptyDOMElement();
     });

     test("should change theme",()=>{
      render(<App></App>);
      let h3= screen.getByText("Theme is light");
      expect(h3).toBeInTheDocument();
      expect(h3).toHaveTextContent("light");

      let themeButton = screen.getByText("Change Theme");
      // userEvent.click(themeButton) 
      fireEvent.click(themeButton);
      //after clicking the button check dark text is present.
      expect(h3).toHaveTextContent("dark");
      //again click to the button and check light text is present.
      fireEvent.click(themeButton);
      expect(h3).toHaveTextContent("light");
     });

     test("should call the given function",()=>{
      const mockfn=jest.fn();//jest function is available from globally.
      render(<Button onClick={mockfn}>Click me</Button>);
      let btn=screen.getByText("Click me");
      fireEvent.click(btn);
      fireEvent.click(btn);
      expect(mockfn).toBeCalledTimes(2);
     });

     test("Snapshot is Captured or Not",()=>{
      const tree= renderer.create(<Button>Counter</Button>).toJSON();
      expect(tree).toMatchSnapshot();
   });
});