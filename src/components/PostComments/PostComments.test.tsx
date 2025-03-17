import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App"; // Certifique-se de importar corretamente o componente que contém a lógica de comentários

test("insere dois comentários na lista", () => {
  render(<App />);

  const input = screen.getByTestId("comment-input");
  const button = screen.getByTestId("submit-button");

  fireEvent.change(input, { target: { value: "Primeiro comentário" } });
  fireEvent.click(button);

  fireEvent.change(input, { target: { value: "Segundo comentário" } });
  fireEvent.click(button);

  expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
  expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
});