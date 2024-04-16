import * as React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByText("Showcase how your code is living");

		expect(heading).toBeInTheDocument();
	});
});
