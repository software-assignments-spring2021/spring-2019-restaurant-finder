import React, { Component } from 'react';
import GlobalNavBar from "./components/GlobalNavBar"
import SearchRestaurantsPage from './pages/SearchRestaurantsPage';

// our main "app" 
//this should have all routes accessible
class App extends Component {
	/* 
		As of now, render just returns our "test" page which is SearchRestaurantsPage. 
		We can also put global items that will be on every page such as a NavBar.
	*/
  render() {
    return (
		<>
		<GlobalNavBar/>
		<SearchRestaurantsPage/>
		</>)
  }
}

export default App;
