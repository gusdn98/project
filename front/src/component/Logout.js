import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 서버에 로그아웃 요청
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/auth/logout`,
        {
          headers: { Authorization: `${localStorage.getItem("token")}` },
        }
      );
      localStorage.removeItem("token");

      console.log("로그아웃:", response.data);

      navigate("/home");
    } catch (error) {
      // 오류 처리
      console.error("로그아웃오류:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>MainPage</h1>
      <button type="submit">로그아웃</button>
    </form>
  );
};

export default Logout;