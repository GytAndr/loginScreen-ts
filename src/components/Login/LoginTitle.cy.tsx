import LoginTitle from "./LoginTitle";

describe("<LoginTitle>", () => {
	beforeEach(() => {
		cy.mount(<LoginTitle />);
	});
	it("mounts", () => {});
	it('should have "Login" text', () => {
		cy.get('[data-test="title header"]').should("have.text", "Login");
	});
	it("should contain please enter psw and login text", () => {
		cy.get('[data-test="title message"]').should(
			"have.text",
			"Please enter you Login and your Password"
		);
	});
});
