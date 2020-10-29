<template>
    <div class="Counter">
        Second Counter {{counter}}
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
