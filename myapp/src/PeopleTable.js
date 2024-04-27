import React, { useEffect, useState } from 'react';

function PeopleTable() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Replace 'http://localhost:5000' with your API's actual base URL
        fetch('https://localhost:7106/api/People')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Person ID</th>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {people.map((person) => (
                    <tr key={person.personId}>
                        <td>{person.personId}</td>
                        <td>{person.customerName}</td>
                        <td>{person.phoneNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default PeopleTable;
