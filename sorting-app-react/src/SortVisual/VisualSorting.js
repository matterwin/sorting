import React, { useState, useEffect } from 'react'
import * as sortingAlgos from "../SortAlgos/SortingAlgos"

import "./VisualSorting.css"

function VisualSorting() {

    const [array, setArray] = useState([]);
    var initRanNum = Math.floor(Math.random() * (165 - 10 + 1)) + 10;

    useEffect(() => {
        generateInitArray();
    }, []) 

    function bubbleSort() {
        //console.log(array);
       // const sortedArryJS = array.slice().sort(function(a,b){return a - b});
       // console.log(sortedArryJS);
        

        const bubbleSortArray = sortingAlgos.bubbleSort(array);
        console.log(bubbleSortArray);
        console.log(bubbleSortArray.split());

        setArray([...bubbleSortArray]);

    }

    function mergeSort() {
        const mergeSortArray = sortingAlgos.mergeSort(array);
        console.log(mergeSortArray);

        

        setArray([...mergeSortArray]);

    }
    function quickSort() {alert("not implemented yet");}
    function heapSort() {alert("not implemented yet");}
    
    
    function generateInitArray() {

        //165 is max i
        //10 is min i
        
        for(let i=0; i<initRanNum; i++) {
            setArray(prevArray => [...prevArray, Math.floor(Math.random() * (1000 - 5 + 1)) + 5]);
        }
    }

    function resetArray() {
        initRanNum = Math.floor(Math.random() * (165 - 10 + 1)) + 10;
        setArray([]);
        generateInitArray();
    }

    return(
        <>
            <div className="nav-container">
                <button onClick={resetArray} className="Random-button">Randomize</button>
                <button onClick={bubbleSort} className="sort-buttons">Bubble Sort</button>
                <button onClick={mergeSort} className="sort-buttons">Merge Sort</button>
                <button onClick={quickSort} className="sort-buttons">Quick Sort</button>
                <button onClick={heapSort} className="sort-buttons">Heap Sort</button>
            </div>
            <div className="bar-container">
                {array.map((value, index) => (
                    <div key={index} className="bars" style={{width: value+'px' }}>
                        {value}
                    </div>
                ))}
            </div>
        </>
    );

}

export default VisualSorting;