export const display = (typography = {}, colors = {},shadow={}) => {
  const getTypography = (typography = {}) => ({
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeight,
    fontSize: typography.fontSize,
    lineHeight: typography.lineHeight,
    letterSpacing: typography.letterSpacing,
  });

  const getColors = (colors = {}) => ({
    color: colors.color,
    backgroundColor: colors.backgroundColor,
  });
  const getShadow = (shadow={}) => ({
  boxShadow:shadow.boxShadow
    })
  return {
    ...getTypography(typography),
    ...getColors(colors),
    ...getShadow(shadow),
  };
};
