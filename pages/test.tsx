import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  Link,
  Route,
  BrowserRouter,
  Routes,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import PropTypes from 'prop-types';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import Actions from 'Actions';
import { useCookies } from 'react-cookie';
import axios from 'axios';
// import Atoms from 'Atoms';
// import Molecules from 'Molecules';
// import Organisms from 'Organisms';

const Name: React.FC<any> = ({}) => {
  const storeTest = useSelector((state: RootStateOrAny) => state.test);
  const dispatch = useDispatch();

  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(Actions.test.increment(storeTest.value));
  };

  const minus = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(Actions.test.decrement(storeTest.value));
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <h1>{storeTest.value}</h1>
      <button onClick={add}>+1</button>
      <button onClick={minus}>-1</button>
      Test
    </>
  );
};

export default Name;
