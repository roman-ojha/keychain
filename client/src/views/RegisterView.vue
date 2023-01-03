<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../assets/ico/appIcon.png";
import FormVue from "../components/Register/Form.vue";
export default defineComponent({
    name: "RegisterView",
    data() {
        return {
            appIcon,
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
            <div class="sign-up-container">
                <h1>Sign Up</h1>
            </div>
            <div class="form-and-icon-container">
                <div class="icon-container">
                    <img :src="appIcon" alt="appicon" />
                    <h1>KeyChain</h1>
                </div>
                <FormVue />
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/register.module.scss";
</style>
