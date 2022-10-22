import React, { useEffect } from "react";
import { useContext } from "react";
import AppContext from "./context";

function Footer() {
  const { onClickCheckAnswers, over, points } = useContext(AppContext);

export default Footer;
