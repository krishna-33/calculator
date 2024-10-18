const add = (numbers) => {

  if (numbers == "") {
    return 0;
  }

  let delimiter = ",";
  let number_str = numbers;

  if (numbers.startsWith("//")) {
    const new_numbers = numbers.split("\n");
    delimiter = new_numbers[0][2];
    number_str = new_numbers[1];
  }

  number_str = number_str.replace(/\n/g, delimiter);
  let number_array = number_str.split(delimiter).map(Number);
  let negative_numbers = number_array.filter((i) => i < 0);

  if (negative_numbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negative_numbers.join(", ")}`
    );
  }

  return number_array.reduce((acc, item) => acc + item, 0);
  
};

module.exports = add;
