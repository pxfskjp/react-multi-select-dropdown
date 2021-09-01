import React, { useEffect, useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";

export default function SelectBoxComponent(props) {
  
  const allTagsArray = [
    {tag: 'Option 1 Tag 1', id: 'subject_1_tag_1', subject_id: 'option_1'},
    {tag: 'Option 1 Tag 2', id: 'subject_1_tag_2', subject_id: 'option_1'},
    {tag: 'Option 1 Tag 3', id: 'subject_1_tag_3', subject_id: 'option_1'},
    {tag: 'Option 1 Tag 4', id: 'subject_1_tag_4', subject_id: 'option_1'},
    {tag: 'Option 1 Tag 5', id: 'subject_1_tag_5', subject_id: 'option_1'},
    {tag: 'Option 1 Tag 6', id: 'subject_1_tag_6', subject_id: 'option_1'},

    {tag: 'Option 2 Tag 1', id: 'subject_2_tag_1', subject_id: 'option_2'},
    {tag: 'Option 2 Tag 2', id: 'subject_2_tag_2', subject_id: 'option_2'},
    {tag: 'Option 2 Tag 3', id: 'subject_2_tag_3', subject_id: 'option_2'},
    {tag: 'Option 2 Tag 4', id: 'subject_2_tag_4', subject_id: 'option_2'},
    {tag: 'Option 2 Tag 5', id: 'subject_2_tag_5', subject_id: 'option_2'},
    {tag: 'Option 2 Tag 6', id: 'subject_2_tag_6', subject_id: 'option_2'},
    {tag: 'Option 2 Tag 7', id: 'subject_2_tag_7', subject_id: 'option_2'},

    {tag: 'Option 3 Tag 1', id: 'subject_3_tag_1', subject_id: 'option_3'},
    {tag: 'Option 3 Tag 2', id: 'subject_3_tag_2', subject_id: 'option_3'},
    {tag: 'Option 3 Tag 3', id: 'subject_3_tag_3', subject_id: 'option_3'},
    
    {tag: 'Option 4 Tag 1', id: 'subject_4_tag_1', subject_id: 'option_4'},
    {tag: 'Option 4 Tag 2', id: 'subject_4_tag_2', subject_id: 'option_4'},
    {tag: 'Option 4 Tag 3', id: 'subject_4_tag_3', subject_id: 'option_4'},
    {tag: 'Option 4 Tag 4', id: 'subject_4_tag_4', subject_id: 'option_4'},
    {tag: 'Option 4 Tag 5', id: 'subject_4_tag_5', subject_id: 'option_4'},
    {tag: 'Option 4 Tag 6', id: 'subject_4_tag_6', subject_id: 'option_4'},
    
    {tag: 'Option 5 Tag 1', id: 'subject_5_tag_1', subject_id: 'option_5'},
    {tag: 'Option 5 Tag 2', id: 'subject_5_tag_2', subject_id: 'option_5'},
    {tag: 'Option 5 Tag 3', id: 'subject_5_tag_3', subject_id: 'option_5'},
    {tag: 'Option 5 Tag 4', id: 'subject_5_tag_4', subject_id: 'option_5'},
    {tag: 'Option 5 Tag 5', id: 'subject_5_tag_5', subject_id: 'option_5'},

    {tag: 'Option 6 Tag 1', id: 'subject_6_tag_1', subject_id: 'option_6'},
    {tag: 'Option 6 Tag 2', id: 'subject_6_tag_2', subject_id: 'option_6'},
    {tag: 'Option 6 Tag 3', id: 'subject_6_tag_3', subject_id: 'option_6'},
    
    {tag: 'Option 7 Tag 1', id: 'subject_7_tag_1', subject_id: 'option_7'},
    {tag: 'Option 7 Tag 2', id: 'subject_7_tag_2', subject_id: 'option_7'},
    {tag: 'Option 7 Tag 3', id: 'subject_7_tag_3', subject_id: 'option_7'},
    {tag: 'Option 7 Tag 4', id: 'subject_7_tag_4', subject_id: 'option_7'},
  ];
	const [subjectArray, setSubjectArray] = useState([]);
	const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [tagsArray, setTagsArray] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
		setSubjectArray(
			[
				{subject: 'Option 1', id: 'option_1'}, 
				{subject: 'Option 2', id: 'option_2'}, 
				{subject: 'Option 3', id: 'option_3'}, 
				{subject: 'Option 4', id: 'option_4'}, 
				{subject: 'Option 5', id: 'option_5'}, 
				{subject: 'Option 6', id: 'option_6'}, 
				{subject: 'Option 7', id: 'option_7'}]
		);
	}, [subjectArray, tagsArray])

  const onSelect = (selectedList, selectedItem) => {
    setSelectedSubjects(selectedList);
  }

  const onRemove = (selectedList, removedItem) => {
    setSelectedSubjects(selectedList);
  }

  const onTagSelect = (selectedList, selectedItem) => {
    setSelectedTags(selectedList);
  }

  const onTagRemove = (selectedList, removedItem) => {
    setSelectedTags(selectedList);
  }

  const onSubjectClick = (selectedSubjectId) => {
    const tagsArray = allTagsArray.filter((item) => {
      return item.subject_id === selectedSubjectId && item
    })
    setTagsArray(tagsArray)
  }

	return (
    
		<div className="App">
      <div className="col-12 d-md-flex mt-3">
        <br />
        <div className="examples col-12 col-md-5 mt30">
          <Multiselect 
            id="subject_select"
            options={subjectArray}
            selectionLimit={5}
            onSelect={(selectedList, selectedIte) => onSelect(selectedList, selectedIte)}
            onRemove={(selectedList, removedItem) => onRemove(selectedList, removedItem)}
            displayValue="subject"
            placeholder="Subjects"
          />
        </div>
      </div>

			<div className="col-12 d-md-flex mt-3 mr-2 ml-2">
				<div id="seleted_subjects" className="row contents">
					{
            selectedSubjects && selectedSubjects.map((item) => {
              return <div key={item.id} className="d-md-flex mt-3">
                <button type="button"
                  onClick={() => onSubjectClick(item.id)}
                  className="btn btn-primary m-1"  
                >{item.subject}</button>
              </div>
            })
					}
				</div>
			</div>

      <div className="col-12 d-md-flex mt-3">
        <br />
        <div className="examples col-12 col-md-5 mt30">
          <Multiselect 
            id="tag_select"
            options={tagsArray}
            selectionLimit={5}
            onSelect={(selectedList, selectedIte) => onTagSelect(selectedList, selectedIte)}
            onRemove={(selectedList, removedItem) => onTagRemove(selectedList, removedItem)}
            displayValue="tag"
            placeholder="Tags"
          />
        </div>
      </div>

			<div className="col-12 d-md-flex mt-3 mr-2 ml-2">
				<div id="seleted_tags" className="row contents">
					{
            selectedTags && selectedTags.map((item) => {
              return <div key={item.id} className="d-md-flex mt-3">
                <div
                  className="m-2 h7"  
                >{item.tag}</div>
              </div>
            })
					}
				</div>
			</div>
		</div>
	);
}