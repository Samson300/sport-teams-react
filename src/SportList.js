import React from 'react';

function SportList(props) {
    return (
        <ul>
            {
                props.sports.map((sport, i) => {
                    return (
                        <li key={i}>
                            <a
                                
                                onClick={() => {
                                    props.handleClick(sport);
                                }}
                                >{sport}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default SportList;