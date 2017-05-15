import React from "react";
import {Icon} from 'react-fa';
import './SingleStudentStatisticalPage.css';
const SingleStudentStatisticalPage = React.createClass({
  render() {
    // const { cvId } = this.props.params;
    // const i = this.props.cvs.findIndex((cv) =>
    // cv.id === parseInt(cvId, 10));
    //GET HIM!!!
    // const cv = this.props.cvs[i];
    return (
      <div className="main-content">
        <div className="container-fluid">
          <div className="panel panel-profile">
            <div className="clearfix">
              {/*<!-- LEFT COLUMN -->*/}
              <div className="profile-left">
                {/*<!-- PROFILE HEADER -->*/}
                <div className="profile-header">
                  <div className="overlay"></div>
                  <div className="profile-main">
                    {/*<img src="assets/img/avatar.png" className="img-circle avatar_img" alt="Avatar">*/}
                      <h3 className="name">Nguyễn Vũ Phú Cường</h3>
                    <span className="online-status status-available">Available</span>
                  </div>
                  <div className="profile-stat">
                    <div className="row">
                      <div className="col-md-6 stat-item">
                        <b>Start Date</b> <span>January 1, 2017</span>
                      </div>
                      <div className="col-md-6 stat-item">
                        <b>End Date</b> <span>July 2, 2017</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*<!-- END PROFILE HEADER -->*/}
                {/*<!-- PROFILE DETAIL -->*/}
                <div className="profile-detail">
                  <div className="profile-info">
                    <h4 className="heading">Basic Info</h4>
                    <ul className="list-unstyled list-justify">
                      <li>className <span>LTU</span></li>
                      <li>Grade <span>12</span></li>
                      <li>Email <span>20138673@sie.hust.edu.vn</span></li>
                    </ul>
                  </div>
                  <div className="profile-info">
                    <h4 className="heading">Social</h4>
                    <ul className="list-inline social-icons">
                      <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="google-plus-bg"><i className="fa fa-google-plus"></i></a></li>
                      <li><a href="#" className="github-bg"><i className="fa fa-github"></i></a></li>
                    </ul>
                  </div>
                  <div className="text-center"><a href="personal.html" className="btn btn-primary">View Profile</a></div>
                </div>

                {/*<!-- END PROFILE DETAIL -->*/}
              </div>
              {/*<!-- END LEFT COLUMN -->*/}
              {/*<!-- RIGHT COLUMN -->*/}
              <div className="profile-right">
                <h4 className="heading">Student Internship Mark</h4>
                {/*<!-- AWARDS -->*/}
                <div className="awards">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <div className="award-item">
                        <div className="hexagon">
                          <span className="award-icon"><p>F</p></span>
                        </div>
                        <span>Mid-Term Mark</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="award-item">
                        <div className="hexagon">
                          <span className="award-icon"><p>F</p></span>
                        </div>
                        <span>Final-Term Mark</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="award-item">
                        <div className="hexagon">
                          <span className="award-icon"><p>F</p></span>
                        </div>
                        <span>Report Point</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="award-item">
                        <div className="hexagon">
                          <span className="award-icon"><p>F</p></span>
                        </div>
                        <span>Final Internship Mark</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center"><a href="#" className="btn btn-success">Save</a></div>
                </div>
                {/*<!-- END AWARDS -->*/}
                {/*<!-- TABBED CONTENT -->*/}
                <div className="custom-tabs-line tabs-line-bottom left-aligned">
                  <ul className="nav" role="tablist">
                    <li className="active"><a href="#tab-bottom-left1" role="tab" data-toggle="tab">Internship Activity</a></li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade in active" id="tab-bottom-left1">
                    <table id="table_topic">
                      <tr>
                        <th className="col-md-1">Week 1</th>
                        <th className="col-md-1">Job Time</th>
                        <th className="col-md-1">Finish Job</th>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 1, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 2, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 3, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 4, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 5, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 6, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                      <tr>
                        <td className="col-md-1">January 7, 2017</td>
                        <td className="col-md-1">8:00am - 17:00pm</td>
                        <td className="col-md-2">80%</td>
                      </tr>
                    </table>
                    <div className="margin-top-30 text-center"><a href="#" className="btn btn-default">See all activity</a></div>
                  </div>
                </div>
                {/*<!-- END TABBED CONTENT -->*/}
              </div>
              {/*<!-- END RIGHT COLUMN -->*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default SingleStudentStatisticalPage;
