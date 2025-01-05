<script>

    import { useItemStore } from "$lib/stores/items.svelte";

    const itemStore = useItemStore();


    const addItem = () => {
        itemStore.add(`Item ${itemStore.items.length + 1}`)
        //items = [`Item ${items.length + 1}`, ...items ];
        //items.push(`Item ${items.length + 1}`);
    };

</script>

<button onclick={addItem}>Add item</button>

<p>Items:</p>
<ul>
    {#each itemStore.items as item}
        <li>{item}</li>
    {/each}
</ul>
