import React from "react";
import { Container, Title, SubTitle } from './styles/feature';

export default function Feature({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Feature.Title = function FeatureTitle({ children, ...retProps }) {
    return <Title {...retProps}>{children}</Title>;
}

Feature.SubTitle = function FeatureSubTitle({ children, ...retProps }) {
    return <SubTitle {...retProps}>{children}</SubTitle>;
}