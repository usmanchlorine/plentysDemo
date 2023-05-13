const GETALLCARDS = "GETCALLCARDS"


const allCards = (data) => {
    return {
        type: GETALLCARDS,
        payload: data
    }
}


export { allCards, GETALLCARDS }