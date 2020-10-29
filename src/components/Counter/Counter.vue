<template>
    <div class="Counter">
        Counter {{counter}}
    </div>
</template>

<script>

    export default {
        computed: {
            counter() {
                return this.$store.getters.computed_counter
            }
        }
    };
</script>
