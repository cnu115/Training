import {Link} from "react-router-dom";

const SearchData = (props) => {
    const {data} = props;
    // console.log('data ', data)
    return data.map((item, index) => {
        return <div key={index} className="col-sm-3">
            <div className="card cardOwnStyle">
                <img className="card-img-top" src={item.avatar} alt={`${item.first_name} ${item.last_name} `}/>
                <div className="card-body">
                    <h5 className="card-title">{`${item.first_name} ${item.last_name} `}</h5>
                    <p className="card-text">
                        email: {item.email}
                    </p>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link to={`/user/${item.id}`} className="btn btn-sm btn-primary">View</Link>
                    </div>
                </div>
            </div>
        </div>

    })
}

export default SearchData;