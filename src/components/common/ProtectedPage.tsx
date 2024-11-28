import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hook/hook";

interface ProtectedPageProps {
	children: React.ReactNode;
}

const ProtectedPage: FC<ProtectedPageProps> = ({ children }) => {
	const navigate = useNavigate();
	const { user } = useAppSelector((state) => state.user);

	useEffect(() => {
		if (!user) {
			navigate("/login");
		}
	}, [user,navigate]);

	return (
		<>
			{user ? children : null}
		</>
	);
};

export default ProtectedPage;
