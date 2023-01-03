<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "FormVue",
});
</script>

<template>
    <form action="" class="form">
        <p class="form__desc">Enter Master Password to create your vault</p>
        <input
            type="password"
            name="master_password"
            id="master_password"
            placeholder="Master Password"
        />
        <input type="submit" value="Create" class="form__unlock-btn" />
    </form>
</template>

<style scoped lang="scss">
@import "../../styles/components/createMasterPW/form.module.scss";
</style>
