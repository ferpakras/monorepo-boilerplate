import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import PageExample from "../pages";

test("test", () => {
  const { container } = render(<PageExample />);

  expect(container).toMatchSnapshot();
});
