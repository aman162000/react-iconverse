
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1V496C160 504.8 167.2 512 176 512h32c8.838 0 16-7.164 16-16v-147C305.9 333.9 368 262.3 368 176zM192 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-95.1 96-95.1c52.94 0 96 43.06 96 95.1C288 228.9 244.9 272 192 272z"/><path className="fa-secondary" d="M256 176c0 35.29-28.71 64-64 64c-35.29 0-64-28.71-64-64c0-35.29 28.71-64 64-64C227.3 112 256 140.7 256 176z"/>
</>],
['light',<>
	<path d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 91.8 70.31 167.1 160 175.2V496c0 8.844 7.156 16 16 16s16-7.156 16-16v-144.8C297.7 343.1 368 267.8 368 176zM192 320c-79.4 0-144-64.6-144-144S112.6 32 192 32s144 64.6 144 144S271.4 320 192 320z"/>
</>],
['regular',<>
	<path d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 89.04 66.18 162.4 152 174.2V488C168 501.3 178.8 512 192 512s24-10.75 24-24v-137.8C301.8 338.4 368 265 368 176zM192 304c-70.58 0-128-57.42-128-128s57.42-128 128-128s128 57.42 128 128S262.6 304 192 304z"/>
</>],
['solid',<>
	<path d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 86.26 62.1 157.9 144 172.1V496C160 504.8 167.2 512 176 512h32c8.838 0 16-7.164 16-16v-147C305.9 333.9 368 262.3 368 176zM192 272c-52.93 0-96-43.07-96-96c0-52.94 43.07-95.1 96-95.1c52.94 0 96 43.06 96 95.1C288 228.9 244.9 272 192 272z"/>
</>],
['thin',<>
	<path d="M368 176c0-97.2-78.8-176-176-176c-97.2 0-176 78.8-176 176c0 94.5 74.54 171.4 168 175.6V504C184 508.4 187.6 512 192 512s8-3.578 8-8v-152.4C293.5 347.4 368 270.5 368 176zM192 336c-88.22 0-160-71.78-160-160s71.78-160 160-160s160 71.78 160 160S280.2 336 192 336z"/>
</>],

]);

const Neuter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Neuter.displayName = "Neuter";

export default Neuter;
