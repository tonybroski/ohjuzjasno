// import db from "./firebase.config";

// import React, { useState, useEffect } from "react";

// function Kurwa() {
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlogs = async () => {
//     const response = db.collection("city");
//     const data = await response.get();
//     data.docs.forEach((item) => {
//       setBlogs([...blogs, item.data()]);
//     });
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       {blogs &&
//         blogs.map((blog) => {
//           return (
//             <div>
//               <h4>{blog.title}</h4>
//               <p>{blog.body}</p>
//             </div>
//           );
//         })}
//     </div>
//   );
// }

// export default Kurwa;
