import type {
  TagShapeTheme,
  TagSizeTheme,
  TagTypeTheme,
  TagVariantTheme,
} from "./types";
import { sprinkles } from "./style.css";

function createTagStyle(
  typeTheme: TagTypeTheme,
  variantTheme: TagVariantTheme,
  shapeTheme: TagShapeTheme,
  sizeTheme: TagSizeTheme
) {
  return sprinkles({
    backgroundColor: `${variantTheme}-${typeTheme}`,
    boxShadow: `${variantTheme}-${typeTheme}`,
    color: variantTheme,
    borderRadius: shapeTheme,
    padding: sizeTheme,
    fontStyle: sizeTheme,
  });
}
export default createTagStyle;
