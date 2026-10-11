<script lang="ts">
	import unityRiseLogo from '$lib/assets/UR_Logo_Eye.png';
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';
</script>

<svelte:head>
	<title>Rocketry | LASER</title>
</svelte:head>

<div class="body">
	<div class="header">
		<img src={unityRiseLogo} alt="Unity Rise University of Liverpool Rocket Team logo" />
		<h1>Rocketry</h1>
		<h2>Unity Rise - the University of Liverpool rocket team</h2>
	</div>
	<div class="content-row">
		<h1>Unity Rise</h1>
		<div class="separator"></div>
		<div class="photo-space">Photo space</div>
		<p>Unity Rise designs, builds and launches student-scale rockets through hands-on work in structures, propulsion, avionics and recovery.</p>
		<p>We compete in the UKSEDS National Rocketry Championship and EXO Mach-X.</p>
		<a class="button" href="https://unityriseuol.co.uk/" target="_blank" rel="noreferrer">Visit the Unity Rise website ↗</a>
	</div>
</div>

<style>
	.body { background: white; min-height: 100vh; font-family: 'Exo 2 Variable'; }
	.header { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 475px; padding: 40px; color: white; text-align: center; background: url('/src/lib/assets/background-2.jpg') center 35% / cover no-repeat; }
	.header img { width: min(250px, 55vw); }
	h1, .button { font-family: 'Orbitron Variable', sans-serif; }
	.header h1 { font-size: 4vh; margin: 18px auto 10px; text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); }
	.header h2 { font-size: 2vh; margin: 10px auto; text-shadow: 2px 2px 4px rgba(0, 0, 0, .5); }
	.content-row { margin: 10px auto; padding: 20px; text-align: center; }
	.content-row h1 { font-size: 3vh; }
	.separator { width: 80%; height: 2px; margin: 20px auto; background: #000; }
	.photo-space { display: grid; place-items: center; width: min(800px, 90%); min-height: 260px; margin: 25px auto; border: 2px dashed #999; background: #f1f1f1; color: #777; }
	.content-row p { max-width: 800px; margin: 12px auto; font-size: 2vh; line-height: 1.6; }
	.button { display: inline-block; margin: 22px auto; padding: 14px 20px; background: #111; color: white; text-decoration: none; border-radius: 5px; }
	.button:hover, .button:focus-visible { background: white; color: #111; outline: 2px solid #58a6ff; outline-offset: 3px; }
</style>
