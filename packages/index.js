export * from "./components/index"

import components from "./components.js";

const install = function (app) {
    if (install.installed) return;
    components.forEach((c) => app.use(c))
};
export default install