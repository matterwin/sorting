// export const bubbleSort = array => {
//     var i = 0;
//     var j = 1;
//     var numOfIts = 1;

//     var somewhereItemSwapped = false;

//     for(let k = 0; k < array.length; k++) {
//         do{

//             if(array[i] > array[j]){
//                 let tmp = array[i];
//                 array[i] = array[j];
//                 array[j] = tmp;
//                 numOfIts = 1;
//                 somewhereItemSwapped = true;
//             }else {
//                 if(j === array.length) {
//                     if(numOfIts !== 0){
//                         i = 0;
//                         j = 1;
//                         numOfIts = 0;
//                     }
//                     else {
//                         somewhereItemSwapped = false;
//                         numOfIts = 0;
//                         break;
//                     }
//                 }
//             }
            
            
            
//             i = i + 1;
//             j = j + 1;


//             console.log(array)

//         }while(somewhereItemSwapped || numOfIts === 1)
//     }

//     return array;
// }

export const bubbleSort = array => {

    var somewhereItemSwapped = true;

    while(somewhereItemSwapped) {
        somewhereItemSwapped = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]){
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                somewhereItemSwapped = true;
            }
        }
    }

    return array;
}