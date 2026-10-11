<script lang="ts">
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';
</script>

<svelte:head><title>Rover | LASER</title></svelte:head>

<div class="body">
	<div class="header"><h1>Rover</h1><h2>LASER rover project</h2></div>
	<div class="content-row">
		<h1>Rover</h1>
		<div class="separator"></div>
		<div class="photo-space">Photo space</div>
		<p>This page is reserved for information about the LASER rover project, its mission, competition and team.</p>
	</div>
</div>

<style>
	.body { background: white; min-height: 100vh; font-family: 'Exo 2 Variable'; }
	.header { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 475px; padding: 40px; color: white; text-align: center; background: url('/src/lib/assets/background-2.jpg') center 35% / cover no-repeat; }
	h1 { font-family: 'Orbitron Variable', sans-serif; font-size: 4vh; text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); }
	.header h2 { font-size: 2vh; font-weight: normal; text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); }
	.content-row { margin: 10px auto; padding: 20px; text-align: center; }
	.content-row h1 { color: #000; font-size: 3vh; text-shadow: none; }
	.separator { width: 80%; height: 2px; margin: 20px auto; background: #000; }
	.photo-space { display: grid; place-items: center; width: min(800px, 90%); min-height: 260px; margin: 25px auto; border: 2px dashed #999; background: #f1f1f1; color: #777; }
	.content-row p { max-width: 800px; margin: 12px auto; font-size: 2vh; line-height: 1.6; }
</style>
