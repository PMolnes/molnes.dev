import type { Project } from '../types';

export const projects: Project[] = [
	{
		name: 'Simple Java Deobfuscator',
		description:
			'A source code deobfuscation tool for Java, developed as part of my Master Thesis at NTNU.',
		slug: 'simple-java-deobfuscator',
		about:
			'Simple Java Deobfuscator is the tool I created as part of my Master Thesis in Computer Science at NTNU Trondheim. The thesis explores techniques for deobfuscating Java source code, focusing on static analysis approaches to reverse common obfuscation patterns.\nThe tool processes Java source files using abstract syntax tree (AST) analysis to identify and simplify obfuscated code constructs. It evaluates constant string expressions, resolves variable references, and simplifies StringBuilder and StringBuffer chains back into readable string literals. By walking the AST and maintaining scope-aware variable tracking, the tool can resolve string values across method and block boundaries.',
		challenges:
			'One of the main challenges was handling the variety of obfuscation techniques that can be applied to Java source code. String obfuscation alone can take many forms: concatenation of fragments, use of StringBuilder or StringBuffer chains, variable indirection, and method call chains. Each of these patterns required specific handling in the AST visitor.\nAnother significant challenge was maintaining correct scope tracking. Variables can be declared at different levels — globally, within methods, or within nested blocks — and a deobfuscator must resolve references in the correct scope to avoid incorrect transformations. I solved this using a scope stack, where each new method or block pushes a new scope, and variable lookups traverse the stack from innermost to outermost scope.\nHandling circular references was also a concern. If variable A references variable B, which in turn references A, the evaluator could enter an infinite loop. I addressed this by tracking which variables are currently being resolved and breaking the cycle when a circular reference is detected.',
		results:
			'The finished tool is a command-line Java application that takes an input directory of obfuscated Java source files and produces a deobfuscated output directory. It successfully handles constant string evaluation, StringBuilder and StringBuffer chain simplification, method call evaluation for common String methods such as substring, toUpperCase, toLowerCase, trim, replace, and concat.\nThrough this project, I deepened my understanding of static program analysis, compiler design concepts such as AST traversal and visitor patterns, and the security implications of code obfuscation. The thesis provided valuable insight into both the offensive and defensive aspects of software protection.',
		myRoles: ['Solo Developer'],
		features: [
			'Constant String Evaluation',
			'StringBuilder/StringBuffer Simplification',
			'Scope-Aware Variable Tracking',
			'Circular Reference Detection',
			'String Method Evaluation',
			'Batch File Processing'
		],
		links: [
			{
				href: 'https://nva.sikt.no/registration/019a0aba340e-dece8044-9391-4821-9232-44f6e94ba0a6',
				title: 'Thesis'
			},
			{
				href: 'https://github.com/PMolnes/simple-java-deobfuscator',
				title: 'Repository'
			}
		],
		technologies: ['Java', 'JavaParser', 'Maven', 'GitHub']
	},
	{
		name: 'Voice Pluck',
		description:
			'Warehouse Management System and iOS app with a voice interface for stacking products.',
		slug: 'voice-pluck',
		about:
			'Voice Pluck is the project me and three students created for our Bachelor Thesis at NTNU. Solwr specializes in logistics, and provides a voice recognition system to warehouses, which helps them load orders more efficiently. The existing system worked, however, not optimally. It only used a voice-interface, and some tasks in a warehouse are inherently less efficiently solved without a touch-interface. Additionally, Solwr used an expensive third-party software to handle the voice recognition.\nTherefore, Solwr tasked us with creating a mobile application which handled the voice-recognition without the need of a paid library, and with the addition of a touch-interface. We also created a REST API which acts as a Warehouse Management System. The WMS supports adding, removing, and updating products, orders, and users. Last but not least, we researched a way to implement a smart watch application with voice recognition.',
		challenges:
			'From project description to technical features, the project served the team with several challenges. The initial project description was somewhat vague. So the first challenge of the project was to understand the user requirements and needs. To solve this, the whole team worked a day in a warehouse, to understand the workflow of the end-users.\nSpeech recognition brought a series of challenges into our project. The warehouse being a loud environment, parsing the input, user privacy, internet connectivity, the list goes on. We solved this using <a class="underline" target="_blank" href="https://developer.apple.com/documentation/speech/sfspeechrecognizer">Apple\'s SFSpeechRecognition</a> library.\nWe also quickly understood that the end-user had to be able to use the voice-interface and touch-interface seamlessly. There are several steps in the process of preparing an order for transportation. For the user to be able to switch between interfaces seamlessly, we needed a way to keep track of the current step in the plucking-process. We solved this by using a PluckService, that keeps track of the current step, and exposes a doAction method. This method was executed whenever a keyword were recognized, or the user pressed specific buttons in the app.\nCreating the REST API was no easy task either. There are complex relations between entities in a warehouse environment. Rigorous testing made it easier to implement all of these entities correctly. I encourage you to read more about the challenges of our project in our report.',
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
		challenges:
			'Before I wrote the code I found it difficult to gauge the size of this project. Initially, I thought this would be a small one-file script, and therefore choose to use JavaScript. In retrospect, I should have chosen TypeScript for this project. When I came back to this project to fix a bug, or update the templates, I found myself lost, despite the detailed documentation. The development experience with JavaScript compared to TypeScript is just horrible. Additionally, using TypeScript would make it easier if other developers wanted to work on the project. Migrating to TypeScript would be beneficially, however I never got around to doing it.\n Another challenge was testing. To ensure the scaffolding of projects worked properly, I relied on tests. The tests scaffold a project for each framework I support, and check that the proper files are created within the new project. These tests are helpful, but they do take a while to complete. However, these tests only ensures that the files are created. This does not mean that Tailwind is working correctly. I realized that I have to make tests that the application can run, and Tailwind classes are working properly.',
		results:
			'The result of this project spans a CLI tool available as a global npm package, and a docs website made with Vitepress. I learned how to publish packages to npm, and enhanced my testing skills. The tool have saved me a lot of time setting up TailwindCSS, and I will continue to update the project. Despite the challenges mentioned, I am thoroughly satisified with the result.',
		myRoles: ['Solo Developer'],
		features: [
			'Automatic TailwindCSS Project Scaffolding',
			'Available on NPM',
			'npm, yarn, and pnpm support'
		],
		technologies: ['JavaScript', 'npm', 'GitHub', 'VitePress', 'Netlify'],
		links: [
			{
				title: 'Documentation',
				href: 'https://petter-init.molnes.dev/'
			},
			{
				title: 'Package',
				href: 'https://www.npmjs.com/package/petter-init'
			},
			{
				title: 'Repository',
				href: 'https://github.com/PMolnes/petter-init'
			}
		]
	},
	{
		name: 'SolwrSolwr',
		description:
			'A tile-puzzle game to compete with colleagues to get the fastest time or least moves to solve.',
		about:
			'SolwrSolwr is a tile-puzzle game where the objective is to solve the puzzle, which shows the logo of the company, Solwr. I initially created this project when I started learning React. However, as I learned new technologies, I started recreating the project. Once when I learned Vue, a second time when I learned TypeScript, and a third time when I learned TailwindCSS. Thus, this project has become my boilerplate app to test out a new technology. At the moment, it consists of a Vue w/ TypeScript & Tailwind front-end, and a Firebase back-end. Firebase websockets gives live-updates to the leaderboards whenever someone sets a new highscore.',
		challenges:
			"This project was challenging to me, as it was one of my first real web-apps. I' say the biggest challenge was me restarting the project over and over again. Whenever I wanted to use a new technology I'd restart the whole project. This caused a lot of double work, I found myself not learning anything new other than basics in new technologies, and not really getting challenged.",
		results:
			"Despite it not being my proudest project, I am happy with the results. It's a cool project that was fun to make. The end-result is a hosted Vue.js app, Firebase backend, and Firebase websockets to include live updates of highscores. I also received feedback from my colleagues that it was a nice initiative. It would be cool to add authentication integrated with Azure Directory so that only employees in Solwr could save highscores.",
		slug: 'solwrsolwr',
		myRoles: ['Solo Developer'],
		features: ['Saving Highscores', 'Live update with Firebase WebSockets'],
		technologies: ['Vue', 'TypeScript', 'Firebase', 'GitHub', 'Netlify'],
		links: [
			{
				href: 'https://solwrsolwr.molnes.dev',
				title: 'Visit the site'
			},
			{
				href: 'https://github.com/PMolnes/tilegame-vuets',
				title: 'Repository'
			}
		]
	},
	{
		name: 'Trails',
		description:
			'A social media mobile applications for Android and iOS to share and rate hikes around Norway.',
		slug: 'trails',
		about:
			'Trails was created by me and three other students for a course in Mobile Applications. We created the app using Flutter and Firebase Firestore. The app is a social media inspired by Instagram, but with a focus on sharing and rating hikes. It lets users find new hikes on a map, and look at posts from specific hikes, or the posts of your friends. The app was made in the span of three months, but contains a lot of features: full authentication flow, following/followers, likes, image uploading, searching users, dark/light mode based on system.',
		challenges:
			'This project was extremely educational as it was the first time for everyone creating a mobile application. The biggest challenge we faced as a group, was the xcodeproj file. It was not supposed to be gitignored, however, it consistently caused merge conflicts that was difficult to resolve.',
		results:
			'The group were extremely satisfied with the results. We managed to create a social media platform while learning Flutter in three months. The project went so well that multiple members of our group kept working on the app afterwards. Additionally, some of us chose to create a mobile app for our Bachelor project.',
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
