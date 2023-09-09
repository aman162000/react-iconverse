
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368 234c0 8.836-7.164 16-16 16h-54V304c0 8.836-7.163 16-16 16h-52c-8.835 0-16-7.164-16-16V250H160c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1V112c0-8.838 7.165-16 16-16h52c8.837 0 16 7.162 16 16v54H352c8.836 0 16 7.162 16 16V234z"/><path className="fa-secondary" d="M447.1 0h-384c-35.38 0-64 28.62-64 63.1v287.1c0 35.38 28.62 63.1 64 63.1h96v83.1c0 4.5 2.5 8.624 6.625 10.75c4 2 8.875 1.651 12.5-1.099l124.9-93.65h144c35.38 0 64-28.62 64-63.1V63.1C511.1 28.62 483.4 0 447.1 0zM368 234c0 8.836-7.164 16-16 16h-54V304c0 8.836-7.163 16-16 16h-52c-8.835 0-16-7.164-16-16V250H160c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1V112c0-8.838 7.165-16 16-16h52c8.837 0 16 7.162 16 16v54H352c8.836 0 16 7.162 16 16V234z"/>
</>],
['light',<>
	<path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.5 19.12 9.65l124.9-93.65h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM336 176H288V128c0-8.838-7.164-16-16-16h-32C231.2 112 224 119.2 224 128v48H176C167.2 176 160 183.2 160 191.1V224c0 8.836 7.164 15.1 16 15.1H224v48C224 296.8 231.2 304 240 304h32c8.836 0 16-7.166 16-16v-48h48C344.8 239.1 352 232.8 352 224V191.1C352 183.2 344.8 176 336 176z"/>
</>],
['regular',<>
	<path d="M336 176H288V128c0-8.801-7.199-16-16-16h-32C231.2 112 224 119.2 224 128v48H176C167.2 176 160 183.2 160 191.1V224c0 8.797 7.199 15.1 16 15.1H224v48C224 296.8 231.2 304 240 304h32c8.801 0 16-7.201 16-16v-48h48C344.8 239.1 352 232.8 352 224V191.1C352 183.2 344.8 176 336 176zM447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.5 19.12 9.65l124.9-93.65h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/>
</>],
['solid',<>
	<path d="M447.1 0h-384c-35.38 0-64 28.62-64 63.1v287.1c0 35.38 28.62 63.1 64 63.1h96v83.1c0 4.5 2.5 8.624 6.625 10.75c4 2 8.875 1.651 12.5-1.099l124.9-93.65h144c35.38 0 64-28.62 64-63.1V63.1C511.1 28.62 483.4 0 447.1 0zM368 234c0 8.836-7.164 16-16 16h-54V304c0 8.836-7.163 16-16 16h-52c-8.835 0-16-7.164-16-16V250H160c-8.836 0-16-7.164-16-16v-52c0-8.838 7.164-16 16-16h53.1V112c0-8.838 7.165-16 16-16h52c8.837 0 16 7.162 16 16v54H352c8.836 0 16 7.162 16 16V234z"/>
</>],
['thin',<>
	<path d="M343.1 159.1h-48V111.1c0-8.835-7.164-15.1-16-15.1h-48c-8.836 0-16 7.163-16 15.1v47.1H167.1c-8.836 0-16 7.163-16 15.1v47.1c0 8.835 7.164 15.1 16 15.1h47.1V287.1c0 8.835 7.164 15.1 16 15.1h48c8.836 0 16-7.163 16-15.1V239.1h48c8.836 0 16-7.163 16-15.1V175.1C359.1 167.2 352.8 159.1 343.1 159.1zM343.1 223.1h-64V287.1h-48V223.1H167.1V175.1h63.1V111.1h48v63.99h64V223.1zM447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1C159.1 507.1 165.9 512 172.2 512c2.369 0 4.786-.7849 6.948-2.363l124.9-93.65h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM495.1 351.1c0 26.46-21.53 47.1-48 47.1h-149.3l-122.7 92.08v-92.08H63.1c-26.47 0-48-21.53-48-47.1v-287.1c0-26.46 21.53-47.1 48-47.1h384c26.47 0 48 21.53 48 47.1V351.1z"/>
</>],

]);

const MessageMedical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageMedical.displayName = "MessageMedical";

export default MessageMedical;