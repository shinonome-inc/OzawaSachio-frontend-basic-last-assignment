import "../src/components/utilities.scss";

const customViewports = {
  small: {
    name: "small",
    styles: {
      width: "600px",
      height: "100%",
    },
  },
  medium: {
    name: "medium",
    styles: {
      width: "800px",
      height: "100%",
    },
  },
  large: {
    name: "large",
    styles: {
      width: "1050px",
      height: "100%",
    },
  },
  extraLarge: {
    name: "extraLarge",
    styles: {
      width: "1250px",
      height: "100%",
    },
  },
};

export const parameters = {
  viewport: { viewports: customViewports },
};
