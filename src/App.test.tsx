import { fireEvent, render } from "@testing-library/react";

import { products } from "./modules/products/data";
import App from "./App";

test("It renders properly", () => {
  const { container } = render(<App />);

  const itemId = 1;
  const item = products.find((it) => it.id === itemId)!;
  const cardEl = container.querySelector(`[data-testid="${itemId}"]`)!;
  it("Renders title", () => {
    const titleEl = cardEl.querySelector(".card__title")!;
    expect(titleEl.textContent).toBe(item.title);
  });
  it("Renders price", () => {
    const priceEl = cardEl.querySelector(".card__price")!;
    expect(priceEl.textContent).toBe("$" + item.price.toFixed(2));
  });
});

test("It applys promos properly", () => {
  const { container, getByRole } = render(<App />);

  const itemId = 2;
  const discountExpected = 20;
  const item = products.find((it) => it.id === itemId)!;
  const cardEl = container.querySelector(`[data-testid="${itemId}"]`)!;
  it("Renders title", () => {
    const titleEl = cardEl.querySelector(".card__title")!;
    expect(titleEl.textContent).toBe(item.title);
  });
  const priceEl = cardEl.querySelector(".card__price")!;
  // expect(priceEl.textContent).toBe("$22.30");
  expect(priceEl.textContent).toBe("$" + item.price.toFixed(2));

  const button = getByRole("button", { name: /apply promotions/i });
  fireEvent.click(button);
  expect(priceEl.textContent).toBe(
    "$" + (item.price - discountExpected).toFixed(2)
  );
});
