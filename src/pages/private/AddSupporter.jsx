import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/HeaderNav";
import NavBar from "../../components/NavBar";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useForm } from "react-hook-form";
import { db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import NaijaStates from "naija-state-local-government";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function AddSupporter() {
  const { register, handleSubmit, setValue } = useForm();
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [lgas, setLgas] = useState(NaijaStates.lgas("zamfara"));
  const supportersCollectionRef = collection(db, "supporters");
  //console.log(NaijaStates.all());
  //console.log(NaijaStates.states());
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const addSupporterToDB = (fileUrl) => {};
  const handleUpload = (data) => {
    try {
      if (!file) {
        alert("Please upload an image first!");
      }
      toast.warning("Please wait.....");
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const dataTo = {
              FirstName: data.FirstName,
              Surname: data.Surname,
              PhoneNumber: data.PhoneNumber,
              Gender: data.Gender,
              DOB: data.DOB,
              LGA: data.lgainput,
              ward: data.ward,
              pollingUnit: data.pollingUnit,
              Address: data.address,
              NIN: data.NIN,
              fileUrl: url,
            };
            addDoc(supportersCollectionRef, dataTo);
            Swal.fire("Good job!", "Added Succesfully!", "success");
          });
        }
      );
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: "Please Try again",
      });
    }
  };
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
                  <span class="text-muted fw-light">Home/</span> Add Supporter
                </h4>

                <div class="row">
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-body">
                        <Link to="/supporters">
                          <button className="btn btn-primary">
                            View Supporters
                          </button>
                        </Link>
                        <form onSubmit={handleSubmit(handleUpload)}>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">First Name</label>
                            <input
                              {...register("FirstName")}
                              id="hostelFor"
                              required
                              placeholder="Enter First Name"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Surname</label>
                            <input
                              {...register("Surname")}
                              id="Surname"
                              required
                              placeholder="Enter Surname"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Phone Number</label>
                            <input
                              {...register("PhoneNumber")}
                              id="PhoneNumber"
                              required
                              maxLength={15}
                              type={"number"}
                              placeholder="Enter Phone Number"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Gender</label>
                            <select
                              id="hostelFor"
                              {...register("Gender")}
                              required
                              placeholder="Enter Gender"
                              className="form-control"
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Date of Birth</label>
                            <input
                              id="hostelFor"
                              {...register("DOB")}
                              required
                              type="date"
                              placeholder="Enter Gender"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">
                              Local Govt's in Zamfara
                            </label>
                            <select
                              id="hostelFor"
                              {...register("lgainput")}
                              required
                              className="form-control"
                            >
                              <option value="">Select Local Govt</option>
                              {lgas.lgas.map((item) => (
                                <option value={`${item}`} key={item}>
                                  {item}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Ward</label>
                            <input
                              id="hostelFor"
                              {...register("ward")}
                              required
                              placeholder="Enter Ward"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Poling Unit</label>
                            <input
                              id="hostelFor"
                              {...register("pollingUnit")}
                              required
                              placeholder="Enter Polling Unit"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Address</label>
                            <textarea
                              id="hostelFor"
                              {...register("address")}
                              required
                              placeholder="Enter Address"
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">NIN</label>
                            <input
                              id="hostelFor"
                              {...register("NIN")}
                              required
                              placeholder="Enter NIN"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            <label htmlFor="hostelFor">Photo</label>
                            <input
                              id="hostelFor"
                              {...register("Photo")}
                              required
                              onChange={handleChange}
                              type="file"
                              accept="image/*"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group pt-2">
                            {file && <p>{percent} % done</p>}
                            <button className="btn btn-primary">Add</button>
                          </div>
                        </form>
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

export default AddSupporter;
