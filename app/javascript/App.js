import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Greeting from "./components/Greetings";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGreetings } from './redux/greetings/greetingsSlicer';

function App() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchGreetings());
    }, [])

  return (
        <Routes>
            <Route path="/" element={<Greeting />} />
        </Routes>
  );
}

export default App;
