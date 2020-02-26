import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='w-75-m'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search for your Robot Friends' 
                onChange = {searchChange}/>
        </div>
        );

}
export default SearchBox;