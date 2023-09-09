
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 284.1l-171.5 156.5C255.9 457.7 224 443.3 224 415.1V284.1l-171.5 156.5C31.88 457.7 0 443.3 0 415.1V96.03c0-27.37 31.88-41.74 52.5-24.62L224 226.8V96.03c0-27.37 31.88-41.74 52.5-24.62L448 226.8V284.1z"/><path className="fa-secondary" d="M512 96.03v319.9c0 17.67-14.33 31.1-31.1 31.1C462.3 447.1 448 433.6 448 415.1V96.03c0-17.67 14.33-31.1 31.1-31.1C497.7 64.03 512 78.36 512 96.03z"/>
</>],
['light',<>
	<path d="M181.8 220.9c6.781 5.594 16.88 4.625 22.53-2.203c5.594-6.828 4.594-16.91-2.219-22.52L49.53 70.88C44.03 66.34 37.38 64 30.63 64C14.5 64 0 77.44 0 96.03v319.9C0 434.6 14.5 448 30.63 448c6.75 0 13.41-2.344 18.91-6.875l152.6-125.3c6.812-5.609 7.812-15.69 2.219-22.52C198.7 286.4 188.6 285.5 181.8 291.1L32 416.4V95.59L181.8 220.9zM496 64C487.2 64 480 71.16 480 80v134.2l-174.5-143.3C300 66.34 293.4 64 286.6 64C276.3 64 256 72.13 256 96.03v319.9C256 439.9 276.3 448 286.6 448c6.75 0 13.41-2.344 18.91-6.875L480 297.8V432c0 8.844 7.156 16 16 16s16-7.156 16-16v-352C512 71.16 504.8 64 496 64zM288 416.4V95.59L479.5 256L288 416.4z"/>
</>],
['regular',<>
	<path d="M0 96.03v319.9C0 435.2 15.71 448 32.21 448c7.002 0 14.14-2.307 20.29-7.406L224 285.2v130.7C224 435.2 239.7 448 256.2 448c7.002 0 14.14-2.307 20.29-7.406L448 285.2v138.7c0 13.26 10.74 24 24 24c13.25 0 24-10.74 24-24V88.03c0-13.25-10.74-23.1-23.1-23.1c-13.26 0-24 10.75-24 24v139.8l-171.5-156.5C270.4 66.31 263.2 64 256.2 64C239.7 64 224 76.81 224 96.03v131.9L52.5 71.41C46.36 66.31 39.21 64 32.21 64C15.71 64 0 76.81 0 96.03zM272 132.3l136.2 124.3L272 379.9V132.3zM48 132.3l136.2 124.3L48 379.9V132.3z"/>
</>],
['solid',<>
	<path d="M512 96.03v319.9c0 17.67-14.33 31.1-31.1 31.1C462.3 447.1 448 433.6 448 415.1V284.1l-171.5 156.5C255.9 457.7 224 443.3 224 415.1V284.1l-171.5 156.5C31.88 457.7 0 443.3 0 415.1V96.03c0-27.37 31.88-41.74 52.5-24.62L224 226.8V96.03c0-27.37 31.88-41.74 52.5-24.62L448 226.8V96.03c0-17.67 14.33-31.1 31.1-31.1C497.7 64.03 512 78.36 512 96.03z"/>
</>],
['thin',<>
	<path d="M504 64.01c-4.422 0-8 3.594-8 7.1v367.1C496 444.4 499.6 448 504 448S512 444.4 512 440V72.01C512 67.6 508.4 64.01 504 64.01zM270.4 73.01c-11.31-9.594-26.69-11.72-40.19-5.437C216.5 73.91 207.1 87.35 207.1 102.7v306.6c0 15.34 8.516 28.78 22.22 35.12C235.3 446.8 240.8 448 246.1 448c8.703 0 17.25-3.062 24.25-8.1l180.1-153.3c8.562-7.406 13.48-18.22 13.48-29.66s-4.922-22.25-13.53-29.69L270.4 73.01zM440.1 273.5l-180 153.3c-6.594 5.594-15.2 6.812-23.11 3.125c-8.109-3.75-12.94-11.47-12.94-20.62v-306.6c0-9.156 4.828-16.87 12.94-20.62c3.031-1.406 6.172-2.094 9.266-2.094c4.953 0 9.781 1.781 13.84 5.219l180 153.3c5.062 4.344 7.953 10.75 7.953 17.53C447.1 262.8 445.1 269.2 440.1 273.5zM28.94 82.07c7.859-3.656 16.48-2.469 23.11 3.125l118.8 101.1c3.344 2.844 8.422 2.437 11.28-.9062c2.859-3.375 2.453-8.406-.9062-11.28L62.41 73.01C51.09 63.41 35.69 61.29 22.22 67.57C8.516 73.91 0 87.35 0 102.7v306.6c0 15.34 8.516 28.78 22.22 35.12C27.36 446.8 32.78 448 38.16 448c8.703 0 17.27-3.062 24.27-8.1l118.8-101.1c3.359-2.875 3.766-7.906 .9062-11.28c-2.859-3.344-7.938-3.75-11.28-.9062l-118.8 101.1c-6.594 5.594-15.23 6.812-23.12 3.125C20.83 426.2 16 418.5 16 409.3v-306.6C16 93.54 20.83 85.82 28.94 82.07z"/>
</>],

]);

const ForwardFast: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ForwardFast.displayName = "ForwardFast";

export default ForwardFast;
