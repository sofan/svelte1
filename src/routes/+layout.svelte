<script>
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import { onMount } from 'svelte';
    import { initBooks } from '$lib/stores/books.svelte.js';

    onMount(() => {
        initBooks();
    });
</script>

<Navbar />

<main class="container mx-auto px-4">
    <slot />
</main>

<Footer />