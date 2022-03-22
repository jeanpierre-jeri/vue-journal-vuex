<template>
    <div class="home">
        <h1 class="text-primary">This is home page</h1>
    </div>
    <button
        type="button"
        class="
            text-white
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            hover:bg-gradient-to-bl
            focus:ring-4 focus:ring-cyan-300
            dark:focus:ring-cyan-800
            font-medium
            rounded-lg
            text-sm
            px-5
            py-2.5
            text-center
            mr-2
            mb-2
        "
        @click="goToDaybook"
    >
        Cyan to Blue
    </button>
</template>

<script>
export default {
    methods: {
        goToDaybook() {
            this.$router.push({ name: "no-entry" });
        },
    },
};
</script>