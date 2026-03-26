import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// Lucide icons for spinner, error, and new metadata rows
import {
	Loader2,
	AlertCircle,
	Mail,
	Hash,
	CalendarDays,
	ShieldAlert,
} from 'lucide-react';

// Shadcn UI Components
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton'; // NEW: Import Skeleton

const UserPage = () => {
	const { id } = useParams();

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		(async function fetchUser() {
			try {
				setLoading(true);
				const response = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`);
				setUser(response.data);
			} catch (error) {
				console.error('Error fetching', error);
				// Extract a readable error message
				setError(error.message || 'Failed to fetch user data');
			} finally {
				setLoading(false);
			}
		})();
	}, [id]);

	// 1. Loading State using a Lucide spinner with Tailwind's animate-spin
	// if (loading) {
	// 	return (
	// 		<div className='flex items-center justify-center min-h-100'>
	// 			<Loader2 className='w-10 h-10 animate-spin text-primary' />
	// 		</div>
	// 	);
	// }
	if (loading) {
		return (
			<div className='max-w-md mx-auto mt-10 p-4'>
				<Card className='shadow-lg border-muted'>
					<CardHeader className='flex flex-row items-center gap-5 pb-4'>
						{/* Avatar Skeleton */}
						<Skeleton className='w-20 h-20 rounded-full' />
						<div className='flex flex-col gap-2'>
							{/* Name Skeleton */}
							<Skeleton className='h-8 w-48' />
							{/* Badge Skeleton */}
							<Skeleton className='h-6 w-16 rounded-full' />
						</div>
					</CardHeader>

					<Separator className='mb-4' />

					<CardContent className='space-y-4'>
						{/* 4 Rows of Data Skeletons to match our 4 data points */}
						<Skeleton className='h-5 w-full' />
						<Skeleton className='h-5 w-3/4' />
						<Skeleton className='h-5 w-5/6' />
						<Skeleton className='h-5 w-2/3' />
					</CardContent>

					<CardFooter className='flex justify-end gap-3 pt-4 bg-muted/30 rounded-b-xl border-t'>
						{/* Button Skeletons */}
						<Skeleton className='h-9 w-24 rounded-md' />
						<Skeleton className='h-9 w-28 rounded-md' />
					</CardFooter>
				</Card>
			</div>
		);
	}

	// 2. Error State using Shadcn's Destructive Alert
	if (error) {
		return (
			<div className='max-w-md mx-auto mt-10 p-4'>
				<Alert variant='destructive'>
					<AlertCircle className='h-4 w-4' />
					<AlertTitle>Error</AlertTitle>
					<AlertDescription>{error}</AlertDescription>
				</Alert>
			</div>
		);
	}

	// Return nothing if we don't have user data yet (failsafe)
	if (!user) return null;

	// Format the date returned by the API
	const formattedDate = new Date(user.creationAt).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	// 3. Data State using a Shadcn Card to present the profile
	return (
		<div className='max-w-md mx-auto mt-2 p-4'>
			<Card className='shadow-lg border-muted'>
				{/* Header: Avatar, Name, and Role Badge */}
				<CardHeader className='flex flex-row items-center gap-5 pb-4'>
					<Avatar className='w-20 h-20 border-2 border-primary/10'>
						<AvatarImage src={user.avatar} alt={user.name} />
						<AvatarFallback className='text-xl bg-primary/10 text-primary'>
							{user.name?.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div className='flex flex-col gap-1.5'>
						<CardTitle className='text-2xl font-bold'>{user.name}</CardTitle>
						<div>
							{/* Change badge color based on role */}
							<Badge
								variant={user.role === 'admin' ? 'default' : 'secondary'}
								className='capitalize'>
								{user.role}
							</Badge>
						</div>
					</div>
				</CardHeader>

				<Separator className='mb-4' />

				{/* Content: Detailed Info with Icons */}
				<CardContent className='space-y-4'>
					<div className='flex items-center gap-3 text-sm'>
						<Mail className='w-4 h-4 text-muted-foreground' />
						<span className='font-medium text-muted-foreground w-20'>Email:</span>
						<span className='truncate'>{user.email}</span>
					</div>

					<div className='flex items-center gap-3 text-sm'>
						<Hash className='w-4 h-4 text-muted-foreground' />
						<span className='font-medium text-muted-foreground w-20'>User ID:</span>
						<span>{user.id}</span>
					</div>

					<div className='flex items-center gap-3 text-sm'>
						<CalendarDays className='w-4 h-4 text-muted-foreground' />
						<span className='font-medium text-muted-foreground w-20'>Joined:</span>
						<span>{formattedDate}</span>
					</div>

					{user.password && (
						<div className='flex items-center gap-3 text-sm'>
							<ShieldAlert className='w-4 h-4 text-destructive' />
							<span className='font-medium text-muted-foreground w-20'>Security:</span>
							<span className='text-destructive font-medium'>Password set</span>
						</div>
					)}
				</CardContent>

				{/* Footer: Action Buttons */}
				<CardFooter className='flex justify-end gap-3 pt-4 bg-muted/30 rounded-b-xl border-t'>
					<Button variant='outline' size='sm'>
						Edit Profile
					</Button>
					<Button size='sm'>Contact User</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default UserPage;
