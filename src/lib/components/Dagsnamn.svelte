<script>
    import { fetchSwedishNameDay } from "../../http-actions/nameday-api";
    let name_day = $state("");
    const day = $state(4);
    const month = $state(1);

    const fetchNameDay = async () => {

        name_day = await fetchSwedishNameDay(day, month);
    }

</script>

<button onclick={fetchNameDay}>Hämta namnsdag</button>
<p>Namnsdag: {name_day}</p>