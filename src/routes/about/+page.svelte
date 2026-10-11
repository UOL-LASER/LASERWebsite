<!--Peter Hamilton 21/2/24-->
<!--Index.svelte-->
<script lang="ts">
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

    import laserlogo from '/src/lib/assets/logo-2.png';
    import Team26 from '../../components/about/committee.svelte';
    import JWPhoto from '/src/lib/assets/committee/joseph-wood.jpg';
    import KKPhoto from '/src/lib/assets/committee/karl-king.jpg';
    import MKPhoto from '/src/lib/assets/committee/muhammad-khan.jpg';
	import JSPhoto from '/src/lib/assets/committee/juny-suh.jpg';
	import IPPhoto from '/src/lib/assets/committee/inga-panko.jpg';
	import SZPhoto from '/src/lib/assets/committee/sirius-zhao.jpg';

    const teamMembers26 = [
        {
            image: MKPhoto,
            name: 'Muhammad Khan',
            position: 'President',
            degree: 'BEng Aerospace Engineering'
        },
        {
            image: JSPhoto,
            name: 'Juny Suh',
            position: 'Vice President',
            degree: 'MEng Aerospace Engineering'
        },
        {
            image: JWPhoto,
            name: 'Joseph Wood',
            position: 'Chairperson',
            degree: 'PhD Electrical Engineering & Electronics'
        },
        {
            image: IPPhoto,
            name: 'Inga Panko',
            position: 'Lab Safety Officer',
            degree: 'MEng Aerospace Engineering'
        },
        {
            image: KKPhoto,
            name: 'Karl King',
            position: 'Technical Advisor',
            degree: 'MEng Aerospace Engineering'
        },
        {
            image: SZPhoto,
            name: 'Sirius Zhao',
            position: 'Treasurer',
            degree: 'BA Accounting and Finance'
        },
        {
            image: laserlogo,
            name: 'Vacant',
            position: 'Outreach Officer',
            degree: 'N/A'
        },
        {
            image: laserlogo,
            name: 'Vacant',
            position: 'Web Developer',
            degree: 'N/A'
        }]

</script>

<svelte:head>
	<title>About | LASER</title>
</svelte:head>

<div class="body">
	<div class="header">
		<h1>About us</h1>
		<h2>
			A University of Liverpool student-run engineering society based in the Electrical Engineering and Electronics
			department within the School of Engineering. 
		</h2>
	</div>
	<div class="content-row">
		<div class="container">
			<h1>What is LASER?</h1>
			<div class="separator"></div>
			<p>
				LASER is a student-run Engineering society based in the Electrical and Electronics
				Engineering department, which is within the School of Engineering at the University of Liverpool. 
				We run multiple projects that span a broad range of fields and
				welcome new people to join at all times. All backgrounds and courses are welcome - even
				people who aren't interested in the technical side. Some of our current initiatives include
				an entry into the UKSEDS rocketry competition, workshops for learning new technical skills, personal projects,
				visits to engineering companies, and talks from experts in the industry. We want to create a
				friendly and social atmosphere where students can not only develop their engineering and
				management skills, but also gain important industrial skills that students don’t tend to
				learn during their time in University.
			</p>
		</div>
	</div>
	<div class="content-row">
		<h1>Our 2026/27 Committee:</h1>
		<p>Members who are selected to run and organise LASER for the 2026/27 academic year.</p>
		<div class="separator"></div>
		<Team26 members={teamMembers26} />
	</div>
	<div class="content-row">
		<div class="container">
			<h1>Our Funding sources:</h1>
			<p>We would like to thank the following for providing financial support to LASER.</p>
			<div class="separator"></div>
			<p>
				We would like to acknowledge the generous financial support we have recieved, which has been
				instrumental in enabling us to run various projects and the purchase of equipment for our
				lab space. This has been made possible through the funding provided by the <strong >Moruzzi Fund</strong>, the
				<strong>Electrical Engineering and Electronics department</strong>, and the <strong>Alumni and Friends Fund</strong>. 
				We are grateful for their support and look forward to continuing our work with them in the future.
			</p>
		</div>
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
		background-image: url('/src/lib/assets/about/header0.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 85%;
		text-align: center;
		padding: 40px;
		color: white;
		height: 475px;
	}

	.header h1 {
		font-family: 'Orbitron Variable', sans-serif;
		padding: 20px;
		font-size: 3rem;
		margin: 10px 0;
		z-index: 1;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.header h2 {
		font-family: 'Exo 2 Variable';
		padding: 20px;
		font-size: 1.5rem;
		margin: 10px 0;
		z-index: 1;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.content-row {
		padding: 20px;
		background-color: #ffffff;
		color: #000000;
		border-top: 1px solid rgb(255, 255, 255);
		margin: 10px auto;
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
			background-position: 50% 50%;
			height: 350px;
		}

		.header h1 {
			padding: 10px;
			margin: 15px auto;
		}

		.header h2 {
			padding: 10px;
			margin: 5px auto;
		}
	}
</style>
