import { data } from "../data";
import { renderStatusChecker } from "../renders";

export default function onCombinationForm(event) {
  event.preventDefault();
  data.currentN = Number(event.target.value);
  renderStatusChecker();
}
