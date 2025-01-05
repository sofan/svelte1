<script>
    import Card from "$lib/components/Card.svelte";
    import Hero from "$lib/components/Hero.svelte";
</script>

<svelte:head>
    <title>My Application</title>
</svelte:head>


<Hero />

<div class="flex justify-evenly mt-10 mb-10 gap-4">
    <Card title="Home" description="You are here" link="/" />
    <Card title="About" description="About..." link="/about" />
    <Card title="Contact" description="Get in touch" link="/contact" />
</div>