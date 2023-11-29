import React from "react";
import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";

import { Layout, Menu, theme, Button, Typography } from "antd";

import signOutUser from "@/firebase/auth/signout";

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const App = () => {
	return (
		<Layout
			style={{
				minHeight: "100vh",
			}}
		>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["4"]}
					items={[
						UserOutlined,
						VideoCameraOutlined,
						UploadOutlined,
						UserOutlined,
					].map((icon, index) => ({
						key: String(index + 1),
						icon: React.createElement(icon),
						label: `nav ${index + 1}`,
					}))}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "1rem",
					}}
				>
					<Title
						level={3}
						style={{ color: "white", margin: ".3rem", textAlign: "center" }}
					>
						NoBubble Project
					</Title>
					<Button type="primary" danger onClick={() => signOutUser()}>
						Sign Out
					</Button>
				</Header>
				<Content
					style={{
						margin: "24px 16px 0",
					}}
				>
					<div
						style={{
							padding: 24,
							minHeight: "100%",
						}}
					>
						content
					</div>
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					The NoBubble Project
					<Button type="link" href="https://github.com">
						Github
					</Button>
				</Footer>
			</Layout>
		</Layout>
	);
};
export default App;
