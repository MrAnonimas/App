import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm", () => {
  render(<BookingForm />);
  const submitBtn = screen.getByText("Book Reservation Now");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(<BookingForm />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-04-15" } });
  const timeDropDown = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeDropDown, { target: { value: "17:30" } });
  expect(timeDropDown.value).toEqual("17:30");
});