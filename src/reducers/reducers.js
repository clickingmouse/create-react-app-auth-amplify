

const fetchproperties = 'FETCH_PROPERTIES'
const FETCH_PROPERTIES = 'FETCH_PROPERTIES'
const fetchfavorites = 'FETCH_FAVORITES'
const FETCH_FAVORITES = 'FETCH_FAVORITES'
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
const TOGGLE_ADD_FAVORITE = 'TOGGLE_ADD_FAVORITE'
const TOGGLE_REMOVE_FAVORITE='TOGGLE_REMOVE_FAVORITE'

const initial = 'INITIAL'
export default function reducer(state, action){
    console.log(state)
    console.log(action)
    /*const test = {
        properties:[1,2,3]

    }*/
    //console.log(test)
    switch(action.type){
        case 'INITIAL':
            return {}
        case FETCH_PROPERTIES:
            //return {...state, properties: action.payload}
            return Object.assign(state, {properties:action.payload})
            
        case FETCH_FAVORITES:
            return Object.assign(state, {favorites:action.payload})
        case TOGGLE_FAVORITE: 
        const isInFavorites = state.favorites.find(
            favorite => favorite.id === action.payload.id
        )
        let newFavorites = [];
            if (isInFavorites){
                const removedFavoriteIndex = state.favorites.findIndex(
                    favorite => favorite.id === action.payload.id
                )
                newFavorites =  [
                    ...state.favorites.slice(0, removedFavoriteIndex),
                    ...state.favorites.slice(removedFavoriteIndex+1)
                ]
            } else {
                
                newFavorites = [...state.favorites, action.payload]
            }
            
    return {...state, favorites:newFavorites}

        //     const isInFavorites = state.favorites.find(
        //         favorite => favorite === action.payload
        //     )
        //     let newFavorites = [];
        //         if (isInFavorites){
        //             newFavorites =  state.favorites.filter(propertyid => propertyid !== action.payload)
        //         } else {
        //             newFavorites = [...state.favorites, action.payload]
        //         }
                
        // return {...state, favorites:newFavorites}
        case TOGGLE_ADD_FAVORITE: 
        console.log(state)
        console.log(action)
        //return {...state, favorites: state.favorites.push(action.payload)}
        return {...state, favorites: state.favorites.concat(action.payload)}

        case TOGGLE_REMOVE_FAVORITE: 
        return {...state, favorites: state.favorites.filter(propertyid => propertyid !== action.payload)}

        default:
            return state

    }
    
}