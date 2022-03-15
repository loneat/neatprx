import React from 'react';
import '../elements/OrderHistory.css';

function OrderHistory() {
    
    return(
        <div className="orderHistory">
            <div className="history-inner">
                <h7 className="dsh-title">Order History</h7>
                    <div className="table-content">
                        <table className="orders">
                            <thead className="thead">
                                <tr>
                                    <th>Order Date</th>
                                    <th>Order Name</th>
                                    <th>Status</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2021-01-01 02:38:29</td>
                                    <td>2GB Speed - Residental Plan</td>
                                    <td><span className="badge badge-success">Paid</span></td>
                                    <td>$420</td>
                                </tr>
                                <tr>
                                    <td>2021-01-01 02:38:29</td>
                                    <td>2GB Elite - Residental Plan</td>
                                    <td><span className="badge badge-failed">Failed</span></td>
                                    <td>$420</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default OrderHistory;