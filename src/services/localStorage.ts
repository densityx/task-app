/**
 * convert object to string and store in sessionStorage
 *
 * @param state
 */
export function saveToLocalStorage(state: any) {
    try {
        const serialisedState = JSON.stringify(state);
        sessionStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

/**
 * Load string from localStorage and convert into an Object
 * invalid output must be undefined
 */
export function loadFromLocalStorage() {
    try {
        const serialisedState = sessionStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}