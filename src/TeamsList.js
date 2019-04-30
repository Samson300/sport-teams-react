import React from 'react';
import PropTypes from 'prop-types';

function TeamsList(props) {
    return (
        <ul>
            {
                props.teams.map((team, i) => {
                    return (
                    <li key={i}>
                        <a
                            href="#"
                            onClick={() => {
                                props.handleClick(team);
                            }}
                        >{team}</a>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default TeamsList;