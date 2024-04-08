import React from 'react'

const Table = () => {
    const marks: [number, number, number][] = [
        [100, 100, 90],
        [90, 90, 80],
        [90, 90, 80],
        [90, 90, 80],
    ];
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Maths</th>
                    <th>English</th>
                    <th>Science</th>
                </tr>
                </thead>
                <tbody>
                {marks.map((markInstance, index) => {
                    return (
                        <tr key={index}>
                            <td>{markInstance[0]}</td>
                            <td>{markInstance[1]}</td>
                            <td>{markInstance[2]}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Table