<script>
    import { useCountStore } from "$lib/stores/counter.svelte";

    const counter = useCountStore();

</script>

<button onclick={() => counter.increment()}>Clicks: {counter.count}</button>

