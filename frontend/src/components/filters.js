import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"
import {mapMatrix,categoriesOrder} from "../FilterNames";

//contains a list of all the categories that one could select... yikes
class Filter extends Component {

    constructor(props)
    {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.loadFilters = this.loadFilters.bind(this);
		this.loadCategories = this.loadCategories.bind(this);
	}
	

	// Loads the filter otions and sub categories.... proobably best not to touch this...
	loadFilters(index, category, arr){
//		console.log(arr)
		return(<>
			{arr.length>1 ? <NavDropdown title={arr[0].categoryName} id="basic-nav-dropdown">{arr.map(this.loadFilters.bind(this, index,category))}</NavDropdown> : <NavDropdown.Item href="" onClick={this.handleClick.bind(this, arr)} style={(arr.selected == true || (arr[0] && arr[0].selected == true)) ? {color: 'red'} : {}}>{ arr.categoryName || arr[0].categoryName}</NavDropdown.Item>}
		</>)

	}

	//upon click it will change the search options in all states and it will change which restaurant is selected
	handleClick(category){
		if (category.length>0) category = category[0];

		if (category.selected){

			searchObj.searchOptions.categories = {alias: "restaurants"}
			category.selected = false;

		}else{
			searchObj.searchOptions.categories=category;
			category.selected = true;
		}
		searchObj.SearchRestaurantsPage.categoryFilter();
	}

	// Loads all the top level categories, then the filters within them from a seperate method
	loadCategories(){
		return (<>
		<NavDropdown title="By Region" id="basic-nav-dropdown">{categoriesOrder["By Region"].map(value => (<NavDropdown title={value}id="basic-nav-dropdown">{mapMatrix[value].map(this.loadFilters.bind(this,[],value))}</NavDropdown>))}</NavDropdown>
		{categoriesOrder["Other Categories"].map(value => (<NavDropdown title={value}id="basic-nav-dropdown">{mapMatrix[value].map(this.loadFilters.bind(this, [],value))}</NavDropdown>))}
		</>);

	}

    render(){
        return (
				<>
				<div className="filterDropdown">
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                   { this.loadCategories()}
                </NavDropdown>
                </div>
                
				<div className="filterDropdown">
				<NavDropdown title="Selected" id="basic-nav-dropdown">
                <NavDropdown.Item href="" onClick={this.handleClick.bind(this, searchObj.searchOptions.categories)}>{searchObj.searchOptions.categories.categoryName}</NavDropdown.Item>
                </NavDropdown>
                </div>
				</>
			
        )
    }
}

export default Filter;


				// <NavDropdown.Item href="">Action</NavDropdown.Item>
				// <NavDropdown.Item href="">Another action</NavDropdown.Item>
				// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				// 	<NavDropdown.Item href="">Action</NavDropdown.Item>
				// 	<NavDropdown.Item href="">Another action</NavDropdown.Item>
				// 	<NavDropdown.Item href="">Something</NavDropdown.Item>
				// 	<NavDropdown.Divider />
				// 	<NavDropdown.Item href="">Separated link</NavDropdown.Item>
				// </NavDropdown>
				// <NavDropdown.Divider />
				// <NavDropdown.Item href="">Separated link</NavDropdown.Item>

