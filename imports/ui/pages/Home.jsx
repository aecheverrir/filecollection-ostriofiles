import React, { Component } from "react";
import FileUploadComponent from "../components/files/FileUpload.jsx";
import { Meteor } from 'meteor/meteor';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div>
				<h1>Home Page</h1>
				<hr/>
				<FileUploadComponent />
			</div>
		);
	}
}
