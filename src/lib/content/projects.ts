import type { Project } from '../types';

export const projects: Project[] = [
	{
		name: 'Voice Pluck',
		description:
			'Warehouse Management System and iOS app with a voice interface for stacking products.',
		slug: 'voice-pluck',
		about:
			'Voice Pluck is the project me and three students created for our Bachelor Thesis at NTNU. Solwr specializes in logistics, and provides a voice recognition system to warehouses, which helps them load orders more efficiently. The existing system worked, however, not optimally. It only used a voice-interface, and some tasks in a warehouse are inherently less efficiently solved without a touch-interface. Additionally, Solwr used an expensive third-party software to handle the voice recognition.\nTherefore, Solwr tasked us with creating a mobile application which handled the voice-recognition without the need of a paid library, and with the addition of a touch-interface. We also created a REST API which acts as a Warehouse Management System. The WMS supports adding, removing, and updating products, orders, and users. Last but not least, we researched a way to implement a smart watch application with voice recognition.',
		challenges:
			'From project description to technical features, the project served the team with several challenges. The initial project description was somewhat vague. So the first challenge of the project was to understand the useßr requirements and needs. To solve this, the whole team worked a day in a warehouse, to understand the workflow of the end-users.\nSpeech recognition brought a series of challenges into our project. The warehouse being a loud environment, parsing the input, user privacy, internet connectivity, the list goes on. We solved this using <a class="underline" target="_blank" href="https://developer.apple.com/documentation/speech/sfspeechrecognizer">Apple\'s SFSpeechRecognition</a> library.\nWe also quickly understood that the end-user had to be able to use the voice-interface and touch-interface seamlessly. There are several steps in the process of preparing an order for transportation. For the user to be able to switch between interfaces seamlessly, we needed a way to keep track of the current step in the plucking-process. We solved this by using a PluckService, that keeps track of the current step, and exposes a doAction method. This method was executed whenever a keyword were recognized, or the user pressed specific buttons in the app.\nCreating the REST API was no easy task either. There are complex relations between entities in a warehouse environment. Rigorous testing made it easier to implement all of these entities correctly. I encourage you to read more about the challenges of our project in our report.',
		results:
			'Our project had a wide scope, and many possibilites. The finished product consisted of a iOS app featuring authentication, speech recognition, text-to-speech, a WMS REST API, and a implementation plan for a WatchOS app with voice-recognition. Most importantly, the team learned a lot from this project. Ranging from iOS development with Swift, Spring Boot REST API development, authentication with Keycloak, testing, and non-technical skills such as agile development and researching user requirements. As the team leader, I also learned a lot about managing Jira, and addressing timeline issues with the team.',
		myRoles: ['Team Leader', 'Full Stack Developer'],
		client: 'Solwr Software',
		features: [
			'User Authentication',
			'Speech Recognition',
			'Text to Speech',
			'Touch Interface',
			'Warehouse Management'
		],
		links: [
			{
				href: 'https://ntnuopen.ntnu.no/ntnu-xmlui/handle/11250/3076971',
				title: 'Thesis'
			},
			{
				href: 'https://youtu.be/ldt2QxZ4jbU',
				title: 'YouTube Video'
			},
			{
				href: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-frontend',
				title: 'iOS App Repository'
			},
			{
				href: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-backend',
				title: 'REST API Repository'
			},
			{
				href: 'https://gitlab.com/IDATA-2900-Group-1/voice-pick-iac',
				title: 'IaC Repository'
			}
		],
		technologies: ['Swift', 'Spring Boot', 'Keycloak', 'Terraform', 'GitLab']
	},
	{
		name: 'petterinit',
		description: 'Automate setup for TailwindCSS in React, Vue, and SvelteKit.',
		slug: 'petterinit',
		about:
			'At one point I found myself repeating the same steps to setup TailwindCSS for my new projects. Browsing to the setup guide, installing dependencies, copy pasting configuration files, etc.\nSince I often created small projects to test an idea, I decided to automate these dull steps. petter-init is a CLI tool you can install from <a target="_blank" href="https://www.npmjs.com/package/petter-init">npmjs.com</a>. The tool lets you choose either React, Vue, or SvelteKit, scaffolds a new project with your selected options, and completely configures TailWindCSS for your project. You can instantly start typing out TailwindCSS-classes instead having to manually setup it up first.\n For a detailed explanation on how it works, you can visit the docs for this project.',
		challenges: '',
		results: '',
		myRoles: ['Solo Developer'],
		features: [
			'Automatic TailwindCSS Project Scaffolding',
			'Available on NPM',
			'npm, yarn, and pnpm support'
		],
		technologies: ['JavaScript', 'npm', 'GitHub', 'VitePress', 'Netlify']
	},
	{
		name: 'SolwrSolwr',
		description:
			'A tile-puzzle game to compete with colleagues to get the fastest time or least moves to solve.',
		about: '',
		challenges: '',
		results: '',
		slug: 'solwrsolwr',
		myRoles: ['Solo Developer'],
		features: ['Saving Highscores', 'Live update with Firebase WebSockets'],
		technologies: ['Vue', 'TypeScript', 'Firebase', 'GitHub', 'Netlify']
	},
	{
		name: 'Trails',
		description:
			'A social media mobile applications for Android and iOS to share and rate hikes around the globe.',
		slug: 'trails',
		about: '',
		challenges: '',
		results: '',
		myRoles: ['Team Leader', 'Developer'],
		features: [
			'Rate Hikes',
			'Post/Modify/Delete Hikes',
			'Social Feed',
			'Following people',
			'User Authentication'
		],
		technologies: ['Flutter', 'Firebase', 'Google Maps API', 'GitHub']
	}
];
