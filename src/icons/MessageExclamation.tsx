
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 240c13.25 0 24-10.75 24-24v-112c0-13.25-10.75-24-24-24S232 90.75 232 104v112C232 229.3 242.8 240 256 240zM256 272c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32s32-14.33 32-32C288 286.3 273.7 272 256 272z"/><path className="fa-secondary" d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM232 104C232 90.75 242.8 80 256 80s24 10.75 24 24v112c0 13.25-10.75 24-24 24S232 229.3 232 216V104zM256 336c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C288 321.7 273.7 336 256 336z"/>
</>],
['light',<>
	<path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM255.1 255.1C264.8 255.1 272 248.8 272 240V96c0-8.844-7.156-16-16-16S240 87.16 240 96v144C240 248.8 247.1 255.1 255.1 255.1zM256 280c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C280 290.7 269.3 280 256 280z"/>
</>],
['regular',<>
	<path d="M257.5 272c-17.67 0-32 14.33-32 32s14.33 32 32 32c17.67 0 32-14.33 32-32S275.2 272 257.5 272zM257.5 240c13.25 0 24-10.75 24-24v-112c0-13.25-10.75-24-24-24s-24 10.75-24 24v112C233.5 229.3 244.3 240 257.5 240zM447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/>
</>],
['solid',<>
	<path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM232 104C232 90.75 242.8 80 256 80s24 10.75 24 24v112c0 13.25-10.75 24-24 24S232 229.3 232 216V104zM256 336c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C288 321.7 273.7 336 256 336z"/>
</>],
['thin',<>
	<path d="M255.1 255.1c4.406 0 7.968-3.604 7.968-8.01V103.1c0-4.406-3.594-7.999-8-7.999s-8 3.593-8 7.999v143.1C247.9 252.4 251.6 255.1 255.1 255.1zM255.1 287.1c-8.822 0-16 7.179-16 15.1s7.178 15.1 16 15.1s16-7.179 16-15.1S264.8 287.1 255.1 287.1zM447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1C159.1 507 165.9 512 172.2 512c2.369 0 4.786-.7458 6.948-2.324l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM495.1 351.1c0 26.46-21.53 47.1-48 47.1h-149.3l-122.7 92.08v-92.08H63.1c-26.47 0-48-21.53-48-47.1v-287.1c0-26.46 21.53-47.1 48-47.1h384c26.47 0 48 21.53 48 47.1V351.1z"/>
</>],

]);

const MessageExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageExclamation.displayName = "MessageExclamation";

export default MessageExclamation;
