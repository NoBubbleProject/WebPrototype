"use client";

import React, { useState } from "react";

import { useAuthContext } from "@/context/AuthContext";

import DefaultLanding from "@/components/DefaultLanding";
import SignedInLanding from "@/components/SignedInLanding";

const App = () => {
	const { user } = useAuthContext();

	if (user == null) {
		return <DefaultLanding />;
	} else {
		return <SignedInLanding />;
	}
};
export default App;
