

import React from 'react'

import './App.css'
import { Install } from './components/Install'
import ReactComponentsGuide from './components/Reactcomponentguide'
import ReactPropsGuide from './components/ReactPropsGuide'
import ReactStateGuide from './components/ReactStateGuide'


export const App=()=> {
  return (
    <>
    <Install/>
    <ReactComponentsGuide/>
    <ReactPropsGuide/>
    <ReactStateGuide/>
    </>
  )
}
