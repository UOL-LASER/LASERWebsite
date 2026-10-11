<!--Peter Hamilton 06/3/24-->
<script>
	import '@fontsource-variable/exo-2';
	import '@fontsource-variable/orbitron';

	import laserTOS from '$lib/assets/pdf/TOS/LASER Terms of Service.pdf';
	import laserComplaintsSOP from '$lib/assets/pdf/TOS/LASER Reporting and Complaint Handling Procedure.pdf';
	import orderForm from '$lib/assets/ORDER FORM BLANK.docx';
	import riskAssessment from '$lib/assets/DEPT_EEE_SINGLE_Risk_assessment_form.docx';

	/** @type {{ title: string; source: string; downloadOnly?: boolean } | null} */
	let openDocument = null;

	function closeDocument() {
		openDocument = null;
	}

	/** @param {KeyboardEvent} event */
	function handleKeydown(event) {
		if (event.key === 'Escape') {
			closeDocument();
		}
	}

	/** @param {MouseEvent} event */
	function handleBackdropClick(event) {
		if (event.target === event.currentTarget) {
			closeDocument();
		}
	}
</script>

<svelte:head>
	<title>Resources | LASER</title>
</svelte:head>

<div class="body">
	<div class="header">
		<h1>LASER Resources</h1>
		<h2>
			Find useful documents, guidance, and information for getting involved with LASER.
		</h2>
	</div>
	<div class="content-row">
		<h1>Order Form</h1>
		<p style="text-align: center;">
			Download the order form to request purchases through the EEE finance team.
		</p>
		<div class="separator"></div>
		<button
			class="resource-link"
			on:click={() => (openDocument = { title: 'Order Form', source: orderForm, downloadOnly: true })}
		>
			<span>Download Order Form</span>
			<span aria-hidden="true">↓</span>
		</button>
	</div>
	<div class="content-row">
		<h1>Risk Assessment</h1>
		<p style="text-align: center;">
			Download the risk assessment form for documenting hazards, risks, and control measures.
		</p>
		<div class="separator"></div>
		<button
			class="resource-link"
			on:click={() =>
				(openDocument = { title: 'Risk Assessment', source: riskAssessment, downloadOnly: true })}
		>
			<span>Download Risk Assessment</span>
			<span aria-hidden="true">↓</span>
		</button>
	</div>
	<div class="content-row">
		<h1>Terms of Service</h1>
		<p style="text-align: center;">
			This document outlines the standards and expectations for everyone participating in LASER.
		</p>
		<div class="separator"></div>
		<button class="resource-link" on:click={() => (openDocument = { title: 'Terms of Service', source: laserTOS })}>
			<span>Open Terms of Service</span>
			<span aria-hidden="true">↗</span>
		</button>
	</div>
	<div class="content-row">
		<h1>Complaints Handling Procedure</h1>
		<p style="text-align: center;">
			This document explains how concerns and complaints are handled within the group:
		</p>
		<div class="separator"></div>
		<button
			class="resource-link"
			on:click={() =>
				(openDocument = {
					title: 'Complaints Handling Procedure',
					source: laserComplaintsSOP
				})}
		>
			<span>Open Complaints Handling Procedure</span>
			<span aria-hidden="true">↗</span>
		</button>
		<div class="separator"></div>
		<p>
			If you have any questions about these resources or need further information, get in touch at
			laser@liverpool.ac.uk.
		</p>
	</div>
</div>

<svelte:window on:keydown={handleKeydown} />

{#if openDocument}
	<div class="modal-backdrop" role="presentation" on:click={handleBackdropClick}>
		<div
			class="modal"
			role="dialog"
			aria-modal="true"
			aria-label={openDocument.title}
		>
			<div class="modal-header">
				<h2>{openDocument.title}</h2>
				<button class="close-button" aria-label="Close document" on:click={closeDocument}>×</button>
			</div>
			{#if openDocument.downloadOnly}
				<div class="download-panel">
					<p>This Word document cannot be previewed in the browser.</p>
					<a class="download-link" href={openDocument.source} download>Download {openDocument.title}</a>
				</div>
			{:else}
				<iframe title={openDocument.title} src={openDocument.source}></iframe>
			{/if}
		</div>
	</div>
{/if}

<style>
	.body {
		background-color: white;
		margin: 0;
		padding: 0;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: url('/src/lib/assets/background-2.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 35%;
		text-align: center;
		padding: 40px;
		color: white;
		height: 475px;
	}

	.header h1 {
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 4vh;
		color: rgb(255, 255, 255);
		padding: 20px;
		margin: 10px auto;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.header h2 {
		font-family: 'Exo 2 Variable';
		font-size: 2vh;
		color: rgb(255, 255, 255);
		padding: 20px;
		margin: 10px auto;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.content-row {
		padding: 20px;
		background-color: #ffffff;
		color: #000000;
		border-top: 1px solid rgb(255, 255, 255);
		margin: 10px auto;
	}

	.resource-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: min(90%, 760px);
		padding: 18px 22px;
		margin: 10px auto 25px;
		background-color: #111111;
		border: 1px solid #111111;
		border-radius: 5px;
		color: #ffffff;
		font: inherit;
		font-family: 'Exo 2 Variable';
		font-size: 2.3vh;
		cursor: pointer;
		transition: background-color 0.2s ease, color 0.2s ease;
	}

	.resource-link:hover,
	.resource-link:focus-visible {
		background-color: #ffffff;
		color: #111111;
		outline: 2px solid #58a6ff;
		outline-offset: 3px;
	}

	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3vh 3vw;
		background: rgba(0, 0, 0, 0.8);
	}

	.modal {
		display: flex;
		flex-direction: column;
		width: min(1100px, 100%);
		height: min(90vh, 900px);
		background: #ffffff;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.45);
	}

	.modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 18px;
		background: #111111;
		color: #ffffff;
	}

	.modal-header h2 {
		margin: 0;
		font-family: 'Orbitron Variable', sans-serif;
		font-size: 1.1rem;
	}

	.close-button {
		padding: 0 8px;
		background: transparent;
		border: 0;
		color: #ffffff;
		font-size: 2rem;
		line-height: 1;
		cursor: pointer;
	}

	.close-button:focus-visible {
		outline: 2px solid #58a6ff;
	}

	.download-panel {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 24px;
		padding: 32px;
		font-family: 'Exo 2 Variable';
		font-size: 1.2rem;
		text-align: center;
	}

	.download-panel p {
		margin: 0;
	}

	.download-link {
		padding: 14px 22px;
		background-color: #111111;
		border: 1px solid #111111;
		border-radius: 5px;
		color: #ffffff;
		font-family: 'Exo 2 Variable';
		text-decoration: none;
	}

	.download-link:hover,
	.download-link:focus-visible {
		background-color: #ffffff;
		color: #111111;
		outline: 2px solid #58a6ff;
		outline-offset: 3px;
	}

	.modal iframe {
		width: 100%;
		flex: 1;
		border: none;
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
		font-size: 3vh;
		color: #000000;
		line-height: 1.6;
		padding: 20px;
		margin: 10px auto;
		text-align: center;
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
			height: 400px;
		}

		.header h1 {
			padding: 10px;
			margin: 15px auto;
		}

		.header h2 {
			padding: 10px;
			margin: 5px auto;
		}

		.modal-backdrop {
			padding: 0;
		}

		.modal {
			width: 100%;
			height: 100%;
			border-radius: 0;
		}
	}
</style>
