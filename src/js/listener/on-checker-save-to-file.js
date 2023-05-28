import { data } from "../data";
import { renderStatusChecker } from "../renders";

export function onCheckerSaveToFile(event) {
  data.saveToFile = event.target.checked;
  renderStatusChecker();
}
