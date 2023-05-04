import React, { useState, useMemo } from "react";
import styled from "styled-components";

const MemoHook = () => {

  return (
    <Wrapper>
      <button >
        Counter
      </button>
      <p> My new number : {} </p>
      <button>
       
      </button>
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
`;

export default MemoHook;
