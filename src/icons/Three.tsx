
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M320 344c0 74.98-61.02 136-136 136H103.6c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25c5.922 17.77 22.48 29.7 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41C45.39 239.3 48.66 225.3 58.38 216.4l131.4-120.4H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19l-131.4 120.4H184C258.1 208 320 269 320 344z"/>
</>],
['light',<>
	<path d="M320 352c0 70.59-57.42 128-128 128H93.09c-41.94 0-79.02-26.72-92.27-66.5c-2.797-8.375 1.734-17.44 10.11-20.25c8.422-2.812 17.44 1.75 20.23 10.12C40.08 430.1 64.95 448 93.09 448H192c52.94 0 96-43.06 96-96s-43.06-96-96-96H80C73.41 256 67.5 251.1 65.09 245.8c-2.391-6.125-.7813-13.09 4.047-17.56L247.1 64H16C7.156 64 0 56.84 0 48S7.156 32 16 32h272c6.594 0 12.5 4.031 14.91 10.19c2.391 6.125 .7813 13.09-4.047 17.56L120.9 224H192C262.6 224 320 281.4 320 352z"/>
</>],
['regular',<>
	<path d="M188.3 480H98.14c-44.03 0-82.98-28.06-96.91-69.84c-4.188-12.58 2.594-26.17 15.17-30.36c12.61-4.234 26.17 2.609 30.36 15.17C54.16 417.1 74.8 432 98.14 432h90.17C234.5 432 272 394.5 272 348.3c0-46.16-37.55-83.7-83.69-83.7H88c-9.797 0-18.61-5.953-22.27-15.03C62.08 240.5 64.31 230.1 71.36 223.3L220.4 80H24C10.75 80 0 69.25 0 56S10.75 32 24 32h256c9.797 0 18.61 5.953 22.27 15.03c3.656 9.094 1.422 19.48-5.625 26.27L147.6 216.6h40.72C260.9 216.6 320 275.7 320 348.3C320 420.9 260.9 480 188.3 480z"/>
</>],
['solid',<>
	<path d="M320 344c0 74.98-61.02 136-136 136H103.6c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25c5.922 17.77 22.48 29.7 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41C45.39 239.3 48.66 225.3 58.38 216.4l131.4-120.4H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19l-131.4 120.4H184C258.1 208 320 269 320 344z"/>
</>],
['thin',<>
	<path d="M320 355.7C320 424.2 264.2 480 195.7 480H88.06c-39.83 0-75.06-25.41-87.66-63.19c-1.391-4.188 .875-8.719 5.062-10.12c4.219-1.375 8.719 .875 10.12 5.062C26 443 55.13 464 88.06 464h107.6c59.72 0 108.3-48.59 108.3-108.3s-48.59-108.3-108.3-108.3H72c-3.297 0-6.25-2.031-7.453-5.094S64.16 235.7 66.58 233.5L267.5 48H8.003c-4.422 0-7.1-3.594-7.1-8S3.581 32 8.003 32h279.1c3.297 0 6.25 2.031 7.453 5.094c1.203 3.062 .3906 6.562-2.031 8.781l-200.1 185.5h103.2C264.2 231.4 320 287.2 320 355.7z"/>
</>],

]);

const Three: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Three.displayName = "Three";

export default Three;