import { deleteAsync } from "del";

import { path } from "../config/path.js";

export function clear() {
  return deleteAsync(path.clean);
}
