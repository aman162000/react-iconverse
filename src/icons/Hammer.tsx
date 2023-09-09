
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M568.1 196.3l-22.62-22.62c-4.533-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 18.95 7.688 37.5 21.09 50.91l49.16 49.14c13.44 13.45 31.39 20.86 50.54 20.86c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3z"/><path className="fa-secondary" d="M353.1 227.5L122.9 490.9C108.8 504.1 90.44 512 71.1 512s-36.88-7-50.94-21.06c-28.13-28.12-28.09-73.72 .0371-101.8l263.5-230.3c2.598 3.906 5.611 7.619 8.951 10.96l49.16 49.14C345.9 222.1 349.5 224.1 353.1 227.5z"/>
</>],
['light',<>
	<path d="M292.3 261.1L99.41 468.4c-14.91 14.94-40.97 14.94-55.88 0c-15.41-15.41-15.41-40.47-.4219-55.47l207.8-193.3C257.3 213.7 257.7 203.6 251.7 197.1C245.6 190.6 235.6 190.3 229.1 196.3l-208.2 193.7c-27.88 27.88-27.73 73.13 .1486 101C34.56 504.4 52.36 512 71.47 512s37.07-7.438 50.97-21.34l193.3-207.8c6.016-6.469 5.657-16.59-.8282-22.62C308.4 254.3 298.3 254.7 292.3 261.1zM571.3 196.7c-6.251-6.25-16.38-6.25-22.63 0l-5.036 5.035l-46.72-43.91c2.063-24.25-6.485-48.19-23.74-65.44l-42.02-42C398.7 17.88 355.5 0 309.5 0C263.6 0 220.4 17.91 187.9 50.38C181 57.3 174.6 61.85 176.2 71.53c.8282 5.062 4.047 9.438 8.641 11.75l80.29 40.13v2.938c0 21.81 8.86 43.19 24.28 58.59l45.64 45.63C352.4 248 376.8 256.7 401.3 254.3l47.14 42.71l-11.73 11.73c-6.25 6.25-6.25 16.38 0 22.62C439.8 334.4 443.9 336 447.1 336s8.188-1.562 11.31-4.688l112-112C577.6 213.1 577.6 202.9 571.3 196.7zM471.1 274.3L417.2 225.5C413.4 222 408.2 220.6 403.3 221.6c-16.56 3.281-33.78-1.875-45.6-13.69l-45.64-45.63c-9.47-9.469-14.91-22.56-14.91-35.97V113.5c0-6.062-3.422-11.59-8.844-14.31L219.5 64.81C244.6 43.56 276.2 32 309.5 32c37.41 0 72.57 14.56 99.01 41l42.02 42c11.84 11.88 16.97 28.97 13.69 45.75c-1.063 5.375 .7344 10.94 4.75 14.72l52.01 48.88L471.1 274.3z"/>
</>],
['regular',<>
	<path d="M21.09 389.1c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l202.2-231.5L252.8 186.7L21.09 389.1zM571.3 194.9l-22.73-22.86c-6.279-6.148-16.45-6.277-22.73 0l-11.3 11.43l-29.01-29.01c5.652-21.48 .377-45.09-16.45-61.91l-45.47-45.46C392.2 15.7 350.1 0 309.9 0c-41.2 0-82.27 15.7-113.7 47.09l68.2 68.19v18.84c0 8.035 1.633 15.95 4.521 23.36l85.03 85.52c7.662 3.016 15.7 4.52 23.74 4.52c5.652 0 11.3-.75 16.83-2.133l29.01 29.01l-11.3 11.43c-6.279 6.281-6.279 16.45 0 22.73l22.61 22.73c6.281 6.281 16.46 6.281 22.86 0l113.7-113.7C577.6 211.4 577.6 201.2 571.3 194.9zM469 251.7L409 191.6l-26.75 7.156c-9.545 2.516-15.2-3.641-15.57-3.891l-49.36-49.48c-3.014-2.887-4.646-7.035-4.646-11.3V95.32L272.1 54.75c11.93-4.27 24.62-6.527 37.8-6.527c30.02 0 58.28 11.68 79.5 32.9l45.47 45.46c5.904 5.906 4.521 13.31 4.02 15.57l-7.158 26.75l60.04 60.03L469 251.7z"/>
</>],
['solid',<>
	<path d="M568.1 196.3l-22.62-22.62c-4.533-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 18.95 7.688 37.5 21.09 50.91l49.16 49.14c13.44 13.45 31.39 20.86 50.54 20.86c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3zM270.9 192.4c-3.846-3.846-7.197-8.113-10.37-12.49l-239.5 209.2c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l209.1-239.4c-4.141-3.061-8.184-6.289-11.89-9.996L270.9 192.4z"/>
</>],
['thin',<>
	<path d="M568.1 196.3l-22.62-22.62c-4.535-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 14.18 4.352 28.2 12.14 39.95l-263.5 230.3c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l230.2-263.5c11.71 7.955 25.6 12.32 40.15 12.32c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3zM111.6 479.6C101 490.2 86.95 496 71.1 496s-29.01-5.828-39.59-16.41c-21.83-21.83-21.83-57.35-.7832-78.45l263.2-230.1l46.14 46.13L111.6 479.6zM557.7 218.9l-90.54 90.5c-3.135 3.137-8.174 3.135-11.31 0l-22.62-22.62c-3.117-3.119-3.117-8.195 .002-11.31l16.97-16.97l-37.47-37.47c-8.195 1.617-12.6 2.736-19.46 2.736c-14.88 0-28.8-5.742-39.23-16.18l-49.16-49.14c-10.43-10.43-16.41-24.86-16.41-39.59V95.17L203.9 52.86C231.4 29.01 266.3 16 303.1 16c40.6 0 78.78 15.81 107.5 44.52l45.25 45.25c13.06 13.07 18.7 31.89 15.09 50.35l-1.639 8.363L506.8 201.9l16.96-16.97c3.156-3.158 8.209-3.111 11.32-.0039l22.62 22.62C560.8 210.7 560.8 215.8 557.7 218.9z"/>
</>],

]);

const Hammer: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Hammer.displayName = "Hammer";

export default Hammer;