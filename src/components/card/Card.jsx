import React from 'react';
//import PropTypes from 'prop-types'
//import fotoTest from '../../assets/wanda.jpg';
//import styled from 'styled-components';
//TODO: add style and animation to card and image! scale and smooth effect

const Card = ({ name, image }) => {
    return (
        <>
            <div
                className="card"
                style={{ width: '18rem' }}
            >
                <div className="card-header card-img-top ">
                    <img
                        src={image}
                        alt={name}
                        title={name}
                        className="img-fluid"
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <span className="card-title">
                        {name}
                    </span>
                    <button className="btn btn-danger d-grid gap-2 d-lg-block">
                        button
                    </button>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {};

export default Card;
