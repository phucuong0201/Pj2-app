import React from "react";
import {Icon} from 'react-fa';
import './SingleCVPage.css';
import ava from '../../../public/dist/img/avatar.png';

const SingleCVPage = React.createClass({
  render() {
    const { cvId } = this.props.params;
    const i = this.props.cvs.findIndex((cv) =>
    cv.id === parseInt(cvId, 10));
    //GET HIM!!!
    const cv = this.props.cvs[i];
    return (
      <div className="container">
        <div className="panel panel-body">
          <div className="row cv_info">
            <div className="col-md-8 col-md-offset-2">
              <div className="col-md-7 cv_ava_label">
                <img src={ava} className="img-circle cv_ava_img" alt=""/>
                <p className="cv_person_name"><b> {cv.name}</b></p>
                <p className="cv_position">
                  <span><b>Position:</b></span>
                  <span> {cv.position}</span>
                </p>
              </div>
            <div className="col-md-5 cv_education_label">
              <p className="cv_education"><b>EDUCATION</b></p>
              <ul className="list-unstyled">
                <li>
                  <span>From:</span>
                  <span> {cv.year_start}</span>
                  <span>To:</span>
                  <span> {cv.year_stop}</span>
                </li>
                <br/>
                <li>
                  <span>Grade:</span>
                  <span> {cv.grade}</span>
                </li>
                <br/>
                <li>
                  <span>School:</span>
                  <span> {cv.school}</span>
                </li>
                <br/>
                <li>
                  <span>Major:</span>
                  <span> {cv.major}</span>
                </li>
                <li>
                  <span>CPA:</span>
                  <span> {cv.cpa}</span>
                </li>
              </ul>
            </div>
          </div>
          {/*<div className="row">*/}
            <div className="col-md-8 col-md-offset-2">
              <div className="col-md-7 cv_contact_label">
                <p className="cv_contact"><b>CONTACT</b></p>
                <ul className="list-unstyled">
                  <li>
                    <span><i className="fa fa-calendar"> {cv.dateofbirth}</i></span>
                  </li>
                  <li>
                    <span><i className="fa fa-user"> {cv.gender}</i></span>
                  </li>
                  <li>
                    <span><i className="fa fa-phone"> {cv.phone}</i></span>
                  </li>
                  <li>
                    <span><i className="fa fa-envelope"> {cv.email}</i></span>
                  </li>
                  <li>
                    <span><i className="fa fa-map-marker"> {cv.address}</i></span>
                  </li>
                </ul>
              </div>
              <div className="col-md-5 cv_more_info_label">
                <p className="cv_more_info"><b>MORE INFORMATION</b></p>
                <span>
                  {cv.hobby}
                </span>
              </div>
            </div>
          </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="col-md-7 cv_skill_label">
                  <p className="cv_skill"><b>SKILL</b></p>
                  <ul className="list-unstyled">
                    <li>
                      <span>
                          <p>{cv.majorskill}</p>
                      </span>
                      <span>
                        <div className="progress cv_skill_list">
                          <div className="progress-bar" role="progressbar"></div>
                        </div>
                      </span>
                    </li>
                    <li>
                      <span>
                        <p>{cv.otherskill}</p>
                      </span>
                      <span>
                        <div className="progress cv_skill_list">
                          <div className="progress-bar" role="progressbar"></div>
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 cv_destination_label">
                  <p className="cv_destination"><b>DESTINATION</b></p>
                  <span>
                    {cv.intent}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      // </div>
    )
  }
});

export default SingleCVPage;
