import React, { useState } from 'react';
import './Math.css';

function Math() {
    const [runningTotal, setRunningTotal] = useState(0); // ket qua ngam
    const [temp, setTemp] = useState(0);
    const [buffer, setBuffer] = useState('0');      // hien thi ket qua
    const [previousOperator, setPreviousOperator] = useState(null);  // phep tinh 

    const handleSymbol = (symbol) => {
        switch (symbol) {
            case 'C':
                setBuffer('0');
                setRunningTotal(0);
                setPreviousOperator(null);
                break;
            case '=':
                console.log("=", previousOperator, buffer, runningTotal)
                if (previousOperator !== null) {
                    // flushOperation(parseInt(buffer));
                    setPreviousOperator(null);
                    setBuffer(temp)
                    setRunningTotal(0)
                }
                break;
            case '←':
                if (buffer.length === 1) {
                    setBuffer('0');
                } else {
                    setBuffer(buffer.substring(0, buffer.length - 1));
                }
                break;
            case '+':
            case '−':
            case '×':
            case '÷':
                setPreviousOperator(symbol);
                if (runningTotal === 0) {
                    setRunningTotal(parseInt(buffer));
                    setBuffer('0');
                } else {
                    flushOperation(parseInt(buffer));
                    setBuffer(runningTotal.toString());
                }
                break;
            default:
                break;
        }
    };
    

    const handleMath = (symbol) => {
        if (buffer === '0') {
            return;
        }

        const intBuffer = parseInt(buffer);

        if (runningTotal === 0) {
            setRunningTotal(intBuffer);
        } else {
            flushOperation(intBuffer);
        }
        setPreviousOperator(symbol);
        setBuffer('0');
    };

    const flushOperation = (intBuffer) => {
        switch (previousOperator) {
            case '+':
                setRunningTotal(prev => {
                    return prev + intBuffer
                });
                break;
            case '−':
                setRunningTotal(runningTotal - intBuffer);
                break;
            case '×':
                setRunningTotal(runningTotal * intBuffer);
                break;
            case '÷':
                setRunningTotal(runningTotal / intBuffer);
                break;
            default:
                break;
        }
    };

    const tempOperation = (intBuffer) => {
        switch (previousOperator) {
            case '+':
                return runningTotal + intBuffer
            case '−':
                return runningTotal - intBuffer
            case '×':
                return runningTotal * intBuffer
            case '÷':
                return runningTotal / intBuffer
            default:
                break;
        }
    };

    const handleNumber = (numberString) => {
        // console.log(84, numberString)
        let tempBuffer
        if (previousOperator === '+') {
            if (buffer === '0') {
                setBuffer(numberString);
                tempBuffer = numberString
            } else {
                setBuffer(buffer + numberString);
                tempBuffer = buffer + numberString
            }
            setTemp(tempOperation(parseInt(tempBuffer)))
        }
        else if (previousOperator === '−') {
            if (buffer === '0'){
                setBuffer(numberString);
                tempBuffer = numberString
            }else{
                setBuffer(buffer - numberString);
                tempBuffer = buffer - numberString
            }
            setTemp(tempOperation(parseInt(tempBuffer)))
        }
        else if (previousOperator === '×'){
            if (buffer === '0'){
                setBuffer(numberString);
                tempBuffer = numberString
            }else{
                setBuffer(buffer * numberString);
                tempBuffer = buffer * numberString
            }
            setTemp(tempOperation(parseInt(tempBuffer)))
        }
        else if (previousOperator === '÷'){
            if (buffer === '0'){
                setBuffer(numberString);
                tempBuffer = numberString
            }else{
                setBuffer(buffer / numberString);
                tempBuffer = buffer / numberString
            }
            setTemp(tempOperation(parseInt(tempBuffer)))
        }
        else {
            if (buffer === '0') {
                setBuffer(numberString);
            } else {
                setBuffer(buffer + numberString);
            }
        }
        
    };

    const buttonClick = (value) => {
        if (isNaN(value)) {
            handleSymbol(value);
        } else {
            handleNumber(value);
        }
    };

    return(
        <div className='mbody'>
            <div className="calc-wrapper">
                <section className="calc-screen">
                    {buffer}
                </section>
                <section className="calc-buttons" onClick={(event) => buttonClick(event.target.innerText)}>
                    <div className="calc-button-row">
                        <button className="calc-button double">
                            C
                        </button>
                        <button className="calc-button">
                            &larr;
                        </button>
                        <button className="calc-button">
                            &divide;
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button">
                            7
                        </button>
                        <button className="calc-button">
                            8
                        </button>
                        <button className="calc-button">
                            9
                        </button>
                        <button className="calc-button">
                            &times;
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button">
                            4
                        </button>
                        <button className="calc-button">
                            5
                        </button>
                        <button className="calc-button">
                            6
                        </button>
                        <button className="calc-button">
                            &minus;
                        </button>
                    </div>
                    
                    <div className="calc-button-row">
                        <button className="calc-button">
                            1
                        </button>
                        <button className="calc-button">
                            2
                        </button>
                        <button className="calc-button">
                            3
                        </button>
                        <button className="calc-button" onClick={() => handleSymbol('+')}>
                            +
                        </button>
                    </div>

                    <div className="calc-button-row">
                        <button className="calc-button triple">
                            0
                        </button>
                        <button className="calc-button" onClick={() => handleSymbol('=')}>
                            =
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Math;
