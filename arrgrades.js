const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
// your code goes here
let range;
let max=0;
let min=grades[0];
function findRange(grades)
{
for(let i=0; i<grades.length; i++)
{
    if(max<grades[i])
    {
        max=grades[i];
    }
    if(min>grades[i])
    {
        min=grades[i];
    }
}
    range= max-min;
    return range;
}

function median(numbers){
    return sortedCopy(numbers)[middleIndex(numbers)];
}
function secondHalf(array){
    return array.slice(middleIndex(array));
}

function sortedCopy(numbers){
    return numbers.slice.sort(largerthan);
}
function middleIndex(array){
    return Math.floor(array.length/2);
}

function getStatistics(grades){
    return "stats:\n\tRange: " + findRange(grades) + "\n\tMedian: " + median(grades) +
    "\n\tHalf Range: " + findRange(secondHalf(grades))
}









