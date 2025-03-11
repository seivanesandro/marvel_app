import React from 'react';
//import PropTypes from 'prop-types'
import marvel from '../../assets/marvel.jpg';
import styled from 'styled-components'
import { devices } from '../../utils/constantes';

const HeroContainer = styled.div`
    max-width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${marvel}) !important;
    object-fit: fill !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    width: 100%;

    @media only screen and (${devices.iphone14}) {
        height: 80vh !important;
    }
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

const H1Style = styled.h1`
    text-align: center !important;
    color: #ed213a !important;
    font-weight: 700 !important;
    font-size: 5rem !important;
    text-transform: uppercase !important;
    text-shadow:
        -3px -3px 2px #f7b733,
        3px -3px 2px #f7b733,
        -3px 3px 2px #f7b733,
        3px 3px 2px #f7b733;
    
    @media only screen and (${devices.iphone14}) {
        font-size: 3rem !important;
    }
`;

const Pstyle = styled.p`
    text-align: center !important;
    color: #fff !important;
    font-size: 2rem !important;
    text-shadow:
        -2px -2px 1px #333,
        2px -2px 1px #333,
        -2px 2px 1px #333,
        2px 2px 1px #333;

    @media only screen and (${devices.iphone14}) {
        font-size: 1.5rem !important;
    }
`;

const InputSearch = styled.input`
    width: 50rem;
    outline: transparent !important;
    box-shadow: 0 0 0.3rem transparent !important;
    border: none !important;
    transition: outline 0.2s ease;

    &:hover {
        outline: double #ed213a !important;
        color: #ed213a !important;
        font-weight: 600 !important;
    }
    &:focus {
        outline: double #ed213a !important;
        color: #ed213a !important;
        font-weight: 600 !important;
    }
    &:active {
        outline: double #ed213a !important;
        color: #ed213a !important;
        font-weight: 600 !important;
    }

    @media only screen and (${devices.portatil}) {
        width: 40rem;
    }

    @media only screen and (${devices.tablet}) {
        width: 35rem;
    }
    @media only screen and (${devices.iphone14}) {
        width: 20rem !important;
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
        width: 18rem !important;
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

const Hero = props => {
    return (
        <>
            <HeroContainer className="hero-container">
                <HeroText className="hero-text">
                    <H1Style className="h1-style">
                        Marvel Hero´s
                    </H1Style>
                    <Pstyle className="p-style">
                        Find your favorite Marvel
                        Hero
                    </Pstyle>
                    <InputSearch
                        type="text"
                        className="form-control input-search"
                    />
                    <BtnStyle className="btn btn-danger d-grid gap-2 d-lg-block">
                        search for Hero's
                    </BtnStyle>
                </HeroText>
            </HeroContainer>
        </>
    );
};

export default Hero;
