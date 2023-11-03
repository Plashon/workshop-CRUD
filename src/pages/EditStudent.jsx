import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    birthday: "",
    photo: "https://unsplash.com/random/200x200/?portrait",
    section: "",
    major: "",
    admissionYear: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/student/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = {
      name: student.name,
      email: student.email,
      phone: student.phone,
      birthday: student.birthday,
      photo: student.photo,
      section: student.section,
      major: student.major,
      admissionYear: student.admissionYear,
    };
    fetch("http://localhost:8000/student/" + id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentData),
    })
      .then((res) => {
        alert("Save Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Edit student</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">id</label>
                      <input
                        type="text"
                        disabled
                        name="id"
                        id="id"
                        value={id}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="email">email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="phone">phone</label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={student.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="birthday">birthday</label>
                      <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        value={student.birthday}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="section">section</label>
                      <input
                        type="text"
                        name="section"
                        id="section"
                        value={student.section}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="major">major</label>
                      <input
                        type="text"
                        name="major"
                        id="major"
                        value={student.major}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="photo">photo</label>
                      <input
                        type="text"
                        name="photo"
                        id="photo"
                        value={student.photo}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="admissionYear">admissionYear</label>
                      <input
                        type="number"
                        placeholder="YYYY"
                        min="2010"
                        max="2024"
                        name="admissionYear"
                        id="admissionYear"
                        value={student.admissionYear}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
