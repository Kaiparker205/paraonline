import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import classes from "./header.module.css";

const ParapharmacyAd = () => {
  return (
    <div className={classes.zoneTypeWrite}>
      <Typewriter
        words={[
          `Welcome to [your website name], the online parapharmacy that offers you the best products for your health and wellness. `,
          `Whether you need vitamins, supplements, cosmetics, or personal care items, you can find them all at [your website name], the most trusted and convenient parapharmacy on the web. `,
          // ... add remaining sentences here
        ]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={10}
        delaySpeed={1000}
      />
    </div>
  );
};

export default ParapharmacyAd;
