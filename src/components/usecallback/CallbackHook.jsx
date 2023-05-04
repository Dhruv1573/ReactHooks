// The React useCallback Hook returns a memoized callback function.

import { useCallback, useState } from "react";
import Todos from "./Todos";
import styled from "styled-components";

const Callbackhook = () => {

  return (
    <Wrapper>
      <Todos />
      <hr />
      <div>
        Count:
        <button >+</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Callbackhook;
