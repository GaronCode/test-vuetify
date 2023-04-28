<template lang="">
  <div class="catalog">
    <div class="wrapper">
      <v-container
        v-for="(section, i) in products"
        :key="i"
        fluid
        tag="section"
        class="product-section"
      >
        <h1 class="product-section">{{ section.tittle }}</h1>
        <v-row class="product-section__row">
          <product-card
            v-for="product in section.list"
            :key="product.id"
            :product="product"
          />
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/productComponents/card.vue";
export default {
  name: "catalog-view",
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.getters.productsList;
    },
  },
  created() {},
};
</script>
<style lang="scss">
.catalog {
  margin-top: 44px;

  .product-section {
    margin-bottom: 40px;
    padding: 0;

    &__row {
      margin: 0;
      gap: 32px;
    }
  }
}

@media (max-width: 1260px) {
  .catalog {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (max-width: 800px) {
  .product-section__row {
    justify-content: center;
  }
  .product-section {
    text-align: center;
  }
}
</style>
