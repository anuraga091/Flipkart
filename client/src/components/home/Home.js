import styled from '@emotion/styled'
import React, { Fragment } from 'react'
import Banner from './Banner'
import NavBar from './NavBar';
import RightComponent from './RightComponent';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../redux/actions/product_action';
import LeftComponent from './LeftComponent';
import { Pagination, Typography } from '@mui/material';

const Home = () => {

  const {products} = useSelector(state => state.getProducts)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <Fragment style={{marginTop: 55}}>
      <NavBar/>
      <StyleDiv>
      <Banner/>
      <div style={{display: 'flex'}}>
        <LeftComponent products={products}/> 
        <RightComponent products={products}  categories='All categories' /> 
      </div>
      <div style={{display: 'flex',justifyContent:'start',  marginLeft: '30%', marginTop: 10}}>
      <Typography>Page 1 of 10 </Typography>
      <Pagination count={10} variant="outlined" shape="rounded"  style={{marginLeft: '20%'}}/>
      </div>
      
      </StyleDiv>
    </Fragment>
  )
}

const StyleDiv = styled('div')`
  padding: 10px;
  background-color: #F2F2F2;
`;

export default Home
