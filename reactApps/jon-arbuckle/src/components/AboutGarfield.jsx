



    function AboutGarfield(props) {
const {likes, dislikes} =props;

const listOfLikes = likes.map(function(element, index,){
    return <li key={index}>{element}</li>
})

const dislikesList = dislikes.map(function(element, index){
    return (<li 
        key={index}>{element}
        </li>)
})

        return (
            <>
                <h1>Garfield's favorite foods</h1>
                <ul>
                    {listOfLikes}
                </ul>
                <h1>Things that Garfield hates</h1>
                <ol>
                    {dislikesList}
                    {/* {dislikes.map(function (element, index){
                        return <li key={index}>{element}</li>
                    })}  */}
                </ol>

            </>
        )
    }
export default AboutGarfield 