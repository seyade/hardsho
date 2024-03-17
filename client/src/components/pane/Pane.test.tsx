import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Pane from "./Pane";

describe("Component: Pane", () => {
	it("renders a heading", () => {
		const onChange = jest.fn();

		render(<Pane onChange={onChange} paneTitle="HTML" />);

		const heading = screen.getByRole("heading", { level: 2 });

		expect(heading).toBeInTheDocument();
	});
});
