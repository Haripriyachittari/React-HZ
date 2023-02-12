import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
test("Footer is present", () => {
  render(<Footer />);
  console.log(screen.getByTestId("company"));

  expect(screen.getByTestId("company").innerHTML).toBe("COMPANY");
});
