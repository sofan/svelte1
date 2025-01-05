<script>
    let {age} = $props();
</script>

{#if age >= 18}
    <p>Jag är vuxen</p>
{:else if age >= 4}
    <p>Jag är ett barn</p>
{:else if age >= 1}
    <p>Jag är ett litet barn</p>
{:else}
    <p>Jag är en bebis</p>
{/if}
