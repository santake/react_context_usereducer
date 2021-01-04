import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

// Target:
import {Hello} from "./TestTarget";


let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders w/ or w/o a name",
  () => {
    // 1:
    act(() => {
      render(<Hello/>, container);
    });
    expect(container.textContent).toBe("Hey, stranger");

    //2:
    act(()=> {
      render(<Hello name={'Jenny'}/>, container);
    });
    expect(container.textContent).toBe("Hello, Jenny");

    //3:
    act(()=> {
      render(<Hello name={'Bob'}/>, container);
    });
    expect(container.textContent).toBe("Hello, Bob");

  }
);




