const getCount = async () => {
    const res = await fetch("http://localhost:8000/count");
    const data = await res.json();
    console.log("Get api response ", data.count)
    return data.count;
};

const incrementCount = async () => {
    console.log("increment")
    await fetch("http://localhost:8000/count", {method: "POST"});
};

export { getCount, incrementCount };
