import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/providers/auth-provider";

const withAuth = (WrappedComponent) => {
	const ComponentWithAuth = (props) => {
		const { user } = useAuth();
		const router = useRouter();

		useEffect(() => {
			if (!user) {
				router.replace("/admin/sign-in");
			}
		}, [user, router]);

		if (!user) {
			return null;
		}

		return <WrappedComponent {...props} />;
	};

	ComponentWithAuth.displayName = `withAuth(${
		WrappedComponent.displayName || WrappedComponent.name || "Component"
	})`;

	return ComponentWithAuth;
};

export default withAuth;
