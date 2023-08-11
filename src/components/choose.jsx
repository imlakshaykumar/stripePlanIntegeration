import { useEffect } from 'react';
import '../styles/choose.css';

export const Choose = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/pricing-table.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Render the Stripe pricing table */ }

            <header>
                <h1>Choose the best plan for you</h1>
            </header>

            <div className="container">
                <stripe-pricing-table
                    pricing-table-id='prctbl_1NdndSSFxdmbHkmpzd7WbFK6'
                    publishable-key="pk_test_51NdmodSFxdmbHkmpkKfN3oHlkxAkCCFsWomXL6stz59GG74eIoS7amPZmlr3nwBhN8M5QMP0Z1I36lUsAcVTDogz00LXFXSIDS"
                />
            </div>
        </div>
    );
};







// // import { useEffect, useState } from 'react';
// import '../styles/choose.css';
// // import axios from 'axios';

// export const Choose = () => {
//     return (
//         <>
//             < async src="https://js.stripe.com/v3/pricing-table.js" />            <stripe-pricing-table pricing-table-id='prctbl_1NdndSSFxdmbHkmpzd7WbFK6'
//                 publishable-key="pk_test_51NdmodSFxdmbHkmpkKfN3oHlkxAkCCFsWomXL6stz59GG74eIoS7amPZmlr3nwBhN8M5QMP0Z1I36lUsAcVTDogz00LXFXSIDS" />
//         </>
//     )
//     // const [selectedPlan, setSelectedPlan] = useState('mobile'); // Default selected plan
//     // const [plansData, setPlansData] = useState({
//     //     mobile: { price: 'Loading...', videoQuality: 'Loading...', resolution: 'Loading...', devices: [] },
//     //     basic: { price: 'Loading...', videoQuality: 'Loading...', resolution: 'Loading...', devices: [] },
//     //     standard: { price: 'Loading...', videoQuality: 'Loading...', resolution: 'Loading...', devices: [] },
//     //     premium: { price: 'Loading...', videoQuality: 'Loading...', resolution: 'Loading...', devices: [] }
//     // });

//     // useEffect(() => {
//     //     async function fetchData() {
//     //         try {
//     //             const response = await axios.get("http://localhost:5000/plans");
//     //             const fetchedData = response.data;

//     //             setPlansData({
//     //                 mobile: fetchedData.mobile,
//     //                 basic: fetchedData.basic,
//     //                 standard: fetchedData.standard,
//     //                 premium: fetchedData.premium
//     //             });
//     //         } catch (error) {
//     //             console.error("Error fetching data:", error);
//     //         }
//     //     }

//     //     fetchData();
//     // }, []);

//     // function handleDataIdButtonClick(event) {
//     //     const button = event.target;
//     //     const dataId = button.getAttribute("data-id");

//     //     if (dataId) {
//     //         setSelectedPlan(dataId);
//     //     }
//     // }

//     // return (
//     //     <>
//     //         <header>
//     //             <h1>Choose the right plan for you</h1>
//     //         </header>

//     //         <div className="container">
//     //             <div className="head">
//     //                 <div className="switch-wrapper">
//     //                     <input id="monthly" type="radio" name="switch" checked />
//     //                     <input id="yearly" type="radio" name="switch" />
//     //                     <label htmlFor="monthly">Monthly</label>
//     //                     <label htmlFor="yearly">Yearly</label>
//     //                     <span className="highlighter"></span>
//     //                 </div>
//     //                 <div className="otherPlans">
//     //                     <button className="plan-btn" data-id="mobile" onClick={ handleDataIdButtonClick }>Mobile</button>
//     //                     <button className="plan-btn" data-id="basic" onClick={ handleDataIdButtonClick }>Basic</button>
//     //                     <button className="plan-btn" data-id="standard" onClick={ handleDataIdButtonClick }>Standard</button>
//     //                     <button className="plan-btn" data-id="premium" onClick={ handleDataIdButtonClick }>Premium</button>
//     //                 </div>
//     //             </div>

//     //             {/* Monthly Price */ }
//     //             <div className="plan-content">
//     //                 <div className="plan-name">
//     //                     <p>Monthly Price</p>
//     //                 </div>
//     //                 <div className="price-grid">
//     //                     <p data-id={ selectedPlan }>{ plansData[selectedPlan].price }</p>
//     //                 </div>
//     //             </div>

//     //             {/* Video Quality */ }
//     //             <div className="plan-content">
//     //                 <div className="plan-name">
//     //                     <p>Video Quality</p>
//     //                 </div>
//     //                 <div className="price-grid">
//     //                     <p data-id={ selectedPlan }>{ plansData[selectedPlan].videoQuality }</p>
//     //                 </div>
//     //             </div>

//     //             {/* Resolution */ }
//     //             <div className="plan-content">
//     //                 <div className="plan-name">
//     //                     <p>Resolution</p>
//     //                 </div>
//     //                 <div className="price-grid">
//     //                     <p data-id={ selectedPlan }>{ plansData[selectedPlan].resolution }</p>
//     //                 </div>
//     //             </div>

//     //             {/* Devices */ }
//     //             <div className="plan-content-devices">
//     //                 <div className="plan-name">
//     //                     <p>Devices you can use to watch</p>
//     //                 </div>
//     //                 <div className="price-grid">
//     //                     <ul className="list-items" data-id={ selectedPlan }>
//     //                         { plansData[selectedPlan].devices.map((device, index) => (
//     //                             <li key={ index }>{ device }</li>
//     //                         )) }
//     //                     </ul>
//     //                 </div>
//     //             </div>
//     //         </div>

//     //         <div className="btn-div">
//     //             <button type="submit" className="next-btn">Next</button>
//     //         </div>
//     //     </>
//     // )
// }
