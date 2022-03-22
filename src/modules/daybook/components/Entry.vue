<template>
    <div
        class="entry-container mb-3 cursor-pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <div class="entry-title flex">
            <span class="text-success text-xl font-bold">20</span>
            <span class="mx-1 text-xl">Marzo</span>
            <span class="mx-2 font-light">2022</span>
        </div>
        <p class="entry-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            repudiandae reprehenderit quae eaque modi, ab impedit voluptate
            fugiat quis aperiam! Neque, laboriosam soluta reprehenderit odio in
            consequatur veniam fugit. Ut?
        </p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: background-color 0.2s ease-in;
    }
    .entry-description {
        font-size: 0.75rem;
    }
}
</style>