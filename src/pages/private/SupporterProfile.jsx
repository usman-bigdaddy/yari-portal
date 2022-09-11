import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/HeaderNav";
import NavBar from "../../components/NavBar";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
function SupporterProfile() {
  const { id } = useParams();
  const [userDets, setUserDets] = useState(null);
  useEffect(() => {
    if (id) {
      const theUser = doc(db, "supporters", id);
      onSnapshot(theUser, (snapshot) => {
        setUserDets(snapshot.data());
      });
    }
  }, [id]);
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <NavBar />
          <div class="layout-page">
            <HeaderNav />
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <h4 class="fw-bold py-3 mb-4">
                  <span class="text-muted fw-light">
                    Home / <Link to="/supporters">Supporters</Link>
                  </span>{" "}
                  / Supporter Profile
                </h4>

                <div className="row">
                  <div className="col-xxl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
                          <div className="me-7 mb-4">
                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                              <img
                                src={userDets?.fileUrl}
                                style={{ width: "200px" }}
                                alt="Staff"
                              />
                              <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                            </div>
                          </div>

                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                              <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                  <Link
                                    to="#"
                                    className="text-gray-900 text-hover-primary fs-2 fw-bolder me-1"
                                  >
                                    {`${userDets?.FirstName} ${userDets?.Surname}`}
                                  </Link>
                                  {true ? (
                                    <>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-success fw-bolder ms-2 fs-8 py-1 px-3"
                                      >
                                        Active
                                      </Link>
                                    </>
                                  ) : (
                                    <>
                                      <Link
                                        to="#"
                                        className="btn btn-sm btn-danger fw-bolder ms-2 fs-8 py-1 px-3"
                                      >
                                        Inactive
                                      </Link>
                                    </>
                                  )}
                                </div>

                                <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                  <Link
                                    to="#"
                                    className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                                  >
                                    <span className="svg-icon svg-icon-4 me-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                          fill="currentColor"
                                        ></path>
                                        <path
                                          d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                          fill="currentColor"
                                        ></path>
                                      </svg>
                                    </span>
                                    {userDets?.Gender}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-column-fluid">
                          <div className="card">
                            <div className="card-body pt-0">
                              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                                <li className="nav-item">
                                  <Link
                                    className="nav-link text-active-primary pb-4 active"
                                    data-bs-toggle="tab"
                                    to="#biography"
                                  >
                                    Biography
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    className="nav-link text-active-primary pb-4"
                                    data-kt-countup-tabs="true"
                                    data-bs-toggle="tab"
                                    to="#guardian"
                                  >
                                    Voting Details
                                  </Link>
                                </li>
                              </ul>
                              <div
                                className="tab-content w-100"
                                id="myTabContent"
                              >
                                <div
                                  className="tab-pane fade active show"
                                  id="biography"
                                  role="tabpanel"
                                >
                                  <div className="row">
                                    <div className="card-body p-9">
                                      <div className="row mb-7">
                                        <label className="col-lg-4 fw-bold text-muted">
                                          First Name
                                        </label>
                                        <div className="col-lg-8">
                                          <span className="fw-bolder fs-6 text-gray-800">
                                            {userDets?.FirstName}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="row mb-7">
                                        <label className="col-lg-4 fw-bold text-muted">
                                          Surname
                                        </label>
                                        <div className="col-lg-8 fv-row">
                                          <span className="fw-bold text-gray-800 fs-6">
                                            {userDets?.Surname}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="row mb-7">
                                        <label className="col-lg-4 fw-bold text-muted">
                                          Contact Phone
                                          <i
                                            className="fas fa-exclamation-circle ms-1 fs-7"
                                            data-bs-toggle="tooltip"
                                            title=""
                                            data-bs-original-title="Phone number must be active"
                                            aria-label="Phone number must be active"
                                          ></i>
                                        </label>
                                        <div className="col-lg-8 d-flex align-items-center">
                                          <span className="fw-bolder fs-6 text-gray-800 me-2">
                                            {userDets?.PhoneNumber}
                                          </span>
                                          {/*<span className="badge badge-success">*/}
                                          {/*  Verified*/}
                                          {/*</span>*/}
                                        </div>
                                      </div>
                                      <div className="row mb-7">
                                        <label className="col-lg-4 fw-bold text-muted">
                                          Nataionality
                                          <i
                                            className="fas fa-exclamation-circle ms-1 fs-7"
                                            data-bs-toggle="tooltip"
                                            title=""
                                            data-bs-original-title="Country of origination"
                                            aria-label="Country of origination"
                                          ></i>
                                        </label>
                                        <div className="col-lg-8">
                                          <span className="fw-bolder fs-6 text-gray-800">
                                            {"Nigerian"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="row mb-7">
                                        <label className="col-lg-4 fw-bold text-muted">
                                          DOB
                                          <i
                                            className="fas fa-exclamation-circle ms-1 fs-7"
                                            data-bs-toggle="tooltip"
                                            title=""
                                            data-bs-original-title="Country of origination"
                                            aria-label="Country of origination"
                                          ></i>
                                        </label>
                                        <div className="col-lg-8">
                                          <span className="fw-bolder fs-6 text-gray-800">
                                            {userDets?.DOB}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="guardian"
                                  role="tabpanel"
                                >
                                  <div className="row mb-10">
                                    <label className="col-lg-4 fw-bold text-muted">
                                      State
                                    </label>
                                    <div className="col-lg-8">
                                      <span className="fw-bold fs-6 text-gray-800">
                                        {"Zamfara"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row mb-10">
                                    <label className="col-lg-4 fw-bold text-muted">
                                      Local Government
                                    </label>
                                    <div className="col-lg-8">
                                      <span className="fw-bold fs-6 text-gray-800">
                                        {userDets?.LGA}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="row mb-10">
                                    <label className="col-lg-4 fw-bold text-muted">
                                      Ward
                                    </label>
                                    <div className="col-lg-8">
                                      <span className="fw-bold fs-6 text-gray-800">
                                        {userDets?.ward}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row mb-10">
                                    <label className="col-lg-4 fw-bold text-muted">
                                      Polling Unit
                                    </label>
                                    <div className="col-lg-8">
                                      <span className="fw-bold fs-6 text-gray-800">
                                        {userDets?.pollingUnit}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="row mb-10">
                                    <label className="col-lg-4 fw-bold text-muted">
                                      Address
                                    </label>
                                    <div className="col-lg-8">
                                      <span className="fw-bold fs-6 text-gray-800">
                                        {userDets?.Address}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />

              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupporterProfile;
