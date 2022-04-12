import React from 'react';
import fh2560 from 'assets/f2560.h.webp';
import fh2048 from 'assets/f2048.h.webp';
import fh1536 from 'assets/f1536.h.webp';
import fh1200 from 'assets/f1200.h.webp';
import fh1920 from 'assets/f1920.h.webp';
import fh1152 from 'assets/f1152.h.webp';
import fh900 from 'assets/f900.h.webp';
import fh1280 from 'assets/f1280.h.webp';
import fh1024 from 'assets/f1024.h.webp';
import fh768 from 'assets/f768.h.webp';
import fh600 from 'assets/f600.h.webp';
import './Footer.sass';

const Footer: React.FC = () => (
    <div className="footer">
        <picture>
            <source
                media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
                srcSet={fh2560}
            />
            <source
                media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
                srcSet={fh2048}
            />
            <source
                media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
                srcSet={fh1536}
            />
            <source
                media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                srcSet={fh1200}
            />
            <source
                media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
                srcSet={fh1920}
            />
            <source
                media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
                srcSet={fh1536}
            />
            <source
                media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
                srcSet={fh1152}
            />
            <source
                media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                srcSet={fh900}
            />
            <source media="(min-width: 1280px)" srcSet={fh1280} />
            <source media="(min-width: 1024px)" srcSet={fh1024} />
            <source media="(min-width: 768px)" srcSet={fh768} />
            <source srcSet={fh600} />
            <img loading="eager" alt="" src={fh768} className="css-1ago99h" />
        </picture>
    </div>
);

export default Footer;
