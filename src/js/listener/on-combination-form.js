import { data } from "../data";

export default function onCombinationForm(event) {
  event.preventDefault();
  data.currentN = Number(event.target.value);
}
