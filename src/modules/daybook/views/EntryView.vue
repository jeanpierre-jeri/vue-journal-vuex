<template>
    <div class="entry-title flex justify-between p-2">
        <div>
            <span class="text-success text-xl font-bold">15</span>
            <span class="mx-1 text-xl">Marzo</span>
            <span class="mx-2 text-2xl font-light">2022, jueves</span>
        </div>

        <div>
            <button
                class="
                    mx-2
                    bg-danger
                    text-gray-200
                    rounded
                    hover:bg-[#ed3748]
                    px-4
                    py-2
                    focus:outline-none
                "
            >
                Borrar <i class="fa fa-trash-alt"></i>
            </button>
            <button
                class="
                    mx-2
                    bg-primary
                    text-gray-200
                    rounded
                    hover:bg-[#364d63]
                    px-4
                    py-2
                    focus:outline-none
                "
            >
                Subir Foto <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr />

    <div class="flex flex-col px-3 h-3/4">
        <textarea placeholder="¿Qué sucedió hoy?"></textarea>
    </div>
    <Fab icon="fa-save" />

    <img
        src="https://images.unsplash.com/photo-1475092432448-fe76c45a8d6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        alt="entry-picture"
        class="border border-[#dee2e6] bg-white p-1 rounded"
    />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components: {
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 1.25rem;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 12.5rem;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 0.2);
}
</style>