import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      {" "}
      <div className="main_content_iner ">
        <div className="container-fluid p-0">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="white_box mb_30">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="modal-content cs_modal">
                      <div className="modal-header justify-content-center theme_bg_1">
                        <h5 className="modal-title text_white">
                          Forgot Password
                        </h5>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your email"
                            />
                          </div>
                          <a href="#" className="btn_1 full_width text-center">
                            Forgot Password
                          </a>
                          <p>
                            <a>
                              {" "}
                              Have an account? <Link to="/">Login...</Link>
                            </a>
                          </p>
                        </form>
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
  );
};

export default ForgotPassword;
