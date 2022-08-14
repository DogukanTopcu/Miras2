export default (advisors = [], action) => {
    switch (action.type) {
        case "GET_ADVISORS":
            return advisors = [...advisors, action.payload];
            break;
    
        default:
            return advisors;
    }
}