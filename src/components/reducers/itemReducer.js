export const itemReducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, {
                item_name: action.item.item_name,
                item_code: action.item.item_code,
                selling_price: action.item.selling_price,
                purchase_price: action.item.purchase_price,
                unit: action.item.unit,
                date: action.item.date,
            }]
            case 'REMOVE_ITEM': 
                return state.filter(item => item.item_code !== action.id)
            case 'UPDATE':
                return state
            default: 
                return state
    }
}