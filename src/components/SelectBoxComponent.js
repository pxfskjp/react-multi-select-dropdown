import React, { useEffect, useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";

export default function SelectBoxComponent(props) {
  
	const changedState = true;
	const [plainArray, setPlainArray] = useState([]);
	const [selectedValues, setSelectedValues] = useState([]);

	useEffect(() => {
		setPlainArray(["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]);
	}, [changedState])

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList, selectedItem);
		setSelectedValues(selectedList);
  }

  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList, removedItem);
		setSelectedValues(selectedList)
  }

	const makeSelectedOption = () => {
		return <div>
			asdfsadfsafsdf
		</div>
	}

	return (
		<div className="App">
			<div className="col-12 d-md-flex">
				<div className="col-12 col-md-4 mt50 contents">
					{
						makeSelectedOption()
					}
				</div>
				<br />
				<div className="examples col-12 col-md-5 mt30">
					<Multiselect showArrow 
						options={plainArray} 
						isObject={false}
						onSelect={(selectedList, selectedItem) => onSelect(selectedList, selectedItem)}
						onRemove={(selectedList, removedItem) => onRemove(selectedList, removedItem)}
							/>
				</div>
			</div>
		</div>
	);
}