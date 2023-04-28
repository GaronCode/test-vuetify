<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Поиск по названию картины"
      v-model="input"
    />
    <button-block @click="changeStoreVal()">Найти</button-block>
  </div>
</template>

<script>
import ButtonBlock from "@/components/baseComponents/button.vue";
export default {
  name: "search-block",
  components: {
    ButtonBlock,
  },
  data: () => ({
    input: "",
    timerId: null,
  }),
  watch: {
    input() {
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => this.changeStoreVal(), 1000);
    },
  },
  methods: {
    changeStoreVal() {
      clearTimeout(this.timerId);
      this.$store.commit("setFilterString", this.input);
    },
  },
};
</script>
<style lang="scss" scoped>
@use "@/scss/colors.scss";

.search {
  display: flex;
  width: 416px;
  &__input {
    font-size: 14px;
    padding-left: 16px;
    flex-grow: 1;
    $border: 1px solid colors.$border-color;
    border-left: $border;
    border-top: $border;
    border-bottom: $border;
    min-width: 236px;

    &:focus {
      outline: none;
      border-color: colors.$border-dark;
    }
  }
}
</style>
