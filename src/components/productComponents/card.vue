<template>
  <v-card
    data-app
    class="card"
    width="280"
    height="328"
    :class="{ card_unactive: product.price.sold }"
    v-if="isFiltered"
  >
    <v-img
      :src="require(`@/assets/products/preview/${product.img}`)"
      height="160px"
      @click="cardIsOpen = true"
      cover
    ></v-img>

    <v-card-title @click="cardIsOpen = true" class="card__title">{{
      product.name
    }}</v-card-title>

    <v-card-actions class="card__footer">
      <price-block :priceData="product.price">
        <button-buy :product="product" />
      </price-block>
    </v-card-actions>

    <card-details
      :product="product"
      :open="cardIsOpen"
      @close="cardIsOpen = false"
    ></card-details>
  </v-card>
</template>
<script>
import ButtonBlock from "@/components/baseComponents/button.vue";
import CardDetails from "@/components/productComponents/cardDetails.vue";
import ButtonBuy from "@/components/productComponents/buttonBuy.vue";
import PriceBlock from "@/components/productComponents/priceBlock.vue";
export default {
  name: "product-card",
  props: {
    product: { type: Object },
  },
  components: { ButtonBlock, CardDetails, ButtonBuy, PriceBlock },

  data: () => ({
    isLoading: false,
    cardIsOpen: false,
    dialog: false,
  }),
  computed: {
    oldPrice() {
      return this.product.price.old
        ? `${this.product.price.old.toLocaleString()} ${
            this.product.price.currency
          }`
        : null;
    },
    price() {
      return `${this.product.price.value.toLocaleString()} ${
        this.product.price.currency
      }`;
    },
    filterString() {
      return this.$store.getters.filterString;
    },
    isFiltered() {
      return this.product.name.toLowerCase().includes(this.filterString);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/scss/colors.scss";
.card {
  border: 1px solid colors.$border-color;
  border-radius: 0;
  box-shadow: none !important;
  background-color: inherit;

  &_unactive {
    opacity: 0.5;
  }

  &__title {
    padding: 20px 36px 0 24px;
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 18px;
    word-break: break-word;
    line-height: 150%;
  }

  &__pricee-container {
    padding: 0;
  }

  &__sold {
    font-weight: 700;
    font-size: 16px;
  }

  &__footer {
    padding: 0 24px;
    height: 48px;
  }
}

.modal-card {
  background: #000;
  &__title {
    text-align: center;
  }
}
</style>
