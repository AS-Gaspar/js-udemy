const numRows = 10

const generate = function (numRows) {
    const rows = []
    for (i = 0; i < numRows; i++) {
        const row = []
        rows.push(row)
        for (j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1)
            } else {
                previousRow = rows[i - 1]
                row.push(previousRow[j - 1] + previousRow[j])
            }
        }
    }
    return rows
}

console.log(generate(numRows))