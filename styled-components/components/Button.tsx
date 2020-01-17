import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
}

export function Button(props: Props) {
  const StyledButton = styled.button`
    font-size: 14px;
    padding: 10px 20px;
    color: #67c5ff;
    background-color: white;
    border: solid 2px #67c5ff;
    border-radius: 5px;

    &:hover {
    	cursor: pointer;
      color: white;
      background-color: #67c5ff;
    }

    &:focus {
    	outline: 0;
    }
  `;
  return (
    <StyledButton>Button</StyledButton>
  )
}
