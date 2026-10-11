<!--Peter Hamilton 21/2/24-->
<script>
	import { onMount } from 'svelte';
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	import logo from '$lib/assets/logo-2.png';
	import instagram from '$lib/assets/icons/instagram.svg';
	import email from '$lib/assets/icons/email.svg';
	import linkedin from '$lib/assets/icons/linkedin.svg';
	import discord from '$lib/assets/icons/discord.svg';

	import Privacypolicy from './footer/privacypolicy.svelte';

	let showPrivacyPolicy = false;

	onMount(() => {
		showPrivacyPolicy = false;
	});

	function openPrivacyPolicy() {
		showPrivacyPolicy = true;
	}

	function handlePrivacyPolicyClose() {
		showPrivacyPolicy = false;
	}

	const currentYear = new Date().getFullYear();
</script>

<div class="footer">
	<div class="footer-columns">
		<section class="footer-brand" aria-labelledby="footer-brand-heading">
			<div class="brand-row">
				<a class="brand" href="/" aria-label="LASER home">
					<img src={logo} alt="" />
					<span id="footer-brand-heading">LASER</span>
				</a>
				<div class="footer-icons" aria-label="Social links">
					<a href="https://www.instagram.com/laser_uol/" aria-label="Instagram"><img src={instagram} alt="" /></a>
					<a href="https://www.linkedin.com/company/laser-liverpool/" aria-label="LinkedIn"><img src={linkedin} alt="" /></a>
					<a href="mailto:laser@liverpool.ac.uk" aria-label="Email"><img src={email} alt="" /></a>
					<a href="https://discord.gg/8RZZe7E6FS" aria-label="Discord"><img src={discord} alt="" /></a>
				</div>
			</div>
		</section>

		<section class="footer-section" aria-labelledby="quick-links-heading">
			<h2 id="quick-links-heading">Quick links</h2>
			<nav class="footer-links" aria-label="Quick links">
				<a href="/">Home</a>
				<a href="/about">About us</a>
				<a href="/projects">Projects</a>
				<a href="/news">News</a>
				<a href="/resources">Resources</a>
				<a href="/contact">Contact us</a>
				<a href="https://github.com/UOL-LASER">GitHub</a>
				<button type="button" on:click={openPrivacyPolicy}>LASER TOS</button>
			</nav>
		</section>

		<section class="footer-section contact" aria-labelledby="contact-heading">
			<h2 id="contact-heading">Contact details</h2>
			<a href="mailto:laser@liverpool.ac.uk">laser@liverpool.ac.uk</a>
			<address>
				Department of Electrical Engineering and Electronics<br />
				University of Liverpool<br />
				9 Brownlow Hill<br />
				Liverpool, UK<br />
				L69 3GJ
			</address>
		</section>
	</div>
	<div class="footer-bottom">
		<p>&copy; LASER {currentYear}</p>
		<p class="motto">Numquam Solum Volare</p>
	</div>
</div>

<Privacypolicy show={showPrivacyPolicy} on:close={handlePrivacyPolicyClose}></Privacypolicy>

<style>
	.footer {
		background: #111111;
		color: white;
		font-family: 'Exo 2 Variable', sans-serif;
		padding: 3rem 6vw 1.5rem;
		position: relative;
		margin: 0;
		max-width: 100%;
		border-top: 1px solid rgb(255, 255, 255);
		z-index: 999;
	}

	.footer-columns {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1.2fr 1fr 1.4fr;
		gap: 4rem;
	}

	.footer-brand,
	.footer-section {
		min-width: 0;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		color: white;
		text-decoration: none;
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 1.8rem;
	}

	.brand img {
		width: 3.5rem;
		height: auto;
	}

	.brand-row {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
	}

	.footer-section h2 {
		margin: 0 0 1rem;
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 1rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.footer-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.55rem;
	}

	.footer-links a,
	.footer-links button,
	.contact a {
		color: white;
		font: inherit;
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-links button {
		padding: 0;
		border: 0;
		background: none;
		cursor: pointer;
	}

	.footer-links a:hover,
	.footer-links button:hover,
	.contact a:hover {
		color: #58a6ff;
	}

	.contact address {
		margin-top: 0.75rem;
		font-family: 'Exo 2 Variable', sans-serif;
		font-style: normal;
		line-height: 1.5;
	}

	.footer-icons {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
	}

	.footer-icons a {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.25rem;
	}

	.footer-icons img {
		width: 1.4rem;
		height: 1.4rem;
		filter: invert(1);
	}

	.footer-bottom {
		max-width: 1200px;
		margin: 2.5rem auto 0;
		padding-top: 1rem;
		border-top: 1px solid #444;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.footer-bottom p {
		margin: 0;
		font-family: 'Exo 2 Variable', sans-serif;
		font-size: 0.9rem;
	}

	.motto {
		font-style: italic;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 2.5rem 8vw 1.25rem;
		}

		.footer-columns {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.footer-bottom {
			margin-top: 2rem;
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
