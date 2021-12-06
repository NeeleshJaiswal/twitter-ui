import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TwitterInput from "./TwitterInput";
import {useState} from "react";
import TwitterTrend from "./TwitterTrend";

function App() {

    const [trendResult, setTrendResult] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    return (
        <div className="App" style={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <TwitterInput setTrendResult={setTrendResult} setIsLoaded={setIsLoaded}/>
            <TwitterTrend isLoaded={isLoaded} trendResult={trendResult}/>
        </div>
    );
}

export default App;
