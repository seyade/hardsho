import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Editor from "./Editor";

const onChange = jest.fn();

describe("Component: Editor", () => {
	it("renders a HTML Editor", () => {
		render(<Editor onChange={onChange} title="HTML" />);

		const heading = screen.getByText("HTML");
		expect(heading).toBeInTheDocument();
	});

	it("renders a CSS Editor", () => {
		render(<Editor onChange={onChange} title="CSS" />);

		const heading = screen.getByText("CSS");
		expect(heading).toBeInTheDocument();
	});

	it("renders a JS Editor", () => {
		render(<Editor onChange={onChange} title="JS" />);

		const heading = screen.getByText("JS");
		expect(heading).toBeInTheDocument();
	});
});
