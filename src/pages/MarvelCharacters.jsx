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

const ContainerStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

const MarvelCharacters = props => {
    const [characters, setCharacters] = useState(
        []
    );
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        axios
            .get(
                'https://gateway.marvel.com/v1/public/characters',
                {
                    params: {
                        ts: ts,
                        apikey: publicKey,
                        hash: hash
                    }
                }
            )
            .then(response => {
                setCharacters(
                    response.data.data.results
                );
                setLoading(false);
            })
            .catch(error => {
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
                        'An unexpected error occurred.'
                    );
                }
                setLoading(false);
            });
    }, []);

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
        <SectionCards
            id="section-cards"
            className="section-cards"
        >
            {characters.length === 0 ? (
                <p>No characters found</p>
            ) : (
                characters.map(
                    (character, id) => (
                        <Card
                            key={id}
                            name={character.name}
                            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        />
                    )
                )
            )}
        </SectionCards>
    );
};

MarvelCharacters.propTypes = {};

export default MarvelCharacters;
