import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
            <li className='item'>
                <Link className='link' to={props.path}>
                    <figure className='image' data-category={props.label}>
                        {props.src.endsWith('.webm') ? (
                            <video className='img-item' autoPlay loop muted playsInline>
                                <source src={props.src} type='video/webm' />
                                <track src={props.captions} kind="captions" srcLang="en" label="english_captions" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img className='img-item' alt={props.alt} src={props.src} />
                        )}
                    </figure>
                    <div className='aboutCard'>
                        <p className='caption'><strong>{props.text}</strong></p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;