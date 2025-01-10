const nums = [4,1,2,1,2]

const singleNumber = function(nums) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
           const currentValue = map.get(nums[i])
            map.set(nums[i], currentValue + 1) 
        }
        if (map.get(nums[i]) === 2) {
            map.delete(nums[i])
        }
    }
    
}
let result = 0
const myMap = singleNumber(nums)
console.log(myMap)
myMap.forEach((valor, chave) => {
    result = chave
})
return result