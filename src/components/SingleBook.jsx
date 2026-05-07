import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("Test selezione libri", () => {
  it("cambia il bordo al click", () => {
    render(<App />);
  });
});
