/*Defining reusable input components: The first step in creating 
a form in React is to define reusable input components for different
types of input elements, such as text inputs, date inputs, time inputs,
number inputs, checkboxes, and select inputs.In the above app, these 
components are defined in the components.js file and include TextInput,
CheckBox, SelectInput, DateBox, TimeBox, and NumBox.These components accept
various props for customizing their behavior, such as label, id, name, and options.*/

import React, { useEffect, useState, useRef } from 'react';
import * as XLSX from 'xlsx';


export const TextInput = ({ label, id, name, onChange}) => {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input type="text" id={id} name={name} onChange={onChange}/>
    </>
  );
};

export const CheckBox = ({label, id , name}) => {
    return (
        <>
        <label htmlFor={id}>{label}:</label>
        <input type="checkbox" id={id} name={name} />
        </>
    );
};

export const SelectInput = ({ label, id, name, options }) => {
    return (
      <>
        <label htmlFor={id}>{label}:</label>
        <select id={id} name={name}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  };

export const DateBox = ({label, id , name}) => {
    return (
        <>
        <label htmlFor={id}>{label}:</label>
        <input type="date" id={id} name={name} />
        </>
    );
};
export const TimeBox = ({label, id , name}) => {
    return (
        <>
        <label htmlFor={id}>{label}:</label>
        <input type="time" id={id} name={name} />
        </>
    );
};

export const NumBox= ({label, id , name}) => {
    return (
        <>
        <label htmlFor={id}>{label}:</label>
        <input type="number" id={id} name={name} />
        </>
    );
};

export const TestForm = () => {
  const bill_options = [
    { value: 'Opt1', label: 'Opt1' },
    { value: 'Opt2', label: 'Opt2' },
    { value: 'Opt3', label: 'Opt3' },
  ];
  const [searchResult, setSearchResult] = useState([]);
  const [numSamples, setNumSamples] = useState(0);
  const [sampleSections, setSampleSections] = useState([]);
  const [selectValueChange, setSelectValueChange] = useState(false);
  const selectValueRef = useRef(Array(numSamples).fill(''));
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Updating sample sections:', numSamples);
    const newSampleSections = [];
    for (let i = 0; i < numSamples; i++) {
      newSampleSections.push(
        <div key={i}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
              <TextInput label="Test Requested" id={`tr${i}`} name={`tr${i}`} />
            </div>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor={`tb${i}`}>Test Billed:</label>
              <select
                id={`tb${i}`}
                name={`tb${i}`}
                onChange={(e) => handleSelectChange(e, i)}
              >
                {bill_options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div style={{ marginRight: '10px' }}>
              <DateBox label="TAT Deadline" id={`tat${i}`} name={`tat${i}`} />
            </div>
              </div>

              {/*Below conditional rendering is used to show or hide a search input
                  based on the value of a select input. This is achieved by using
                  a conditional statement in the JSX code that checks the value of the select
                  input and only renders the search input if the value is equal to 'Opt2'*/}

          {selectValueRef.current[i] === 'Opt2' && (
            <div style={{ marginTop: '10px' }}>
              <TextInput
                label="Look Up Name"
                id={`search${i}`}
                name={`search${i}`}
                onChange={(e) => handleSearchChange(e, i)}
              />
            </div>
          )}
        </div>
      );
    }
    setSampleSections(newSampleSections);
  }, [numSamples, selectValueChange]);

  const handleNumSamplesChange = (e) => {
    console.log('Updating numSamples:', e.target.value);
    setNumSamples(e.target.value);
  };

  const handleSelectChange = (e, index) => {
    console.log('handleSelectChange called:', e.target.value, index);
    selectValueRef.current[index] = e.target.value;
    setSelectValueChange((prevState) => !prevState);
    console.log('selectValueRef.current updated:', selectValueRef.current);
  };

  const handleFileUpload = (e) => {
    console.log('handleFileUpload called');
    const file = e.target.files[0];
    console.log('read file:', file);
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      console.log('Excel data:', json);
      setData(json);
    };
    reader.readAsBinaryString(file);
  };

  const handleSearchChange = (e, index) => {
    const result = data.filter(row => row['Full Name'] === e.target.value);
    const searchValue = e.target.value;
    console.log('Search value:', searchValue);
    console.log('Search result:', result);
    setSearchResult(result);
  };

  return (
    <>
      <input type="file" onChange={handleFileUpload} />
      <TextInput
        label="No. of Sample Requested"
        id="nsr"
        name="nsr"
        type="number"
        onChange={handleNumSamplesChange}
      />
      {sampleSections}
      {searchResult.map((row, index) => (
  <div key={index}>
    {/* Render the row data */}
    {Object.entries(row).map(([key, value]) => (
      <div key={key}>
        {key}: {value}
      </div>
    ))}
  </div>
))}
    </>
  );
};

export function MyComponent() {
  const bill_options = [
    { value: 'Opt1', label: 'Opt1' },
    { value: 'Opt2', label: 'Opt2' },
    { value: 'Opt3', label: 'Opt3' },
  ];
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        Register As Problem
          </label>

          {/*Below conditional rendering is used to show or hide additional options
              and inputs based on the state of a checkbox. This is achieved by using
              a conditional statement in the JSX code that checks if the checkbox is 
              checked and only renders the additional options and inputs if it is.*/ }

      {isChecked && (
        <>
          <div>
            <label>
              <input type="checkbox" />
              Option 1
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Option 2
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              Option 3
            </label>
          </div>
          <div>
            <label>
              Text input 1:
              <input type="text" />
            </label>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
                <TextInput label="Charges" id="cr" name="cr"/>
            </div>
            <div style={{ marginRight: '10px' }}>
                <SelectInput label="Status" id="ps" name="ps" options={bill_options}/>
            </div>
            <div style={{ marginRight: '10px' }}>
                <TextInput label="info" id="ar" name="ar"/>
            </div>
        </div>
        </>
      )}
    </div>
  );
}