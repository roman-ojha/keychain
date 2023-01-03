<script lang="ts">
import { defineComponent } from "vue";
import FormVue from "../components/CreateMasterPW/Form.vue";
import appIcon from "../assets/img/appIcon.png";
export default defineComponent({
    name: "CreateMasterPW",
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
            <div class="main__logo-title">
                <img
                    class="main__logo-title__logo"
                    :src="appIcon"
                    alt="app-logo"
                />
                <h1>KeyChain</h1>
            </div>
            <FormVue />
            <div class="main__disclaimer">
                <h2>Warning!!!</h2>
                <p>
                    Never forget you Master Password, If you forget it you won't
                    be able to reset master password & unlock your vault.
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/creawteMasterPW.scss";
</style>
