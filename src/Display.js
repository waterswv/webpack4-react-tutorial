import React, { Component } from "react";
import styled from 'styled-components';

const Display = ({className}) => <div className={className}>Here is my component</div>

const StyledDisplay = styled(Display)`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default StyledDisplay;
