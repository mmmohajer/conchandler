import React , {Component} from 'react';

class FormsPg8 extends Component{
	
	constructor(props){
		super(props);
	}

	onGrLivAreaChange = (event) => {
		let val = event.target.value;
		this.props.setGrLivAreaVal(val);
	}

	onGarageAreaChange = (event) => {
		let val = event.target.value;
		this.props.setGarageAreaVal(val);
	}

	onEnclosedPorchChange = (event) => {
		let val = event.target.value;
		this.props.setEnclosedPorchVal(val);
	}

	onTotalBsmtSFChange = (event) => {
		let val = event.target.value;
		this.props.setTotalBsmtSFVal(val);
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "GrLivArea"> Above grade (ground) living area square feet [334, 5642] </label>
        			<input 
        				type = "text" 
        				name = "GrLivArea" 
		          		id = "GrLivArea" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onGrLivAreaChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5 TwoLines" htmlFor = "GarageArea"> Size of garage in square feet [0-1418]</label>
        			<input 
						type = "text" 
		          		name = "GarageArea" 
		          		id = "GarageArea" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onGarageAreaChange }
		          	/>
		         </div>

		        <div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "EnclosedPorch"> Enclosed porch area in square feet [0-552] </label>
        			<input 
						type = "text" 
		          		name = "EnclosedPorch" 
		          		id = "EnclosedPorch" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onEnclosedPorchChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "TotalBsmtSF"> Total square feet of basement area [0-6110] </label>
        			<input 
						type = "text" 
		          		name = "TotalBsmtSF" 
		          		id = "TotalBsmtSF" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onTotalBsmtSFChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg8;