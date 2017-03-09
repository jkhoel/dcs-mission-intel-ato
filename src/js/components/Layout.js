import React from "react";

import Header from "./Layout/Footer";
import Footer from "./Layout/Header";

export default class Layout extends React.Component {
	render() {
		return (
			<div>
			  <Header />
			  <Footer />
			</div>
		);
	}
}