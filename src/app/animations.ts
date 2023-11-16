import { useSpring } from "react-spring";

export const layout = {
  header: {
    max: "70vh",
    min: "25vh",
    opacity: {
      min: 0.2,
      max: 0.9,
    },
  },
  body: {
    min: "30vh",
    max: "75vh",
  },
  content: {
    opacity: {
      min: 0,
      max: 1,
    },
  },
  friction: 15,
};


export const Header = (open: boolean) =>
  useSpring({
    config: { friction: layout.friction },
    height: open ? layout.header.min : layout.header.max,
    opacity: open ? layout.header.opacity.min : layout.header.opacity.max,
  });

export const Body = (open: boolean) =>
  useSpring({
    config: { friction: layout.friction },
    height: open ? layout.body.max : layout.body.min,
  });

export const Content = (open: boolean) =>
  useSpring({
    config: { friction: layout.friction },
    opacity: open ? layout.content.opacity.max : layout.content.opacity.min,
  });

  export const MovieTitle = (open: boolean) =>
  useSpring({
    config: { friction: layout.friction },
    fontSize: open ? '30px' : '40px'
  });
