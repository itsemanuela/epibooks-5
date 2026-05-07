import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("verifichiamo se il componente CommentArea è stato correttamente montato", () => {
  it("verifica in corso", () => {
    render(<CommentArea />);

    const button = screen.getByRole("button", { name: /invia/i });
    expect(button).toBeInTheDocument;
  });
});
