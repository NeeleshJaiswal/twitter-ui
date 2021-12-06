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
            : <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
    )
};

export default TwitterTrend;