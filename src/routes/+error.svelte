<script lang="ts">
  import { page } from "$app/stores";
</script>

<main class="min-h-screen grid place-items-center">
  <div class="px-4">
    <div class="flex flex-col items-center gap-2 text-center">
      <h1 class="text-8xl font-bold">{ $page.status }</h1>
      <h2 class="text-2xl font-bold">The page you were looking for does not exist.</h2>
    </div>
  </div>
</main>