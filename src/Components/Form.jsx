import React, { useState } from "react";
import "./Form.css";
export default function Form() {
  const [data, setData] = useState({
    user: "",
    pass: "",
    num: "",
    mail: "",
  });
  function hanldeOutput() {
    console.log(data);
    let arr = [];
    for (let i in data) {
      arr.push(data[i]);
    }
    console.log(arr);
    alert(" Namaste"  + data.user);
  }
  return (
    <div className="Parent">
      <h1>SignUp Form</h1>
      
      <form onSubmit={hanldeOutput}>
      <div className="formeve">
        <label htmlFor="UserName">Username : </label>
        <input
          type="text"
          id="UserName"
          value={data.user}
          placeholder="  Enter Your Name"
          onChange={(e) => setData({ ...data, user: e.target.value })}
        />
        <br />
        <label htmlFor="Pass">Password : </label>
        <input
          type="password"
          id="Pass"
          value={data.pass}
          placeholder="  Enter Your Password"
          onChange={(e) => setData({ ...data, pass: e.target.value })}
        />
        <br />
        <label htmlFor="Num">Phone No.: </label>
        <input
          type="text"
          id="Num"
          placeholder="  Enter Your Number"
          value={data.num}
          onChange={(e) => setData({ ...data, num: e.target.value })}
        />
        <br />
        <label htmlFor="mail" id="lmail">
          Email ID :
        </label>
        <input
          type="email"
          id="mailinput"
          placeholder="Enter Your Email address"
          value={data.mail}
          onChange={(e) => setData({ ...data, mail: e.target.value })}
          style={{ width: "150px" }}
        />
        
        <br />
        </div>
        <button>SignUp</button>
      </form>
    </div>
  );
}