<!--Peter Hamilton 21/2/24-->
<!--Index.svelte-->
<script>
	import rocketproject from '$lib/assets/icons/projects/rocket-team.svg';
	import weatherstation from '$lib/assets/icons/projects/weather-station.svg';
	import satcomproject from '$lib/assets/icons/projects/satellite.svg';

	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	import Getinvolved from '../components/index/getinvolved.svelte';
	import Faq from '../components/index/faq.svelte';
	import laserLogo from '$lib/assets/logo2.png';
	import societyPhoto from '$lib/assets/society_photo.jpg';
	import karlLab from '$lib/assets/karl_lab.jpg';
	import rocketLaunch from '$lib/assets/rocket_launch.png';

	function scrollToProjects() {
		const projectsHeader = document.getElementById('projects-header');
		projectsHeader?.scrollIntoView({ behavior: 'smooth' });
	}
	function scrollToGetInvolved() {
		const getinvolvedheader = document.getElementById('getinvolved-header');
		getinvolvedheader?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:head>
	<title>Home | LASER</title>
</svelte:head>

<div class="body">
	<div class="header">
		<h1>Liverpool Association For Space Engineering And Research</h1>
		<h2>
			A University of Liverpool student-run engineering society based in the Electrical and
			Electronics Engineering department.
		</h2>
		<div class="buttons">
			<button class="button" on:click={scrollToGetInvolved}>Get involved</button>
		</div>
	</div>
	<div class="content-row" id="projects-header">
		<div class="society-intro">
			<div class="section-label">01 / LASER</div>
			<h1>Design, Build, Learn.</h1>
			<p>
				LASER is a student-run engineering society where people from every background can work
				together on ambitious projects, learn practical skills and make friends along the way.
			</p>
			<div class="society-showcase">
				<img class="society-logo" src={laserLogo} alt="LASER society logo" />
				<img class="society-photo" src={societyPhoto} alt="LASER society members together" />
			</div>
		</div>
	</div>
	<div class="content-row lab-row">
		<div class="feature-grid">
			<div class="feature-copy">
				<div class="section-label">02 / OUR SPACE</div>
				<h1>Our private lab space</h1>
				<p>
					Our private lab is a place to study, collaborate and turn ideas into working hardware. It
					includes dedicated study space, 3D printers for rapid prototyping and a soldering station
					for electronics work.
				</p>
			</div>
			<img
				class="feature-photo"
				src={karlLab}
				alt="Karl working at the LASER lab soldering station"
			/>
		</div>
	</div>
	<div class="content-row rockets-row">
		<div class="rockets">
			<div class="section-label">03 / COMPETITIONS</div>
			<h1>Our rocketry team</h1>
			<p>
				We compete in the UKSEDS National Rocketry Championship and Exotopic Mach-X Competition. In
				2026, we won the UKSEDS National Rocketry Championship with additional awards for "Best
				Rideshare Payload" and the "Public Engagement Award".
			</p>
			<div class="rocket-gallery">
				<figure>
					<img class="launch-photo" src={rocketLaunch} alt="A LASER rocket launching" />
					<figcaption>Launching PULSAR.</figcaption>
				</figure>
			</div>
		</div>
	</div>
	<div class="content-row">
		<div class="container">
			<h1>FAQ:</h1>
			<p>Some common questions commonly asked about LASER from prospective members.</p>
			<div class="separator"></div>
			<Faq
				question={'How can I start a project?'}
				answer={'To start a project just come along and bring it up in a meeting.'}
			/>
			<Faq
				question={'Does it cost anything?'}
				answer={'No, participation in LASER does not cost anything apart from your time.'}
			/>
			<Faq
				question={'How do I join?'}
				answer={"As we're not affiliated with the Guild, we have no sign up requirements. Simply just show up to our meetings as listed below."}
			/>
			<Faq
				question={'What sort of things do you do?'}
				answer={'Within LASER we mainly work to develop skills outside of the typically taught curriculum through projects, in addition we offer a range of FYP for third year EEE students.'}
			/>
			<Faq
				question={'What competitions do you take part in?'}
				answer={'We take part in a range of student engineering and space competitions, including rocketry, rover and cubesats.'}
			/>
			<Faq
				question={'I lack technical skills/knowledge, can I still take part?'}
				answer={'We encourage anyone regardless of course and background with an interest to join, as our projects often cover a wide range of fields.'}
			/>
		</div>
	</div>
	<div class="content-row" id="getinvolved-header">
		<h1>How to get involved:</h1>
		<p>
			If you are a student or a company and you want to get involved with LASER, we host events and
			weekly meetings throughout the year.
		</p>
		<div class="separator"></div>
		<Getinvolved />
	</div>
</div>

<style>
	.body {
		background-color: white;
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: url('/src/lib/assets/background.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 60%;
		text-align: center;
		padding: 40px;
		color: white;
		height: 800px;
	}

	.header h1 {
		font-family: 'Orbitron Variable', sans-serif;
		padding: 20px;
		font-size: 3rem;
		margin: 10px 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.header h2 {
		font-family: 'Exo 2 Variable';
		padding: 20px;
		font-size: 1.5rem;
		margin: 10px 0;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.buttons {
		display: flex;
		justify-content: center;
		padding: 20px;
		margin: 20px auto;
	}

	.button {
		padding: 10px 20px;
		font-size: 2vh;
		font-family: 'Exo 2 Variable';
		margin: 0 10px;
		background-color: #ffffff;
		color: #000000;
		border: none;
		border-radius: 5px;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.button:hover {
		transform: scale(1.05);
	}

	.content-row {
		padding: 20px;
		background-color: #ffffff;
		color: #000000;
		margin: 0 auto;
	}

	.content-row:nth-of-type(odd) {
		background-color: #f1f1f1;
	}

	.container {
		background-color: #f1f1f1;
		border-radius: 10px;
		padding: 20px;
		margin: 10px auto;
	}

	.content-row h1 {
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 3vh;
		color: #000000;
		text-align: center;
		margin: 10px auto;
	}

	.content-row p {
		font-family: 'Exo 2 Variable';
		font-size: 2vh;
		text-align: center;
		color: #000000;
		line-height: 1.6;
		padding: 20px;
		margin: 10px auto;
	}

	.society-intro,
	.feature-grid,
	.rockets {
		max-width: 1200px;
		margin: 0 auto;
	}

	.society-intro {
		padding: 30px 20px;
	}

	.section-label {
		color: #58a6ff;
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 0.8rem;
		letter-spacing: 0.12em;
		text-align: center;
	}

	.society-intro h1,
	.feature-copy h1,
	.rockets h1 {
		margin: 12px auto;
	}

	.society-intro p,
	.rockets > p {
		max-width: 760px;
	}

	.society-photo {
		display: block;
		min-width: 0;
		width: 100%;
		max-height: 620px;
		border-radius: 10px;
		object-fit: cover;
	}

	.society-showcase {
		display: grid;
		grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.5fr);
		align-items: center;
		gap: 55px;
		margin-top: 30px;
	}

	.society-logo {
		display: block;
		width: 100%;
		height: auto;
	}

	.feature-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		gap: 60px;
		padding: 50px 20px;
	}

	.feature-copy h1 {
		text-align: left;
	}

	.feature-copy .section-label {
		text-align: left;
	}

	.feature-copy p {
		padding: 0;
		text-align: left;
	}

	.feature-photo {
		display: block;
		width: min(65%, 360px);
		justify-self: center;
		border-radius: 10px;
	}

	.rockets {
		padding: 50px 20px;
	}

	.rocket-gallery {
		display: flex;
		justify-content: center;
		margin-top: 30px;
	}

	.rocket-gallery figure {
		display: flex;
		flex-direction: column;
		margin: 0;
	}

	.rocket-gallery img {
		display: block;
		height: 360px;
		margin: 0 auto;
		border-radius: 10px;
		object-fit: cover;
	}

	.rocket-gallery .launch-photo {
		width: min(100%, 1000px);
		height: 580px;
		margin: 0 auto;
		border-radius: 16px;
		object-fit: cover;
	}

	.rocket-gallery figcaption {
		padding-top: 12px;
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 0.85rem;
	}

	.separator {
		content: '';
		display: block;
		height: 2px;
		background-color: black;
		border-radius: 1px;
		width: 80%;
		margin: 20px auto;
	}

	@media (max-width: 768px) {
		.header {
			padding: 70px 10px 10px;
			height: 620px;
		}

		.header h1 {
			padding: 10px;
			margin: 15px auto;
			font-size: 3rem;
		}

		.header h2 {
			padding: 10px;
			margin: 5px auto;
			font-size: 1.5rem;
		}

		.buttons {
			padding: 10px;
			margin: 5px auto;
		}

		.button {
			padding: 10px 20px;
			font-size: 2vh;
			font-family: 'Exo 2 Variable';
			margin: 0 auto;
		}

		.feature-grid {
			grid-template-columns: 1fr;
		}

		.society-showcase {
			grid-template-columns: 1fr;
		}

		.society-logo {
			width: min(240px, 70%);
			margin: 0 auto;
		}

		.feature-grid {
			gap: 30px;
		}

		.feature-photo {
			width: min(60%, 280px);
		}

		.rocket-gallery img {
			height: auto;
		}

		.rocket-gallery .launch-photo {
			width: 90%;
			height: 400px;
		}
	}
</style>
