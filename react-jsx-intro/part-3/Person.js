function Person(props){
    return(
        <div className="card" style={{width: "24rem", margin:"1rem", display:"inline-block"}}>
            <div className="card-body">
                
                {props.age >= 18 ? <h1> Please go vote! </h1> : ""}
                <p className="card-text"> Learn more about this person! </p>
                <p className="card-text"> Name: {props.name.length > 8 ? props.name.slice(0,6) : props.name} </p>
                <p className="card-text"> Age: {props.age} </p>
                {props.hobbies.map(e => <li className="list-group-item">{e}</li>)}
            </div>
        </div>
    )
}