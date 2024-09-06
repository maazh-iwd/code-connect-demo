import Button from "./Button";
import figma from "@figma/code-connect";

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/SaJdIw4MWZrkKUeWAmrayD/FLUX-Components?node-id=1120-1120&m=dev",
  {
    props: {
      type: figma.enum("Type", {
        Primary: "primary",
        Secondary: "secondary",
        Overlay: "overlay",
      }),
      isSmall: figma.boolean("Is Small Button"),
    },
    example: (props) => <Button type={props.type} isSmall={props.isSmall} />,
  }
);
