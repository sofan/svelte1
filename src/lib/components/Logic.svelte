<script>
    import AgeDescription from "./AgeDescription.svelte";
    import BestJoke from "./BestJoke.svelte";
    import LivingLocations from "./LivingLocations.svelte";

    let {name} = $props();
    let age = $state(0);

    const grow = () => {
        age++;
    };


</script>

<p>My name is {name}. I am {age} year{age <= 1 ? '' : 's'} old</p>
<AgeDescription {age} />


<LivingLocations />


<BestJoke />

<button onclick={grow}>Grow</button>

