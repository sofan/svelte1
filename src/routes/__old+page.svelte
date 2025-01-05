<script>
    import AddItems from "$lib/components/AddItems.svelte";
    import ClickButton from "$lib/components/ClickButton.svelte";
    import Counter from "$lib/components/Counter.svelte";
    import Dagsnamn from "$lib/components/Dagsnamn.svelte";
    import Dog from "$lib/components/Dog.svelte";
    import Hello from "$lib/components/Hello.svelte";
    import Logic from "$lib/components/Logic.svelte";

    import QuestionAndAnswer from "$lib/components/QuestionAndAnswer.svelte";

    let qa = {
        question: "Funkar detta?",
        answer: "Ja det gör det!"
    }
</script>

<Dagsnamn />

<ClickButton />
<AddItems />
<Hello />
<Logic name="Sofie" />
<Counter />
<QuestionAndAnswer {...qa} />
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

