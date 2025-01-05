<script>
    let locations = ['Norrköping', 'Gävle', 'Stockholm'];

</script>

<p>Jag har bott i: </p>
<ul>
    {#each locations as location}
        <li>{location}</li>
    {/each}
</ul>

<style>
    ul {
        font-family: 'Arial';
    }
    li {
        color: blue;
    }
</style>