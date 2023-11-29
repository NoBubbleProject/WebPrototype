"use client";
import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

const { Title } = Typography;

function Page() {
	const [form] = Form.useForm();
	const router = useRouter();

	const handleForm = async (values) => {
		const { email, password } = values;

		const { result, error } = await signIn(email, password);

		if (error) {
			alert(error.message);
			return;
		}

		// else successful
		console.log(result);
		return router.push("/");
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				color: "white",
				backgroundColor: "#001628",
			}}
		>
			<Title
				level={1}
				style={{ color: "white", margin: "3rem 0", textAlign: "center" }}
			>
				The No Bubble Project
			</Title>
			<Card
				style={{
					width: 300,
					marginBottom: "20px",
					boxShadow: "0px 0px 100px 5px #1677ff",
				}}
			>
				<Form form={form} onFinish={handleForm} className="form">
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
								type: "email",
							},
						]}
					>
						<Input placeholder="Email" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password placeholder="Password" />
					</Form.Item>
				</Form>
			</Card>
			<Button type="primary" htmlType="submit" onClick={() => form.submit()}>
				Sign In
			</Button>
		</div>
	);
}

export default Page;
