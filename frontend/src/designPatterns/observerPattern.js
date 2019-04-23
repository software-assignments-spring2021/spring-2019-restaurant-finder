import React, { Component } from 'react';
import singleton from "./SearchStateSingleton";

class Observer extends Component {
	constructor(props) {
		super(props)		
		singleton.Observer = this;
	}

    render() {
    	return (
    		<div>
	    		{(singleton.searchOptions.term.length > 0) ? <p className="observer">Term: {singleton.searchOptions.term} &nbsp;</p>:""}
	    		{(singleton.searchOptions.term.length == 0) ? <p className="observer">Term: NONE &nbsp;</p>:""}

	    		{(singleton.searchOptions.sort_by === undefined) ? <p className="observer">Sorting by: NONE &nbsp;</p>:""}
				{(singleton.searchOptions.sort_by !== undefined) ? <p className="observer">Sorting by: {singleton.searchOptions.sort_by} &nbsp;</p>:""}

				{(singleton.searchOptions.categories.categoryName !== undefined) ? <p className="observer">Categorize by: {singleton.searchOptions.categories.categoryName} &nbsp;</p>:""}
	    		{(singleton.searchOptions.categories.categoryName === undefined) ? <p className="observer">Categorize by: NONE &nbsp;</p>:""}
	    	</div>
    	)
    }
}


export default Observer;
