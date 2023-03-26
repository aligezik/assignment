import React from 'react'

const Button = ({show,setShow}) => {
  return (
    <button className="btn btn-warning d-flex mx-auto mb-2" onClick={() => setShow(!show)}>
      {show ? "Hide Product Bar" :"Show Product Bar"}
    </button>
  );
}

export default Button