<template>
    <button
        class="
            bg-primary
            text-gray-200
            hover:bg-[#3b536b]
            px-4
            py-2
            focus:outline-none
        "
    >
        <i class="fa fa-2x" :class="icon"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: "fa-plus",
        },
    },
};
</script>

<style lang="scss" scoped>
button {
    border-radius: 50%;
    bottom: 20px;
    height: 4rem;
    position: fixed;
    right: 20px;
    transition: background-color 0.2s ease-in;
    width: 4rem;
}
</style>