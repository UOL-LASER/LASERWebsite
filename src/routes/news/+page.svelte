<script lang="ts">
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	const articles = [
		{
			title: 'Exploring the Future of Space with Industry Leaders',
			date: '18 September 2026',
			url: 'https://news.liverpool.ac.uk/2026/09/18/exploring-the-future-of-space-with-industry-leaders/'
		},
		{
			title: 'Liverpool Student Team Crowned UK National Rocketry Champions',
			date: '4 August 2026',
			url: 'https://www.liverpool.ac.uk/engineering/news/stories/title,1565769,en.php'
		},
		{
			title: 'From Liverpool to the Stars: Showcasing Liverpool’s Space Research at the British Science Festival',
			date: '21 November 2025',
			url: 'https://www.liverpool.ac.uk/science-and-engineering/news/stories/title,1536608,en.php'
		},
		{
			title: 'The Sky’s the Limit: Liverpool Students Launch First Rocket',
			date: '24 July 2024',
			url: 'https://news.liverpool.ac.uk/2024/07/24/the-skys-the-limit-liverpool-students-launch-first-rocket/'
		}
	];

	const newsletterWeeks2024_25 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
	const newsletterWeeks2026_27 = [1];

	function createNewsletters(academicYear: string, weeks: number[]) {
		return weeks.map((week) => ({
			week,
			cover: `/assets/newsletter/${academicYear}/${academicYear}_week${week}/${academicYear}_week${week}.png`,
			pdf: `/assets/newsletter/${academicYear}/${academicYear}_week${week}/${academicYear}_week${week}.pdf`
		}));
	}

	const newsletters2024_25 = createNewsletters('2024_25', newsletterWeeks2024_25);
	const newsletters2026_27 = createNewsletters('2026_27', newsletterWeeks2026_27);

	const newsletterYears = [
		{
			label: '2026–27',
			newsletters: newsletters2026_27
		},
		{
			label: '2024–25',
			newsletters: newsletters2024_25
		}
	];

	let openNewsletter: { week: number; pdf: string } | null = null;

	function closeNewsletter() {
		openNewsletter = null;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeNewsletter();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeNewsletter();
		}
	}
</script>

<svelte:head>
	<title>News | LASER</title>
	<meta name="description" content="News, announcements and newsletters from LASER." />
</svelte:head>

