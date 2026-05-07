import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AllTheBooks from "../components/AllTheBooks";
import fantasyBook from "../data/fantasy.json";

describe("Verifica la lunghezza dell'array di libri dei json", () => {
  it("verifica lunghezza", () => {
    render(<AllTheBooks books={fantasyBook} />);

    const tuttelecard = screen.queryAllByRole("img");
    expect(tuttelecard).toHaveLength(fantasyBook.length);
  });
});
