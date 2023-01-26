import React, { useState, useEffect, useRef } from 'react'
import * as sortingAlgos from "../SortAlgos/SortingAlgos"

import "./VisualSorting.css"

function VisualSorting() {

    //should change interval speed based on how long the set is via useState and if statements to see if the set is big.
    //if the set is big than setState to what ever interval like 50 or maybe 25 ms

    //maybe have user press down button longer to go faster and when they let go slowly go back to normal speed via math formula

    const [array, setArray] = useState([]);
    const [stopInterval, setStopInterval] = useState("");
    const [currentIdx, setCurrentIdx] = useState(-1);
    var initRanNum = Math.floor(Math.random() * (165 - 10 + 1)) + 10;

    useEffect(() => {
        generateArray();
    }, []) 

    function bubbleSort() {
        let isSorted = false;
        let intervalId = setInterval(() => {
            setStopInterval(intervalId)
            if (isSorted) {
                clearInterval(intervalId);
                return;
            }
            isSorted = true;
            for (let i = 0; i < array.length - 1; i++) {

                // setTimeout(()=> setCurrentIdx(i), 1000);
                
                if (array[i] > array[i + 1]) {
                    // setTimeout(()=> setCurrentIdx(i), 100);
                    let tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                    isSorted = false;
                    
                }
                setArray([...array]);
            }
        }, 100);
    }

    function mergeSortCall() {
        mergeSort(array);
    }

    function mergeSort(array) {
    
        if(array.length < 2){
            return array;
        } else {

            const firstHalfOfArray = mergeSort(array.slice(0, Math.floor(array.length / 2)));
            const secondHalfOfArray = mergeSort(array.slice(Math.floor(array.length / 2)));
            
            let indexR = 0;
            let indexL = 0;
            const sortedMergedArray = [];
    
            while(indexR < firstHalfOfArray.length && indexL < secondHalfOfArray.length) {
                if(firstHalfOfArray[indexR] < secondHalfOfArray[indexL]) {
                    sortedMergedArray.push(firstHalfOfArray[indexR++]);
                } else {
                    sortedMergedArray.push(secondHalfOfArray[indexL++]);
                }
            }
        
                setTimeout(() => {setArray([...sortedMergedArray.concat(firstHalfOfArray.slice(indexR)).concat(secondHalfOfArray.slice(indexL))])}, 10);
                return sortedMergedArray.concat(firstHalfOfArray.slice(indexR)).concat(secondHalfOfArray.slice(indexL));
                
            }
    }

    function quickSort() {
        const quickSortArray = sortingAlgos.quickSort(array);
        console.log(array);
        console.log(quickSortArray);

        setArray([...quickSortArray]);
    }

    function heapSort() {
        const heapSortArray = sortingAlgos.heapSort(array);
        console.log(heapSortArray);
        setArray([...heapSortArray]);
    }
    
    
    function generateArray() {

        //165 is max i
        //10 is min i
        
        for(let i=0; i<initRanNum; i++) {
            setArray(prevArray => [...prevArray, Math.floor(Math.random() * (1000 - 5 + 1)) + 5]);
        }
    }

    function resetArray() {
        window.clearInterval(stopInterval);
        setCurrentIdx(-1);
        initRanNum = 50; //Math.floor(Math.random() * (165 - 10 + 1)) + 10;
        setArray([]);
        generateArray();
    }

    return(
        <>
            <div className="nav-container">
                <button onClick={resetArray} className="Random-button">Randomize</button>
                <button onClick={bubbleSort} className="sort-buttons">Bubble Sort</button>
                <button onClick={mergeSortCall} className="sort-buttons">Merge Sort</button>
                <button onClick={quickSort} className="sort-buttons">Quick Sort</button>
                <button onClick={heapSort} className="sort-buttons">Heap Sort</button>
            </div>
            <div className="bar-container">
                {array.map((value, index) => (
                    <div key={index} className="bars" style={{width: value+'px', backgroundColor: currentIdx === index ? "#aa5555" : "#fff"}}>
                        {value}
                    </div>
                ))}
            </div>
        </>
    );

}

export default VisualSorting;