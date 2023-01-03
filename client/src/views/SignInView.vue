<script lang="ts">
import { defineComponent } from "vue";
import logo from "../assets/img/appIcon.png";
import FormVue from "../components/SignIn/Form.vue";
export default defineComponent({
    name: "SignInView",
    data() {
        return {
            logo,
            name: "roman",
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
            <div class="main__sign-in">
                <h2>Sign In</h2>
            </div>
            <div class="main__forms-container">
                <FormVue />
                <div class="main__forms-container__sign-in-buttons"></div>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/signin.module.scss";
</style>
