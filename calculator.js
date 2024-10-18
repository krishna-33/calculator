const add = (numbers) => {

  if (numbers == "") {
    return 0;
  }

  let delimiter = ",";
  let number_str = numbers;

  number_str = number_str.replace(/\n/g, delimiter);
  let number_array = number_str.split(delimiter).map(Number);
  let negative_numbers = number_array.filter((i) => i < 0);

  if (negative_numbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return number_array.reduce((acc, item) => acc + item, 0)
};
