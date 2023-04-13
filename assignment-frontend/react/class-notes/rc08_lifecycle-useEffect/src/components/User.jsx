import React, { useState } from "react";

const User = () => {
  // let user = ""
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <div>
      {/* <h1>{user.name.first}</h1> */}
      {/* <h1>{setUser()}</h1> */}
      <img src="" alt="" />
      <h4>email</h4>
      <h5>telefon</h5>
      <p>dob</p>

      <button className="btn btn-warning" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;

// import React, { useEffect, useState } from "react"

// const User = () => {
//   //   let user = "deneme"
//   const [user, setUser] = useState()

//   const getUser = () => {
//     fetch("https://randomuser.me/api/")
//       .then((res) => res.json())
//       .then((data) => setUser(data.results[0]))
//       .catch((err) => console.log(err))
//   }

//   useEffect(() => {
//     console.log("Mounting")
//     getUser()
//   }, [])

//   console.log("Render")
//   console.log(user)
//   return (
//     <div>
//       <h1>
//         {/* Optional Chaingn */}
//         {user?.name?.first} {user?.name?.last}
//       </h1>
//       <img className="rounded-circle" src={user?.picture?.large} alt="" />
//       <h4>{user?.email}</h4>
//       <h5>{user?.phone}</h5>
//       {/* <p>{user?.dob?.date}</p> */}
//       <p>{new Date(user?.dob?.date).toLocaleDateString("tr-TR")}</p>

//       <button className="btn btn-warning" onClick={getUser}>
//         Get User
//       </button>
//     </div>
//   )
// }

// export default User
