
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M408.1 190.2l-80-72c-9.859-8.844-25.03-8.062-33.91 1.781c-8.859 9.875-8.062 25.03 1.781 33.91L356.1 208l-60.19 54.16c-9.844 8.875-10.64 24.03-1.781 33.91C298.9 301.3 305.4 304 312 304c5.734 0 11.47-2.031 16.06-6.156l80-72C413.1 221.3 416 214.8 416 208S413.1 194.7 408.1 190.2zM217.8 119.9C208.1 110.1 193.8 109.3 183.9 118.2l-80 72C98.89 194.7 96 201.2 96 208s2.891 13.28 7.938 17.84l80 72C188.5 301.1 194.3 304 200 304c6.562 0 13.09-2.688 17.84-7.938c8.859-9.875 8.062-25.03-1.781-33.91L155.9 208l60.19-54.16C225.9 144.1 226.7 129.8 217.8 119.9z"/><path className="fa-secondary" d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.748 11.25 15.45 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM216.1 262.2c9.844 8.875 10.64 24.03 1.781 33.91C213.1 301.3 206.6 304 200 304c-5.734 0-11.47-2.031-16.06-6.156l-80-72C98.89 221.3 96 214.8 96 208s2.891-13.28 7.938-17.84l80-72c9.875-8.844 25.03-8.031 33.91 1.781c8.859 9.875 8.062 25.03-1.781 33.91L155.9 208L216.1 262.2zM408.1 225.8l-80 72C323.5 301.1 317.7 304 312 304c-6.562 0-13.09-2.688-17.84-7.938c-8.859-9.875-8.062-25.03 1.781-33.91L356.1 208l-60.19-54.16c-9.844-8.875-10.64-24.03-1.781-33.91c8.875-9.844 24.05-10.62 33.91-1.781l80 72C413.1 194.7 416 201.2 416 208S413.1 221.3 408.1 225.8z"/>
</>],
['light',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.838 11.03 15.55 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM311.3 124.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L349.4 208l-60.69 60.69c-6.25 6.25-6.25 16.38 0 22.62C291.8 294.4 295.9 296 300 296s8.188-1.562 11.31-4.688l72-72c6.25-6.25 6.25-16.38 0-22.62L311.3 124.7zM223.3 124.7c-6.25-6.25-16.38-6.25-22.62 0l-72 72c-6.25 6.25-6.25 16.38 0 22.62l72 72C203.8 294.4 207.9 296 212 296s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L162.6 208l60.69-60.69C229.6 141.1 229.6 130.9 223.3 124.7z"/>
</>],
['regular',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.836 11.02 15.55 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352zM216.1 127c-9.375-9.375-24.56-9.375-33.94 0l-64 64c-9.375 9.375-9.375 24.56 0 33.94l64 64C187.7 293.7 193.9 296 200 296s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L169.9 208l47.03-47.03C226.3 151.6 226.3 136.4 216.1 127zM328.1 127c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L342.1 208l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94C299.7 293.7 305.9 296 312 296s12.28-2.344 16.97-7.031l64-64c9.375-9.375 9.375-24.56 0-33.94L328.1 127z"/>
</>],
['solid',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1c0 9.748 11.25 15.45 19.12 9.699L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM216.1 262.2c9.844 8.875 10.64 24.03 1.781 33.91C213.1 301.3 206.6 304 200 304c-5.734 0-11.47-2.031-16.06-6.156l-80-72C98.89 221.3 96 214.8 96 208s2.891-13.28 7.938-17.84l80-72c9.875-8.844 25.03-8.031 33.91 1.781c8.859 9.875 8.062 25.03-1.781 33.91L155.9 208L216.1 262.2zM408.1 225.8l-80 72C323.5 301.1 317.7 304 312 304c-6.562 0-13.09-2.688-17.84-7.938c-8.859-9.875-8.062-25.03 1.781-33.91L356.1 208l-60.19-54.16c-9.844-8.875-10.64-24.03-1.781-33.91c8.875-9.844 24.05-10.62 33.91-1.781l80 72C413.1 194.7 416 201.2 416 208S413.1 221.3 408.1 225.8z"/>
</>],
['thin',<>
	<path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96V499.1C160 507 165.9 512 172.2 512c2.369 0 4.785-.7457 6.947-2.324L304 415.1H448c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM496 351.1c0 26.46-21.53 47.1-48 47.1h-149.3L176 492.1v-92.08H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1V351.1zM212.8 122.3c-3.125-3.125-8.188-3.125-11.31 0l-80 80c-3.125 3.125-3.125 8.188 0 11.31l80 80C203 295.2 205.1 296 207.1 296s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L138.4 208l74.34-74.34C215.9 130.5 215.9 125.5 212.8 122.3zM310.5 122.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L373.6 208l-74.34 74.34c-3.125 3.125-3.125 8.188 0 11.31C300.8 295.2 302.8 296 304.9 296s4.094-.7813 5.656-2.344l80-80c3.125-3.125 3.125-8.188 0-11.31L310.5 122.3z"/>
</>],

]);

const MessageCode: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessageCode.displayName = "MessageCode";

export default MessageCode;
