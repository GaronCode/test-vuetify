<template>
  <button-block
    @click="buttonClick()"
    :active="isInBasket"
    :disabled="isLoading || isSold"
    :fontSize="isLoading ? 12 : null"
  >
    <template v-if="isInBasket">
      <img
        src="@/assets/icons/feather_check.svg"
        alt="in basket"
        style="margin-right: 4px"
      />
      В корзине
    </template>
    <template v-else-if="isLoading">обрабатывается</template>
    <template v-else> Купить </template>
  </button-block>
</template>
<script>
import ButtonBlock from "@/components/baseComponents/button.vue";
export default {
  name: "button-buy",
  props: {
    product: { type: Object },
  },
  components: { ButtonBlock },

  data: () => ({
    isLoading: false,
  }),
  computed: {
    isInBasket() {
      return this.$store.getters.basketList.find(
        (item) => item.id === this.product.id
      );
    },
    isSold() {
      return this.product.price.sold ? true : false;
    },
  },
  methods: {
    buttonClick() {
      if (this.isInBasket || this.isLoading) return;
      this.isLoading = true;
      this.$store.dispatch("addToBasket", this.product).then(() => {
        this.isLoading = false;
      });
    },
  },
};
</script>
<style></style>
