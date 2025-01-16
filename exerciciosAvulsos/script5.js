const list1 = [1, 2, 4]
const list2 = [5, 6, 1]

const mergeTwoLists = function(list1, list2) {
    const mergeList = list1.concat(list2)
    return mergeList.sort()
}

console.log(mergeTwoLists(list1, list2)) 