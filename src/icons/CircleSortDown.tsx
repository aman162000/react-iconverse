
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M164.5 288h182.9c16.5 0 24.69 19.88 13.19 31.38l-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-2-13-5.375L151.4 319.4C139.9 307.9 148 288 164.5 288z"/><path className="fa-secondary" d="M256 512c141.4 0 256-114.6 256-256s-114.6-256-256-256c-141.4 0-256 114.6-256 256S114.6 512 256 512zM151.4 192.6L243 101.4C246.5 97.1 251.1 95.1 256 95.1s9.625 2 13.12 5.375l91.5 91.25c11.5 11.5 3.375 31.38-13.12 31.38h-183C148 223.1 139.9 204.1 151.4 192.6zM164.5 288h182.9c16.5 0 24.69 19.88 13.19 31.38l-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-2-13-5.375L151.4 319.4C139.9 307.9 148 288 164.5 288z"/>
</>],
['light',<>
	<path d="M347.4 288H164.9c-16.38 0-24.62 19.88-13 31.38L243 410.6C246.5 414 251.1 416 256 416s9.719-1.875 13.09-5.375l91.16-91.25C371.9 307.9 363.8 288 347.4 288zM256 378.4L197.8 320h116.6L256 378.4zM267.3 100.8c-6.25-6.25-16.38-6.25-22.62 0l-96 96C142.6 203 142.8 212.9 148.9 219C155.1 225.1 165 225.3 171.3 219.3L256 134.6l84.75 84.63c6.25 6 16.12 5.875 22.25-.25s6.25-16 .25-22.25L267.3 100.8zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M269.1 117.4C265.6 114 260.9 112 256 112S246.5 114 243 117.4L151.4 208.6C139.9 220.1 148 240 164.5 240h183c16.5 0 24.62-19.88 13.12-31.38L269.1 117.4zM197.3 208l58.7-58.47L314.7 208H197.3zM347.5 272h-183C148 272 139.9 291.9 151.4 303.4L243 394.6C246.5 398 251.1 400 256 400s9.625-2 13.12-5.375l91.5-91.25C372.1 291.9 364 272 347.5 272zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M197.3 192h117.3L256.1 133.5L197.3 192zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256c141.4 0 256-114.6 256-256S397.4 0 256 0zM360.6 319.4l-91.53 91.25C265.6 414 260.9 416 256 416s-9.5-1.1-13-5.375L151.4 319.4C139.9 307.9 148 288 164.5 288h182.9C363.9 288 372.1 307.9 360.6 319.4zM347.5 223.1h-183c-16.5 0-24.62-19.88-13.12-31.38L243 101.4C246.5 98 251.1 95.1 256 95.1s9.625 2 13.12 5.375l91.5 91.25C372.1 204.1 364 223.1 347.5 223.1z"/>
</>],
['thin',<>
	<path d="M335.8 288H176.2C166.2 288 157.7 293.7 153.9 302.9c-3.812 9.156-1.844 19.22 5.156 26.22l80.09 80C243.8 413.5 249.8 416 256 416c6.219 0 12.44-2.531 17.12-7.031l79.84-79.88c7-7 8.969-17.06 5.156-26.22C354.3 293.7 345.8 288 335.8 288zM341.7 317.8l-79.72 79.75c-3.219 3.125-8.531 3.062-11.62 .125L170.3 317.8C166.8 314.3 168.2 310.2 168.7 309C169.1 307.8 171.1 304 176.2 304h159.7c5.031 0 7.031 3.812 7.5 5C343.8 310.2 345.2 314.3 341.7 317.8zM273 102.9C263.9 94.13 248.5 93.97 239 103L154.4 186.3C151.3 189.4 151.2 194.5 154.3 197.6c3.094 3.125 8.156 3.188 11.31 .0625l84.56-83.22c3.344-3.219 8.625-3 11.66-.0938l84.53 83.31C347.9 199.2 349.1 200 352 200c2.062 0 4.125-.7813 5.688-2.375c3.125-3.156 3.062-8.219-.0625-11.31L273 102.9zM256 0c-141.4 0-256 114.6-256 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleSortDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleSortDown.displayName = "CircleSortDown";

export default CircleSortDown;
