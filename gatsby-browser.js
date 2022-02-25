import React from "react";
import { AnimatePresence } from "framer-motion";

import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

export const wrapPageElement = ({ element }) => (
	<AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);
