// import React, {useRef} from 'react';

// export default function App(){
//     const boxListRef = useRef();

//     return (
//         <div>
//             <div style={{ 
//                 display: 'flex', 
//                 flexWrap: 'wrap', 
//                 width: '100vw', 
//                 height: '100%'}}
//             >
//             {BOX_LIST.map(item => (
//                 <div key={item.id} 
//                     ref={ref => ...} 
//                     style={{
//                     flex:'0 0 auto', 
//                     width: item.width, 
//                     height: 100, 
//                     backgroundColor: 'yellow', 
//                     border: '1px solid red'
//                 }} 
//                 >{`box_${item.id}`}</div> 
//                 ))}
//             </div>
//         </div>
//         <button onClick={()=> {}}></button>
//     </div>
//     );
// }

// const BOX_LIST = [
//     {id: 1, width: 90},
//     {id: 2, width: 20},
//     {id: 3, width: 70},
//     {id: 4, width: 80},
//     {id: 5, width: 50},
//     {id: 6, width: 30},

// ]