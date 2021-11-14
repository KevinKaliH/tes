import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='header-content'>
            <div className="btn-block">
                <Link to='/job/create' className='btn btn-primary'>Create</Link>
            </div>

            <div className="container-table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Next release</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    )
}
