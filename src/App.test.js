import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("renders first name", () => {
  const { getByText } = render(<App />);
  const firstName = getByText(/first name/i);
  expect(firstName).toBeInTheDocument();
});
test("renders last name", () => {
  const { getByText } = render(<App />);
  const lastName = getByText(/last name/i);
  expect(lastName).toBeInTheDocument();
});
test("renders email", () => {
  const { getByText } = render(<App />);
  const email = getByText(/email/i);
  expect(email).toBeInTheDocument();
});
test("renders message", () => {
  const { getByText } = render(<App />);
  const message = getByText(/message/i);
  expect(message).toBeInTheDocument();
});
test("renders tos", () => {
  const { getByText } = render(<App />);
  const tos = getByText(/tos/i);
  expect(tos).toBeInTheDocument();
});
