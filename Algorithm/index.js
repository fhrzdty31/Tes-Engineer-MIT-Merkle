const multiple = (multiple, start, total) => {
    const end = start + ((total - 1) * multiple)
    let result = []
    do {
        result.push(start)
        start += multiple
    } while (start <= end)
    return result.toString()
}

console.log(multiple(1, 1, 5))
console.log(multiple(2, 2, 5))
console.log(multiple(3, 3, 5))
console.log(multiple(4, 4, 5))
console.log(multiple(5, 5, 5))