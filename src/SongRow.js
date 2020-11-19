import React from 'react';

function SongRow({ track = 'test' }) {
    return (
        <div className='songRow'>
            <img src='' alt='' />
            <div className='songRow__info'>
                <h1></h1>
            </div>
        </div>
    )
}

export default SongRow;
