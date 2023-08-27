export const limitNumber = (input: number): string => {
  if (typeof input !== "number") {
    throw new Error("Input must be a number");
  }

  if (input > 99) {
    return "+9";
  }

  return input.toString();
};
