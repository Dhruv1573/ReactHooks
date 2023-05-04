// it create a mutable variable which will not re-render the components
// Used to access the DOM element directly

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RefHook1 = () => {


  return (
    <Wrapper>
      <input
        type="text"

      />

      <p>the number of times comp render:</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.4rem;

  input {
    min-width: 20rem;
    /* padding: 1rem 0.5rem; */
    color: #000;
    font-size: 2rem;
  }
`;

export default RefHook1;
