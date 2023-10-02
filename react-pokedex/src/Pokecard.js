function Pokecard(props) {
    return (
        <div
            className="card"
            style={{
                display: "inline-block",
                borderRadius: "5px",
                backgroundColor: "#D3D3D3",
            }}
        >
            <h5
                className="card-title"
                style={{
                    color: "#1703FE",
                    marginTop: "2rem",
                    fontSize: "2rem",
                }}
            >
                {props.name}
            </h5>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
                className="card-img-top"
            />
            <div className="card-body">
                <p className="card-text">Type: {props.type}</p>
                <p className="card-text">Type: {props.base_experience}</p>
            </div>
        </div>
    );
}

export default Pokecard;
