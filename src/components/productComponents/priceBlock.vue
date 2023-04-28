<template>
  <div class="price-block" :class="{ 'price-block__container_center': center }">
    <template v-if="priceData.sold">
      <v-card-text class="price-block__sold">Продана на аукционе</v-card-text>
    </template>
    <template v-else>
      <v-card-text class="price-block__container">
        <template v-if="oldPrice">
          <h3 v-if="showLabels">Старая цена</h3>
          <div class="price-block__old-price">{{ oldPrice }}</div>
          <h3 v-if="showLabels">Новая цена</h3>
          <div class="price-block__price" v-if="price">{{ price }}</div>
        </template>
        <template v-else>
          <h3 v-if="showLabels">Цена</h3>
          <div class="price-block__price" v-if="price">{{ price }}</div>
        </template>
      </v-card-text>
      <v-spacer v-if="!center"></v-spacer>

      <slot></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: "price-block",
  props: {
    priceData: { type: Object },
    showLabels: { type: Boolean },
    center: { type: Boolean },
  },
  computed: {
    oldPrice() {
      return this.priceData.old
        ? `${this.priceData.old.toLocaleString()} ${this.priceData.currency}`
        : null;
    },
    price() {
      return this.priceData.value
        ? `${this.priceData.value.toLocaleString()} ${this.priceData.currency}`
        : null;
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/scss/colors.scss";
.price-block {
  display: flex;
  align-items: center;

  &__sold {
    font-weight: 700;
    font-size: 16px;
  }

  &__container {
    padding: 0 10px 0 0;

    &_center {
      text-align: center;
    }
  }

  &__price {
    font-weight: 700;
    font-size: 16px;

    &_marked {
      font-size: 20px;
    }
  }
  &__old-price {
    text-decoration-line: line-through;
    color: colors.$text-2;
    font-size: 14px;
  }
}
</style>
