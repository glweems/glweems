export const truncate = (input: string, target = 10) =>
  input.length > target - 3 ? `${input.substring(0, target - 3)}...` : input;

export function omit<T = {}>(obj: T, ...keys: Array<keyof T>) {
  let newObj = { ...obj };
  keys.forEach((key) => {
    delete newObj[key];
  });
  return newObj;
}

export function pick<T = {}>(obj: T, ...keys: Array<keyof T>) {
  let picked = {};

  keys.forEach((key) => {
    picked[key] = obj[key];
  });

  return picked;
}
