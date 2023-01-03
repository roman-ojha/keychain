import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import RegisterView from "../views/RegisterView.vue";
import VaultView from "../views/VaultView.vue";
import UnlockVault from "../views/UnlockVault.vue";
import CreateMasterPW from "../views/CreateMasterPW.vue";
import ForgetPassword from "../views/ForgetPassword.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/signin",
            name: "singin",
            component: SignInView,
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
        },
        {
            path: "/vault",
            name: "vault",
            component: VaultView,
        },
        {
            path: "/vault/unlock",
            name: "vault-unlock",
            component: UnlockVault,
        },
        {
            path: "/vault/create-master-password",
            name: "create-master-password",
            component: CreateMasterPW,
        },
        {
            path: "/forget-password",
            name: "forget-password",
            component: ForgetPassword,
        },
    ],
});

export default router;
