
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