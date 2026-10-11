<!--Peter Hamilton 21/2/24-->
<!-- Navbar.svelte -->
<script>
	import logo from '$lib/assets/logo-2.png';
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<div class="navbar">
	<div class="navbar-brand">
		<a href="/" on:click={closeMenu}
			><div class="logo-container">
				<img src={logo} alt="LASER Logo" />
				<span class="logo-text">LASER</span>
			</div></a
		>
	</div>

	<!-- Desktop navbar -->
	<div class="navbar-links desktop">
		<ul>
			<li>
				<a class="nav-link" href="/" rel="prefetch">Home</a>
			</li>
			<li>
				<a class="nav-link" href="/about" rel="prefetch">About Us</a>
			</li>
			<li>
				<a class="nav-link" href="/competitions" rel="prefetch">Competitions</a>
			</li>
			<li>
				<a class="nav-link" href="/projects" rel="prefetch">Projects</a>
			</li>
			<li>
				<a class="nav-link" href="/news" rel="prefetch">News</a>
			</li>
			<li>
				<a class="nav-link" href="/resources" rel="prefetch">Resources</a>
			</li>
			<li>
				<a class="nav-link" href="/contact" rel="prefetch">Contact Us</a>
			</li>
		</ul>
	</div>

	<!-- Mobile hamburger button -->
	<button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
		<span class="hamburger-line"></span>
		<span class="hamburger-line"></span>
		<span class="hamburger-line"></span>
	</button>

	<!-- Mobile dropdown menu -->
	{#if menuOpen}
		<div class="mobile-menu">
			<nav>
				<ul>
					<li>
						<a href="/" on:click={closeMenu}>Home</a>
					</li>
					<li>
						<a href="/about" on:click={closeMenu}>About Us</a>
					</li>
					<li>
						<a href="/competitions" on:click={closeMenu}>Competitions</a>
					</li>
					<li>
						<a href="/projects" on:click={closeMenu}>Projects</a>
					</li>
					<li>
						<a href="/news" on:click={closeMenu}>News</a>
					</li>
					<li>
						<a href="/resources" on:click={closeMenu}>Resources</a>
					</li>
					<li>
						<a href="/contact" on:click={closeMenu}>Contact Us</a>
					</li>
				</ul>
			</nav>
		</div>
	{/if}
</div>

<style>
	.navbar {
		background: rgba(17, 17, 17, 0.92);
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 999;
		padding: 1vh;
		margin: 0;
		border-bottom: 1px solid rgb(255, 255, 255);
	}

	.navbar-brand a {
		text-decoration: none;
	}

	.navbar-brand {
		transition: all 0.3s ease;
	}
	.navbar-brand:hover {
		transform: scale(1.05);
	}

	.logo-container {
		display: flex;
		align-items: center;
		margin-left: 2vw;
	}

	.logo-container img {
		width: 6vh;
		height: auto;
	}

	.logo-text {
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 4vh;
		color: white;
		margin-left: 12px;
	}

	.navbar-links {
		flex: 1;
		display: flex;
		justify-content: right;
		margin-right: 2vw;
	}

	.navbar-links ul {
		display: flex;
		list-style: none;
		margin: 0 2vw;
		padding: 0;
	}

	.navbar-links li:not(:last-child)::after {
		content: '';
		border-right: 1px solid white;
		height: 100%;
		margin-left: 2vw;
		margin-right: 2vw;
		color: white;
	}

	.navbar-links a {
		color: white;
		text-decoration: none;
		font-size: 18px;
		transition: color 0.3s ease;
		font-family: 'Orbitron Variable', sans-serif;
	}

	.navbar-links a:hover {
		color: #58a6ff;
	}

	/* Hamburger button - hidden on desktop */
	.hamburger {
		display: none;
		flex-direction: column;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		margin-right: 1rem;
	}

	.hamburger-line {
		width: 25px;
		height: 3px;
		background-color: white;
		margin: 5px 0;
		transition: all 0.3s ease;
		display: block;
	}

	/* Mobile menu - hidden by default */
	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background-color: rgba(17, 17, 17, 0.92);
		border-bottom: 1px solid white;
		padding: 1rem 0;
	}

	.mobile-menu nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
	}

	.mobile-menu nav ul li {
		padding: 0;
	}

	.mobile-menu nav ul li a {
		display: block;
		color: white;
		text-decoration: none;
		padding: 1rem 2rem;
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 16px;
		transition: background-color 0.3s ease, color 0.3s ease;
		border: none;
	}

	.mobile-menu nav ul li a:hover {
		background-color: #222222;
		color: #58a6ff;
	}

	/* Desktop view - show navbar links */
	@media (min-width: 769px) {
		.navbar-links.desktop {
			display: flex;
		}
	}

	/* Mobile view */
	@media (max-width: 768px) {
		.navbar {
			padding: 1vh 0.5rem;
		}

		.navbar-brand {
			flex: 0 0 auto;
		}

		.logo-container {
			margin-left: 1rem;
		}

		.logo-container img {
			width: 5vh;
		}

		.logo-text {
			font-size: 3vh;
			margin-left: 5px;
		}

		/* Hide desktop navbar links on mobile */
		.navbar-links.desktop {
			display: none;
		}

		/* Show hamburger button on mobile */
		.hamburger {
			display: flex;
			margin-left: auto;
			margin-right: 1rem;
		}

		/* Show mobile menu when open */
		.mobile-menu {
			display: block;
		}
	}
</style>
