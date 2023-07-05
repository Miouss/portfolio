export const propsFilter = (...props: PropertyKey[]) => ({
  shouldForwardProp: (prop: PropertyKey) => !props.includes(prop),
});

export const fontSizeResponsive = propsFilter("fsresp");