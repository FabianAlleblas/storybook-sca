import "./header.css";

import normalHeader from "./header.html";
import twoRowHeader from "./header-subheading.html";

export default { title: "Header" };

export const header = () => normalHeader;
export const headerWithSubheading = () => twoRowHeader;