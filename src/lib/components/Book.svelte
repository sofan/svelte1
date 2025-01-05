<script>
    import { createEventDispatcher } from "svelte";

    let { book } = $props();
    const dispatch = createEventDispatcher();

    const closeBook = () => {
        dispatch("close");
    };

</script>

<div class="card bg-base-300 w-96 shadow-xl">
    <div class="card-body">
        <h2 class="card-title">{book.name}</h2>
        <p>Pages: {book.pages}</p>
        <p>ISBN: {book.isbn}</p>
        <div class="card-actions justify-end">
            <button onclick={closeBook} class="btn btn-primary">Close</button>
        </div>
    </div>
</div>
