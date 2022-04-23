import React from 'react'
import { DndTableState } from '../dndTableSlice'

const Row: React.FC<DndTableState> = ({ data }) => {
    return (
        <>
            {
                data?.map((employee, index) => (
                    <tr className='tableRow' key={index} >
                        <td className="center handle " scope="row">Q</td>
                        <td className='center barImage'></td>
                        <td className='center'>{employee.sumHours}</td>
                        <td className='center'>{employee.hours}</td>
                        <td className='center'>{employee.overLimitHours}</td>
                        <td className='center'>{employee.manualHours}</td>
                        <td className='right'>{employee.name}</td>
                        <td className='right'>{employee.id}</td>
                    </tr>
                ))
            }
        </>
    )
}
export default Row;