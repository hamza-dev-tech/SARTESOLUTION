// components/InfolinksAds.js
import Script from 'next/script';

const InfolinksAds = () => (
  <>
    <Script
      id="infolinks-ads"
      type="text/javascript"
      strategy="afterInteractive"
    >
      {`
        var infolinks_pid = 3423802;
        var infolinks_wsid = 0;
      `}
    </Script>
    <Script
      async
      src="//resources.infolinks.com/js/infolinks_main.js"
    ></Script>
  </>
);

export default InfolinksAds;
