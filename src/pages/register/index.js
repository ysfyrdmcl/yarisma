import React, { useState } from "react";
import { fetchDoRegister } from "../../store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const isRegisterLoading = useSelector((item) => item.auth.isRegisterLoading);
  const dispatch = useDispatch();
  const register = () => {
    dispatch(
      fetchDoRegister({
        username,
        password,
        email,
      })
    );
  };

  return (
    <div className="container">
      {isRegisterLoading ? (
        <iframe
          title="register"
          src="https://embed.lottiefiles.com/animation/87482"
        ></iframe>
      ) : null}

      <div className="row">
        <div className="col-md-3"></div>

        <div className="col-md-6 mt-5">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={(text) => setUsername(text.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(text) => setPassword(text.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(text) => setEmail(text.target.value)}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-success" onClick={register}>
              Kaydol{" "}
            </button>
          </div>
        </div>

        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
