"use client";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

import { DatePicker } from "antd";

function Page() {
	const { user } = useAuthContext();
	const router = useRouter();

	React.useEffect(() => {
		if (user == null) router.push("/");
	}, [user]);

	return <DatePicker />;
}

export default Page;
