<template lang="">
  <div class="button">
    <a
      class="button__link"
      @click.preventDefault="bClick()"
      :class="{ button__link_active: active, button__link_disabled: disabled }"
      ><span
        :style="fontSize ? `font-size: ${fontSize}px` : ''"
        class="button__context"
        ><slot></slot></span
    ></a>
  </div>
</template>
<script>
export default {
  mame: "button-block",
  props: {
    href: { default: "#!" },
    disabled: { default: false },
    active: { default: false },
    fontSize: { default: 14 },
  },
  methods: {
    bClick() {
      if (this.disabled) return;
      this.$emit("click");
    },
  },
};
</script>
<style lang="scss">
@use "@/scss/colors.scss";

.button {
  flex-shrink: 0;
  height: 48px;
  width: 122px;

  &__link {
    background-color: colors.$normal;
    display: flex;
    width: 100%;
    height: 100%;
    color: colors.$text-color-light;
    font-weight: 700;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    &:hover {
      background-color: colors.$hover;
    }
    &_active {
      background-color: colors.$active;
    }
    &_disabled {
      background-color: colors.$disabled !important;
      opacity: 0.8;

      &:hover {
        background-color: none !important;
        cursor: default;
      }
    }
  }

  &__context {
    display: flex;
    align-items: center;
  }
}
</style>
