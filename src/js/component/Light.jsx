import React from "react";

//create your first component
export class Light extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedlight: null
		};
	}

	render() {
		var redExtraClass = "";
		if (this.state.clickedlight == "red") redExtraClass = "selected";
		var yellowExtraClass = "";
		if (this.state.clickedlight == "yellow") yellowExtraClass = "selected";
		var greenExtraClass = "";
		if (this.state.clickedlight == "green") greenExtraClass = "selected";

		return (
			<div>
				<div id="traffictop"> </div>
				<div id="lightbox">
					<div
						className={"red light " + redExtraClass}
						onClick={() => this.setState({ clickedlight: "red" })}
					/>
					<div
						className={"yellow light " + yellowExtraClass}
						onClick={() =>
							this.setState({ clickedlight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenExtraClass}
						onClick={() => this.setState({ clickedlight: "green" })}
					/>
				</div>
			</div>
		);
	}
}
