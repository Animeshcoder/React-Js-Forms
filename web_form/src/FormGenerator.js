import React from 'react'; 
import { TextInput, DateBox, TimeBox, CheckBox, NumBox , SelectInput, TestForm, MyComponent} from './components';

const FormGenerator = () => {
    const loc_options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },]

    const age_options = [
        { value: 'Days', label: 'Days' },
        { value: 'Months', label: 'Months' },
        { value: 'Years', label: 'Years' },]
    const gen_options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' },]
    const cust_options = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },]
    const part_options = [
        { value: 'Abc', label: 'Abc' },
        { value: 'Bcd', label: 'Bcd' },
        { value: 'Cde', label: 'Cde' },]

    /*handleSubmit and handleReset, currently only log messages to the console and do not perform any other actions.*/
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data
        console.log('Form submitted');
    };
    
    const handleReset = () => {
        // Reset the form data
        console.log('Form reset');
    };
    return (
    <form>
      <h1>Form Generator</h1>
      <h2>Add Details</h2>
      <SelectInput label="Location" id="location" name="location" options={loc_options}/>
      <br />
      <CheckBox label="Using ID" id="usingID" name="usingID" />
      <h2>User Details</h2>
      <TextInput label="Name" id="name" name="name"/>
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '10px' }}>
            <DateBox label="DOB" id="dob" name="dob"/>
        </div>
        <div style={{ marginRight: '10px' }}>
            <NumBox label="Age" id="age" name="age"/>
        </div>
        <div style={{ marginRight: '10px' }}>
            <SelectInput label="Age Options" id="ageop" name="ageop" options={age_options}/>
        </div>
        <div style={{ marginRight: '10px' }}>
            <SelectInput label="Gender" id="gen" name="gen" options={gen_options}/>
        </div>
        <div style={{ marginRight: '10px' }}>
            <SelectInput label="Customer Type" id="cust" name="cust" options={cust_options}/>
        </div>
        </div>
        <h2>Referral Details</h2>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
            <TextInput label="Referred By" id="refer" name="refer"/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <SelectInput label="Hospital Partner" id="part" name="part" options={part_options}/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <TextInput label="Hospital ID" id="hosp" name="hosp"/>
            </div>
        </div>
        <h2>
            Sample Details
        </h2>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
            <DateBox label="Date" id="sd" name="sd"/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <TimeBox label="Time" id="st" name="st"/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <SelectInput label="Collected By" id="scb" name="scb" options={part_options}/>
            </div>
        </div>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
            <NumBox label="Number" id="ns" name="ns"/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <TextInput label="Type" id="sty" name="sty"/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <SelectInput label="Brought By" id="sb" name="sb" options={cust_options}/>
            </div>
            
        </div>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
            <SelectInput label="Received By" id="srb" name="srb" options={cust_options}/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <DateBox label="Recieved Date" id="srd" name="srd"/>
            </div>
            <div style={{ marginRight: '10px' }}>
            <SelectInput label="Received inf" id="srt" name="srt" options={part_options}/>
            </div>
        </div>
        <p id = 'para'>
            My name is Animesh Awasthi.<br/>
            I am creating a form by using react.<br/>
            This is a sample text.
        </p>
        <h2>
            Test Details
        </h2>
            <TestForm/>
        <h2>
            Payment Details
        </h2>
        <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '10px' }}>
                <TextInput label="Charges" id="cr" name="cr"/>
            </div>
            <div style={{ marginRight: '10px' }}>
                <SelectInput label="Payment Status" id="ps" name="ps" options={part_options}/>
            </div>
            <div style={{ marginRight: '10px' }}>
                <TextInput label="Amount Rec." id="ar" name="ar"/>
            </div>
        </div>
        <h2>
            Normal Details
        </h2>
        <div style={{ marginRight: '10px' }}>
            <TextInput label="History" id="ch" name="ch"/>
        </div>
        <h2>
            Problems
        </h2>
        <div style={{ marginRight: '10px' }}>
            <MyComponent/>
        </div>
        <div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormGenerator;
