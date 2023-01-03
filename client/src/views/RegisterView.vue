<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../assets/img/appIcon.png";
export default defineComponent({
    name: "RegisterView",
    data() {
        return {
            appIcon,
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
            <div class="sign-up-container">
                <h1>Sign Up</h1>
            </div>
            <div class="form-and-icon-container">
                <div class="icon-container">
                    <img :src="appIcon" alt="appicon" />
                    <h1>KeyChain</h1>
                </div>
                <form class="form">
                    <input type="text" name="name" placeholder="Full Name" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                    />
                    <div class="form__birthday">
                        <h1>Birthday</h1>
                    </div>
                    <div class="form__gender">
                        <div class="form__gender__male"></div>
                        <div class="form__gender__female"></div>
                        <div class="form__gender__others"></div>
                    </div>
                    <input type="submit" value="Sign Up" />
                    <RouterLink to="/signin">Sign In</RouterLink>
                </form>
            </div>
        </main>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/views/register.module.scss";
</style>
