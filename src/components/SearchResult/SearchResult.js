import React from 'react'
import './SearchResult.css'
const SearchResult = ({ searchResult }) => {

    return (
        <div className="result-wrap">
            {
                searchResult.map((result, id) => {
                    return <p key={id} className='answer'>{result.name}</p>
                })}

        </div>
    )
}

export default SearchResult