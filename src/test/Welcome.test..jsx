import { render, screen, describe } from "@testing-library/react";
import { expect, it } from "vitest";
import Welcome from "../components/Welcome";

describe("Verifica del componente Welcome", () => {
  it("monta correttamente l'header principale", () => {
    render(<Welcome />);

    const header = screen.getByText(/benvenuti in epibooks!/i);

    expect(header).toBeInTheDocument();
  });

  it("verifica che il componente abbia le classi di bootstrap corrette", () => {
    render(<Welcome />);

    const alertElement = screen.getByRole("alert");

    expect(alertElement).toHaveClass("text-center");
    expect(alertElement).toHaveClass("alert");
  });
});
