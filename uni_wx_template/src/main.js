import {
	createSSRApp
} from "vue";
import App from "./App.vue";
// import register from "./register";
export function createApp() {
	const app = createSSRApp(App);
	// app.use(register);
	return {
		app,
	};
}
