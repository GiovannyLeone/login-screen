import React from 'react';
import Routers from './assets/components/Routers';
import './App.scss';
import 'animate.css'


export interface AppPageProps {} 

const AppPage: React.FunctionComponent<AppPageProps> = props => {
  return (
  <>
    <Routers>
    </Routers>
  </>
  )
}

export default AppPage
