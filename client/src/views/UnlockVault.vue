<script lang="ts">
import { defineComponent } from "vue";
import logo from "../assets/img/appIcon.png";
export default defineComponent({
    name: "UnlockVault",
    data() {
        return {
            logo,
        };
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
            <form action="" class="form">
                <p class="form__desc">
                    Enter your master password to unlock vault
                </p>
                <input
                    type="password"
                    name="master_password"
                    id="master_password"
                    placeholder="Master Password"
                />
                <input type="submit" value="Unlock" class="form__unlock-btn" />
                <button class="form__logout-btn" type="button">Log out</button>
            </form>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/unlockVault.module.scss";
</style>
