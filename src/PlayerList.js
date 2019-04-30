import React from 'react';
import PropTypes from 'prop-types';

function PlayerList(props) {
    return (
        <ul>
            {
                props.players.map((player, i) => <li key={i}>{player}</li>)
            }
        </ul>
    );
}

export default PlayerList;