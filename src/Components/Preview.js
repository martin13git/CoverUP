import React from 'react'

export default function Preview(props) {
    let name, sem, roll, topic, depart, prog, sub, sec = ""
    if (props.Topic === '') {
        topic = "";
    }
    else {
        topic = `Topic: ${props.Topic}`;
    }

    if (props.Rollno === '') {
        roll = "";
    }
    else {
        roll = `Roll No.: ${props.Rollno}`;
    }

    if (props.Name === '') {
        name = "";
    }
    else {
        name = `Name: ${props.Name}`;
        sub = "Submitted by,"
    }

    if (props.Class === '') {
        sem = "";
        if (props.Section === '') {
            sec = "";
        }
        else {
            sec = `Section: ${props.Section}`;
        }
    }
    else {
        if (props.Select === '') {
            sem = `${props.Class}`;
        }
        else if (props.Select === 'Class') {
            if (props.Section === '') {
                sem = `Class: ${props.Class}`;
            }
            else {
                sem = `Class: ${props.Class}\tSection: ${props.Section}`;
            }
        }
        else {
            if (props.Section === '') {
                sec = "";
                sem = `Semester: ${props.Class}`;
            }
            else {
                sem = `Semester: ${props.Class}`;
                sec = `Section: ${props.Section}`;
            }

        }
    }

    if (props.Department === '') {
        depart = "";
    }
    else {
        depart = `Department: ${props.Department}`;
    }

    if (props.Programme === '') {
        prog = "";
    }
    else {
        prog = `Programme: ${props.Programme}`;
    }


    return (
        <div>
            <div className='previewheader'>
                <h1 className='cschool'>{props.SchoolUniversity}</h1>
                <img src={props.logo} alt="" className='previewlogo' />
                {/* {logo? <img src={props.logo} alt="" className='previewlogo'/>
            :<label htmlFor="forminput" className="form-label">Add Logo</label>} */}
            </div>

            <div className='previewbody'>
                <h3 className='csub'>{props.Subject}</h3>
                <h5 className='ctopic'>{topic}</h5>
            </div>

            <div className='previewinfo'>
                <h6 className='clabel'>{sub}</h6>
                <h6 className='cinfo'>{name}</h6>
                <h6 className='cinfo'>{roll}</h6>
                <h6 className='cinfo'>{sem}</h6>
                <h6 className='cinfo'>{sec}</h6>
                <h6 className='cinfo'>{depart}</h6>
                <h6 className='cinfo'>{prog}</h6>
            </div>
        </div>
    )
}
