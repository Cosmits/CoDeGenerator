import { data } from "../data";
import { renderCombinations, renderStatusChecker } from "../renders";

export default function onSelectForm(event) {
  event.preventDefault();
  data.currentY = Number(event.target.value);
  renderCombinations(data.arrStr, data.currentY)
  renderStatusChecker();
}
