import React from "react";
import Error from "../components/Error";

function NoPermission({ message = "" }) {
  return <Error message={"您好，您尚未开通此功能模块权限，请联系管理员开通！ (｡・`ω´･)"} />;
}

NoPermission.propTypes = {};

export default NoPermission; 






