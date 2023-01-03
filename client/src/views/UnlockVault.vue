<script lang="ts">
import { defineComponent } from "vue";
import logo from "../assets/img/appIcon.png";
import FormVue from "@/components/UnlockVault/Form.vue";
export default defineComponent({
    name: "UnlockVault",
    data() {
        return {
            logo,
        };
    },
    components: {
        FormVue,
    },
});
</script>

<template>
    <div class="container">
        <div class="background-container">
            <div class="background-container__round-shape"></div>
        </div>
        <main class="main">
            <div class="main__logo-title">
                <img
                    class="main__logo-title__logo"
                    :src="logo"
                    alt="app-logo"
                />
                <h1>KeyChain</h1>
            </div>
            <FormVue />
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/unlockVault.module.scss";
</style>
