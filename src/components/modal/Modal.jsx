import React from 'react';
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const Scale = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1,1);
  }

`;

const ModalContainer = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    animation: ${Show} 0.4s ease-in;
`;

const ModalContent = styled.div`
    background-color: aliceblue;
    margin: 8% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    border-radius: 10px;
    gap: 1rem;
    animation:
        ${Show} 0.7s ease-in,
        ${Scale} 0.3s ease-in;

    @media only screen and (${devices.portatilL}) {
        margin: 16% auto 8% auto;
    }
    @media only screen and (${devices.portatil}) {
        margin: 23% auto 8% auto !important;
    }
    @media only screen and (${devices.tablet}) {
        width: 95%;
        margin: 29% auto 8% auto !important;
    }
    @media only screen and (${devices.iphone14}) {
        width: 98% !important;
        padding: 26px 0 0 0 !important;
        margin: 5% auto 53% auto !important;
    }
    @media only screen and (${devices.mobileM}) {
        margin: 8% auto 69% auto !important;
    }
`;

const CloseModal = styled.button`
    display: block;
    position: absolute;
    top: 2rem;
    right: 5rem;
    font-size: 2rem;
    cursor: pointer;
    outline: none !important;
    border: none !important;
    box-shadow: none !important;

    @media only screen and (${devices.portatilL}) {
        right: 4rem;
    }
    @media only screen and (${devices.tablet}) {
        right: 3rem;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 8% auto 55% auto;
        font-size: 1.5rem !important;
    }
    @media only screen and (${devices.mobileM}) {
        right: 2rem !important;
    }
    @media only screen and (${devices.mobileP}) {
        margin: 8% auto 55% auto;
    }
`;

const ModalBody = styled.div`
    font-size: 1.5rem;
    text-align: center;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto !important;
`;

const ImageHero = styled.img`
    &.image-hero {
        border: 2px solid #ed213a;
        box-shadow: 0 0 0.3rem 0.1rem transparent;
        border-radius: 10px;
        height: 30rem;
    }

    &:hover {
        border: 2px solid #ed213a;
        box-shadow: 0 0 0.7rem 0.1rem #ed213a;
    }

    @media only screen and (${devices.iphone14}) {
        height: 25rem !important;
        &.img-fluid {
            width: 93% !important;
        }
    }
    @media only screen and (${devices.mobileP}) {
        height: 20rem !important;
    }
`;

const TitleHero = styled.h2`
    font-weight: 600;
    color: #8b0c1b;
    text-transform: uppercase;
    margin: 3rem auto;
    width: 100%;
`;

const DescriptionHero = styled.p`
    font-size: 1.2rem;
    color: #000;
    margin: 1rem auto 5rem auto;
    width: 60%;

    @media only screen and (${devices.portatilL}) {
        width: 64% !important;
    }

    @media only screen and (${devices.iphone14}) {
        width: 90% !important;
        font-size: 1rem;
    }
`;

const Modal = ({
    heroDataImg,
    heroDataname,
    heroDatadescription,
    setShow
}) => {
    return (
        <>
            <ModalContainer
                className="container-fluid modal-container"
                onClick={() => setShow(false)}
            >
                <ModalContent className="modal-content">
                    <div className="modal-header">
                        <CloseModal
                            type="button"
                            className="btn-close"
                            title="close"
                            onClick={() =>
                                setShow(false)
                            }
                        ></CloseModal>
                    </div>
                    <ModalBody className="modal-body">
                        <ImageHero
                            src={heroDataImg}
                            alt={heroDataname}
                            title={heroDataname}
                            className="img-fluid image-hero"
                        />
                        <TitleHero className="title-hero">
                            {heroDataname}
                        </TitleHero>
                        <DescriptionHero className="description-hero">
                            {heroDatadescription}
                        </DescriptionHero>
                    </ModalBody>
                </ModalContent>
            </ModalContainer>
        </>
    );
};

export default Modal;
