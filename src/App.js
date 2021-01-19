import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs'
import { useState } from 'react';
import Styles from './components/Styles.module.css'
import DisplayTab from './components/DisplayTab'

function App() {
  const tabOne = {
    lable: "Tab 1",
    contentProperty: "Tab 1 Text"
  }
  const tabTwo = {
    lable: "Tab 2",
    contentProperty: "Tab 2 Text"
  }
  const tabThree = {
    lable: "Tab 3",
    contentProperty: "Tab 3 Text"
  }
  const content = [
    tabOne,
    tabTwo,
    tabThree
  ]

  const [currentTab, setCurrentTab] = useState(tabOne.contentProperty);
  const changeTab = (tabInfo) => {
    setCurrentTab(tabInfo);
  }
  return (
    <div className="App">
      <Tabs info={content} onDisplayTab={changeTab}></Tabs>
      <DisplayTab info={currentTab}></DisplayTab>
    </div>
  );
}

export default App;
