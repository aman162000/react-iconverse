
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M439.7 189.9l-176-151.1c-15.41-13.3-39.69-2.509-39.69 18.16v82.84C94.86 149.1 0 191 0 322.3c0 61.44 39.59 122.3 83.34 154.1c13.66 9.938 33.09-2.531 28.06-18.62c-38.48-123.1 4.102-169.3 112.6-181.9v84.04c0 20.7 24.31 31.45 39.69 18.16l176-151.1C450.8 216.6 450.8 199.4 439.7 189.9z"/><path className="fa-secondary" d="M567.7 189.9l-176-151.1c-15.41-13.3-39.69-2.509-39.69 18.16V71.83l157.7 136.2l-157.7 136.2v15.83c0 20.7 24.31 31.45 39.69 18.16l176-151.1C578.8 216.6 578.8 199.4 567.7 189.9z"/>
</>],
['light',<>
	<path d="M0 400v31.1C0 440.8 7.156 448 16 448S32 440.8 32 432v-31.1c0-79.41 64.59-143.1 144-143.1h211.8l-158.1 131.7c-6.781 5.656-7.688 15.75-2.031 22.53C230.9 414 235.4 416 240 416c3.625 0 7.25-1.219 10.25-3.719l192-159.1C445.9 249.3 448 244.7 448 239.1c0-4.75-2.094-9.247-5.75-12.28l-192-159.1C243.5 62.07 233.4 62.95 227.7 69.76C222.1 76.54 222.1 86.63 229.8 92.29l158.1 131.7H176C78.97 224 0 302.1 0 400zM357.8 387.7c-6.781 5.656-7.688 15.75-2.031 22.53c3.156 3.781 7.719 5.75 12.28 5.75c3.625 0 7.25-1.219 10.25-3.719l192-159.1C573.9 249.3 576 244.7 576 239.1c0-4.75-2.094-9.247-5.75-12.28l-192-159.1c-6.781-5.656-16.88-4.781-22.53 2.031c-5.656 6.781-4.75 16.87 2.031 22.53L535 240L357.8 387.7z"/>
</>],
['regular',<>
	<path d="M448 208c0-6.968-3.029-13.6-8.31-18.17l-176-151.1c-10-8.718-25.16-7.575-33.85 2.487c-8.656 10.03-7.562 25.19 2.469 33.84l127.2 109.8H152c-83.81 0-152 68.18-152 151.1v119.1C0 469.3 10.75 480 24 480s24-10.75 24-23.1v-119.1c0-57.34 46.66-103.1 104-103.1h207.5l-127.2 109.8c-10.03 8.656-11.12 23.81-2.469 33.84C234.6 381.2 241.3 384 248 384c5.562 0 11.16-1.909 15.69-5.846l176-151.1C444.1 221.6 448 214.1 448 208zM567.7 189.9l-176-151.1c-10-8.718-25.16-7.575-33.85 2.487c-8.656 10.03-7.562 25.19 2.469 33.84l154.1 133.8l-154.1 133.8c-10.03 8.656-11.12 23.81-2.469 33.84c4.75 5.5 11.44 8.312 18.16 8.312c5.562 0 11.16-1.909 15.69-5.846l176-151.1C572.1 221.6 576 214.1 576 208C576 201 572.1 194.4 567.7 189.9z"/>
</>],
['solid',<>
	<path d="M439.7 189.9l-176-151.1c-15.41-13.3-39.69-2.509-39.69 18.16v82.84C94.86 149.1 0 191 0 322.3c0 61.44 39.59 122.3 83.34 154.1c13.66 9.938 33.09-2.531 28.06-18.62c-38.48-123.1 4.102-169.3 112.6-181.9v84.04c0 20.7 24.31 31.45 39.69 18.16l176-151.1C450.8 216.6 450.8 199.4 439.7 189.9zM567.7 189.9l-176-151.1c-15.41-13.3-39.69-2.509-39.69 18.16V71.83l157.7 136.2l-157.7 136.2v15.83c0 20.7 24.31 31.45 39.69 18.16l176-151.1C578.8 216.6 578.8 199.4 567.7 189.9z"/>
</>],
['thin',<>
	<path d="M370.7 401.1c-3.328 2.906-3.672 7.969-.75 11.31c1.578 1.781 3.797 2.719 6.016 2.719c1.875 0 3.75-.6563 5.266-1.969l192-168C575 244.5 576 242.3 576 239.1c0-2.313-1-4.503-2.734-6.034l-192-168c-3.328-2.875-8.375-2.563-11.28 .75c-2.922 3.344-2.578 8.406 .75 11.31l185.1 161.1L370.7 401.1zM0 367.1v72C0 444.4 3.578 448 8 448s8-3.594 8-8V367.1c0-66.16 53.83-120 120-120h282.7l-175.1 153.1c-3.328 2.906-3.672 7.969-.75 11.31C243.6 415.1 245.8 415.1 248 415.1c1.875 0 3.75-.6563 5.266-1.969l192-168C447 244.5 448 242.3 448 239.1c0-2.313-1-4.503-2.734-6.034l-192-168C249.9 63.09 244.9 63.4 241.1 66.71C239.1 70.06 239.4 75.12 242.7 78.03l175.1 153.1H136C61.02 231.1 0 292.1 0 367.1z"/>
</>],

]);

const ShareAll: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ShareAll.displayName = "ShareAll";

export default ShareAll;