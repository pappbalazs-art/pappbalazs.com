import { createContext, useContext, useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

import { auth, database } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			setUser(user);
			setIsAuthenticated(!!user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	return (
		!loading && (
			<AuthContext.Provider value={{ user, isAuthenticated }}>
				{children}
			</AuthContext.Provider>
		)
	);
};

export const useAuth = () => useContext(AuthContext);
