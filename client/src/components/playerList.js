import React from 'react';
import PlayerCard from './playerCard';
import styled from 'styled-components';

const PlayerList = ({wwcPlayers}) => {

    return(
        <ListCont data-testid='playerList'>
            <H1>Players List</H1>
            <PlayerListCont>
                {wwcPlayers.map(player => {
                    return <PlayerCard 
                    key={player.id}
                    player={player}
                    />
                })}
            </PlayerListCont>
        </ListCont>
    )
}

export default PlayerList;

const ListCont = styled.section`
    width: 80%;
    background-color: lightgrey;
    margin: 0 auto;
`;

const H1 = styled.h1`
    margin: 20px;
    font-size: 40px;
`;

const PlayerListCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;