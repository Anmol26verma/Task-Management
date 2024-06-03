import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';

const RightSidebar: React.FC = () => {
  

  return (
        <div>

            <div className="flex gap-4 flex-col justify-between" style={{background: "#f5f8ff" , width:"50px" , height: "100vh" , alignItems : "center", borderLeft: "1px solid lightgrey"}}>
                <span className="flex gap-20 flex-col " style={{ width:"50px", height : "70px", alignItems : "center", borderBottom: "1px solid lightgrey "}}>
                    <FontAwesomeIcon icon={faXmark} 
                        color="#808080" 
                        size="lg"
                        style={{paddingTop:"20px"}}
                    />
                </span>

                <span className="flex gap-2 flex-col" >
                <img src="https://i.pravatar.cc/300?img=5" alt="" style={{width:"30px" , height:"30px", borderRadius:"50%",marginLeft:"5px"}}/> 
                <img src="https://i.pravatar.cc/300?img=2" alt="" style={{width:"30px" , height:"30px", borderRadius:"50%",marginLeft:"5px"}}/> 
                <img src="https://i.pravatar.cc/300?img=3" alt="" style={{width:"30px" , height:"30px", borderRadius:"50%",marginLeft:"5px"}}/> 
                <img src="https://i.pravatar.cc/300?img=4" alt="" style={{width:"30px" , height:"30px", borderRadius:"50%",marginLeft:"5px"}}/> 
                <span>
                <img src="https://i.pravatar.cc/300?img=1" alt="" style={{width:"40px" , height:"40px", borderRadius:"50%", border:"4px inset #1F51FF", alignSelf:"center"}}/> 
                </span>
                </span>

                <span>
                <span className="flex gap-20 flex-col " style={{ width:"50px", height : "50px", alignItems : "center",}}>
                    <FontAwesomeIcon icon={faArrowRight} 
                        color="#808080" 
                        size="lg"
                        style={{padding:"12px", borderTop: "1px solid lightgrey"}}
                    />
                </span>
                </span>

            </div>
            
        
            

            
             
        </div>
  );
};

// const styles = {
//   sidebar: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     width: '50px',
//     height: '100vh',
//     backgroundColor: '#f9f9f9',
//     padding: '10px',
//     borderRight: '1px solid #ccc'
//   },
//   iconWrapper: {
//     margin: '10px 0'
//   },
//   icon: {
//     width: '40px',
//     height: '40px',
//     color: '#007bff'
//   }
// };


export default RightSidebar ; 