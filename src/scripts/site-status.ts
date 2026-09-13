type SiteStatus = {
	label: string;
	ready: boolean;
};

const getSiteStatus = (ready: boolean): SiteStatus => ({
	label: 'Astro is ready',
	ready,
});

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const renderSiteStatus = (siteStatus: SiteStatus) => {
	const labelEl = document.querySelector<HTMLParagraphElement>('#site-label');
	const statusEl = document.querySelector<HTMLParagraphElement>('#site-ready');

	if (labelEl) labelEl.textContent = siteStatus.label;
	if (statusEl) statusEl.textContent = `Status: ${siteStatus.ready ? 'operational' : 'preparing'}`;
};

const applySiteStatus = async () => {
	renderSiteStatus(getSiteStatus(false));

	await wait(5000);

	renderSiteStatus(getSiteStatus(true));
};

void applySiteStatus();
