
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M344 112h-128C202.8 112 192 122.8 192 136S202.8 160 216 160h70.06l-96 96c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0l96-96V264C320 277.3 330.8 288 344 288s24-10.75 24-24v-128C368 122.8 357.3 112 344 112z"/><path className="fa-secondary" d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.748 11.25 15.45 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM368 264C368 277.3 357.3 288 344 288S320 277.3 320 264V193.9l-96 96c-9.381 9.381-24.56 9.373-33.94 0C180.7 280.6 180.7 265.4 190.1 256l96-96H216C202.8 160 192 149.3 192 136S202.8 112 216 112h128c13.25 0 24 10.75 24 24V264z"/>
</>],
['light',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.838 11.03 15.55 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM358.1 113.2C356.2 112.4 354.1 112 352 112H224C215.2 112 208 119.2 208 128S215.2 144 224 144h89.38L180.7 276.7c-6.25 6.25-6.25 16.38 0 22.62C183.8 302.4 187.9 304 192 304s8.188-1.562 11.31-4.688L336 166.6V256c0 8.844 7.156 16 16 16s16-7.156 16-16V128c0-2.082-.4219-4.154-1.23-6.109C365.1 117.1 362 114.9 358.1 113.2z"/>
</>],
['regular',<>
	<path d="M344 112h-128C202.8 112 192 122.8 192 136S202.8 160 216 160h70.06l-96 96c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0l96-96V264C320 277.3 330.8 288 344 288s24-10.75 24-24v-128C368 122.8 357.3 112 344 112zM448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.836 11.02 15.55 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z"/>
</>],
['solid',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.748 11.25 15.45 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM368 264C368 277.3 357.3 288 344 288S320 277.3 320 264V193.9l-96 96c-9.381 9.381-24.56 9.373-33.94 0C180.7 280.6 180.7 265.4 190.1 256l96-96H216C202.8 160 192 149.3 192 136S202.8 112 216 112h128c13.25 0 24 10.75 24 24V264z"/>
</>],
['thin',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1C160 507 165.9 512 172.2 512c2.369 0 4.785-.7457 6.947-2.324L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM496 351.1c0 26.46-21.53 47.1-48 47.1h-149.3L176 492.1v-92.08H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1V351.1zM365.7 114.3C364.2 112.9 362.2 112 360 112H219.2c-4.406 0-8 3.578-8 8S214.8 128 219.2 128h121.5L178.3 290.3c-3.125 3.125-3.125 8.188 0 11.31C179.9 303.2 181.9 304 184 304s4.094-.7813 5.656-2.344L352 139.3v121.5c0 4.422 3.594 8 8 8s8-3.578 8-8V120C368 117.1 367.2 115.9 365.7 114.3C365.7 114.3 365.7 114.3 365.7 114.3z"/>
</>],

]);

const MessageArrowUpRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageArrowUpRight.displayName = "MessageArrowUpRight";

export default MessageArrowUpRight;
