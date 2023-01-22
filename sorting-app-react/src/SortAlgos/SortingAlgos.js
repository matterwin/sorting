
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
        let firstHalfOfArray = array.slice(0, array.length / 2);
        let secondHalfOfArray = array.slice(array.length / 2);

        

        

    }

    return array;
}