import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

// Target:
import {Hello} from "./TestTarget";

let containerHello = null;

beforeEach(() => {
  containerHello = document.createElement("div");
  document.body.appendChild(containerHello);
});

afterEach(() => {
  unmountComponentAtNode(containerHello);
  containerHello.remove();
  containerHello = null;
});

// test(name, function, timeout). Or you can use it() = alias.
test("Renders w/ or w/o a name", () => {
    // 1:
    act(() => {
      // Render components:
      render(<Hello/>, containerHello);
    });
    // Make assertions:
    expect(containerHello.textContent).toBe("Hey, stranger");

    //2:
    act(() => {
      render(<Hello name={'Jenny'}/>, containerHello);
    });
    expect(containerHello.textContent).toBe("Hello, Jenny");

    //3:
    act(() => {
      render(<Hello name={'Bob'}/>, containerHello);
    });
    expect(containerHello.textContent).toBe("Hello, Bob");

  }
);




