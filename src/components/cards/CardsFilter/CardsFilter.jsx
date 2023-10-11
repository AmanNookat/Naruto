// import React, { useEffect } from "react";
// import { getCards, getCatygories } from "../../../store/cards/cardsActions";
// import { changeCategory } from "../../../store/cards/cardsSlice";
// import { useDispatch, useSelector } from "react-redux";

// const CardsFilter = () => {
//   const { categories } = useSelector((state) => state.cards);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getCatygories());
//   }, []);

//   return (
//     <div>
//       <div className="w-1/6">
//         <select
//           onChange={(e) => {
//             dispatch(changeCategory({ category: e.target.value }));
//             dispatch(getCards());
//           }}
//           className="mt-1.5 w-full h-9 rounded-lg bg-pink-500 text-white sm:text-sm"
//         >
//           <option value="all">all</option>
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default CardsFilter;
