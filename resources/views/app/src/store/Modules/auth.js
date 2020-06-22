import axios from 'axios';
import router from "@/router";

export default {
    state: {
        user: {},
    },
    actions: {
        login({state}, user) {
            axios.post('/auth/login', {
                email: user.email,
                password: user.password,
            }).then(response => {
                if (response.data.access_token) {
                    // save token
                    localStorage.setItem(
                        "token",
                        response.data.access_token
                    );
                    state.user = response.data.user;
                    router.push("/");
                }
            })
        },
        logout() {
            axios
                .post('/auth/logout')
                .then(() => {
                    router.push("login");
                })
        }
    }
};
