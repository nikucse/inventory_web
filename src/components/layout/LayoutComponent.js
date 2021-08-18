import React from "react";
import DailyStatusCount from "../count/DailyStatusCount";
import ProductTable from "../table/ProductTable";
import "./layout.css";

const LayoutComponent = () => {
    return (
            <div className='container-fluid pt-4 text-dark '>
                <div className='row'>
                    <div className='col bg-white mb-5'>
                        <DailyStatusCount />
                        <div className='container-fluid pt-4'>
                            <div className='row g-4'>
                                <div className='col-md-12  bg-white'>
                                    <ProductTable />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LayoutComponent;
