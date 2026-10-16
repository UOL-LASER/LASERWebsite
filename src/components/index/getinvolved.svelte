<!--Peter Hamilton 27/2/24-->
<script lang="ts">
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	let flipped = false;

	function toggleFlip() {
		flipped = !flipped;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleFlip();
		}
	}
</script>


<div
	class:flipped
	class="flip-card"
	role="button"
	tabindex="0"
	aria-label="Flip between student and industry information"
	on:click={toggleFlip}
	on:keydown={handleKeyDown}
>
	<div class="flip-card-inner">
		<section class="card-face card-front" aria-hidden={flipped}>
			<span class="flip-icon" aria-hidden="true">↻</span>
			<p class="eyebrow">Students</p>
			<h2>Get involved</h2>
			<p class="route-intro">Weekly meetings:</p>
			<div class="meeting">
				<strong>Fridays - 17:00</strong>
				<span>502 Building, Flexible learning space 2 (1st floor).</span>
			</div>
			<p class="note">(Check Instagram for confirmation meeting is going ahead on the day).</p>
		</section>

		<section class="card-face card-back" aria-hidden={!flipped}>
			<span class="flip-icon" aria-hidden="true">↻</span>
			<p class="eyebrow">Industry and companies</p>
			<h2>Get in touch</h2>
			<p class="route-intro">
				If you represent a company or are an employee acting on behalf of your employer, and you wish
				to engage with LASER by offering a seminar or contributing to our projects, please don't
				hesitate to get in touch.
			</p>
			<a class="contact-link" href="mailto:laser@liverpool.ac.uk" on:click|stopPropagation>
				laser@liverpool.ac.uk <span aria-hidden="true">↗</span>
			</a>
		</section>
	</div>
</div>

<style>
	.flip-card {
		width: min(100%, 760px);
		height: 340px;
		margin: 40px auto 10px;
		perspective: 1200px;
		font-family: 'Exo 2 Variable';
		cursor: pointer;
		transition: transform 180ms ease;
	}

	.flip-card:hover,
	.flip-card:focus-visible {
		transform: scale(1.02);
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transition: transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1);
		transform-style: preserve-3d;
	}

	.flip-card.flipped .flip-card-inner {
		transform: rotateY(180deg);
	}

	.card-face {
		position: absolute;
		inset: 0;
		padding: 34px 92px 34px 38px;
		backface-visibility: hidden;
		box-sizing: border-box;
	}

	.card-front {
		background: #111111;
		color: #ffffff;
	}

	.card-back {
		background: #f1f1f1;
		color: #111111;
		transform: rotateY(180deg);
	}

	.flip-icon {
		position: absolute;
		top: 20px;
		right: 20px;
		color: inherit;
		font-family: 'Exo 2 Variable';
		font-size: 1.55rem;
		line-height: 1;
		pointer-events: none;
	}

	.eyebrow {
		font-family: 'Orbitron Variable';
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.eyebrow {
		margin: 0 0 12px;
		opacity: 0.65;
	}

	h2 {
		font-family: 'Orbitron Variable';
		font-size: clamp(1.25rem, 3vw, 2rem);
		line-height: 1.15;
		margin: 0 0 14px;
	}

	.route-intro {
		max-width: 650px;
		font-size: 1.05rem;
		line-height: 1.55;
		margin: 0;
	}

	.meeting {
		display: grid;
		gap: 4px;
		margin-top: 24px;
		padding-left: 16px;
		border-left: 3px solid #ff5b3d;
	}

	.meeting span:last-child {
		font-size: 0.94rem;
		opacity: 0.72;
	}

	.note {
		font-size: 0.86rem;
		font-style: italic;
		opacity: 0.65;
		margin: 20px 0 0;
	}

	.contact-link {
		display: inline-flex;
		gap: 14px;
		align-items: center;
		margin-top: 24px;
		padding-bottom: 5px;
		border-bottom: 2px solid #111111;
		color: inherit;
		font-family: 'Orbitron Variable';
		font-size: clamp(0.9rem, 2vw, 1.2rem);
		font-weight: 700;
		text-decoration: none;
	}

	.contact-link span {
		font-size: 1.35em;
		transition: transform 180ms ease;
	}

	.contact-link:hover span {
		transform: translate(4px, -4px);
	}

	@media (max-width: 768px) {
		.flip-card {
			height: 410px;
			margin-top: 30px;
		}

		.card-face {
			padding: 24px 20px;
		}

		.route-intro {
			font-size: 0.98rem;
		}
	}
</style>
