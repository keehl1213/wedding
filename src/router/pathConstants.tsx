export const FULLPAGE_PREFIX = '/';

const PATH = {
    HOME: '/',
    PHOTOS: `${FULLPAGE_PREFIX}/photos`,
    OUR_STORY: `${FULLPAGE_PREFIX}/our-story`,
    ABOUT_US: `${FULLPAGE_PREFIX}/about-us`,
};

export const keyMap = Object.keys(PATH).reduce(
    (prv, cur) => ({ ...prv, [PATH[cur]]: cur }),
    {}
);

export default PATH;
