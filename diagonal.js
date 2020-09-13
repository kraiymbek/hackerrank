function hourglassSum(arr) {
    let leftSum = 0;
    let rightSum = 0;


    let j = 0;
    for(let i = 0; i < arr.length; i++) {
       leftSum += arr[i][j];
       j++;
    }

    let r = 0;
    for(let i = arr.length - 1; 0 <= i; i--) {
        rightSum += arr[i][r];
        r++;
     }

    return Math.abs(leftSum - rightSum);
}

const sampleArray = [
    [1, 1, 5],
    [0, 1, 0],
    [1, 1, 2],
];

console.log(hourglassSum(sampleArray))