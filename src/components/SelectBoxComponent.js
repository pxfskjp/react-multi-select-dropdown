import React, { useEffect, useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";

export default function SelectBoxComponent(props) {
  
	const [subjectArray, setSubjectArray] = useState([]);
	const [selectedSubjects, setSelectedSubjects] = useState([]);

	useEffect(() => {
		setSubjectArray(
			[
				{name: 'Option 1', id: 'option_1'}, 
				{name: 'Option 2', id: 'option_2'}, 
				{name: 'Option 3', id: 'option_3'}, 
				{name: 'Option 4', id: 'option_4'}, 
				{name: 'Option 5', id: 'option_5'}, 
				{name: 'Option 6', id: 'option_6'}, 
				{name: 'Option 7', id: 'option_7'}]
		);
	}, [subjectArray])

  const onSelect = (selectedList, selectedItem) => {
    setSelectedSubjects(selectedList);
  }

  const onRemove = (selectedList, removedItem) => {
    setSelectedSubjects(selectedList);
  }

  const onSubjectClick = (selectedSubject) => {
    console.log(selectedSubject);
  }

	return (
    
		<div className="App">
      <div className="col-12 d-md-flex mt-3">
        <br />
        <div className="examples col-12 col-md-5 mt30">
          <Multiselect 
            options={subjectArray}
            selectionLimit={5}
            onSelect={(selectedList, selectedIte) => onSelect(selectedList, selectedIte)}
            onRemove={(selectedList, removedItem) => onRemove(selectedList, removedItem)}
            displayValue="name"
          />
        </div>
      </div>

			<div className="col-12 d-md-flex mt-3 mr-2 ml-2">
				<div id="seleted_content" className="row contents">
					{
            selectedSubjects && selectedSubjects.map((item) => {
              return <div key={item.id} className="d-md-flex mt-3">
                <button type="button"
                  onClick={() => onSubjectClick(item.id)}
                  className="btn btn-primary m-1"  
                >{item.name}</button>
              </div>
            })
					}
				</div>
			</div>
		</div>
	);
}