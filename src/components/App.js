import React from 'react';
import Header from './Header';
import HarvestList from './HarvestList';
import ScheduleList from './ScheduleList'


function App() {
  return (
    <React.Fragment>
      <Header />
      <HarvestList/>
      <ScheduleList />
    </React.Fragment>
  )
}

export default App;
