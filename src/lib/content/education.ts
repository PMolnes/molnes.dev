import type { Education } from '$lib/types';

export const educations: Education[] = [
	{
		title: 'Master in Computer Science',
		school: 'NTNU Trondheim',
		startDate: new Date('2023-08-01'),
		endDate: new Date('2025-05-20')
	},
	{
		title: 'Bachelor in Computer Science',
		school: 'NTNU Aalesund',
		startDate: new Date('2020-08-01'),
		endDate: new Date('2023-05-20')
	},
	{
		title: 'Preliminary Course for Engineering',
		school: 'NTNU Aalesund',
		startDate: new Date('2019-08-01'),
		endDate: new Date('2020-05-15')
	}
];
