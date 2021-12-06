import React from 'react';

const TwitterTrend = ({isLoaded, trendResult}) => {
    console.log(isLoaded, trendResult);
    return (
        isLoaded ?
            <ul className="list-group" style={{
                margin: '0 15rem'
            }
            }>
                {trendResult.map((result) => <li className="list-group-item">{result.text}</li>)}
            </ul>
            : <div className="spinner-border text-primary" role="status" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <span className="visually-hidden">Loading...</span>
            </div>
    )
};

export default TwitterTrend;