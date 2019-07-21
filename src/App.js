import React from 'react';
import styled from 'styled-components';
import Radiobox from './form/Radiobox'
import Select from './form/Select'

const PlayGround = styled.div`
    position: relative;
    background: #f0f0f0;
    min-height: 400px;
    margin: auto;
    padding: 40px;
`

const Container = styled.div`
    width: 80%;
    background: #fff;
    max-width: 600px;
    width: 100%;
    min-height: 300px;
    margin: auto;
    padding: 50px;
    border: #ddd 1px solid;
    border-radius: 5px;
`

function App() {
    return (
        <PlayGround>
            <Container>
                <Radiobox
                    color={'#aaa'}
                    selectedColor={''}
                    hoverColor={''}
                    paddingLeft={'35px'}
                    fontSize={'1rem'}
                    options={[
                        {
                            label: 'iPhone',
                            value: 'iphone'
                        },
                        {
                            label: 'Dogs',
                            value: 'dogs'
                        }
                    ]}
                />
                <Select
                    disabled={false}
                    defaultValue={'1'}
                    options={[
                        {
                            label: "This is a native select element",
                            value: "0"
                        },
                        {
                            label: "Apples",
                            value: "1"
                        },
                        {
                            label: "Bananas",
                            value: "2"
                        },
                        {
                            label: "Grapes",
                            value: "3"
                        },
                        {
                            label: "Oranges",
                            value: "4"
                        }
                    ]}
                />
            </Container>
        </PlayGround>
    );
}

export default App;
