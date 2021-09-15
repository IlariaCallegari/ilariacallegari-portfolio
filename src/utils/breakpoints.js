const sizes = {
  up(size) {},
  down(size) {
    const sizes = {
      tablet: "768px",
      mobileL: "430px",
      mobileM: "375px",
      mobileS: "320px",
    };
    return `@media(max-width: ${sizes[size]})`;
  },
};

export default sizes;