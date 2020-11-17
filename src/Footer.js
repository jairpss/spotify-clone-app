import React from 'react';
import './Footer.css';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import PlaylistPlayRoundedIcon from '@material-ui/icons/PlaylistPlayRounded';
import VolumeDownRoundedIcon from '@material-ui/icons/VolumeDownRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img src='https://upload.wikimedia.org/wikipedia/en/c/c4/Comearoundsundown.jpg' 
                     alt='Cover' 
                     className='footer__albumLogo'
                />
                <div className='footer__songInfo'>
                    <h4>Pyro</h4>
                    <p>Kings of Leon</p>    
                </div>
                <FavoriteBorderIcon fontSize='small' className='footer__icon-like' />
            </div>
            <div className='footer__center'>
                <ShuffleRoundedIcon className='footer__green' />
                <SkipPreviousRoundedIcon className='footer__icon' />
                <PlayCircleOutlineRoundedIcon fontSize='large' className='footer__icon footer__play' />
                <SkipNextRoundedIcon className='footer__icon' />
                <RepeatRoundedIcon className='footer__green' />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayRoundedIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownRoundedIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
