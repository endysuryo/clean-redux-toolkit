/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/rootReducer';
import { fetchHome, resetHome } from './store/homeSlice';

function Home() {
  const dispatch = useDispatch();
  const { homeList } = useSelector((state: RootState) => state.home)

  useEffect(() => {
    dispatch(fetchHome())
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {
        homeList &&
        homeList.map((item: any, index: any) => {
          return <div key={index}>
            <h2>{item.name}</h2>
            <a href={item.url}>{item.url}</a>
          </div>
        })
      }
      <button onClick={
        () => {
          dispatch(resetHome())
        }
      }>Clear Home</button>
      <button onClick={
        () => {
          dispatch(fetchHome())
        }
      }>Fetch Home</button>
    </div>
  );
}

export default Home;