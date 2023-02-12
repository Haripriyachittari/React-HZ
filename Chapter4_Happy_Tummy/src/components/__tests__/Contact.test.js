import { render } from "@testing-library/react";
import Contact from "../../Pages/Contact";

test("contact rendered", () => {
  //Load header
  const contact = render(<Contact />);
  const contactContent = contact.getByTestId("contact-content");
  console.log(contactContent);
  expect(contactContent.innerHTML).toBe("contact");
});
