import { useSpring } from "react-spring";
import { layout } from "./layout-spring";

export const Header = (open) =>
  useSpring({
    config: { friction: layout.friction },
    height: open ? layout.header.min : layout.header.max,
    opacity: open ? layout.header.opacity.min : layout.header.opacity.max,
  });

export const Body = (open) =>
  useSpring({
    config: { friction: layout.friction },
    height: open ? layout.body.max : layout.body.min,
  });

export const Content = (open) =>
  useSpring({
    config: { friction: layout.friction },
    opacity: open ? layout.content.opacity.max : layout.content.opacity.min,
  });
