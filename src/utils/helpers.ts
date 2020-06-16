export const truncate = (input: string, target = 10) =>
  input.length > target - 3 ? `${input.substring(0, target - 3)}...` : input;

export default { truncate };
