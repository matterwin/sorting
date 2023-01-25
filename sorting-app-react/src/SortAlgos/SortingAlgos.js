import "../SortVisual/VisualSorting.css"


export const bubbleSort = array => {

    var somewhereItemSwapped = true;

    while(somewhereItemSwapped) {
        somewhereItemSwapped = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                somewhereItemSwapped = true;
            }
        }
    }

    

    return array;
}

export const mergeSort = array => {

    if(array.length < 2){
        return array;
    }
    else {

        const firstHalfOfArray = mergeSort(array.slice(0, Math.floor(array.length / 2)));
        const secondHalfOfArray = mergeSort(array.slice(Math.floor(array.length / 2)));
        
        let indexR = 0;
        let indexL = 0;
        const sortedMergedArray = [];

        while(indexR < firstHalfOfArray.length && indexL < secondHalfOfArray.length) {
            if(firstHalfOfArray[indexR] < secondHalfOfArray[indexL])
                sortedMergedArray.push(firstHalfOfArray[indexR++]);
            else
                sortedMergedArray.push(secondHalfOfArray[indexL++]);
        }

        return sortedMergedArray.concat(firstHalfOfArray.slice(indexR)).concat(secondHalfOfArray.slice(indexL));
    }
}

export const quickSort = array => {

    if(array.length === 1)
        return array;

    const leftSide = [];
    const rightSide = [];
    const equalToPivot = [];

    let leftPtr = 0;
    let rightPtr = array.length-1;
    let pivot = Math.floor(array.length/2);

    // console.log("intial LeftPtr:" + array[leftPtr]);
    console.log("inital Pivot:" + array[pivot]);
    // console.log("intial RightPtr:" + array[rightPtr]);

    while(leftPtr !== pivot) {

       // console.log("leftPtr:       " + array[leftPtr]);

        if(array[leftPtr] < array[pivot]) {
            leftSide.push(array[leftPtr++]);
        }
        else if(array[leftPtr] === array[pivot]) {
            equalToPivot.push(array[leftPtr++]);
        }
        else
            rightSide.push(array[leftPtr++]);
    }

    while(rightPtr !== pivot) {

       // console.log("rightPtr:       " + array[rightPtr]);

        if(array[rightPtr] < array[pivot]) {
            leftSide.push(array[rightPtr--]);
        }
        else if(array[rightPtr] === array[pivot]) {
            equalToPivot.push(array[rightPtr--]);
        }
        else
            rightSide.push(array[rightPtr--]);
    }


    console.log("Left array:       " + leftSide);
    console.log("Right array:       " + rightSide);


    if(leftSide.length > 0) quickSort(leftSide);
    if(rightSide.length > 0) quickSort(rightSide);

   
    const sortedQuickArray = []; 
  //  sortedQuickArray.concat(leftSide).concat(equalToPivot).concat(rightSide);
   // console.log("Final sorted array:                                   " + sortedQuickArray);
    
    return sortedQuickArray.concat(rightSide).concat(equalToPivot).concat(leftSide);
}

// export const quickSort = array => {
    
// }

export const heapSort = array => {
    
}