import React, { useState } from 'react'
import data from './Data'

function Search() {

    const [filter, setFilter] = useState('')

    const searchText = (event) => {
        setFilter(event.target.value);
    }

    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    return (
        <div className='bg-texture'>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-5">
                        <div className="mb-3 col-6 mx-auto text-center">
                            <h1 className='display-2'><u><mark>Find My Train</mark></u></h1>
                            <br>
                            </br>
                            <br>
                            </br>
                            <label className='form-table h2 wheat-color'>#Search#</label>
                            <input
                                type="text"
                                className="form-control"
                                value={filter}
                                onChange={searchText.bind(this)}
                            />
                        </div>
                    </div>

                    {dataSearch.map((item, index) => {

                        return (
                            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                                <div className="card  p-0 overflow-hidden h-100 shadow">
                                    <img src={item.img} alt="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-desc">{item.desc}</p>
                                        <p className="card-desc">{item.time}</p>
                                        <p className="card-desc">{item.classes}</p>
                                        <p className="card-desc">{item.days}</p>
                                        <p className="card-desc">{item.stops}</p>
                                        <p className="card-desc">{item.duration}</p>
                                        <p className="card-desc">{item.type}</p>
                                        <p className="card-desc">{item.pantry}</p>
                                        <a className="btn btn-sm btn-primary float-end" href={item.link} target='_blank'>Know More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </section>
        </div>
    )
}

export default Search