import React from 'react';
//import PropTypes from 'prop-types'
//import fotoTest from '../../assets/wanda.jpg';
import styled, { keyframes } from 'styled-components';

const Show = keyframes`
    0%{
        opacity:0;
    }

    100%{
        opacity:1;
    }
`;

const Scale = keyframes`
    0%{
        transform : scale(0);
    }

    100%{
        transform : scale(1,1);
    }
`;

const ScaleTwo = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
        transform : scale(1.1);
    }
`;

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    animation: ${Show} 2s ease-in , ${Scale} 0.5s ease-in;

    &:hover{
        box-shadow: 0 0 0.8rem 0.1rem rgba(255, 254, 254, 0.5);
    }
`;

const CardImgContent = styled.div`
    display: flex;
`;

const ImgAnimation = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto !important;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
        animation:
            ${ScaleTwo} 2s ease-in;
    }
`;

const BtnStyle = styled.button`
    text-transform: uppercase;
    color: #fff !important;
    background-color: #ed213a !important;
    font-weight: 600 !important;
    transition: background-color 0.3s ease-in;

    &:hover {
        outline: thin #f5f5f5 !important;
        box-shadow: 0 0 0.3rem #f5f5f5 !important;
        background-color: #8b0c1b !important;
    }
    &:focus {
        outline: thin #f5f5f5 !important;
        box-shadow: 0 0 0.3rem #f5f5f5 !important;
        background-color: #8b0c1b !important;
    }
    &:active {
        outline: thin #f5f5f5 !important;
        box-shadow: 0 0 0.3rem #f5f5f5 !important;
        background-color: #8b0c1b !important;
    }
`;

const Card = ({ name, image }) => {
    return (
        <>
            <CardStyled
                className="card"
                style={{ width: '18rem' }}
            >
                <CardImgContent className="card-header card-img-top card-img-content">
                    <ImgAnimation
                        src={image}
                        alt={name}
                        title={name}
                        className="img-fluid img-animation"
                        style={{
                            
                        }}
                    />
                </CardImgContent>
                <div className="card-body d-flex flex-column">
                    <span className="card-title">
                        {name}
                    </span>
                    <BtnStyle className="btn btn-danger d-grid gap-2 d-lg-block">
                        More info
                    </BtnStyle>
                </div>
            </CardStyled>
        </>
    );
};

Card.propTypes = {};

export default Card;
