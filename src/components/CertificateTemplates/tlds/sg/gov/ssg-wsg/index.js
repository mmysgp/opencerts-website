import dynamic from "template-utils/dynamic";
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

const FQ001 = dynamic(() =>
  import("./FQ-001" /* webpackChunkName: "SSGTemplates" */)
);

const SOA001 = dynamic(() =>
  import("./SOA-001" /* webpackChunkName: "SSGTemplates" */)
);

const Transcript = dynamic(() =>
  import("./Trans" /* webpackChunkName: "SSGTemplates" */)
);

const templates = {
  "FQ-001": FQ001,
  "SOA-001": SOA001,
  Trans: Transcript
};

export default addDirToTemplatePath("ssg-wsg", templates);
