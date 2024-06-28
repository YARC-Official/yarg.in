export const parseClassName = (classes: Array<string>) =>
  classes.filter(Boolean).join(" ");
