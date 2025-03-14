import React, {
    useEffect,
    useState
} from 'react';
//import PropTypes from 'prop-types';
import Card from '../components/card/Card';
import { Md5 } from 'ts-md5';
import axios from 'axios';
import styled from 'styled-components';
import { devices } from '../utils/constantes';
import Loading from '../components/load/Loading';
import Modal from '../components/modal/Modal';

const ContainerStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
`;

const ContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    margin: 3rem auto;
`;

const SectionCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 11rem;
    flex-wrap: wrap;

    @media only screen and (${devices.portatilS}) {
        .section-cards {
            gap: 2rem;
        }
    }
    @media only screen and (${devices.tablet}) {
        .section-cards {
            gap: 5rem;
        }
    }
    @media only screen and (${devices.iphone14}) {
        .section-cards {
            flex-direction: column !important;
            gap: 4rem !important;
        }
    }
`;

const TitleMain = styled.h2`
    text-align: center !important;
    color: #fff !important;
    font-weight: 700 !important;
    font-size: 2rem !important;
    text-transform: uppercase !important;
    text-shadow:
        -3px -3px 2px #333,
        3px -3px 2px #333,
        -3px 3px 2px #333,
        3px 3px 2px #333;

    @media only screen and (${devices.iphone14}) {
        font-size: 3rem !important;
    }
`;

const MarvelCharacters = ({
    search,
    handleSearchClick,
    mainRef
}) => {
    const [characters, setCharacters] = useState(
        []
    );
    const [show, setShow] = useState(false);
    const [heroData, setHeroData] =
        useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [initialMessage, setInitialMessage] =
        useState(true);

    useEffect(() => {
        if (search === '') {
            setInitialMessage(true);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setInitialMessage(false);

            const publicKey =
                process.env
                    .REACT_APP_MARVEL_PUBLIC_KEY;
            const privateKey =
                process.env
                    .REACT_APP_MARVEL_PRIVATE_KEY;
            const ts = new Date()
                .getTime()
                .toString();
            const hash = Md5.hashStr(
                ts + privateKey + publicKey
            );

            try {
                const response = await axios.get(
                    'https://gateway.marvel.com/v1/public/characters',
                    {
                        params: {
                            nameStartsWith:
                                search,
                            ts: ts,
                            apikey: publicKey,
                            hash: hash
                        }
                    }
                );
                setCharacters(
                    response.data.data.results
                );
                setLoading(false);
                handleSearchClick();
            } catch (error) {
                console.log(error); // Adicionado console.log para ver o erro completo
                if (
                    axios.isAxiosError(error) &&
                    error.response &&
                    error.response.data &&
                    error.response.data.message
                ) {
                    setError(
                        error.response.data
                            .message
                    );
                } else if (
                    axios.isAxiosError(error) &&
                    error.code === 'ERR_NETWORK'
                ) {
                    setError(
                        'Network error: Check your connection.'
                    );
                } else {
                    setError(
                        'An error occurred.'
                    );
                }
                setLoading(false);
            }
        };
        fetchData();
    }, [search, handleSearchClick]);

    if (initialMessage) {
        return (
            <ContainerStatus>
                <TitleMain className="title-main">
                    Search for your favorite
                    Hero´s
                </TitleMain>
            </ContainerStatus>
        );
    }

    if (loading) {
        return (
            <ContainerStatus>
                <Loading
                    speedborder="0.6"
                    fonts="10"
                    size="1"
                />
            </ContainerStatus>
        );
    }

    if (error) {
        return (
            <ContainerStatus>
                <h3>{error}</h3>
            </ContainerStatus>
        );
    }

    return (
        <>
            {show && heroData && (
                <Modal
                    heroDataname={heroData.name}
                    heroDatadescription={
                        heroData.description ? (
                            heroData.description
                        ) : (
                            <span className="text-muted text-uppercase text-center">
                                No Description
                                available
                            </span>
                        )
                    }
                    heroDataImg={`${heroData.thumbnail.path}.${heroData.thumbnail.extension}`}
                    setShow={setShow}
                />
            )}

            {!show && (
                <ContainerCards
                    id="container-cards"
                    className="container-cards"
                    ref={mainRef}
                >
                    {characters.length === 0 &&
                    !initialMessage ? (
                        <>
                            <TitleMain className="title-main">
                                Hero not found
                            </TitleMain>
                        </>
                    ) : (
                        <>
                            {characters.length >
                                0 && (
                                <TitleMain className="title-main">
                                    {search}
                                </TitleMain>
                            )}
                            <SectionCards
                                id="section-cards"
                                className="section-cards"
                            >
                                {characters.map(
                                    (
                                        character,
                                        id
                                    ) => (
                                        <Card
                                            key={
                                                id
                                            }
                                            name={
                                                character.name
                                            }
                                            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                            onclick={() => {
                                                setHeroData(
                                                    character
                                                );
                                                setShow(
                                                    true
                                                );
                                            }}
                                        />
                                    )
                                )}
                            </SectionCards>
                        </>
                    )}
                </ContainerCards>
            )}
        </>
    );
};

MarvelCharacters.propTypes = {};

export default MarvelCharacters;
