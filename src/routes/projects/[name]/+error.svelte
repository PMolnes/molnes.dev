<script lang="ts">
  import { page } from "$app/stores";
  import { projects } from "$lib/content/projects";
  import Fuse from "fuse.js";



  const options = { keys: ["slug"] };
  const fuse = new Fuse(projects, options);
  const results = fuse.search($page.url.pathname.substring(10))

  $: suggestions = results.length > 0 ? results.map(result => result.item) : projects;

</script>

<main class="min-h-screen grid place-items-center">
  <div>
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-8xl font-bold">{ $page.status }</h1>
      <h2 class="text-2xl font-bold">The page you were looking for does not exist.</h2>
    </div>
    <div class="flex flex-col items-center mt-4">
      <p>Were you looking for this?</p>
        {#each suggestions as suggestion}
          <a class="underline" href={`/projects/${suggestion.slug}`}>{suggestion.name}</a>
        {/each}
    </div>
  </div>
</main>