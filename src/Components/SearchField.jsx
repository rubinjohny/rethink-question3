import React from 'react'
import { Input } from 'antd';
const { Search } = Input;


export const SearchField = ({ onSearch, placeholder, submitText}) => {
    return(
        <div className="search-container">
            <Search
                placeholder={placeholder} 
                allowClear
                enterButton={submitText}
                onSearch={onSearch}
                style={{width:"100%"}}
            />
        </div>
    )
}