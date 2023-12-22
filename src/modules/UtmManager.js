export const UtmManager = () => {
  // Get URL params
  const searchParams = new URLSearchParams(window.location.search);
  const utmMediumParam = searchParams.get('utm_medium');
  const utmCampaignParam = searchParams.get('utm_campaign');
  console.log('utmMediumParam:', utmMediumParam);
  console.log('utmCampaignParam:', utmCampaignParam);

  // Store URL params
  let utmMediumStorage = localStorage.getItem('utm_medium');
  let utmCampaignStorage = localStorage.getItem('utm_campaign');

  if (utmMediumStorage == null) {
    localStorage.setItem('utm_medium', utmMediumParam);
  }

  if (utmCampaignStorage == null) {
    localStorage.setItem('utm_campaign', utmCampaignParam);
  }
}