import React from 'react';
import './Header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar } from '@material-ui/core';


function Header() {
    return (
        <div className='header'> 
            <div className='header__left'> 
                <SearchRoundedIcon />
                <input
                    placeholder='Search for Artists, Songs or Albums'
                    type='text' 
                />
            </div>

            <div className='header__right'> 
                <h4>Jair Partida</h4>
                <Avatar src='' alt='JP'/>
            </div>
        </div>
    );
}

export default Header;
