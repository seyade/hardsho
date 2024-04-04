import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "./page";

describe("Home", () => {
	it("should render properly", () => {
		render(<Home />);

		const homepage = screen.getByText("Showcase how your code is living");

		expect(homepage).toBeInTheDocument();
	});
});
