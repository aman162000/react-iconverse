
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M350.6 224.1l-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.375-9.375-9.375-24.56 0-33.94C161.4 186.3 167.5 184 173.7 184s12.28 2.344 16.97 7.031l39.03 39.03V128c0-13.25 10.75-24 24-24s24 10.75 24 24v102.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0S359.1 215.6 350.6 224.1z"/><path className="fa-secondary" d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM350.6 224.1l-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.375-9.375-9.375-24.56 0-33.94C161.4 186.3 167.5 184 173.7 184s12.28 2.344 16.97 7.031l39.03 39.03V128c0-13.25 10.75-24 24-24s24 10.75 24 24v102.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0S359.1 215.6 350.6 224.1z"/>
</>],
['light',<>
	<path d="M324.7 212.7L272 265.4V112C272 103.2 264.8 96 256 96S240 103.2 240 112v153.4L187.3 212.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l80 80C247.8 318.4 251.9 320 256 320s8.188-1.562 11.31-4.688l80-80c6.25-6.25 6.25-16.38 0-22.62S330.9 206.4 324.7 212.7zM448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352z"/>
</>],
['regular',<>
	<path d="M320.5 191L281.5 230.1V128c0-13.25-10.75-24-24-24s-24 10.75-24 24v102.1L194.5 191C189.8 186.3 183.7 184 177.5 184S165.2 186.3 160.5 191c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94S329.9 181.7 320.5 191zM448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/>
</>],
['solid',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM350.6 224.1l-80 80c-9.375 9.375-24.56 9.375-33.94 0l-80-80c-9.375-9.375-9.375-24.56 0-33.94C161.4 186.3 167.5 184 173.7 184s12.28 2.344 16.97 7.031l39.03 39.03V128c0-13.25 10.75-24 24-24s24 10.75 24 24v102.1l39.03-39.03c9.375-9.375 24.56-9.375 33.94 0S359.1 215.6 350.6 224.1z"/>
</>],
['thin',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1C160 507 165.9 512 172.2 512c2.369 0 4.785-.7457 6.947-2.324L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM496 351.1c0 26.46-21.53 47.1-48 47.1h-149.3L176 492.1v-92.09H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1V351.1zM346.9 200.6c-.875-.3438-1.609-.6562-2.5-.6562c-5.123 0-15.6 10.37-80.44 76.5V120c0-4.406-3.578-8-8-8S248 115.6 248 120v156.7L173.7 202.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l88 88C251.8 303.2 253.9 304 256 304s4.219-.875 5.719-2.406c30.45-31.06 80.17-81.41 86.47-86.78c1.422-.875 2.594-2.188 3.25-3.875C353.1 206.8 351 202.2 346.9 200.6z"/>
</>],

]);

const MessageArrowDown: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageArrowDown.displayName = "MessageArrowDown";

export default MessageArrowDown;
