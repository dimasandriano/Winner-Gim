import { createBrowserRouter } from "react-router-dom";
import { Home, Profile, Setting } from "../views";
import RootLayout from "../layout/RootLayout";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/setting",
				element: <Setting />,
			},
		],
	},
]);
