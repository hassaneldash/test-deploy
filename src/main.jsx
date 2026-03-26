import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ThemeProvider } from './components/theme-provider';
import App from './App';
import MainLayout from './layouts/MainLayout';
import NotFound404 from './pages/NotFound404';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <MainLayout />,
			children: [
				// Root Route
				{
					index: true,
					element: <App />,
				},
				{
					path: '/users/',
					element: <UsersPage />,
				},
				// Dynamic route
				{
					path: '/users/:id',
					element: <UserPage />,
				},
			],
		},

		// Wildcard Route 404
		{
			path: '*', // Wildcard Route 404: match all unknown urls
			element: <NotFound404 />,
		},
	],
	{
		basename: '/test-deploy', // must match your repo name
	},
);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>,
);
