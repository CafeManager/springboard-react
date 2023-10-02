function Tweet(props){
    return (
        <div className="card" style={{width: "18rem", margin:"1rem", display:"inline-block"}}>
            <div className="card-body">
                <h5 className="card-title">{props.username} / {props.name}</h5>
                <p className="card-text">{props.message}</p>
                <span style={{color: "grey"}}>{props.date}</span>
            </div>
        </div>
    )
}
