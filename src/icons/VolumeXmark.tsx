
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M319.1 64v383.1c0 12.59-7.325 24-18.82 29.16c-4.203 1.906-8.737 2.844-13.17 2.844c-7.688 0-15.28-2.781-21.26-8.094l-134.9-119.9H48c-26.51 0-48-21.49-48-47.1v-95.1c0-26.51 21.49-47.1 48-47.1h83.84l134.9-119.9c9.422-8.375 22.94-10.44 34.44-5.253C312.7 40 319.1 51.41 319.1 64z"/><path className="fa-secondary" d="M560.1 303c9.375 9.375 9.375 24.56 0 33.94c-9.381 9.381-24.56 9.373-33.94 0L480 289.9l-47.03 47.03c-9.381 9.381-24.56 9.373-33.94 0c-9.375-9.375-9.375-24.56 0-33.94l47.03-47.03l-47.03-47.03c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L480 222.1l47.03-47.03c9.375-9.375 24.56-9.375 33.94 0s9.375 24.56 0 33.94l-47.03 47.03L560.1 303z"/>
</>],
['light',<>
	<path d="M502.6 256l52.69-52.69c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L480 233.4l-52.69-52.69c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L457.4 256l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62c6.246 6.246 16.37 6.254 22.62 0L480 278.6l52.69 52.69c6.246 6.246 16.37 6.254 22.62 0c6.25-6.25 6.25-16.38 0-22.62L502.6 256zM288 31.1c-7.697 0-15.29 2.784-21.27 8.1L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c21.04 0 31.1-17.87 31.1-31.1V64C319.1 50.14 309.1 31.1 288 31.1zM287.1 447.1L143.1 319.1H48c-8.822 0-16-7.16-16-15.96v-96c0-8.801 7.178-15.96 16-15.96h95.1l143.1-127.1c.0078-.0078-.0039 .0039 0 0L287.1 447.1z"/>
</>],
['regular',<>
	<path d="M301.2 34.85c-4.201-1.896-8.74-2.848-13.17-2.848c-7.697 0-15.29 2.784-21.27 8.1L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c4.438 0 8.972-.9375 13.17-2.844c11.5-5.156 18.82-16.56 18.82-29.16V64C319.1 51.41 312.7 40 301.2 34.85zM272 412.4L150.1 304H48v-95.1h102.1L272 99.64V412.4zM513.9 255.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L480 222.1L432.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L480 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94L513.9 255.1z"/>
</>],
['solid',<>
	<path d="M301.2 34.85c-11.5-5.188-25.02-3.122-34.44 5.253L131.8 160H48c-26.51 0-48 21.49-48 47.1v95.1c0 26.51 21.49 47.1 48 47.1h83.84l134.9 119.9c5.984 5.312 13.58 8.094 21.26 8.094c4.438 0 8.972-.9375 13.17-2.844c11.5-5.156 18.82-16.56 18.82-29.16V64C319.1 51.41 312.7 40 301.2 34.85zM513.9 255.1l47.03-47.03c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L480 222.1L432.1 175c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l47.03 47.03l-47.03 47.03c-9.375 9.375-9.375 24.56 0 33.94c9.373 9.373 24.56 9.381 33.94 0L480 289.9l47.03 47.03c9.373 9.373 24.56 9.381 33.94 0c9.375-9.375 9.375-24.56 0-33.94L513.9 255.1z"/>
</>],
['thin',<>
	<path d="M301.2 34.85c-4.289-1.969-8.639-2.848-13.17-2.848c-7.496 0-14.92 2.632-20.82 7.714L164.2 159.1H32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h132.2l102.1 120.3c5.906 5.094 13.32 7.719 20.82 7.719c4.529 0 8.894-.875 13.17-2.844c11.34-5.219 18.82-16.66 18.82-29.16V64C319.1 51.5 312.5 40.07 301.2 34.85zM303.1 448c0 6.223-3.656 11.92-9.309 14.53C292.6 463.5 290.3 464 287.1 464c-3.477 0-6.844-1.133-9.582-3.207L171.6 335.1H32c-8.824 0-16-7.178-16-16v-128c0-8.822 7.176-16 16-16h139.6l106.8-124.8C281.2 49.13 284.5 48 287.1 48c2.322 0 4.584 .4961 6.701 1.467c5.656 2.602 9.312 8.305 9.312 14.53V448zM491.3 255.1l66.34-66.34c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L480 244.7l-66.34-66.34c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l66.34 66.34l-66.34 66.34c-3.125 3.125-3.125 8.188 0 11.31c3.127 3.127 8.186 3.127 11.31 0L480 267.3l66.34 66.34c3.127 3.127 8.186 3.127 11.31 0c3.125-3.125 3.125-8.188 0-11.31L491.3 255.1z"/>
</>],

]);

const VolumeXmark: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

VolumeXmark.displayName = "VolumeXmark";

export default VolumeXmark;
