import React, {useState} from 'react';
import {Button, FormGroup, Input, Label} from "reactstrap";

const TwitterInput = ({setTrendResult, setIsLoaded}) => {

    const [inputValue, setInputValue] = useState('');

    const onClickHandler = (input) => {
        console.log("On Click");
        setIsLoaded(false);
        Boolean(inputValue) && fetch(`http://localhost:8080/twitter/tweets/${inputValue}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setIsLoaded(true);
                    setTrendResult(result);
                },
                (error) => {
                    setIsLoaded(true);
                }
            )

    }

    return <div style={{
        marginTop: '5%',
        marginRight: '35%',
        marginLeft: '35%'
    }}>
        <FormGroup row>
            <Label
                for="exampleEmail"
                sm={2}
            >
                Search
            </Label>
            <div>
                <Input
                    id="exampleInput"
                    name="input"
                    placeholder="search for hashtag"
                    type="text"
                    onChange={(event) => setInputValue(event.target.value)}
                />
            </div>
            <div style={{
                margin: '1rem'
            }}>
                <Button
                    color="primary"
                    onClick={onClickHandler}
                >
                    Search Trends
                </Button>
            </div>

        </FormGroup>
    </div>
};

export default TwitterInput;