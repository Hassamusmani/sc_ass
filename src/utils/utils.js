export const scrollToSelectedCategory = (allMeals, scrollableDivRef) => {
  const selectedCategory = allMeals.find((category) => category.isSelected);

  if (selectedCategory && scrollableDivRef.current) {
    const elementHeight = document.getElementById(
      `cat_${selectedCategory.id}`
    ).offsetHeight;
    const targetPosition =
      Number(selectedCategory.id) * elementHeight +
      Number(selectedCategory.id) * 76;

    scrollableDivRef.current.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  }
};
