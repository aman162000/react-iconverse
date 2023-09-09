
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M8.31 189.9l176-151.1c15.41-13.3 39.69-2.509 39.69 18.16v303.1c0 20.7-24.31 31.45-39.69 18.16l-176-151.1C-2.753 216.6-2.784 199.4 8.31 189.9z"/><path className="fa-secondary" d="M223.1 136.1C384.6 137.9 512 170.1 512 322.3c0 61.44-39.59 122.3-83.34 154.1c-13.66 9.938-33.09-2.531-28.06-18.62c45.34-145-21.5-183.5-176.6-185.8V136.1z"/>
</>],
['light',<>
	<path d="M512 400v31.1C512 440.8 504.8 448 496 448S480 440.8 480 432v-31.1c0-79.41-64.59-143.1-144-143.1H60.2l158.1 131.7c6.781 5.656 7.688 15.75 2.031 22.53C217.1 414 212.6 416 208 416c-3.625 0-7.25-1.219-10.25-3.719l-192-159.1C2.094 249.3 0 244.7 0 239.1c0-4.75 2.094-9.247 5.75-12.28l192-159.1C204.5 62.07 214.6 62.94 220.3 69.75c5.656 6.781 4.75 16.87-2.031 22.53L60.2 224H336C433 224 512 302.1 512 400z"/>
</>],
['regular',<>
	<path d="M512 336v119.1C512 469.3 501.3 480 488 480s-24-10.75-24-23.1v-119.1c0-57.34-46.66-103.1-104-103.1H88.51l127.2 109.8c10.03 8.656 11.12 23.81 2.469 33.84C213.4 381.2 206.7 384 200 384c-5.562 0-11.16-1.909-15.69-5.847l-176-151.1C3.029 221.6 0 214.1 0 208C0 201 3.029 194.4 8.31 189.9l176-151.1c9.1-8.718 25.16-7.575 33.85 2.487c8.656 10.03 7.562 25.19-2.469 33.84L88.51 184H360C443.8 184 512 252.2 512 336z"/>
</>],
['solid',<>
	<path d="M8.31 189.9l176-151.1c15.41-13.3 39.69-2.509 39.69 18.16v80.05C384.6 137.9 512 170.1 512 322.3c0 61.44-39.59 122.3-83.34 154.1c-13.66 9.938-33.09-2.531-28.06-18.62c45.34-145-21.5-183.5-176.6-185.8v87.92c0 20.7-24.31 31.45-39.69 18.16l-176-151.1C-2.753 216.6-2.784 199.4 8.31 189.9z"/>
</>],
['thin',<>
	<path d="M512 367.1v72C512 444.4 508.4 448 504 448s-8-3.594-8-8V367.1c0-66.16-53.83-120-120-120H29.3l175.1 153.1c3.328 2.906 3.672 7.969 .75 11.31C204.4 415.1 202.2 415.1 200 415.1c-1.875 0-3.75-.6563-5.266-1.969l-192-168C1 244.5 0 242.3 0 239.1c0-2.313 1-4.503 2.734-6.034l192-168c3.312-2.875 8.359-2.563 11.28 .75c2.922 3.344 2.578 8.406-.75 11.31L29.3 231.1H376C450.1 231.1 512 292.1 512 367.1z"/>
</>],

]);

const Reply: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Reply.displayName = "Reply";

export default Reply;