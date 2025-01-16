const nums = [6,2,6,5,1,2]

const arrayPairSum = function(nums) {
    return nums.sort((a, b) => a-b).filter((a, i) => !(i%2)).reduce((a, b) => a+b, 0) 
}

console.log(arrayPairSum(nums))