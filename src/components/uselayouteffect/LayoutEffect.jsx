// useLayoutEffect, runs synchronously after a render but before
// the screen is updated.

// useEffect runs asynchronously and after a render is painted to the screen.

import React, { useState, useLayoutEffect, useEffect } from "react";
import styled from "styled-components";

const LayoutEffect = () => {

  return (
    <Wrapper>
      <p>my new random number {num}</p>
      <button >random num</button>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default LayoutEffect;
