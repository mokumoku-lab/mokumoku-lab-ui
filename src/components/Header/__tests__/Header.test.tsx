import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  test("Should display logo.", async () => {
    render(<Header></Header>);
    const logo = await screen.findByRole("img");
    expect(logo).toHaveProperty("alt", "Mokumokulab Log");
  });
});
