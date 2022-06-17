// import MainContent from "./mainComponent/MainContent";
// import Sidebar from "./mainComponent/Sidebar";
// import ArticlePage from "./One/ArticlePage";
// import { Routes, Route } from "react-router-dom";

// const Main = ({ order, sortBy }) => {
//   return (
//     <main className="main">
//       <div id="container">
//         <Sidebar />
//         <Routes>
//           <Route
//             path={`/`}
//             element={
//               <>
//                 <MainContent order={order} sortBy={sortBy} />
//               </>
//             }
//           />
//           <Route
//             path={`/:topic`}
//             element={
//               <>
//                 <MainContent order={order} sortBy={sortBy} />
//               </>
//             }
//           />
//           <Route path={`/:topic/:article_id`} element={<ArticlePage />} />
//           <Route path={"/*"}> not found</Route>
//         </Routes>
//       </div>
//     </main>
//   );
// };

// export default Main;
