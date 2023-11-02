import React, { useContext, useState } from "react";
import axios from "axios";
import "../style/Contact.css";
import { useParams } from "react-router-dom";

const Comment = () => {
  const initialFormData = Object.freeze({
    content: "",
  });
  const [formData, updateFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      //   [e.target.content]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/comments/", {
        content: formData.content,
      })
      .then((res) => {
        alert("Thank You Your's Coment is Submit");
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        setErrorMessage("Your's comment is not submit");
      });
  };

  return (
    <div className="flex-1">
      {/* <span className="flex justify-center items-center mt-4 ">
       
      </span> */}
      <textarea
        name="content"
        id="content"
        type="message"
        autoComplete="content"
        onChange={handleChange}
        placeholder="Please Give me Comment!!"
        className=" user mt-96 mr-20 border w-60 h-24 rounded-[15%] text-black bg-red-900"
      />
      <input
        type="submit"
        onClick={handleSubmit}
        className="button h-10 mt-2 flex justify-center items-center px-8  border w-30 font-montserrat text-lg leading-none bg-slate-800"
      />
    </div>
  );
};

export default Comment;
