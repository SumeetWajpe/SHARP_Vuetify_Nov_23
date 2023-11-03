/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VDatePicker } from "vuetify/labs/VDatePicker";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: { VDatePicker },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#8E24AA",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
