import './Die.css'

function Die(props) {

    const { face } = props;


    return (
        <>
        <i className={`fas fa-dice-${face}`}/>
        <h1>DIE!</h1>
        </>
    )
}

export default Die;