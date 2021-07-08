const Person = ({ name, age, hobbies=[]}) => {
    return (
        <div>
            <p>{name.length > 8? name.slice(0, 6) : name}</p>
            <p>Learn some information about this person.</p>
            <h3>{age > 18 ? "Please go vote!" : "you must be 18"}</h3>
            <h4>Hobbies</h4>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    );
}