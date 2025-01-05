const fetchSwedishNameDay = async(day, month) => {
    const data = {
        day,
        month,
        country: 'se',
    };

    const response = await fetch("https://nameday.abalin.net/api/V1/getdate", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
    });

    const jsonData = await response.json();
    return jsonData.nameday.se;

}

export { fetchSwedishNameDay };
