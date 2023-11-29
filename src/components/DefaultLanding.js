import React from "react";
import { Layout, Button, Typography } from "antd";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;

const DefaultLanding = () => {
	return (
		<div>
			<Layout
				style={{
					minHeight: "100vh",
					backgroundColor: "#001628",
					color: "white",
				}}
			>
				<Content
					style={{
						margin: "24px 16px",
						height: "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Title style={{ color: "white", fontSize: "3em" }}>
						Welcome to NoBubble Project
					</Title>
					<Button
						type="primary"
						href="/signin"
						size="large"
						style={{ margin: "1em" }}
					>
						Sign In
					</Button>
					<Button
						type="default"
						href="/signup"
						size="large"
						style={{ margin: "1em" }}
					>
						Sign Up
					</Button>
				</Content>
				<Footer
					style={{
						textAlign: "center",
						backgroundColor: "#001628",
						color: "white",
					}}
				>
					The NoBubble Project
				</Footer>
			</Layout>
		</div>
	);
};

export default DefaultLanding;
