export const UtmManager = () => {
  // Get URL params
  const searchParams = new URLSearchParams(window.location.search);
  const utmMediumParam = searchParams.get('utm_medium');
  // const utmCampaignParam = searchParams.get('utm_campaign');

  // Get local storage values
  let utmMediumStorage = localStorage.getItem('utm_medium');
  // let utmCampaignStorage = localStorage.getItem('utm_campaign');

  console.log('utmMediumParam:', utmMediumParam);
  // console.log('utmCampaignParam:', utmCampaignParam);
  console.log('utmMediumStorage:', utmMediumStorage);
  // console.log('utmCampaignStorage:', utmCampaignStorage);

  if (!utmMediumParam && !utmMediumStorage) {
    console.log('BOTH NULL > doing nothing');
  }
  else if (utmMediumParam && !utmMediumStorage) {
    localStorage.setItem('utm_medium', utmMediumParam);
    console.log('UTM HERE > storing UTM');
  }
  else if (!utmMediumParam && utmMediumStorage) {
    console.log('STORAGE HERE > doing nothing');
  }
  else if (utmMediumParam && utmMediumStorage) {
    if (utmMediumParam !== utmMediumStorage) {
      localStorage.setItem('utm_medium', utmMediumParam);
      console.log('BOTH HERE > UTM DIFFERENT from STORAGE > storing new UTM');
    }
    else {
      console.log('BOTH HERE and MATCHING > doing nothing');
    }
  }
  //
  // if (utmCampaignStorage == null) {
  //   localStorage.setItem('utm_campaign_local_storage', utmCampaignParam);
  //   console.log('utm_campaign is == null');
  // }
};
