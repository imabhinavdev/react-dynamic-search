import React, { useState } from 'react'
import './SearchInput.css'
const SearchInput = ({ setsearchResult }) => {
    const [input, setinput] = useState("");
    const inputHandeler = (event) => {
        setinput(event.target.value)
        console.log(event.target.value);
        fetchData(event.target.value);
    }
    const fetchData = (input) => {
        fetch('https://jsonplaceholder.typicode.com/users').then((data) => data.json()).then((json) => {
            let results = json.filter((user) => {
                return input && user && user.name && user.name.toLowerCase().includes(input)
            });
            if (results.length === 0 && input) {
                results = [{ name: "No data found" }]
            }
            setsearchResult(results);
        });

    }
    return (
        <div className="InputWrap">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Type name to search' value={input} onChange={inputHandeler
            } />
        </div>
    )
}

export default SearchInput