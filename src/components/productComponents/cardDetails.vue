<template>
  <v-dialog v-model="opened" scrollable class="modal-card">
    <v-card>
      <v-card-text class="modal-card__body">
        <v-carousel :show-arrows="false">
          <v-carousel-item
            v-for="(item, i) in product.images"
            :key="i"
            :src="require(`@/assets/products/${item}`)"
            cover
          ></v-carousel-item>
        </v-carousel>
        <v-container>
          <v-row>
            <v-col
              ><h2 class="modal-card__header">{{ product.name }}</h2></v-col
            >
          </v-row>
          <v-row class="modal-card__container">
            <v-col cols="12" sm="8">{{ product.description }}</v-col>
            <v-col cols="12" sm="4">
              <v-container>
                <v-row>
                  <v-card-text class="card__price-container">
                    <price-block
                      :priceData="product.price"
                      show-labels=""
                      center=""
                    ></price-block>
                  </v-card-text>
                </v-row>
                <v-row class="modal-card__buttons"
                  ><button-buy :product="product"></button-buy>
                  <button-block @click="opened = false"
                    >Закрыть</button-block
                  ></v-row
                >
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import ButtonBuy from "@/components/productComponents/buttonBuy";
import ButtonBlock from "@/components/baseComponents/button";
import PriceBlock from "@/components/productComponents/priceBlock.vue";
export default {
  name: "card-details",
  props: {
    product: { type: Object },
    open: { type: Boolean },
  },
  components: { ButtonBuy, ButtonBlock, PriceBlock },

  data: () => ({
    opened: false,
  }),
  watch: {
    opened(v) {
      if (!v) this.$emit("close");
    },
    open(v) {
      this.opened = this.open;
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/scss/colors.scss";

.modal-card {
  &__title {
    text-align: center;
  }

  &__body {
    padding: 0 !important;
  }

  &__header {
    margin: 20px;
    text-align: center;
  }

  &__container {
    border-top: 1px solid colors.$border-color;
  }

  &__buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
}
</style>
