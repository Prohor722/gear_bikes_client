import React from 'react';

const Search = ({onSearch}) => {
    return (
        <div>
            <form onSubmit={onSearch}>
            <input type="text" name="search" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
            <input type="submit" className='btn btn-secondary'>Search</input>
            </form>
        </div>
    );
};

export default Search;