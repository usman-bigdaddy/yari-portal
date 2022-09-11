import React, { useState } from "react";
import Footer from "../../components/Footer";
import HeaderNav from "../../components/HeaderNav";
import NavBar from "../../components/NavBar";
import { getStorage, ref, deleteObject } from "firebase/storage";
import NormalTable from "../../components/NormalTable";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import {
  getDocs,
  query,
  deleteDoc,
  onSnapshot,
  doc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { useEffect } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Supporter() {
  const storage = getStorage();
  const { register, handleSubmit, setValue } = useForm();
  const [supporters, setSupporterList] = useState([]);
  const supportersCollectionRef = collection(db, "supporters");
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: "S/N",
        field: "sn",
      },
      {
        label: "First Name",
        field: "firstname",
      },
      {
        label: "Surname",
        field: "surname",
      },
      {
        label: "Phone Number",
        field: "PhoneNumber",
      },
      {
        label: "Gender",
        field: "Gender",
      },
      {
        label: "LGA",
        field: "LGA",
      },
      {
        label: "Action",
        field: "action",
      },
    ],
    rows: [],
  });

  function deleteUser(id, name, fileUrl) {
    toast.warning("Please wait.....");
    const imageRef = ref(storage, `${fileUrl}`);
    const docRef = doc(supportersCollectionRef, id);
    deleteObject(imageRef)
      .then(() => {
        deleteDoc(docRef)
          .then(() => {
            Swal.fire("Deleted!", `${name} has been deleted.`, "success");
            getSupporters();
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }
  const getSupporters = async () => {
    const supportersCollection = await getDocs(supportersCollectionRef);
    let rows = [];
    //setTasks(tasks.docs.map((task) => ({ ...task.data(), id: task.id })));

    supportersCollection.docs.map((item, index) => {
      rows.push({
        sn: index + 1,
        firstname: item.data().FirstName,
        surname: item.data().Surname,
        PhoneNumber: item.data().PhoneNumber,
        Gender: item.data().Gender,
        LGA: item.data().LGA,
        action: (
          <>
            <Link to={`/supporter/${item.id}`}>
              <button
                onClick={() => {}}
                type="button"
                className="btn btn-primary btn-sm"
              >
                View
              </button>
            </Link>
            ,
            <button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    deleteUser(
                      item.id,
                      item.data().FirstName + " " + item.data().Surname,
                      item.data().fileUrl
                    );
                  }
                });
              }}
              type="button"
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </>
        ),
      });
    });
    setDatatable({
      ...datatable,
      columns: datatable.columns,
      rows: rows,
    });
  };
  useEffect(() => {
    getSupporters();
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
                  <span class="text-muted fw-light">Home/</span> Supporters
                </h4>
                <div class="row">
                  <div class="col-xxl">
                    <div class="card mb-4">
                      <div class="card-body">
                        <Link to="/supporters/add">
                          <button className="btn btn-primary">
                            Add Supporter
                          </button>
                        </Link>
                        <NormalTable data={datatable} />
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

export default Supporter;
