<template>
    <nav class="bg-primary border-primary px-2 sm:px-4 py-2.5">
        <div
            class="
                container
                flex flex-wrap
                justify-between
                items-center
                mx-auto
            "
        >
            <a href="#" class="flex items-center">
                <img
                    src="@/assets/logo.png"
                    class="mr-3 h-6 sm:h-10"
                    alt="Flowbite Logo"
                />
                <span
                    class="
                        self-center
                        text-xl
                        font-semibold
                        whitespace-nowrap
                        text-white
                    "
                    >Daybook</span
                >
            </a>
            <div class="flex md:order-2">
                <button
                    type="button"
                    class="
                        text-info
                        border border-info
                        hover:bg-info hover:text-primary
                        rounded-lg
                        px-5
                        py-2.5
                        text-center
                        mr-3
                        md:mr-0
                    "
                >
                    <i class="fa fa-sign-out-alt"></i>
                </button>
            </div>
        </div>
    </nav>
</template>