let items = $state([]);

const useItemStore = () => {

    return {
        get items() {
            return items;
        },
        add: (item) => {
            items = [item, ...items];
        },
    };
};

export { useItemStore };
