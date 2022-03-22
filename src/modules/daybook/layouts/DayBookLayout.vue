<template>
    <Navbar />
    <div class="grid grid-cols-12">
        <div class="col-span-4">
            <EntryList />
        </div>
        <div class="col-span-8">
            <router-view />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
    components: {
        Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
        EntryList: defineAsyncComponent(() =>
            import("../components/EntryList.vue")
        ),
    },
};
</script>