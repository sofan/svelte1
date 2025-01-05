<script>
    import { useBookStore } from "$lib/stores/books.svelte.js";
    import Book from "../Book.svelte";

    let selectedBook = $state(null);
    const bookStore = useBookStore();

    const viewBook = (book) => {
        selectedBook = book;
    }

    const closeBook = () => {
        selectedBook = null;
    }


</script>



<article class="prose">
<h1>Books</h1>
</article>

<ul role="list" class="divide-y divide-gray-100">
    {#each bookStore.books as book}
        <li class="flex justify-between gap-x-6 py-5">
            <p class="text-sm/6 font-semibold text-gray-900">{book.name}</p>
            <button class="btn btn-circle btn-active" onclick={() => viewBook(book)}>View</button>
        </li>
    {/each}
</ul>


{#if selectedBook}
    <Book book={selectedBook} on:close={closeBook} />
{/if}
