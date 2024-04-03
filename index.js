var threeSumClosest = function(nums, target) {
    if(nums.length <= 3) return nums.reduce((count,item) => item+count, 0) 
    let resultList = [];
    let disList = [];
    for(let i = 0;i<nums.length-3;i++){
        let count = nums[i] + nums[i+1]
        for(j=2;j<=nums.length-1;j++){
            let fiCount = count+ nums[j]
            resultList.push(fiCount)
            disList.push(fiCount - target)
        }
    }
    console.log(resultList,disList);
    const min = Math.min(...disList);
    const index = disList.findIndex(item => item == min);
    return resultList[index];
};

console.log(threeSumClosest([-1,2,1,-4], 1));

