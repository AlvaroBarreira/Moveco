import React from 'react';
import styled from "@emotion/styled";
import './Error.css'

interface messageProps {
    message: string | undefined
}

const Error = ({ message }: messageProps) => {
    return (
        <p className="error-message">
            {message}
        </p>
    );
}

const ErrorParagraph = styled.p`
    text-align: left;
    width: 400px;
    font-weight: 600;
    color: #fa4141;
    position: relative;
    margin: auto;
`;


export default Error;