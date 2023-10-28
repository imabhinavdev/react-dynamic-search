import React, { useState } from 'react'
import SearchInput from '../SearchInput/SearchInput'
import SearchResult from '../SearchResult/SearchResult'


export const SearchBarWrap = () => {
    const [searchResult, setsearchResult] = useState([]);
    return (
        <div><div className="barWrap">
            <SearchInput setsearchResult={setsearchResult} />
            <SearchResult searchResult={searchResult} />
        </div></div>
    )
}
