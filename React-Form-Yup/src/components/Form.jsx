import { useState } from "react";

const Form = () => {
  //first name
  //last name
  //email
  //password
  //confirm password
  //hobbies - checkbox
  //gender - select
  // submit button

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    hobbies: [],
    gender: "",
  });

  function handlesubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>First Name:</label>
        <input
          name="firstname"
          type="text"
          value={formData.firstname}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br></br>
        <label>Last Name:</label>
        <input
          name="lastname"
          type="text"
          value={formData.lastname}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br></br>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br></br>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br></br>
        <label>Confirm Password :</label>
        <input
          name="confirmpassword"
          type="password"
          value={formData.confirmpassword}
          onChange={(e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          }}
        />
        <br></br>
        <div>
          <label>Hobbies:</label>
          <input type="checkbox" name="books" />
          <label>Books</label>
          <input type="checkbox" name="movies" />
          <label>Movies</label>
        </div>
        <div>
          <label>Gender: </label>
          <select>
            <option value="Male"> Male</option>
            <option value="Female"> Female</option>
            <option value="Other"> Other</option>
          </select>
        </div>
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default Form;
