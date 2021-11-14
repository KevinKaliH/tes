import {useState} from 'react'


const consultList = [
    {
        id: 1,
        title: 'Colors available',
        description: 'this report generate something interesting'
    },
    {
        id: 2,
        title: 'Tables existing in colors db test',
        description: 'yeah party'
    }
];

export default function ConsultDBForm() {
    const [consult, setSelectedConsult] = useState([])

    const handleChange = (e) => {
        const {value, checked} = e.target;

        if(checked){
            const filterSelected = consultList.find(item => item.id.toString() === value);

            setSelectedConsult([
                ...consult,
                filterSelected
            ]);
        }else{
            const listResult = consult.filter(item => item.id.toString() !== value);
            setSelectedConsult([...listResult])
        }
    }

    // const handleClick = (e) => {
    //     console.log(consult);
    // }

    return (
        <div className='card'>
            <div className="card-header">
                <h5>Select report generate in the job email</h5>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-8">
                        <ul className='list-group'>
                            {consultList.map(item => (
                                <li className='list-group-item' key={item.id.toString()}>
                                    <input type="checkbox" onChange={handleChange} id={`check-item${item.id}`} className='form-check-input me-1' value={item.id} />
                                    <label htmlFor={`check-item${item.id}`}>{item.title}</label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* <button onClick={handleClick} type="button" name="" id="" className="btn btn-primary btn-block">interesante</button> */}
        </div>
    )
}
