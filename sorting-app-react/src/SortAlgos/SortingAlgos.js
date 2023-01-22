
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

}

export const heapSort = array => {
    
}