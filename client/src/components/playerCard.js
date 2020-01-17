import React from 'react';
import styled from 'styled-components';

const PlayerCard = ({player}) => {

    return(
        <PlayerCont>
            <h2>{player.name}</h2>
            <h4>Country: {player.country}</h4>
            <h4>Searched Amout: {player.searches}</h4>
        </PlayerCont>
    )
}

export default PlayerCard;

const PlayerCont = styled.div`
    width: 40%;
    background-color: white;
    border-radius: 15px;
    margin: 30px 3%;
`;