<div class="page">
	<header class="page-header">
		<h1>News</h1>
		<p>Read about LASER in the University of Liverpool news and explore our newsletters.</p>
	</header>

	<main class="content">
		<section class="news-column" aria-labelledby="latest-news">
			<div class="section-heading">
				<p class="section-number">01</p>
				<h2 id="latest-news">In the news</h2>
			</div>
			<div class="article-list">
				{#each articles as article}
					<a class="article-card" href={article.url} target="_blank" rel="noreferrer">
						<span class="article-date">{article.date}</span>
						<span class="article-title">{article.title}</span>
						<span class="read-more">Read article <span aria-hidden="true">↗</span></span>
					</a>
				{/each}
			</div>
		</section>

		<section class="newsletter-column" aria-labelledby="newsletters">
			<div class="section-heading">
				<p class="section-number">02</p>
				<h2 id="newsletters">Newsletters</h2>
			</div>
			<div class="newsletter-years">
				{#each newsletterYears as year}
					<details class="year-folder" open>
						<summary>
							<span class="folder-icon" aria-hidden="true">▸</span>
							<span>{year.label} academic year</span>
							<span class="newsletter-count">{year.newsletters.length} newsletters</span>
						</summary>
						<div class="newsletter-grid">
							{#each year.newsletters as newsletter}
								<button
									class="newsletter-card"
									type="button"
									on:click={() => (openNewsletter = newsletter)}
									aria-label={`Open LASER newsletter week ${newsletter.week} PDF in a popup`}
								>
									<img src={newsletter.cover} alt={`LASER newsletter week ${newsletter.week} cover`} />
									<span>Week {newsletter.week} <span aria-hidden="true">↗</span></span>
								</button>
							{/each}
						</div>
					</details>
				{/each}
			</div>
		</section>
	</main>
</div>

<svelte:window on:keydown={handleKeydown} />

{#if openNewsletter}
	<div class="modal-backdrop" role="presentation" on:click={handleBackdropClick}>
		<div class="modal" role="dialog" aria-modal="true" aria-label={`LASER newsletter week ${openNewsletter.week}`}>
			<div class="modal-header">
				<h2>Newsletter Week {openNewsletter.week}</h2>
				<button class="close-button" type="button" aria-label="Close newsletter" on:click={closeNewsletter}>×</button>
			</div>
			<iframe
				title={`LASER newsletter week ${openNewsletter.week}`}
				src={openNewsletter.pdf}
			></iframe>
		</div>
	</div>
{/if}

<style>
	:global(*) { box-sizing: border-box; }
	.page { background: #fff; color: #111; font-family: 'Exo 2 Variable', sans-serif; }
	.page-header { padding: 130px 24px 90px; color: #fff; text-align: center; background: url('/src/lib/assets/background-2.jpg') center 35% / cover no-repeat; }
	.section-number { color: #58a6ff; font-family: 'Orbitron Variable', sans-serif; letter-spacing: .12em; text-transform: uppercase; }
	.page-header h1 { margin: 16px 0 12px; font-family: 'Orbitron Variable', sans-serif; font-size: clamp(2.5rem, 7vw, 5rem); }
	.page-header > p:last-child { margin: 0; font-size: 1.1rem; }
	.content { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: clamp(40px, 7vw, 110px); max-width: 1250px; margin: 0 auto; padding: 80px 24px 110px; }
	.section-heading { display: flex; align-items: baseline; gap: 20px; margin-bottom: 30px; border-bottom: 2px solid #111; }
	.section-number { margin: 0; color: #777; font-size: .75rem; }
	h2 { margin: 0 0 14px; font-family: 'Orbitron Variable', sans-serif; font-size: clamp(1.7rem, 4vw, 2.7rem); }
	.article-list { display: grid; gap: 14px; }
	.article-card { display: flex; flex-direction: column; gap: 9px; padding: 22px; color: #111; border: 1px solid #d4d4d4; background: #f7f7f7; text-decoration: none; transition: transform .2s ease, border-color .2s ease, background .2s ease; }
	.article-card:hover, .article-card:focus-visible { transform: translateX(5px); border-color: #58a6ff; background: #eef6ff; }
	.article-date { color: #666; font-size: .85rem; text-transform: uppercase; letter-spacing: .08em; }
	.article-title { font-family: 'Orbitron Variable', sans-serif; font-size: 1.05rem; line-height: 1.35; }
	.read-more { color: #236da9; font-size: .95rem; }
	.newsletter-years { display: grid; gap: 18px; }
	.year-folder { border: 1px solid #d4d4d4; background: #f7f7f7; }
	.year-folder summary { display: flex; align-items: center; gap: 12px; padding: 18px 20px; cursor: pointer; list-style: none; font-family: 'Orbitron Variable', sans-serif; }
	.year-folder summary::-webkit-details-marker { display: none; }
	.folder-icon { color: #236da9; font-size: 1.2rem; transition: transform .2s ease; }
	.year-folder[open] .folder-icon { transform: rotate(90deg); }
	.newsletter-count { margin-left: auto; color: #666; font-family: 'Exo 2 Variable', sans-serif; font-size: .9rem; }
	.year-folder > .newsletter-grid { padding: 0 20px 22px; }
	.newsletter-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
	.newsletter-card { display: block; width: 100%; padding: 0; color: #111; border: 0; background: transparent; font: inherit; text-align: left; cursor: pointer; }
	.newsletter-card img { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: cover; border: 1px solid #d4d4d4; box-shadow: 0 4px 12px rgba(0, 0, 0, .12); transition: transform .2s ease, box-shadow .2s ease; }
	.newsletter-card span { display: block; padding-top: 10px; font-family: 'Orbitron Variable', sans-serif; font-size: .85rem; }
	.newsletter-card:hover img, .newsletter-card:focus-visible img { transform: translateY(-4px); box-shadow: 0 8px 18px rgba(0, 0, 0, .2); }
	.modal-backdrop { position: fixed; inset: 0; z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 3vh 3vw; background: rgba(0, 0, 0, .8); }
	.modal { display: flex; flex-direction: column; width: min(1100px, 100%); height: min(90vh, 900px); overflow: hidden; background: #fff; border-radius: 6px; box-shadow: 0 10px 40px rgba(0, 0, 0, .45); }
	.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 12px 18px; color: #fff; background: #111; }
	.modal-header h2 { margin: 0; font-family: 'Orbitron Variable', sans-serif; font-size: 1.1rem; }
	.close-button { padding: 0 8px; color: #fff; border: 0; background: transparent; font-size: 2rem; line-height: 1; cursor: pointer; }
	.close-button:focus-visible { outline: 2px solid #58a6ff; }
	.modal iframe { width: 100%; flex: 1; border: 0; }
	@media (max-width: 800px) {
		.content { grid-template-columns: 1fr; padding-top: 60px; }
	}
	@media (max-width: 500px) {
		.page-header { padding: 110px 24px 70px; }
		.newsletter-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
	}
</style>
