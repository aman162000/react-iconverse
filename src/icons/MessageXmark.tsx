
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M175 288.1c9.373 9.371 24.56 9.379 33.94 0L256 241.9l47.03 47.03c9.373 9.371 24.56 9.379 33.94 0c9.375-9.375 9.375-24.56 0-33.94L289.9 208l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L256 174.1L208.1 127c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L222.1 208L175 255C165.7 264.4 165.7 279.6 175 288.1z"/><path className="fa-secondary" d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM336.1 255c9.375 9.375 9.375 24.56 0 33.94c-9.383 9.379-24.56 9.371-33.94 0L256 241.9L208.1 288.1c-9.383 9.379-24.56 9.371-33.94 0c-9.375-9.375-9.375-24.56 0-33.94L222.1 208L175 160.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L256 174.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L289.9 208L336.1 255z"/>
</>],
['light',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.02 15.55 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.926 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM331.3 132.7c-6.25-6.25-16.38-6.25-22.62 0L256 185.4L203.3 132.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L233.4 208L180.7 260.7c-6.25 6.25-6.25 16.38 0 22.62c6.242 6.246 16.37 6.254 22.62 0L256 230.6l52.69 52.69c6.242 6.246 16.37 6.254 22.62 0c6.25-6.25 6.25-16.38 0-22.62L278.6 208l52.69-52.69C337.6 149.1 337.6 138.9 331.3 132.7z"/>
</>],
['regular',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.836 11.02 15.55 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352zM336.1 127c-9.375-9.375-24.56-9.375-33.94 0L256 174.1L208.1 127c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L222.1 208L175 255c-9.375 9.375-9.375 24.56 0 33.94c9.375 9.371 24.55 9.379 33.94 0L256 241.9l47.03 47.03c9.375 9.371 24.55 9.379 33.94 0c9.375-9.375 9.375-24.56 0-33.94L289.9 208l47.03-47.03C346.3 151.6 346.3 136.4 336.1 127z"/>
</>],
['solid',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM336.1 255c9.375 9.375 9.375 24.56 0 33.94c-9.383 9.379-24.56 9.371-33.94 0L256 241.9L208.1 288.1c-9.383 9.379-24.56 9.371-33.94 0c-9.375-9.375-9.375-24.56 0-33.94L222.1 208L175 160.1c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L256 174.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94L289.9 208L336.1 255z"/>
</>],
['thin',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1C160 507 165.9 512 172.2 512c2.367 0 4.781-.7457 6.945-2.324L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM496 351.1c0 26.46-21.53 47.1-48 47.1h-149.3L176 492.1v-92.09H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1V351.1zM333.7 130.3c-3.125-3.125-8.188-3.125-11.31 0L256 196.7L189.7 130.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L244.7 207.1L178.3 274.3c-3.125 3.125-3.125 8.188 0 11.31c3.125 3.127 8.188 3.127 11.31 0L256 219.3l66.34 66.34c3.125 3.127 8.188 3.127 11.31 0c3.125-3.125 3.125-8.188 0-11.31L267.3 207.1l66.34-66.34C336.8 138.5 336.8 133.5 333.7 130.3z"/>
</>],

]);

const MessageXmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageXmark.displayName = "MessageXmark";

export default MessageXmark;
