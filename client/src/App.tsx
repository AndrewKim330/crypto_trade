import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    const [ticker, setTicker] = useState<[]>([]);
    const [currData, setCurrData] = useState<[string, string][]>([]);
    // const [transaction, setTransaction] = useState;

    useEffect(() => {
        const tickerPath = 'https://api.upbit.com/v1/market/all';
        fetch(tickerPath)
            .then((response) => response.json())
            .then((res) => {
                setTicker(res)
            });
    }, []);

    const getCurrState = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        const options = {
            method: 'GET' , headers: {accept: 'application/json'}
        };
        let selectedTickerIndex = ev.target.options.selectedIndex;
        const tickerLabel = ev.target.options[selectedTickerIndex].text;

        if (tickerLabel === '--select ticker--') {
            setCurrData([]);
        } else {
            const currStatePath = `https://api.upbit.com/v1/ticker?markets=${tickerLabel}`;
            fetch(currStatePath, options)
                .then((response) => response.json())
                .then((res) => {
                    setCurrData(Object.entries(res[0]));
                });
        }
    };

    return (
        <div className="App">
            <select onChange={getCurrState}>
                <option>--select ticker--</option>
                {ticker &&
                    ticker.map((item, idx) => {
                        return (
                            <option key={idx} value={item}>
                                {item["market"]}
                            </option>
                        );
                    })}
            </select>
            {currData ? (
                <div>
                    {currData &&
                        currData.map((elem, idx) => {
                            return (
                                <div key={idx}>
                                    {elem[0]}: {elem[1]}
                                </div>
                            );
                        })}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default App;
