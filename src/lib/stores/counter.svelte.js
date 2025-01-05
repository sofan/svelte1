//import * as countApi from "../../http-actions/count-api";

let initialCount = 0;

if (typeof window !== "undefined" && localStorage.hasOwnProperty("count")){
    initialCount = parseInt(localStorage.getItem("count"));
}

let count = $state(initialCount);
//let count = $state(0);

/* const initCount = async () => {
    count = await countApi.getCount();
}

initCount(); */

const useCountStore = () => {

    return {
        get count() {
            return count;
        },
        increment: () => {
            count++;
            //countApi.incrementCount();
            localStorage.setItem("count", count);
        },
    };
};

export { useCountStore };