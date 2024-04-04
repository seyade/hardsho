import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Project from "./Project";

describe("Component: Project", () => {
	it("renders a heading", () => {
		const onChange = jest.fn();

		render(<Project projectName="Project one" />);

		const heading = screen.getByText("Project one");

		expect(heading).toBeInTheDocument();
	});
});
