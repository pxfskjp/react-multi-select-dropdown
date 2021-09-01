import React, { useEffect, useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";

export default function SelectBoxComponent(props) {
  
  const allSubjectsArray = [
    {subject: 'Category 1 Subject 1', id: 'category_1_subject_1', category_id: 'category_1'},
    {subject: 'Category 1 Subject 2', id: 'category_1_subject_2', category_id: 'category_1'},
    {subject: 'Category 1 Subject 3', id: 'category_1_subject_3', category_id: 'category_1'},
    {subject: 'Category 1 Subject 4', id: 'category_1_subject_4', category_id: 'category_1'},
    {subject: 'Category 1 Subject 5', id: 'category_1_subject_5', category_id: 'category_1'},
    {subject: 'Category 1 Subject 6', id: 'category_1_subject_6', category_id: 'category_1'},
    {subject: 'Category 2 Subject 1', id: 'category_2_subject_1', category_id: 'category_2'},
    {subject: 'Category 2 Subject 2', id: 'category_2_subject_2', category_id: 'category_2'},
    {subject: 'Category 2 Subject 3', id: 'category_2_subject_3', category_id: 'category_2'},
    {subject: 'Category 2 Subject 4', id: 'category_2_subject_4', category_id: 'category_2'},
    {subject: 'Category 2 Subject 5', id: 'category_2_subject_5', category_id: 'category_2'},
    {subject: 'Category 2 Subject 6', id: 'category_2_subject_6', category_id: 'category_2'},
    {subject: 'Category 2 Subject 7', id: 'category_2_subject_7', category_id: 'category_2'},
    {subject: 'Category 3 Subject 1', id: 'category_3_subject_1', category_id: 'category_3'},
    {subject: 'Category 3 Subject 2', id: 'category_3_subject_2', category_id: 'category_3'},
    {subject: 'Category 3 Subject 3', id: 'category_3_subject_3', category_id: 'category_3'},
    {subject: 'Category 4 Subject 1', id: 'category_4_subject_1', category_id: 'category_4'},
    {subject: 'Category 4 Subject 2', id: 'category_4_subject_2', category_id: 'category_4'},
    {subject: 'Category 4 Subject 3', id: 'category_4_subject_3', category_id: 'category_4'},
    {subject: 'Category 4 Subject 4', id: 'category_4_subject_4', category_id: 'category_4'},
    {subject: 'Category 4 Subject 5', id: 'category_4_subject_5', category_id: 'category_4'},
    {subject: 'Category 4 Subject 6', id: 'category_4_subject_6', category_id: 'category_4'},
    {subject: 'Category 5 Subject 1', id: 'category_5_subject_1', category_id: 'category_5'},
    {subject: 'Category 5 Subject 2', id: 'category_5_subject_2', category_id: 'category_5'},
    {subject: 'Category 5 Subject 3', id: 'category_5_subject_3', category_id: 'category_5'},
    {subject: 'Category 5 Subject 4', id: 'category_5_subject_4', category_id: 'category_5'},
    {subject: 'Category 5 Subject 5', id: 'category_5_subject_5', category_id: 'category_5'},
    {subject: 'Category 6 Subject 1', id: 'category_6_subject_1', category_id: 'category_6'},
    {subject: 'Category 6 Subject 2', id: 'category_6_subject_2', category_id: 'category_6'},
    {subject: 'Category 6 Subject 3', id: 'category_6_subject_3', category_id: 'category_6'},
    {subject: 'Category 7 Subject 1', id: 'category_7_subject_1', category_id: 'category_7'},
    {subject: 'Category 7 Subject 2', id: 'category_7_subject_2', category_id: 'category_7'},
    {subject: 'Category 7 Subject 3', id: 'category_7_subject_3', category_id: 'category_7'},
    {subject: 'Category 7 Subject 4', id: 'category_7_subject_4', category_id: 'category_7'},
  ];

  const allTagsArray = [
    {tag: 'Subject 1 Tag 1', id: 'tag_1', subject_id: 'category_1_subject_1'},
    {tag: 'Subject 1 Tag 2', id: 'tag_2', subject_id: 'category_1_subject_1'},
    {tag: 'Subject 1 Tag 3', id: 'tag_3', subject_id: 'category_1_subject_1'},
    {tag: 'Subject 1 Tag 4', id: 'tag_4', subject_id: 'category_1_subject_1'},
    {tag: 'Subject 1 Tag 5', id: 'tag_5', subject_id: 'category_1_subject_1'},

    {tag: 'Subject 2 Tag 1', id: 'tag_1', subject_id: 'category_1_subject_2'},
    {tag: 'Subject 2 Tag 2', id: 'tag_2', subject_id: 'category_1_subject_2'},
    {tag: 'Subject 2 Tag 3', id: 'tag_3', subject_id: 'category_1_subject_2'},
    {tag: 'Subject 2 Tag 4', id: 'tag_4', subject_id: 'category_1_subject_2'},
    {tag: 'Subject 2 Tag 5', id: 'tag_5', subject_id: 'category_1_subject_2'},
    {tag: 'Subject 2 Tag 6', id: 'tag_6', subject_id: 'category_1_subject_2'},

    
    {tag: 'Subject 3 Tag 1', id: 'tag_1', subject_id: 'category_1_subject_3'},
    {tag: 'Subject 3 Tag 2', id: 'tag_2', subject_id: 'category_1_subject_3'},
    {tag: 'Subject 3 Tag 3', id: 'tag_3', subject_id: 'category_1_subject_3'},
    {tag: 'Subject 3 Tag 4', id: 'tag_4', subject_id: 'category_1_subject_3'},
    {tag: 'Subject 3 Tag 5', id: 'tag_5', subject_id: 'category_1_subject_3'},

    
    {tag: 'Subject 4 Tag 1', id: 'tag_1', subject_id: 'category_1_subject_4'},
    {tag: 'Subject 4 Tag 2', id: 'tag_2', subject_id: 'category_1_subject_4'},
    {tag: 'Subject 4 Tag 3', id: 'tag_3', subject_id: 'category_1_subject_4'},
    {tag: 'Subject 4 Tag 4', id: 'tag_4', subject_id: 'category_1_subject_4'},
    {tag: 'Subject 4 Tag 5', id: 'tag_5', subject_id: 'category_1_subject_4'},
    
  ];
	const [categoryArray, setCategoryArray] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
  const [subjectsArray, setSubjectsArray] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [tagsArray, setTagsArray] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
		setCategoryArray(
			[
				{category: 'Category 1', id: 'category_1'}, 
				{category: 'Category 2', id: 'category_2'}, 
				{category: 'Category 3', id: 'category_3'}, 
				{category: 'Category 4', id: 'category_4'}, 
				{category: 'Category 5', id: 'category_5'}, 
				{category: 'Category 6', id: 'category_6'}, 
				{category: 'Category 7', id: 'category_7'}]
		);
	}, [categoryArray, subjectsArray, selectedTags])

  const onSelect = (selectedList, selectedItem) => {
    setSelectedCategories(selectedList);
  }

  const onRemove = (selectedList, removedItem) => {
    setSelectedCategories(selectedList);
  }

  const onSubjectSelect = (selectedList, selectedItem) => {
    setSelectedSubjects(selectedList);
  }

  const onSubjectRemove = (selectedList, removedItem) => {
    setSelectedSubjects(selectedList);
  }

  const onTagSelect = (selectedList, selectedItem) => {
    setSelectedTags(selectedList);
  }

  const onTagRemove = (selectedList, removedItem) => {
    setSelectedTags(selectedList);
  }

  const onSubjectClick = (selectedSubjectId) => {
    const subjectsArray = allSubjectsArray.filter((item) => {
      return item.category_id === selectedSubjectId && item;
    })
    setSubjectsArray(subjectsArray);
  }

  const onTagClick = (selectedTagId) => {
    const tagArray = allTagsArray.filter((item) => {
      return item.subject_id === selectedTagId && item;
    })
    
    setTagsArray(tagArray)
  }

	return (
    
		<div className="App">
      <div className="col-12 d-md-flex mt-3">
        <br />
        <div className="examples col-12 col-md-5 mt30">
          <Multiselect 
            id="category_select"
            options={categoryArray}
            selectionLimit={5}
            onSelect={(selectedList, selectedIte) => onSelect(selectedList, selectedIte)}
            onRemove={(selectedList, removedItem) => onRemove(selectedList, removedItem)}
            displayValue="category"
            placeholder="Categories"
          />
        </div>
      </div>

			<div className="col-12 d-md-flex mt-3 mr-2 ml-2">
				<div id="seleted_categories" className="row contents">
					{
            selectedCategories && selectedCategories.map((item) => {
              return <div key={item.id} className="d-md-flex mt-3">
                <button type="button"
                  onClick={() => onSubjectClick(item.id)}
                  className="btn btn-success m-1"  
                >{item.category}</button>
              </div>
            })
					}
				</div>
			</div>

      <div className="col-12 d-md-flex mt-3">
        <br />
        <div className="examples col-12 col-md-5 mt30">
          <Multiselect 
            id="subject_select"
            options={subjectsArray}
            selectionLimit={5}
            onSelect={(selectedList, selectedIte) => onSubjectSelect(selectedList, selectedIte)}
            onRemove={(selectedList, removedItem) => onSubjectRemove(selectedList, removedItem)}
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
                  onClick={() => onTagClick(item.id)}
                  className="btn btn-secondary m-1"  
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
        <div id="seleted_subjects" className="row contents">
          {
            selectedTags && selectedTags.map((item) => {
              return <div key={item.id} className="d-md-flex mt-3">
                <button type="button"
                  onClick={() => onTagClick(item.id)}
                  className="btn btn-primary m-1"  
                >{item.tag}</button>
              </div>
            })
          }
        </div>
      </div>
		</div>
	);
}