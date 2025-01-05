<script>
    let count = $state({
        value: 0,
        note: "single digits",
    });

    let mouse = $state({
        x: 0,
        y: 0
    });

    let key = $state("");
    let keyStrokeCount = $state(0);
    let text = $state("");
    let disabled = $state(false);
    let selected = $state("");

    const showKey = (event) => {
        keyStrokeCount++;
        key = event.key;
    };


    const incrementCount = () => {
        count.value++;

        if (count.value > 9) {
            count.note = "Not single digits";
        }
    };

    const mouseMove = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };

    const resetVariables = () => {
        text = "";
        disabled = false;
        selected = "";
    };

    const keyUp = (event) => {
        if (event.key === 'Enter') {
            resetVariables();
        }
    }


</script>

<p>Count: {count.value} ({count.note})</p>
<button
    onclick={incrementCount}
    onmouseenter={incrementCount}
    onmousemove={mouseMove}
>Hovered or clicked {count.value} times</button>

<p>Mouse moved at {mouse.x} {mouse.y}</p>

<textarea onkeyup={showKey}></textarea>
<p>Last key pressed: {key}, total keystrokes: {keyStrokeCount}</p>

<input type="text" bind:value={text} {disabled}>
Typing disabled: <input type="checkbox" bind:checked={disabled} />
<button onclick={resetVariables}>Reset</button>

<select bind:value={selected}>
    <option value="">Select an option</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</select>
<p>Text: {text}, Selected: {selected}</p>