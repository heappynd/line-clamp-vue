import { App } from "vue";
import LineClampVue from "./LineClampVue/LineClampVue.vue";

const install = (app: App<Element>) => {
  app.component("LineClampVue", LineClampVue);
};

export default {
  install,
};
