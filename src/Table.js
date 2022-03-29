import React from "react";
import './table.css';

const Table =({data}) => {

    return (
        <table className="table">
            <tbody>
                <tr className="surname">
                    <th>Name </th>
                    <th>Surname </th>
                    <th>Email </th>
                </tr >
                {data.map((item) => (
                    <tr className="surname" key={item.id}>
                    <td>{item.first_name}</td>
                    <td >{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
                ))}
                

                
            </tbody>
        </table>

    )
};

export default Table;