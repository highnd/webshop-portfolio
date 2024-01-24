//
export const topToBottomVariant = {
  open: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const circleVariant = {
  open: {
    clipPath: "circle(1200px at 100% 0)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};
