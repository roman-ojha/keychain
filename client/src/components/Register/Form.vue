<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import "@vuepic/vue-datepicker/src/VueDatePicker/style/main.scss";
export default defineComponent({
    name: "FormVue",
    data() {
        return {
            date: new Date(),
        };
    },
    components: {
        Icon,
    },
});
</script>

<template>
    <form class="form">
        <input type="text" name="name" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
        <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
        />
        <div class="form__birthday">
            <label for="birthday">Birthday</label>
            <DatePicker
                v-model="date"
                id="birthday"
                class="form__birthday__picker"
                :enable-time-picker="false"
                :max-date="new Date()"
                :year-range="[
                    new Date().getFullYear() - 100,
                    new Date().getFullYear(),
                ]"
            ></DatePicker>
        </div>
        <div class="form__gender">
            <p>Gender</p>
            <div class="form__gender__picker">
                <div class="form__gender__picker__child">
                    <label for="male">Male</label>
                    <input
                        type="checkbox"
                        id="male"
                        name="gender"
                        value="male"
                    />
                </div>
                <div class="form__gender__picker__child">
                    <label for="female">Female</label>
                    <input
                        type="checkbox"
                        id="female"
                        name="gender"
                        value="female"
                    />
                </div>
                <div class="form__gender__picker__child">
                    <label for="others">Others</label>
                    <input
                        type="checkbox"
                        id="others"
                        name="gender"
                        value="others"
                    />
                </div>
            </div>
        </div>
        <div class="form__buttons">
            <input
                type="submit"
                value="Sign Up"
                class="form__buttons__sign-up"
            />
            <RouterLink to="/signin" class="form__buttons__sign-in"
                >Sign In
                <Icon
                    icon="ic:outline-keyboard-double-arrow-right"
                    color="black"
                />
            </RouterLink>
        </div>
    </form>
</template>

<style scoped lang="scss">
@import "../../styles/components/register/form.module.scss";
</style>
