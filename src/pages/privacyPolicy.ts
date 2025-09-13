import { html } from "hono/html";
import PrivacyPolicyHeader from "../components/privacy-policy/privacyPolicyHeader";
import PrivacyPolicyInfo from "../components/privacy-policy/privacyPolicyInfo";

const PrivacyPolicy = () =>
  html` ${PrivacyPolicyHeader()} ${PrivacyPolicyInfo()}`;

export default PrivacyPolicy;
PrivacyPolicyInfo;
