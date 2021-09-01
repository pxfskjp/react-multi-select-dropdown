import React, { useEffect, useState } from 'react'
import { Multiselect } from "multiselect-react-dropdown";
import axios from 'axios';

const url = 'http://localhost:3001/'

export default function SelectBoxComponent(props) {
  
  const [allSubjectsArray, setAllSubjectsArray] = useState([]);
  const [allTagsArray, setAllTagsArray] = useState([]);

	const [categoryArray, setCategoryArray] = useState([]);
	const [selectedCategories, setSelectedCategories] = useState([]);
  const [subjectsArray, setSubjectsArray] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [tagsArray, setTagsArray] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {

    // Get Categories
    axios.get(`${url}api/v1/categories`)
      .then((res) => {
        setCategoryArray(res.data);
      })
    
    // Get Subjects
    axios.get(`${url}api/v1/subjects`)
    .then((res) => {
      setAllSubjectsArray(res.data);
    })

    // Get Tags
    axios.get(`${url}api/v1/tags`)
      .then((res) => {
        setAllTagsArray(res.data);
      })

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
                  className="btn btn-success m-2"  
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
                  className="btn btn-secondary m-2"  
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
                  className="btn btn-primary m-2"  
                >{item.tag}</button>
              </div>
            })
          }
        </div>
      </div>
		</div>
	);
}