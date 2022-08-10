import Reference from "./ixo-components/Reference";
import CodeSignature from "./ixo-components/CodeSignature";
import JsonTreeView from "./ixo-components/JsonTreeView";
import Param from "./ixo-components/Param";
import TypeDesc from "./ixo-components/TypeDesc";
import BoxField from "./ixo-components/BoxField";
import ParamsList from "./ixo-components/ParamsList";
import DarkModeSwitch from "./ixo-components/DarkModeSwitch";

export default ({ Vue }) => {
  Vue.component("Reference", Reference);
  Vue.component("CodeSignature", CodeSignature);
  Vue.component("JsonTreeView", JsonTreeView);
  Vue.component("Parameter", Param);
  Vue.component("ParamsList", ParamsList);
  Vue.component("TypeDesc", TypeDesc);
  Vue.component("BoxField", BoxField);
  Vue.component("DarkModeSwitch", DarkModeSwitch);

};
