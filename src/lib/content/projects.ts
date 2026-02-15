import type { Project } from '../types';

export const projects: Project[] = [
	{
		name: 'Master Thesis',
		description:
			'Using LLMs to detect malware and classify CVE vulnerabilities from decompiled Java binaries.',
		slug: 'master-thesis',
		about:
			'This is the project me and Eduard created for our Master Thesis in Computer Science at NTNU Trondheim. The thesis explores whether large language models (LLMs) without fine-tuning can be leveraged to detect malicious behaviour in code, specifically in JAR files. Furthermore, it explores the capabilities of LLMs to identify which vulnerabilities the malware exploits.\nThe result is a static analysis pipeline consisting of decompilation, deobfuscation, LLM summarisation of code, similarity search against a vector database of CVEs, and CVE classification using LLMs. The system supports multiple LLM providers, including OpenAI, Gemini, and self-hosted models such as Llama. A custom Java deobfuscation tool was also created as part of this project, using JavaParser to resolve obfuscated string literals in decompiled code.',
		challenges:
			'A critical challenge was the lack of open-source deobfuscation tools for Java. Existing tools like Java Deobfuscator were unable to detect obfuscation patterns across the malware dataset. Therefore, we created a custom deobfuscation tool using JavaParser to resolve obfuscated string literals, which proved important for the LLM to understand the code and generate accurate search queries.\nAnother challenge was the similarity search for CVE classification. Many CVEs have similar descriptions, and some are unspecified, making it difficult to retrieve the correct vulnerability. We used cosine similarity with a Milvus vector database to search for relevant CVEs, and iterated on the search query generation to improve results.\nWorking with live malware required strict security measures. All development involving malware occurred in contained environments using GitHub Codespaces, and the database was hosted on a separate Hetzner Cloud server to isolate it from the malware execution environment.',
		results:
			'For malware detection, the system achieved 97% mean accuracy across 3839 analysed JAR binaries without any fine-tuning, relying solely on zero-shot prompting. This competes with LLMs fine-tuned on malicious/benign datasets.\nFor CVE classification, the O4-mini model achieved a 60.8% recall@10, 42% accuracy, and 69% conditional accuracy. These results are the first empirical assessment of CVE attribution performed directly on thousands of obfuscated and compiled malicious binaries, establishing a baseline for future research.\nThe resulting system analyses files at a cost of approximately $0.03 USD per file, which is 60 to 88 times less expensive than commercial tools such as VirusTotal and CrowdStrike Falcon. This lowers the barrier for organisations to conduct malware analysis.',
		myRoles: ['Developer', 'Researcher'],
		features: [
			'LLM-based Malware Detection',
			'CVE Vulnerability Classification',
			'Java Decompilation and Deobfuscation',
			'Vector Similarity Search with Milvus',
			'Retrieval-Augmented Generation (RAG)',
			'Multi-LLM Provider Support'
		],
		links: [
			{
				href: 'https://nva.sikt.no/registration/019a0aba340e-dece8044-9391-4821-9232-44f6e94ba0a6',
				title: 'Thesis'
			},
			{
				href: 'https://github.com/PMolnes/simple-java-deobfuscator',
				title: 'Deobfuscator Repository'
			}
		],
		technologies: ['Python', 'Java', 'OpenAI', 'Gemini', 'Milvus', 'JavaParser', 'GitHub'],
		nb: {
			description:
				'Bruk av LLM-er for å oppdage skadelig programvare og klassifisere CVE-sårbarheter fra dekompilerte Java-binærfiler.',
			about:
				'Dette er prosjektet jeg og Eduard skapte for vår masteroppgave i datateknologi ved NTNU Trondheim. Oppgaven utforsker om store språkmodeller (LLM-er) uten finjustering kan brukes til å oppdage ondsinnede mønstre i kode, spesifikt i JAR-filer. Videre utforsker den LLM-ers evne til å identifisere hvilke sårbarheter skadelig programvare utnytter.\nResultatet er en statisk analysepipeline bestående av dekompilering, deobfuskering, LLM-oppsummering av kode, likhetsøk mot en vektordatabase av CVE-er, og CVE-klassifisering ved hjelp av LLM-er. Systemet støtter flere LLM-leverandører, inkludert OpenAI, Gemini, og selvhostede modeller som Llama. Et tilpasset Java-deobfuskeringsverktøy ble også utviklet som en del av dette prosjektet, ved bruk av JavaParser for å løse obfuskerte strengliteraler i dekompilert kode.',
			challenges:
				'En kritisk utfordring var mangelen på åpen kildekode-verktøy for deobfuskering av Java. Eksisterende verktøy som Java Deobfuscator klarte ikke å oppdage obfuskeringsmønstre på tvers av skadelig programvare-datasettet. Derfor skapte vi et tilpasset deobfuskeringsverktøy ved hjelp av JavaParser for å løse obfuskerte strengliteraler, noe som viste seg å være viktig for at LLM-en skulle forstå koden og generere nøyaktige søkeforespørsler.\nEn annen utfordring var likhetsøket for CVE-klassifisering. Mange CVE-er har lignende beskrivelser, og noen er uspesifiserte, noe som gjør det vanskelig å hente korrekt sårbarhet. Vi brukte cosinus-likhet med en Milvus vektordatabase for å søke etter relevante CVE-er, og itererte på genereringen av søkeforespørsler for å forbedre resultatene.\nÅ arbeide med levende skadelig programvare krevde strenge sikkerhetstiltak. All utvikling som involverte skadelig programvare foregikk i isolerte miljøer ved hjelp av GitHub Codespaces, og databasen ble hostet på en separat Hetzner Cloud-server for å isolere den fra kjøremiljøet for skadelig programvare.',
			results:
				'For oppdagelse av skadelig programvare oppnådde systemet 97% gjennomsnittlig nøyaktighet på tvers av 3839 analyserte JAR-binærfiler uten noen finjustering, kun ved bruk av zero-shot prompting. Dette konkurrerer med LLM-er som er finjustert på ondsinnet/godartet datasett.\nFor CVE-klassifisering oppnådde O4-mini-modellen 60,8% recall@10, 42% nøyaktighet og 69% betinget nøyaktighet. Disse resultatene er den første empiriske evalueringen av CVE-attribusjon utført direkte på tusenvis av obfuskerte og kompilerte ondsinnede binærfiler, og etablerer en baseline for fremtidig forskning.\nDet resulterende systemet analyserer filer til en kostnad på omtrent $0,03 USD per fil, noe som er 60 til 88 ganger rimeligere enn kommersielle verktøy som VirusTotal og CrowdStrike Falcon. Dette senker terskelen for organisasjoner til å utføre analyse av skadelig programvare.',
			myRoles: ['Utvikler', 'Forsker']
		}
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
		technologies: ['Swift', 'Spring Boot', 'Keycloak', 'Terraform', 'GitLab'],
		nb: {
			description:
				'Lagerstyringssystem og iOS-app med stemmegrensesnitt for stabling av produkter.',
			about:
				'Voice Pluck er prosjektet jeg og tre andre studenter skapte for vår bacheloroppgave ved NTNU. Solwr spesialiserer seg på logistikk og tilbyr et stemmegjenkjenningssystem til lagre, som hjelper dem å laste ordrer mer effektivt. Det eksisterende systemet fungerte, men ikke optimalt. Det brukte kun et stemmegrensesnitt, og noen oppgaver i et lager løses i utgangspunktet mindre effektivt uten et berøringsgrensesnitt. I tillegg brukte Solwr en dyr tredjeparts programvare for å håndtere stemmegjenkjenning.\nDerfor ga Solwr oss oppgaven med å lage en mobilapplikasjon som håndterte stemmegjenkjenningen uten behov for et betalt bibliotek, og med tillegg av et berøringsgrensesnitt. Vi skapte også et REST API som fungerer som et lagerstyringssystem. WMS-en støtter å legge til, fjerne og oppdatere produkter, ordrer og brukere. Sist, men ikke minst, undersøkte vi en måte å implementere en smartklokke-applikasjon med stemmegjenkjenning på.',
			challenges:
				'Fra prosjektbeskrivelse til tekniske funksjoner ga prosjektet teamet flere utfordringer. Den innledende prosjektbeskrivelsen var noe vag. Så den første utfordringen i prosjektet var å forstå brukerkravene og behovene. For å løse dette jobbet hele teamet en dag i et lager for å forstå arbeidsflyten til sluttbrukerne.\nTalegjenkjenning brakte en rekke utfordringer inn i prosjektet vårt. Lageret er et støyende miljø, parsing av input, brukerpersonvern, internettforbindelse, listen fortsetter. Vi løste dette ved å bruke <a class="underline" target="_blank" href="https://developer.apple.com/documentation/speech/sfspeechrecognizer">Apples SFSpeechRecognition</a>-bibliotek.\nVi forsto også raskt at sluttbrukeren måtte kunne bruke stemmegrensesnittet og berøringsgrensesnittet sømløst. Det er flere steg i prosessen med å forberede en ordre for transport. For at brukeren skulle kunne bytte mellom grensesnitt sømløst, trengte vi en måte å holde oversikt over det nåværende steget i plukkprosessen. Vi løste dette ved å bruke en PluckService som holder oversikt over det nåværende steget og eksponerer en doAction-metode. Denne metoden ble utført når et nøkkelord ble gjenkjent, eller brukeren trykket på spesifikke knapper i appen.\nÅ lage REST API-et var heller ingen enkel oppgave. Det er komplekse relasjoner mellom entiteter i et lagermiljø. Grundig testing gjorde det lettere å implementere alle disse entitetene korrekt. Jeg oppfordrer deg til å lese mer om utfordringene i prosjektet vårt i rapporten vår.',
			results:
				'Prosjektet vårt hadde et bredt omfang og mange muligheter. Det ferdige produktet besto av en iOS-app med autentisering, talegjenkjenning, tekst-til-tale, et WMS REST API, og en implementeringsplan for en WatchOS-app med stemmegjenkjenning. Viktigst av alt lærte teamet mye av dette prosjektet. Alt fra iOS-utvikling med Swift, Spring Boot REST API-utvikling, autentisering med Keycloak, testing, og ikke-tekniske ferdigheter som smidig utvikling og undersøkelse av brukerkrav. Som teamleder lærte jeg også mye om å administrere Jira og adressere tidslinjeproblemer med teamet.',
			myRoles: ['Teamleder', 'Full Stack-utvikler']
		}
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
		],
		nb: {
			description: 'Automatiser oppsett av TailwindCSS i React, Vue og SvelteKit.',
			about:
				'På et tidspunkt fant jeg meg selv i å gjenta de samme stegene for å sette opp TailwindCSS for mine nye prosjekter. Bla til installasjonsveiledningen, installere avhengigheter, kopiere og lime inn konfigurasjonsfiler, osv.\nSiden jeg ofte skapte små prosjekter for å teste en idé, bestemte jeg meg for å automatisere disse kjedelige trinnene. petter-init er et CLI-verktøy du kan installere fra <a target="_blank" href="https://www.npmjs.com/package/petter-init">npmjs.com</a>. Verktøyet lar deg velge enten React, Vue eller SvelteKit, scaffolder et nytt prosjekt med dine valgte alternativer, og konfigurerer fullstendig TailWindCSS for prosjektet ditt. Du kan umiddelbart begynne å skrive ut TailwindCSS-klasser i stedet for å måtte sette det opp manuelt først.\nFor en detaljert forklaring på hvordan det fungerer, kan du besøke dokumentasjonen for dette prosjektet.',
			challenges:
				'Før jeg skrev koden fant jeg det vanskelig å måle størrelsen på dette prosjektet. Opprinnelig tenkte jeg dette ville være et lite ett-fils-skript, og valgte derfor å bruke JavaScript. I ettertid burde jeg ha valgt TypeScript til dette prosjektet. Når jeg kom tilbake til dette prosjektet for å fikse en feil eller oppdatere malene, fant jeg meg selv fortapt, til tross for den detaljerte dokumentasjonen. Utvikleropplevelsen med JavaScript sammenlignet med TypeScript er rett og slett forferdelig. I tillegg ville bruk av TypeScript gjøre det lettere hvis andre utviklere ønsket å jobbe på prosjektet. Å migrere til TypeScript ville vært gunstig, men jeg kom aldri til å gjøre det.\nEn annen utfordring var testing. For å sikre at scaffoldingen av prosjekter fungerte ordentlig, stolte jeg på tester. Testene scaffolder et prosjekt for hvert rammeverk jeg støtter, og sjekker at de riktige filene blir opprettet i det nye prosjektet. Disse testene er nyttige, men de tar en stund å fullføre. Imidlertid sikrer disse testene bare at filene blir opprettet. Dette betyr ikke at Tailwind fungerer korrekt. Jeg innså at jeg måtte lage tester som sikrer at applikasjonen kan kjøre, og at Tailwind-klassene fungerer ordentlig.',
			results:
				'Resultatet av dette prosjektet omfatter et CLI-verktøy tilgjengelig som en global npm-pakke, og en dokumentasjonsnettside laget med Vitepress. Jeg lærte hvordan man publiserer pakker til npm, og forbedret mine testferdigheter. Verktøyet har spart meg mye tid ved oppsett av TailwindCSS, og jeg vil fortsette å oppdatere prosjektet. Til tross for nevnte utfordringer er jeg grundig fornøyd med resultatet.',
			myRoles: ['Solo-utvikler']
		}
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
		],
		nb: {
			description:
				'Et flispuslespill for å konkurrere med kolleger om å få raskest tid eller færrest trekk til å løse puslespillet.',
			about:
				'SolwrSolwr er et flispuslespill der målet er å løse puslespillet som viser logoen til selskapet, Solwr. Jeg laget opprinnelig dette prosjektet da jeg begynte å lære React. Men etter hvert som jeg lærte nye teknologier, begynte jeg å gjenskape prosjektet. Én gang da jeg lærte Vue, en andre gang da jeg lærte TypeScript, og en tredje gang da jeg lærte TailwindCSS. Dermed har dette prosjektet blitt min boilerplate-app for å teste ut en ny teknologi. For øyeblikket består den av en Vue med TypeScript & Tailwind front-end, og en Firebase back-end. Firebase websockets gir live-oppdateringer til poengtavlene når noen setter en ny toppskår.',
			challenges:
				'Dette prosjektet var utfordrende for meg, ettersom det var en av mine første ordentlige nettapper. Jeg vil si at den største utfordringen var at jeg startet prosjektet på nytt om og om igjen. Hver gang jeg ønsket å bruke en ny teknologi startet jeg hele prosjektet på nytt. Dette forårsaket mye dobbeltarbeid, jeg fant meg selv i å ikke lære noe nytt utover det grunnleggende i nye teknologier, og ikke egentlig bli utfordret.',
			results:
				'Til tross for at det ikke er mitt stolteste prosjekt, er jeg fornøyd med resultatene. Det er et kult prosjekt som var moro å lage. Sluttresultatet er en hostet Vue.js-app, Firebase backend, og Firebase websockets for å inkludere live-oppdateringer av toppscore. Jeg fikk også tilbakemelding fra mine kolleger om at det var et fint initiativ. Det hadde vært kult å legge til autentisering integrert med Azure Directory slik at bare ansatte i Solwr kunne lagre toppscore.',
			myRoles: ['Solo-utvikler']
		}
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
		technologies: ['Flutter', 'Firebase', 'Google Maps API', 'GitHub'],
		nb: {
			description:
				'En sosial media-mobilapplikasjon for Android og iOS for å dele og rangere turer rundt i Norge.',
			about:
				'Trails ble skapt av meg og tre andre studenter til et emne i mobilapplikasjoner. Vi laget appen ved hjelp av Flutter og Firebase Firestore. Appen er en sosial medieapp inspirert av Instagram, men med fokus på deling og rangering av turer. Den lar brukere finne nye turer på et kart, og se på innlegg fra spesifikke turer, eller innleggene til vennene dine. Appen ble laget i løpet av tre måneder, men inneholder mange funksjoner: full autentiseringsflyt, følgere/følger, likes, bildeopplasting, søk etter brukere, mørk/lys modus basert på system.',
			challenges:
				'Dette prosjektet var ekstremt lærerikt siden det var første gang for alle å lage en mobilapplikasjon. Den største utfordringen vi møtte som gruppe var xcodeproj-filen. Den skulle ikke være gitignored, men den forårsaket konsekvent merge-konflikter som var vanskelig å løse.',
			results:
				'Gruppen var ekstremt fornøyd med resultatene. Vi klarte å lage en sosial medieplattform samtidig som vi lærte Flutter på tre måneder. Prosjektet gikk så bra at flere medlemmer av gruppen vår fortsatte å jobbe med appen etterpå. I tillegg valgte noen av oss å lage en mobilapp for bachelorprosjektet vårt.',
			myRoles: ['Teamleder', 'Utvikler']
		}
	}
];
