import React from "react";
import Dropdown from "./Dropdown";
import figma from "@figma/code-connect";

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Dropdown,
  "https://www.figma.com/design/SaJdIw4MWZrkKUeWAmrayD/FLUX-Components?node-id=1119-1152&m=dev",
  {
    props: {
      fieldErrorMessage: figma.enum("Type", {
        Error: figma.string("✏️  Field error message"),
        Default: undefined,
      }),
      fieldLabel: figma.string("✏️  Field label"),
      type: figma.enum("Type", {
        Default: "default",
        "Default With Icon": "default-with-icon",
        Disabled: "disabled",
        Active: "active",
        Expanded: "expanded",
        "Expanded With Icon": "expanded-with-icon",
        Error: "error",
      }),
    },
    example: (props) => (
      <Dropdown
        type={props.type}
        label={props.fieldLabel}
        error={props.fieldErrorMessage}
      />
    ),
  }
);
