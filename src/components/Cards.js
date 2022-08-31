import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import product from '../data/products';

export default function Cards() {
    const [search, setSearch] = useState("");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Nursery Live Online</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                      
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" 
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        />
                         </form>
                         </div>
                         </div>
                        </nav>

                        <section className="py-5 container">
                            <div className="row justify-content-center">
                        {product.filter((val) => {
                            if (search === "") {
                                return val
                            } else if (val.productName.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((val) => {
                            return (
                                
                                <div className="App col-11 col-md-6 col-lg-3 mx-0 mb-5">
                                    <div className="card p-0 overflow-hidden h-60 shadow" key={val.id}>
                                    <img src={val.Img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{val.productName}</h5>
                                        <p className="card-text">{val.price}</p>
                                        <a href="/" className="btn btn-primary">Purchase</a>
                                    </div>
                                    </div>
                                </div>
                                 )
                                }) 
                            }  
                            </div>
                        </section>            
        </>
    );
}