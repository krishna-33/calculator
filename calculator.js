const add = (numbers) => {

    if(numbers == ""){
        return 0
    }
 
    let delimiter = ","
    let number_str = numbers

    number_str = number_str.replace(/\n/g, delimiter)
    let number_array = number_str.split(delimiter).map(Number)

}