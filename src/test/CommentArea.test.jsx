import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("Verifica del componente CommentArea", () => {
  it("verifica che il pulsante di invio sia montato", () => {
    render(<CommentArea />);

    const button = screen.getByRole("button", { name: /invia/i });

    expect(button).toBeInTheDocument();
  });
});
