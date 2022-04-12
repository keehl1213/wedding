import React from 'react';
import h3000 from 'assets/3000.h.webp';
import h1024 from 'assets/1024.h.webp';
import h2560 from 'assets/2560.h.webp';
import h2048 from 'assets/2048.h.webp';
import h1536 from 'assets/1536.h.webp';
import h2250 from 'assets/2250.h.webp';
import h1920 from 'assets/1920.h.webp';
import h1536v2 from 'assets/1536_2.h.webp';
import h1152 from 'assets/1152.h.webp';
import h1500 from 'assets/1500.h.webp';
import h1280 from 'assets/1280.h.webp';
import h768 from 'assets/768.h.webp';
import './HeaderBg.sass';

const HeaderBg: React.FC = () => (
    <picture className="header-bg">
        <source
            media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
            srcSet={h3000}
        />
        <source
            media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
            srcSet={h2560}
        />
        <source
            media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
            srcSet={h2048}
        />
        <source
            media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
            srcSet={h1536}
        />
        <source
            media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
            srcSet={h2250}
        />
        <source
            media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
            srcSet={h1920}
        />
        <source
            media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
            srcSet={h1536v2}
        />
        <source
            media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
            srcSet={h1152}
        />
        <source media="(min-width: 1280px)" srcSet={h1500} />
        <source media="(min-width: 1024px)" srcSet={h1280} />
        <source media="(min-width: 768px)" srcSet={h1024} />
        <source srcSet={h768} />
        <img loading="eager" alt="" src={h1024} />
    </picture>
);

export default HeaderBg;
