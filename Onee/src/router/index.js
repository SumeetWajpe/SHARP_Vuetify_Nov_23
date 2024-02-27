// Composables
import { createRouter, createWebHistory } from "vue-router";
import ListOfProducts from "../components/ListOfProducts.vue";
import ProductDetails from "../components/ProductDetails.vue";

const routes = [
  {
    path: "/",
    component: ListOfProducts,
  },
  {
    path: "/productdetails/:id",
    name: "productdetails",
    component: ProductDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
