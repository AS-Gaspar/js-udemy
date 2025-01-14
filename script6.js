const nums = [2,2,1,1,1,2,2]

const elementoMaisRepetido = (nums) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
        if (map.get(nums[i]) > nums.length / 2) return nums[i]
    }
}

console.log(elementoMaisRepetido(nums))