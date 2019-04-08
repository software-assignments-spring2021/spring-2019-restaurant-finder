import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class GlobalNavBar extends Component {

    constructor(props)
    {
		super(props);
		this.state = {
			mapMatrix: {"Africa":[[{"categoryName":"Eritrean","alias":"eritrean","selected":false}],[{"categoryName":"Ethiopian","alias":"ethiopian","selected":false}],[{"categoryName":"Moroccan","alias":"moroccan","selected":false}],[{"categoryName":"Senegalese","alias":"senegalese","selected":false}],[{"categoryName":"Somali","alias":"somali","selected":false}],[{"categoryName":"South African","alias":"southafrican","selected":false}]],"Asia":[[{"categoryName":"Bangladeshi","alias":"bangladeshi","selected":false}],[{"categoryName":"Burmese","alias":"burmese","selected":false}],[{"categoryName":"Cambodian","alias":"cambodian","selected":false}],[{"categoryName":"Chinese","alias":"chinese","selected":false},{"categoryName":"Cantonese","alias":"cantonese","selected":false},{"categoryName":"Hainan","alias":"hainan","selected":false},{"categoryName":"Shanghainese","alias":"shanghainese","selected":false},{"categoryName":"Szechuan","alias":"szechuan","selected":false}],[{"categoryName":"Filipino","alias":"filipino","selected":false}],[{"categoryName":"Himalayan/Nepalese","alias":"himalayan","selected":false}],[{"categoryName":"Hong Kong Style Cafe","alias":"hkcafe","selected":false}],[{"categoryName":"Indian","alias":"indpak","selected":false}],[{"categoryName":"Indonesian","alias":"indonesian","selected":false}],[{"categoryName":"Japanese","alias":"japanese","selected":false}],[{"categoryName":"Korean","alias":"korean","selected":false}],[{"categoryName":"Laotian","alias":"laotian","selected":false}],[{"categoryName":"Malaysian","alias":"malaysian","selected":false}],[{"categoryName":"Mongolian","alias":"mongolian","selected":false}],[{"categoryName":"Pan Asian","alias":"panasian","selected":false}],[{"categoryName":"Singaporean","alias":"singaporean","selected":false}],[{"categoryName":"Sri Lankan","alias":"srilankan","selected":false}],[{"categoryName":"Taiwanese","alias":"taiwanese","selected":false}],[{"categoryName":"Thai","alias":"thai","selected":false}],[{"categoryName":"Vietnamese","alias":"vietnamese","selected":false}]],"Australasia":[[{"categoryName":"Australian","alias":"australian","selected":false}],[{"categoryName":"Guamanian","alias":"guamanian","selected":false}],[{"categoryName":"Hawaiian","alias":"hawaiian","selected":false}],[{"categoryName":"Polynesian","alias":"polynesian","selected":false}]],"Europe":[[{"categoryName":"Austrian","alias":"austrian","selected":false}],[{"categoryName":"Basque","alias":"basque","selected":false}],[{"categoryName":"Belgian","alias":"belgian","selected":false}],[{"categoryName":"British","alias":"british","selected":false}],[{"categoryName":"Bulgarian","alias":"bulgarian","selected":false}],[{"categoryName":"Catalan","alias":"catalan","selected":false}],[{"categoryName":"Czech","alias":"czech","selected":false}],[{"categoryName":"French","alias":"french","selected":false},{"categoryName":"Mauritius","alias":"mauritius","selected":false},{"categoryName":"Reunion","alias":"reunion","selected":false}],[{"categoryName":"German","alias":"german","selected":false}],[{"categoryName":"Greek","alias":"greek","selected":false}],[{"categoryName":"Hungarian","alias":"hungarian","selected":false}],[{"categoryName":"Iberian","alias":"iberian","selected":false}],[{"categoryName":"Irish","alias":"irish","selected":false}],[{"categoryName":"Italian","alias":"italian","selected":false},{"categoryName":"Calabrian","alias":"calabrian","selected":false},{"categoryName":"Sardinian","alias":"sardinian","selected":false},{"categoryName":"Sicilian","alias":"sicilian","selected":false},{"categoryName":"Tuscan","alias":"tuscan","selected":false}],[{"categoryName":"Modern European","alias":"modern_european","selected":false}],[{"categoryName":"Polish","alias":"polish","selected":false}],[{"categoryName":"Portuguese","alias":"portuguese","selected":false}],[{"categoryName":"Russian","alias":"russian","selected":false}],[{"categoryName":"Scandinavian","alias":"scandinavian","selected":false}],[{"categoryName":"Scottish","alias":"scottish","selected":false}],[{"categoryName":"Slovakian","alias":"slovakian","selected":false}],[{"categoryName":"Spanish","alias":"spanish","selected":false}],[{"categoryName":"Ukrainian","alias":"ukrainian","selected":false}],[{"categoryName":"Uzbek","alias":"uzbek","selected":false}]],"Middle East":[[{"categoryName":"Middle Eastern","alias":"mideastern","selected":false}],[{"categoryName":"Afghan","alias":"afghani","selected":false}],[{"categoryName":"Arabian","alias":"arabian","selected":false}],[{"categoryName":"Armenian","alias":"armenian","selected":false}],[{"categoryName":"Egyptian","alias":"egyptian","selected":false}],[{"categoryName":"Georgian","alias":"georgian","selected":false}],[{"categoryName":"Lebanese","alias":"lebanese","selected":false}],[{"categoryName":"Pakistani","alias":"pakistani","selected":false}],[{"categoryName":"Persian/Iranian","alias":"persian","selected":false}]],"North America":[[{"categoryName":"American (New)","alias":"newamerican","selected":false}],[{"categoryName":"American (Traditional)","alias":"tradamerican","selected":false}],[{"categoryName":"Cajun/Creole","alias":"cajun","selected":false}],[{"categoryName":"Caribbean","alias":"caribbean","selected":false},{"categoryName":"Dominican","alias":"dominican","selected":false},{"categoryName":"Haitian","alias":"haitian","selected":false},{"categoryName":"Puerto Rican","alias":"puertorican","selected":false},{"categoryName":"Trinidadian","alias":"trinidadian","selected":false}],[{"categoryName":"Cuban","alias":"cuban","selected":false}],[{"categoryName":"Mexican","alias":"mexican","selected":false}],[{"categoryName":"New Mexican Cuisine","alias":"newmexican","selected":false}],[{"categoryName":"Southern (US)","alias":"southern","selected":false}],[{"categoryName":"Tex-Mex","alias":"tex-mex","selected":false}]],"South America":[[{"categoryName":"Argentine","alias":"argentine","selected":false}],[{"categoryName":"Brazilian","alias":"brazilian","selected":false}],[{"categoryName":"Colombian","alias":"colombian","selected":false}],[{"categoryName":"Honduran","alias":"honduran","selected":false}],[{"categoryName":"Latin American","alias":"latin","selected":false}],[{"categoryName":"Salvadoran","alias":"salvadoran","selected":false}],[{"categoryName":"Venezuelan","alias":"venezuelan","selected":false}],[{"categoryName":"Nicaraguan","alias":"nicaraguan","selected":false}],[{"categoryName":"Peruvian","alias":"peruvian","selected":false}]],"Speciality Foods":[[{"categoryName":"Pancakes","alias":"pancakes","selected":false}],[{"categoryName":"Burgers","alias":"burgers","selected":false}],[{"categoryName":"Cheesesteaks","alias":"cheesesteaks","selected":false}],[{"categoryName":"Chicken Shop","alias":"chickenshop","selected":false}],[{"categoryName":"Chicken Wings","alias":"chicken_wings","selected":false}],[{"categoryName":"Creperies","alias":"creperies","selected":false}],[{"categoryName":"Dim Sum","alias":"dimsum","selected":false}],[{"categoryName":"Falafel","alias":"falafel","selected":false}],[{"categoryName":"Fish & Chips","alias":"fishnchips","selected":false}],[{"categoryName":"Fondue","alias":"fondue","selected":false}],[{"categoryName":"Hot Dogs","alias":"hotdog","selected":false}],[{"categoryName":"Game Meat","alias":"gamemeat","selected":false}],[{"categoryName":"Hot Pot","alias":"hotpot","selected":false}],[{"categoryName":"Japanese Curry","alias":"japacurry","selected":false}],[{"categoryName":"Kebab","alias":"kebab","selected":false}],[{"categoryName":"Noodles","alias":"noodles","selected":false}],[{"categoryName":"Pizza","alias":"pizza","selected":false}],[{"categoryName":"Poutineries","alias":"poutineries","selected":false}],[{"categoryName":"Ramen","alias":"ramen","selected":false}],[{"categoryName":"Salad","alias":"salad","selected":false}],[{"categoryName":"Sandwiches","alias":"sandwiches","selected":false}],[{"categoryName":"Soup","alias":"soup","selected":false}],[{"categoryName":"Sushi by Conveyor Belt","alias":"conveyorsushi","selected":false}],[{"categoryName":"Sushi Bars","alias":"sushi","selected":false}],[{"categoryName":"Tacos","alias":"tacos","selected":false}],[{"categoryName":"Waffles","alias":"waffles","selected":false}],[{"categoryName":"Wraps","alias":"wraps","selected":false}]],"Dietary Restrictions":[[{"categoryName":"Gluten-Free","alias":"gluten_free","selected":false}],[{"categoryName":"Vegan","alias":"vegan","selected":false}],[{"categoryName":"Vegetarian","alias":"vegetarian","selected":false}]],"Restaurant Types":[[{"categoryName":"Brasseries","alias":"brasseries","selected":false}],[{"categoryName":"Buffets","alias":"buffets","selected":false}],[{"categoryName":"Cafes","alias":"cafes","selected":false},{"categoryName":"Themed Cafes","alias":"themedcafes","selected":false}],[{"categoryName":"Cafeteria","alias":"cafeteria","selected":false}],[{"categoryName":"Delis","alias":"delis","selected":false}],[{"categoryName":"Diners","alias":"diners","selected":false}],[{"categoryName":"Dinner Theater","alias":"dinnertheater","selected":false}],[{"categoryName":"Food Court","alias":"food_court","selected":false}],[{"categoryName":"Food Stands","alias":"foodstands","selected":false}],[{"categoryName":"Gastropubs","alias":"gastropubs","selected":false}],[{"categoryName":"Izakaya","alias":"izakaya","selected":false}],[{"categoryName":"Pop-Up Restaurants","alias":"popuprestaurants","selected":false}]],"Food Types":[[{"categoryName":"Asian Fusion","alias":"asianfusion","selected":false}],[{"categoryName":"Barbeque","alias":"bbq","selected":false}],[{"categoryName":"Breakfast & Brunch","alias":"breakfast_brunch","selected":false}],[{"categoryName":"Comfort Food","alias":"comfortfood","selected":false}],[{"categoryName":"Fast Food","alias":"fastfood","selected":false}],[{"categoryName":"Halal","alias":"halal","selected":false}],[{"categoryName":"Kosher","alias":"kosher","selected":false}],[{"categoryName":"Live/Raw Food","alias":"raw_food","selected":false}],[{"categoryName":"Mediterranean","alias":"mediterranean","selected":false}],[{"categoryName":"Seafood","alias":"seafood","selected":false}],[{"categoryName":"Soul Food","alias":"soulfood","selected":false}],[{"categoryName":"Teppanyaki","alias":"teppanyaki","selected":false}],[{"categoryName":"Tapas/Small Plates","alias":"tapasmallplates","selected":false}]]},
			categoriesOrder: {"By Region":["Africa","Asia","Australasia","Europe","Middle East","North America","South America"],"Other Categories":["Speciality Foods","Dietary Restrictions","Restaurant Types","Food Types"]},
			searchOptions: this.props.searchOptions
		}
		this.handleClick = this.handleClick.bind(this);
		this.loadFilters = this.loadFilters.bind(this);
		this.loadCategories = this.loadCategories.bind(this);
	}
	
	loadFilters(index, category, arr){
//		console.log(arr)
		return(<>
			{arr.length>1 ? <NavDropdown title={arr[0].categoryName} id="basic-nav-dropdown">{arr.map(this.loadFilters.bind(this, index,category))}</NavDropdown> : <NavDropdown.Item href="" onClick={this.handleClick.bind(this, arr)} style={(arr.selected == true || (arr[0] && arr[0].selected == true)) ? {color: 'red'} : {}}>{ arr.categoryName || arr[0].categoryName}</NavDropdown.Item>}
		</>)

	}
	handleClick(category){
		if (category.length>0) category = category[0];

		if (category.selected){

			this.state.searchOptions.categories = {alias: "restaurants"}
			category.selected = false;

		}else{
			this.state.searchOptions.categories=category;
			category.selected = true;
		}
		this.props.app.categoryFilter();
	}

	loadCategories(){
		return (<>
		<NavDropdown title="By Region" id="basic-nav-dropdown">{this.state.categoriesOrder["By Region"].map(value => (<NavDropdown title={value}id="basic-nav-dropdown">{this.state.mapMatrix[value].map(this.loadFilters.bind(this,[],value))}</NavDropdown>))}</NavDropdown>
		{this.state.categoriesOrder["Other Categories"].map(value => (<NavDropdown title={value}id="basic-nav-dropdown">{this.state.mapMatrix[value].map(this.loadFilters.bind(this, [],value))}</NavDropdown>))}
		</>);

	}

    render(){
        return (
				<>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                   { this.loadCategories()}
                </NavDropdown>
				<NavDropdown title="Selected" id="basic-nav-dropdown">
                <NavDropdown.Item href="" onClick={this.handleClick.bind(this, this.state.searchOptions.categories)}>{this.state.searchOptions.categories.categoryName}</NavDropdown.Item>
                </NavDropdown>
				</>
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
        )
    }
}

export default GlobalNavBar;


