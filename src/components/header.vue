<template>
  <header class="header">
    <div class="wrapper">
      <nav class="navigation">
        <ul class="navigation__items">
          <li v-for="(item, i) in menu" :key="i" class="navigation__item">
            <a :href="item.href" class="navigation__link">{{ item.tag }}</a>
          </li>
        </ul>
      </nav>
      <search-block />
    </div>
  </header>
</template>

<script>
import SearchBlock from "@/components/baseComponents/search.vue";
export default {
  name: "header-vue",
  components: {
    SearchBlock,
  },

  data: () => ({
    menu: [
      { tag: "Каталог", href: "" },
      { tag: "Доставка", href: "" },
      { tag: "Оплата", href: "" },
      { tag: "Контакты", href: "" },
      { tag: "О компании", href: "" },
    ],
  }),
};
</script>
<style lang="scss" scoped>
@use "@/scss/colors.scss";
.header {
  border-bottom: 1px solid colors.$border-color;
  height: 98px;
  .wrapper {
    display: flex;
    align-items: center;
    height: inherit;
  }
}
.navigation {
  font-weight: 400;
  font-size: 14px;
  flex-grow: 1;
  margin-left: 96px;
  margin-right: 48px;

  &__items {
    display: flex;
    gap: 48px;
  }

  &__link {
    color: inherit;
    white-space: nowrap;
  }
}

@media (max-width: 585px) {
  .navigation__items {
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }

  .search {
    width: auto;
  }
}

@media (max-width: 1080px) {
  .header .wrapper {
    flex-direction: column;
    gap: 20px;
  }
  .header {
    padding-bottom: 20px;
    padding-top: 20px;
    height: auto;
  }

  .navigation {
    margin: 0;
  }
}

@media (max-width: 1249px) {
  .header {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
