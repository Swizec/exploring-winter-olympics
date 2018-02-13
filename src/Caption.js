import React from "react";
import styled from "styled-components";

const CaptionText = styled.text`
    font-size: 1.2em;
    font-weight: 400;
`;

const Caption = ({ x, y, children }) => (
    <CaptionText x={x} y={y}>
        {children}
    </CaptionText>
);

export default Caption;
