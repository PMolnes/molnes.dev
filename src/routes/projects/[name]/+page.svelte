<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Projects - {data.project.name}</title>
</svelte:head>

<main class="grid place-items-center lg:px-24 md:px-16 sm:px-12 px-4 my-20">
	<div class="max-w-screen-xl flex flex-col">
		<h1 class="text-7xl font-extrabold mb-2">{data.project.name}</h1>
		<h2 class="text-2xl text-gray-400 mb-16">{data.project.description}</h2>
		<img src="https://picsum.photos/1400/800" class="mb-8" />
		<div class="flex lg:flex-row flex-col gap-8 relative">
			<div class="bg-zinc-800 py-4 px-6 min-w-80 lg:self-start lg:sticky lg:top-10">
				<div class="mb-4">
					<h3 class="text-gray-400 text-sm mb-1">Status</h3>
					<p class="text-white font-semibold">Finished</p>
				</div>
				<div>
					<h3 class="text-gray-400 text-sm mb-1">My Role(s)</h3>
					<ul>
						{#each data.project.myRoles as role}
							<li>
								<p class="text-white font-semibold">{role}</p>
							</li>
						{/each}
					</ul>
				</div>
			</div>
			<div>
				<section>
					<h3 class="text-5xl font-semibold">About</h3>
					<p class="leading-10 text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse molestiae
						voluptatibus consequuntur voluptate sunt alias necessitatibus odio eveniet, eos, optio
						rerum dolorum, aliquam adipisci inventore! Ducimus officiis eveniet libero. Quos ex
						laborum provident fugit id sit tempora totam nobis repellat illum corrupti, natus quidem
						exercitationem ipsum voluptatibus voluptas autem voluptatem! Nisi tenetur quo odit ab
						dolor facilis voluptatum non. Labore quidem ipsam rem iste quo molestiae. Harum, maxime
						exercitationem in culpa voluptates, accusamus nam ea deleniti quisquam, aliquam
						perspiciatis earum cumque doloremque adipisci sint eaque commodi suscipit eveniet eos!
						Modi, sint? Nostrum corrupti quibusdam ratione velit. Tempore optio sit assumenda quis
						laboriosam animi possimus ea velit quas? Suscipit doloremque accusamus quam temporibus
						iure deserunt doloribus ipsum voluptas exercitationem tempore. Quis consequatur autem
						officiis modi. Provident corporis porro suscipit repudiandae doloremque assumenda at
						ipsum consequuntur! Cumque incidunt praesentium accusantium magnam odio eligendi
						quibusdam suscipit natus exercitationem a mollitia, quo modi. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Modi esse molestiae voluptatibus consequuntur voluptate
						sunt alias necessitatibus odio eveniet, eos, optio rerum dolorum, aliquam adipisci
						inventore! Ducimus officiis eveniet libero. Quos ex laborum provident fugit id sit
						tempora totam nobis repellat illum corrupti, natus quidem exercitationem ipsum
						voluptatibus voluptas autem voluptatem! Nisi tenetur quo odit ab dolor facilis
						voluptatum non. Labore quidem ipsam rem iste quo molestiae. Harum, maxime exercitationem
						in culpa voluptates, accusamus nam ea deleniti quisquam, aliquam perspiciatis earum
						cumque doloremque adipisci sint eaque commodi suscipit eveniet eos! Modi, sint? Nostrum
						corrupti quibusdam ratione velit. Tempore optio sit assumenda quis laboriosam animi
						possimus ea velit quas? Suscipit doloremque accusamus quam temporibus iure deserunt
						doloribus ipsum voluptas exercitationem tempore. Quis consequatur autem officiis modi.
						Provident corporis porro suscipit repudiandae doloremque assumenda at ipsum
						consequuntur! Cumque incidunt praesentium accusantium magnam odio eligendi quibusdam
						suscipit natus exercitationem a mollitia, quo modi.
					</p>
				</section>
				<section>
					<h3 class="text-5xl font-semibold">Challenges</h3>
					<p class="leading-10 text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse molestiae
						voluptatibus consequuntur voluptate sunt alias necessitatibus odio eveniet, eos, optio
						rerum dolorum, aliquam adipisci inventore! Ducimus officiis eveniet libero. Quos ex
						laborum provident fugit id sit tempora totam nobis repellat illum corrupti, natus quidem
						exercitationem ipsum voluptatibus voluptas autem voluptatem! Nisi tenetur quo odit ab
						dolor facilis voluptatum non. Labore quidem ipsam rem iste quo molestiae.
					</p>
				</section>
				<section>
					<h3 class="text-5xl font-semibold">Results</h3>
					<p class="leading-10 text-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse molestiae
						voluptatibus consequuntur voluptate sunt alias necessitatibus odio eveniet, eos, optio
						rerum dolorum, aliquam adipisci inventore! Ducimus officiis eveniet libero. Quos ex
						laborum provident fugit id sit tempora totam nobis repellat illum corrupti, natus quidem
						exercitationem ipsum voluptatibus voluptas autem voluptatem! Nisi tenetur quo odit ab
						dolor facilis voluptatum non. Labore quidem ipsam rem iste quo molestiae.
					</p>
				</section>
			</div>
		</div>
	</div>
</main>
