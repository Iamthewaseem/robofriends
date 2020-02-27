import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div style={{padding: '2rem'}}>
            <input style= {{width: '50%'}}
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search for your Robot Friends' 
                onChange = {searchChange}/>
        </div>
        );

}
export default SearchBox; 