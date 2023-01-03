<script lang="ts">
import { defineComponent } from "vue";
import logo from "../assets/img/appIcon.png";
import FormVue from "../components/SignIn/Form.vue";
import SignInWithButton from "../components/SignIn/SignInWithButton.vue";
import GoogleIcon from "../assets/ico/google.png";
import FacebookIcon from "../assets/ico/facebook.png";

export default defineComponent({
    name: "SignInView",
    data() {
        return {
            logo,
            name: "roman",
            googleIcon: GoogleIcon,
            facebookIcon: FacebookIcon,
        };
    },
    components: {
        FormVue,
        SignInWithButton,
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
                <div class="main__forms-container__sign-in-with-buttons">
                    <SignInWithButton
                        signInWith="Google"
                        :logoSrc="googleIcon"
                    />
                    <SignInWithButton
                        signInWith="Facebook"
                        :logoSrc="facebookIcon"
                    />
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/signin.module.scss";
</style>
