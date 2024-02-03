import React, { useEffect, useState } from 'react'
import index from '../assets/index'
const Compare = (props) => {


    const [data, setData] = useState([]);

    const [first, setFirst] = useState(data.EUR);
    const [second, setSecond] = useState(data.USD);

    const [inputValue, setInputValue] = useState(0)

    const [value, setValue] = useState(0);

    const reverseValues = () => {
        setFirst(second);
        setSecond(first);
    }

    const handleInputValue = (e) => {
        if (e.target.value === "") {
            setInputValue(0);
            setValue(0)
        }
        else if (inputValue === 0) {
            setInputValue(e.target.value.replace(0, ""));
            if (first === 1) {
                setValue((first * second) * e.target.value.replace(0, ""));
            }
            else {
                setValue((second / first) * e.target.value.replace(0, ""))
            }

        }
        else {
            setInputValue(e.target.value)
            if (first === 1) {
                setValue((first * second) * e.target.value);
            }
            else {
                setValue((second / first) * e.target.value)
            }
        }
    }

    // const handleValue = (e) => {

    //     if (e.target.value === "") {
    //         setValue(0);
    //         setInputValue(0);
    //     }
    //     else if (inputValue === 0) {
    //         setValue(e.target.value.replace(0, ""));
    //         if (second === 1) {
    //             setInputValue((first * second) * e.target.value.replace(0, ""));
    //         }
    //         else {
    //             setInputValue((first / second) * e.target.value.replace(0, ""))
    //         }
    //     }
    //     else {
    //         setValue(e.target.value)
    //         if (second === 1) {
    //             setInputValue((first * second) * e.target.value);
    //         }
    //         else {
    //             setInputValue((first / second) * e.target.value)
    //         }
    //     }
    // }

    useEffect(() => {
        setData(props)
        setFirst(props.EUR);
        setSecond(props.USD);
    }, [props])

    useEffect(() => {
        if (first === 1) {
            setValue((first * second) * inputValue);
        }
        else {
            setValue((second / first) * inputValue)
        }
    }, [first, second, inputValue])



    return (
       
            <div className='flex justify-around py-20 px-80 mx-40 items-start text-xl' >
                <div className='flex flex-col '>
                    <select style={{width:"350px"}} value={first} className='shadowed mb-2 h-16 border-2 rounded-md border-sky-100 border-solid' id="1" onChange={(event) => setFirst(event.target.value)}>
                        <option value={data.EUR}>EUR</option>
                        <option value={data.USD}>USD</option>
                        <option value={data.GBP}>GBP</option>
                    </select>
                    <input  style={{width:"350px"}}  min="0" type="number" onChange={handleInputValue} value={inputValue} className='shadowed flex items-center justify-end p-4 h-16 border-2 bg-white rounded-md border-sky-100 border-solid outline-none' />
                </div>

                <div className='border-2 bg-gray-200 rounded-full border-2 border-white mt-2 w-14 h-14 flex items-center justify-center   rotated' >
                    <img className='w-7  ' src={index.reverse} alt="reverseimg" onClick={reverseValues} />
                </div>


                <div className='flex flex-col'>
                    <select style={{width:"350px"}} value={second} className='shadowed mb-2 h-16 border-2 rounded-md border-sky-100 border-solid' id="2" onChange={(event) => setSecond(event.target.value)}>
                        <option value={data.EUR}>EUR</option>
                        <option value={data.USD}>USD</option>
                        <option value={data.GBP}>GBP</option>

                    </select>
                    <p className='shadowed h-16 border-2 bg-white rounded-md border-sky-100 border-solid flex items-center justify-end p-4'>{value ? value.toFixed(3) : 0}</p>
                </div>

            </div>





      
    )
}

export default Compare