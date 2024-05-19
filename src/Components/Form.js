import React, { useState, useEffect, useRef } from 'react'
import Preview from './Preview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




export default function Form() {

  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    SchoolUniversity: "",
    Subject: "",
    Class: "",
    Section: "",
    Name: "",
    Rollno: "",
    Topic: "",
    Department: "",
    Programme: "",
    Select: "",
    inlogo: "",
  })

  const [image, setImage] = useState("")

  const handleupload = (imgevent) => {
    // const file = imgevent.target.file[0];
    setImage(imgevent.target.files[0]);
  }

  const handlelogodelete = () => {
    setImage(null);
    setForm(f => ({ ...f, inlogo: "" }));
    fileInputRef.current.value = '';
  }

  useEffect(() => {
    if (image) {
      const imgurl = URL.createObjectURL(image);
      setForm(f => ({ ...f, inlogo: imgurl }));
    }
  }, [image]);


  const handlekeydown = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    console.log(form)
  };


  const handlekeypressclass = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    console.log(form)
    if (form.Select === "") {
      setCheckedItems({
        ...checkedItems, Select: false,
      });
    }

  };


  const handleinput = (e) => {
    const value = e.target.value;
    setForm((prevForm) => ({
      ...prevForm,
      Select: value
    }));


    if (e.target.value === "") {
      setCheckedItems({
        ...checkedItems, Select: false,
      });
    }
    else {
      setCheckedItems({
        ...checkedItems, Select: 'checked',
      });
    }
  };

  const [checkedItems, setCheckedItems] = useState({
    topic: false,
    department: false,
    programme: false,
    Select: 'checked'
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems, [name]: checked,
    });

    const fname = event.target.name;
    if (!checkedItems.fname) {
      const capitalizedFname = fname.charAt(0).toUpperCase() + fname.slice(1);
      const value = "";
      setForm({
        ...form, [capitalizedFname]: value,
      });
    }
  };

  const handledownloadbutton = () => {
    console.log("Donwload button clicked");
    const element = document.getElementById('divToExport');

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('CoverUP_CoverPage.pdf');
    });
  }

  return (
    <>
      <div className='Container' style={{ backgroundColor: 'aliceblue' }}>
        <div className='Panel'>
          <div className="mb-3" >
            <h6 className="promotxt font-display m-0 text-l text-center" style={{ fontSize: '1.6em', paddingBottom: '5%' }}>Enter Details Here 👇🏻</h6>

            <label htmlFor="forminput" className="form-label">School/University</label>
            <input type="text" className="form-control" name='SchoolUniversity' value={form.SchoolUniversity}
              id="SchoolUniversity" placeholder="Enter school/university name" onChange={handlekeydown} />


            <label htmlFor="forminput" className="form-label">Add Logo</label>
            <div className="input-group">
              <input type="file" className="form-control" name='inlogo' accept="image/*" ref={fileInputRef} onChange={handleupload} />
              <span className="btn btn-secondary btn-rmv" onClick={handlelogodelete}>Remove</span>
            </div>


            <label htmlFor="forminput" className="form-label">Subject</label>
            <input type="text" className="form-control" name='Subject' value={form.Subject}
              id="Subject" placeholder="Enter subject" onChange={handlekeydown} />

            <label htmlFor="forminput" className="form-label" >Name</label>
            <input type="text" className="form-control" id="Name" name='Name' value={form.Name} autoComplete='off'
              placeholder="Enter your name" onChange={handlekeydown} />

            <div className="input-group">
              <select className="btn btn-secondary dropdown-toggle" type="button" name="Select" value={form.Select} onChange={handleinput}>
                <option className="dropoptions" value="">Select...</option>
                <option className="dropoptions" value="Class">Class</option>
                <option className="dropoptions" value="Semester">Semester</option>
              </select>
              <input type="text" className="form-control" name='Class' value={form.Class}
                id="Class" placeholder="Enter Class/Semester" onChange={handlekeypressclass} />
              <span className="btn btn-secondary button-for-display">Section</span>
              <input type="text" className="form-control" name='Section' value={form.Section}
                id="Section" placeholder="Enter Section" onChange={handlekeydown}></input>
            </div>
            {!checkedItems.Select && <>
              <div className="alert alert-danger" role="alert">
                ⚠️ Please select Class/Semester from the dropdown!
              </div>
            </>}

            <label htmlFor="forminput" className="form-label">Roll No.</label>
            <input type="text" className="form-control" id="Roll No." name='Rollno' value={form.Rollno}
              placeholder="Enter your Roll No." onChange={handlekeydown} />

            <div className='funbtn'>
              <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" name="topic" autoComplete="off"
                  checked={checkedItems.topic} onChange={handleCheckboxChange} />
                <label className="btn btn-outline-primary" htmlFor="btncheck1">Add Topic</label>

                <input type="checkbox" className="btn-check" id="btncheck2" name='department' autoComplete="off"
                  checked={checkedItems.department} onChange={handleCheckboxChange} />
                <label className="btn btn-outline-primary" htmlFor="btncheck2">Add Department</label>

                <input type="checkbox" className="btn-check" id="btncheck3" name='programme' autoComplete="off"
                  checked={checkedItems.programme} onChange={handleCheckboxChange} />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">Add Programme</label>
              </div>
            </div>

            {checkedItems.topic && <>
              <label htmlFor="forminput" className="form-label">Topic</label>
              <input type="text" className="form-control" name='Topic' value={form.Topic}
                id="Topic" placeholder="Enter topic" onChange={handlekeydown} /></>
            }

            {checkedItems.department && <>
              <label htmlFor="forminput" className="form-label">Department</label>
              <input type="text" className="form-control" name='Department' value={form.Department}
                id="Department" placeholder="Enter department" onChange={handlekeydown} /></>}

            {checkedItems.programme && <>
              <label htmlFor="forminput" className="form-label">Programme</label>
              <input type="text" className="form-control" name='Programme' value={form.Programme}
                id="Programme" placeholder="Enter programme" onChange={handlekeydown} /></>}

            <div className='funbtn'>
              <br />
              <button type="button" className="btn btn-light btn-lg d-flex" onClick={handledownloadbutton}>
                <i className="bi bi-download me-2"></i>
                Download PDF
              </button>
            </div>
          </div>
        </div>


        <div className='Panel'>
          <div className="a4-container">
            <div className="a4-panel" id="divToExport">
              <Preview SchoolUniversity={form.SchoolUniversity}
                Subject={form.Subject}
                Class={form.Class}
                Section={form.Section}
                Name={form.Name}
                Rollno={form.Rollno}
                Topic={form.Topic}
                Department={form.Department}
                Programme={form.Programme}
                Select={form.Select}
                logo={form.inlogo} />
            </div>
          </div>
          <h6 className="promotxt font-display m-0 text-l text-center" style={{ fontSize: '1.6em', paddingBottom: '5%' }}>This is how it will look... 👆🏻</h6>
          <p className='headertxt' style={{ textAlign: 'centre', padding: '2%' }}>We know its too basic.... but fierce enough to save the day when deadlines loom large.</p>
        </div>
      </div >
    </>

  )
}
