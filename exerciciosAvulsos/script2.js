const nums = [2,2,1,1,1,2,2]

var majorityElement = function(nums) {
    const mapElements = new Map()
    for (let num = 0; num < nums.length; num++) {
        let n = nums[num]
        if (mapElements.has(nums[num])) {
            mapElements.get(n++)
        } else {
            mapElements.set(n, 1)
        }
        if (mapElements.get(n) > nums.length / 2) return mapElements.get(n)
    }
};

console.log(majorityElement(nums))