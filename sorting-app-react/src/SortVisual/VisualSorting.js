import React, { useState, useEffect } from 'react'

import "./VisualSorting.css"

function VisualSorting() {

    const [array, setArray] = useState([]);
    var initRanNum = 0;

    useEffect(() => {
        generateInitArray();
        initRanNum = Math.floor(Math.random() * (165 - 10 + 1)) + 10;
        console.log(initRanNum);
    }, []) 

    function mergeSort() {}
    function bubbleSort() {}
    function heapSort() {}
    function quickSort() {}
    
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
                <button className="sort-buttons">Bubble Sort</button>
                <button className="sort-buttons">Merge Sort</button>
                <button className="sort-buttons">Quick Sort</button>
                <button className="sort-buttons">Heap Sort</button>
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