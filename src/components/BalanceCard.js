import React, { useEffect, useState } from 'react';

const BalanceCard = (props) => {


    useEffect( () =>{
        console.log(props);
    })

    
    const [data, setData] = useState([]);

    return (      
        <div>
            {/* {props.map((prop) => {
                return(
                    <div className="balance-card">  
                            <p>Name: {prop.accountName}</p>
                            <p>Account Number: {prop.accountNumber}</p>
                            <p>Available Balance: {prop.availableBal} </p>
                        </div> 
                    </div>
                )
            })} */}
        </div> 
    );
}
 
export default BalanceCard;


{/* <div className="balance-card">  
          <div className="user-details">
            <p>Name: {props.accountName}</p>
            <p>Account Number: {props.accountNumber}</p>
            <p>Available Balance: {props.availableBal} </p>
            </div> 
     </div> */}