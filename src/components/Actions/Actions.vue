<template>
    <div class="Actions">
        <button class="btn btn-success" @click="new UpdateCounter(1)">Add</button>
        <button class="btn btn-danger" @click="new UpdateCounter(-1)">Subtract</button>
    </div>
</template>

<script>
    export default {
        props: {},
        methods: {
            UpdateCounter(value) {
                // this.$store.state.counter += value; //For state
                // this.$store.commit('changeCounter',value); //For mutations
                this.$store.dispatch('async_changeCounter', {counterValue: value, Delay: 200}) // For actions(async)
            }
        }
    };
</script>
