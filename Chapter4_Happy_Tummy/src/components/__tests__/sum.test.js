import { sum } from "../sum";

test("Check for 2 positive numbers", () => {
  expect(sum(2, 7)).not.toBe(0);
});
