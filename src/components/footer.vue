<template>
  <footer class="footer">
    <div class="wrapper">
      <nav class="navigation">
        <ul class="navigation__items">
          <li v-for="(item, i) in menu" :key="i" class="navigation__item">
            <a :href="item.href" class="navigation__link">{{ item.tag }}</a>
          </li>
        </ul>
      </nav>
      <div class="contacts">
        <div class="contacts__tel">
          <img src="@/assets/icons/phone.svg" alt="phone" />
          <div>+7 (812) 555-55-55</div>
        </div>
        <div class="contacts__adress">
          <img src="@/assets/icons/map.svg" alt="" srcset="" />г.
          <div>Санкт-Петербург, ул. Ефимова, 3</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",

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
.footer {
  height: 96px;
  background-color: colors.$bg-grey;
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

  &__items {
    display: flex;
    gap: 48px;
  }

  &__link {
    color: inherit;
    white-space: nowrap;
  }
}

.contacts {
  display: flex;
  font-size: 14px;

  &__tel,
  &__adress {
    margin-right: 75px;
    display: flex;

    img {
      margin-right: 8px;
    }
    div {
      height: 21px;
      white-space: nowrap;
      flex-shrink: 0;
    }
  }

  &__adress {
    white-space: nowrap;
    flex-shrink: 0;
  }
}
@media (max-width: 560px) {
  .footer {
    height: unset;
  }

  .navigation {
    display: none;
  }
  .contacts {
    margin: 20px;
  }
}

@media (max-width: 880px) {
  .footer .wrapper {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0 !important;
  }
  .navigation {
    flex-grow: unset;
  }

  .contacts {
    justify-content: center;
    flex-wrap: nowrap;
  }
}

@media (min-width: 881px) and (max-width: 1080px) {
  .contacts {
    flex-wrap: wrap;
  }
}

@media (max-width: 1249px) {
  .footer {
    padding-left: 20px;
    padding-right: 20px;

    .wrapper {
      gap: 20px;
    }

    .contacts {
      width: min-content;
    }
  }

  .contacts {
    gap: 20px;

    &__tel {
      margin: 0;
    }
    &__adress {
      margin: 0;
    }
  }
}
</style>
