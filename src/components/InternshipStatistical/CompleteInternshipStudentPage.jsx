import React from 'react';
import { Link } from 'react-router';
// import {Icon} from 'react-fa';
import './CompleteInternshipStudentPage.css';

const CompleteInternshipStudentPage = React.createClass({
  render() {
    return (
      <div className="container">
        <h5 className="title"><i className="fa fa-thumbs-up"></i> Completed Student</h5>
        <div className="container-fluid">
          {/*<div className="panel-heading">*/}
            <div className="col-md-6 search_user">
              <div className="col-md-6 search_label">
                <span>
                  <input type="text" value="" className="form-control" placeholder="Search User..."/>
                </span>
              </div>
              <div className="col-md-3 search_btn">
                <span><button type="button" className="btn btn-primary"><i className="fa fa-search"></i></button></span>
              </div>
            </div>
          {/*</div>*/}
          <div className="panel panel-body">
            {/*<div className="row">*/}
              <table className="student_table">
                <tr>
                  <th className="col-md-2">Student Name</th>
                  <th className="col-md-2">Student ID</th>
                  <th className="col-md-1">Class</th>
                  <th className="col-md-2">Major</th>
                  <th className="col-md-1">Company</th>
                  <th className="col-md-1">Start</th>
                  <th className="col-md-1">End</th>
                </tr>
              </table>
            {/*</div>*/}
          </div>
        </div>
        {this.props.internshipstatisticals.map((internshipstatistical, i) =>
        <div className="panel-body">
          <table className="student_table">
            <tr className="student_details">
              <td className="col-md-2"><Link to={`/student/${internshipstatistical.id}`}>{internshipstatistical.name}</Link></td>
              <td className="col-md-2"><Link to={`/student/${internshipstatistical.id}`}>{internshipstatistical.student_id}</Link></td>
              <td className="col-md-1">{internshipstatistical.class}</td>
              <td className="col-md-2">{internshipstatistical.major}</td>
              <td className="col-md-1">{internshipstatistical.internship_company}</td>
              <td className="col-md-1">{internshipstatistical.internship_start}</td>
              <td className="col-md-1">{internshipstatistical.internship_stop}</td>
            </tr>
          </table>
          <hr/>
        </div>
        )}
      </div>
    )
  }
});

export default CompleteInternshipStudentPage;