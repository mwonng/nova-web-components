import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const RadiboxContainer = styled.ul`
    & li {
        color: ${props => props.color || `#aaaaaa`};
        display: block;
        position: relative;
        /* float: left; */
        width: 100%;
        height: 100%;
    }

    & li input[type=radio] {
        position: absolute;
        visibility: hidden;
    }

    & li label{
        display: block;
        position: relative;
        font-weight: 300;
        font-size: 1em;
        padding: ${props => `5px 25px 5px ${props.paddingLeft}` || `5px 25px 5px 80px`} ;
        text-align: left;
        z-index: 9;
        cursor: pointer;
        transition: all 0.25s linear;
        -webkit-transition: all 0.25s linear;
    }

    & li:hover label{
        color: ${props => props.hoverColor || `#000`};
    }

    & li .check{
        display: block;
        position: absolute;
        border-width: 2px;
        border-style: solid;
        border-color: ${props => props.color || `#AAAAAA`};
        border-radius: 100%;
        height: ${props => `${props.fontSize}` || "1rem"};
        width: ${props => `${props.fontSize}` || "1rem"};
        top: 5px;
        left: 0px;
        z-index: 5;
        transition: border .25s linear;
        -webkit-transition: border .25s linear;
    }

    & li:hover .check {
        border-width: 2px;
        border-style: solid;
        border-color: ${props => props.hoverColor || `#000`};
    }

    & li .check::before {
        display: block;
        position: absolute;
        content: '';
        border-radius: 100%;
        height: 12px;
        width: 12px;
        top: 2px;
        left: 2px;
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
    }

    & input[type=radio]:checked ~ .check {
        border-width: 2px;
        border-style: solid;
        border-color: ${props => props.selectedColor || `#61dafb`};
    }

    & input[type=radio]:checked ~ .check::before{
        background: ${props => props.selectedColor || `#61dafb`};;
    }

    & input[type=radio]:checked ~ label{
        color: ${props => props.selectedColor || `#61dafb`};;
    }
`

const Options = (props) => {
    return props.options.map((opt, index) => {
        return (
            <li key={index}>
                <input type="radio" id={index} name="selector" />
                <label htmlFor={index}>{opt.label}</label>
                <div className="check"></div>
            </li>
        )
    })
}

const Radiobox = (props) => {
    const { paddingLeft, fontSize, options, color, hoverColor, selectedColor } = props;
    return (
        <RadiboxContainer
            paddingLeft={paddingLeft}
            fontSize={fontSize}
            hoverColor={hoverColor}
            selectedColor={selectedColor}
            color={color}
        >
            <Options
                options={options}
            />
        </RadiboxContainer>
    )
}

Radiobox.propTypes = {
    color: PropTypes.string,
    selectedColor: PropTypes.string,
    hoverColor: PropTypes.string,
    paddingLeft: PropTypes.string,
    fontSize: PropTypes.string,
    options: PropTypes.array
}

export default Radiobox;