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
        homeList.map((item: any) => {
          return <div key={item.id}>{item.title}</div>
        })
      }
      <button onClick={
        () => {
          dispatch(resetHome())
        }
      }>Clear Home</button>
    </div>
  );
}

export default Home;