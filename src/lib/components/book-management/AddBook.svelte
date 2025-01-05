<script>
    import { createBook } from "$lib/http-actions/books-api.js";

    let name = $state("");
    let pages = $state("");
    let isbn = $state("");

    const addBook = async () => {
        const book = { name, pages, isbn };
        const response = await createBook(book);
        if (response.error) {
            console.log(response.error);
            return;
        }

        name = "";
        pages = "";
        isbn = "";

        console.log("Book added!");
    };
</script>

<div class="mt-10"></div>
<h1 class="text-lg font-bold">Add a book:</h1>

<div class="flex flex-col gap-4">
    <label class="input input-bordered flex items-center gap-2">
        Book name
        <input
            type="text"
            class="grow"
            placeholder="Name"
            id="name"
            name="name"
            bind:value={name}
        />
    </label>

    <label class="input input-bordered flex items-center gap-2">
        Number of pages
        <input
            type="text"
            class="grow"
            placeholder="Name"
            id="pages"
            name="pages"
            bind:value={pages}
        />
    </label>

    <label class="input input-bordered flex items-center gap-2">
        ISBN
        <input
            type="text"
            class="grow"
            placeholder="Name"
            id="isbn"
            name="isbn"
            bind:value={isbn}
        />
    </label>

    <button class="btn btn-active btn-accent" onclick={addBook}>Add Book</button
    >
</div>
