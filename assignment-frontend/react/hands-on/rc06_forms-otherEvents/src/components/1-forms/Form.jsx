// import { useState } from "react"

// const Form = () => {
//   const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleUsername = (e) => {
//     // console.log(e.target.value)
//     setUsername(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     alert(`
//        username:${username}
//        email:${email}
//        password:${password}
//     `)

//     setEmail("")
//     setPassword("")
//     setUsername("")
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="display-6 text-danger">FORMS</h2>

//       <div className="mb-3">
//         <label htmlFor="username" className="form-label">
//           Username: <span>{username}</span>
//         </label>
//         <input
//           type="text"
//           className="form-control"
//           id="username"
//           onChange={handleUsername}
//           value={username}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">
//           Email: <span>{email}</span>
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           required
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">
//           Password
//         </label>
//         <input
//           type="password"
//           className="form-control"
//           id="password"
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           required
//         />
//       </div>

//       <button type="submit" className="btn btn-danger">
//         Submit
//       </button>
//     </form>
//   )
// }

// export default Form



const Form = () => {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Form