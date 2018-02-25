import React from "react";
import Error from "../components/Error";

function PageNotFound({message = ""}) {
  return <Error message={"页面即将上线，客官请耐心等待哦！ (｡・`ω´･)"}/>;
}

PageNotFound.propTypes = {};

export default PageNotFound;
