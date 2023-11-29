"use client";
import "./globals.css";

import { ConfigProvider, theme } from "antd";
import { AuthContextProvider } from "@/context/AuthContext";

// import theme from "../lib/theme";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head />
			<body
				style={{
					minHeight: "100vh",
				}}
			>
				<ConfigProvider theme={theme.darkAlgorithm}>
					<AuthContextProvider>{children}</AuthContextProvider>
				</ConfigProvider>
			</body>
		</html>
	);
}
