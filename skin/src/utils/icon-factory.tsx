import React from "react";
import { InlineIcon } from "@iconify/react";

import heartOutline from "@iconify/icons-mdi/heart-outline";
import heartFilled from "@iconify/icons-mdi/heart";
import home from "@iconify/icons-mdi/home";

const defaultIconStyle: React.CSSProperties = {
  fontSize: "24px",
  verticalAlign: "middle",
};

export default function getIcon(
  name: string,
  iconStyle: React.CSSProperties = {}
): JSX.Element {
  const style = { ...defaultIconStyle, ...iconStyle };

  switch (name) {
    case "empty-heart":
      return <InlineIcon icon={heartOutline} style={style} />;
    case "filled-heart":
      return <InlineIcon icon={heartFilled} style={style} />;
    case "home":
      return <InlineIcon icon={home} style={style} />;
    default:
      throw new Error(`Icon ${name} not found.`);
  }
}
