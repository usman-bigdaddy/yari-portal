import React, { useState } from "react";
import HeaderNav from "../../components/HeaderNav";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
function Dashboard() {
  const supportersCollectionRef = collection(db, "supporters");
  const [count, setcount] = useState(0);
  const [countMale, setcountMale] = useState(0);
  const [countFemale, setcountFemale] = useState(0);
  const countSupporters = async () => {
    const supportersCollection = await getDocs(supportersCollectionRef);
    let x = 0;
    //setTasks(tasks.docs.map((task) => ({ ...task.data(), id: task.id })));

    supportersCollection.docs.map((item, index) => {
      x = index + 1;
    });
    setcount(x);
  };
  async function countMaleSupporters() {
    const q = query(supportersCollectionRef, where("Gender", "==", "Male"));
    const querySnapshot = await getDocs(q);
    let x = 0;
    querySnapshot.forEach(() => {
      x = x + 1;
    });
    setcountMale(x);
  }
  async function countFemaleSupporters() {
    const q = query(supportersCollectionRef, where("Gender", "==", "Female"));
    const querySnapshot = await getDocs(q);
    let x = 0;
    querySnapshot.forEach(() => {
      x = x + 1;
    });
    setcountFemale(x);
  }
  useEffect(() => {
    countSupporters();
    countMaleSupporters();
    countFemaleSupporters();
  }, []);
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
                  <span class="text-muted fw-light">Home/</span> Dashboard
                </h4>
                <div class="row">
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="container-xxl flex-grow-1 container-p-y">
                        <div class="row">
                          {/* <div class="col-lg-8 mb-4 order-0">
                            <div class="d-flex align-items-end row">
                              <div class="col-sm-7">
                                <div class="card-body">
                                  <h5 class="card-title text-primary">
                                    Congratulations John! 🎉
                                  </h5>
                                  <p class="mb-4">
                                    You have done{" "}
                                    <span class="fw-bold">72%</span> more sales
                                    today. Check your new badge in your profile.
                                  </p>

                                  <a
                                    href="javascript:;"
                                    class="btn btn-sm btn-outline-primary"
                                  >
                                    View Badges
                                  </a>
                                </div>
                              </div>
                              <div class="col-sm-5 text-center text-sm-left">
                                <div class="card-body pb-0 px-0 px-md-4">
                                  <img
                                    src="../assets/img/illustrations/man-with-laptop-light.png"
                                    height="140"
                                    alt="View Badge User"
                                    data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                    data-app-light-img="illustrations/man-with-laptop-light.png"
                                  />
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div class="col-md-12 order-1">
                            <div class="row">
                              <div class="col-md-4">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="card-title d-flex align-items-start justify-content-between">
                                      <div class="avatar flex-shrink-0">
                                        <img
                                          src="../assets/img/icons/unicons/chart-success.png"
                                          alt="chart success"
                                          class="rounded"
                                        />
                                      </div>
                                      <div class="dropdown">
                                        <button
                                          class="btn p-0"
                                          type="button"
                                          id="cardOpt3"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="cardOpt3"
                                        >
                                          <a
                                            class="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            View More
                                          </a>
                                          <a
                                            class="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <span class="fw-semibold d-block mb-1">
                                      Supporters
                                    </span>
                                    <h3 class="card-title mb-2">{count}</h3>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="card-title d-flex align-items-start justify-content-between">
                                      <div class="avatar flex-shrink-0">
                                        <img
                                          src="../assets/img/icons/unicons/wallet-info.png"
                                          alt="Credit Card"
                                          class="rounded"
                                        />
                                      </div>
                                      <div class="dropdown">
                                        <button
                                          class="btn p-0"
                                          type="button"
                                          id="cardOpt6"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="cardOpt6"
                                        >
                                          <a
                                            class="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            View More
                                          </a>
                                          <a
                                            class="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <span>Male Supporters</span>
                                    <h3 class="card-title text-nowrap mb-1">
                                      {countMale}
                                    </h3>
                                    {/* <small class="text-success fw-semibold">
                                      <i class="bx bx-up-arrow-alt"></i> +28.42%
                                    </small> */}
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="card">
                                  <div class="card-body">
                                    <div class="card-title d-flex align-items-start justify-content-between">
                                      <div class="avatar flex-shrink-0">
                                        <img
                                          src="../assets/img/icons/unicons/wallet-info.png"
                                          alt="Credit Card"
                                          class="rounded"
                                        />
                                      </div>
                                      <div class="dropdown">
                                        <button
                                          class="btn p-0"
                                          type="button"
                                          id="cardOpt6"
                                          data-bs-toggle="dropdown"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          <i class="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div
                                          class="dropdown-menu dropdown-menu-end"
                                          aria-labelledby="cardOpt6"
                                        >
                                          <a
                                            class="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            View More
                                          </a>
                                          <a
                                            class="dropdown-item"
                                            href="javascript:void(0);"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <span>Female Supporters</span>
                                    <h3 class="card-title text-nowrap mb-1">
                                      {countFemale}
                                    </h3>
                                    {/* <small class="text-success fw-semibold">
                                      <i class="bx bx-up-arrow-alt"></i> +28.42%
                                    </small> */}
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

export default Dashboard;
