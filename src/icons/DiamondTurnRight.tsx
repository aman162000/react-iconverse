
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M410.5 252l-96 84c-10.79 9.545-26.53 .9824-26.53-12.03V272H223.1l-.0001 48C223.1 337.6 209.6 352 191.1 352S159.1 337.6 159.1 320V240c0-17.6 14.4-32 32-32h95.1V156c0-8.657 6.403-14.69 13.68-15.81c4.367-.673 9.048 .4229 12.85 3.783l96 84C414 231 415.1 235.4 415.1 240S414 249 410.5 252z"/><path className="fa-secondary" d="M497.1 222.1l-208.1-208.1c-9.364-9.364-21.62-14.04-33.89-14.03C243.7 .0092 231.5 4.686 222.1 14.03L14.03 222.1C4.677 231.5 .0005 243.7 .0004 255.1C.0003 268.3 4.677 280.5 14.03 289.9l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26-.0001 24.52-4.677 33.87-14.03l208.1-208.1c9.352-9.353 14.03-21.61 14.03-33.87C511.1 243.7 507.3 231.5 497.1 222.1zM410.5 252l-96 84c-10.79 9.545-26.53 .9824-26.53-12.03V272H223.1l-.0001 48C223.1 337.6 209.6 352 191.1 352S159.1 337.6 159.1 320V240c0-17.6 14.4-32 32-32h95.1V156c0-13.85 16.39-20.99 26.53-12.03l96 84C414 231 415.1 235.4 415.1 240S414 249 410.5 252z"/>
</>],
['light',<>
	<path d="M497.1 222.1l-208.1-208.1c-9.354-9.355-21.63-14.03-33.89-14.03S231.5 4.674 222.1 14.03L14.03 222.1C4.677 231.5 .0006 243.7 .0004 255.1C.0001 268.3 4.676 280.5 14.03 289.9l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1s24.52-4.679 33.87-14.03l208.1-208.1c9.353-9.356 14.03-21.61 14.03-33.87C511.1 243.7 507.3 231.5 497.1 222.1zM475.3 267.2l-208.1 208.1C263.2 479.4 258.5 480 256 480s-7.191-.6055-11.24-4.66L36.66 267.3c-6.201-6.203-6.201-16.29-.002-22.49l208.1-208.1C248.8 32.61 253.5 32 256 32s7.191 .6055 11.24 4.66l208.1 208.1C481.5 250.1 481.5 261 475.3 267.2zM315.3 148.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L345.4 224H240C213.5 224 192 245.5 192 272v64C192 344.8 199.2 352 208 352S224 344.8 224 336l-.0002-64C223.1 263.2 231.2 256 240 256h105.4l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62C295.8 334.4 299.9 336 304 336s8.188-1.562 11.31-4.688l80-80c6.25-6.25 6.25-16.38 0-22.62L315.3 148.7z"/>
</>],
['regular',<>
	<path d="M497.1 222.1l-208.1-208.1c-9.354-9.355-21.63-14.03-33.89-14.03c-12.26 0-24.5 4.675-33.85 14.03L14.03 222.1C4.677 231.5 .0004 243.7 .0004 255.1c0 12.26 4.676 24.52 14.03 33.87l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26 0 24.52-4.679 33.87-14.03l208.1-208.1c9.353-9.354 14.03-21.61 14.03-33.87C511.1 243.7 507.3 231.5 497.1 222.1zM256.1 464L47.97 256.1l207.1-208.1l208.1 207.9L256.1 464zM302.1 216H200C186.8 216 176 226.8 176 240v72c0 13.25 10.75 24 24 24S224 325.3 224 312v-48h78.06l-23.03 23.03c-9.375 9.375-9.375 24.56 0 33.94C283.7 325.7 289.8 328 296 328s12.28-2.344 16.97-7.031l64-64c9.375-9.375 9.375-24.56 0-33.94l-64-64c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L302.1 216z"/>
</>],
['solid',<>
	<path d="M497.1 222.1l-208.1-208.1c-9.364-9.364-21.62-14.04-33.89-14.03C243.7 .0092 231.5 4.686 222.1 14.03L14.03 222.1C4.676 231.5 .0002 243.7 .0004 255.1c.0002 12.26 4.676 24.52 14.03 33.87l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26 0 24.52-4.677 33.87-14.03l208.1-208.1c9.352-9.353 14.03-21.61 14.03-33.87C511.1 243.7 507.3 231.5 497.1 222.1zM410.5 252l-96 84c-10.79 9.545-26.53 .9824-26.53-12.03V272H223.1l-.0001 48C223.1 337.6 209.6 352 191.1 352S159.1 337.6 159.1 320V240c0-17.6 14.4-32 32-32h95.1V156c0-13.85 16.39-20.99 26.53-12.03l96 84C414 231 415.1 235.4 415.1 240S414 249 410.5 252z"/>
</>],
['thin',<>
	<path d="M497.1 222.1l-208.1-208.1c-9.354-9.354-21.63-14.03-33.89-14.03c-12.26 0-24.5 4.677-33.85 14.03L14.03 222.1C4.676 231.5 .0002 243.7 .0004 255.1c.0002 12.26 4.676 24.52 14.03 33.87l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26 0 24.52-4.677 33.87-14.03l208.1-208.1c9.352-9.353 14.03-21.61 14.03-33.87C511.1 243.7 507.3 231.5 497.1 222.1zM486.7 278.6l-208.1 208.1C272.5 492.7 264.5 496 256 496c-8.52 0-16.53-3.32-22.56-9.346L25.34 278.6c-12.44-12.44-12.44-32.68 0-45.12L233.4 25.34C239.5 19.32 247.5 16 256 16c8.521 0 16.53 3.318 22.56 9.344l208.1 208.1C499.1 245.9 499.1 266.1 486.7 278.6zM397.4 234.2l-88.04-80.08c-3.234-3-8.312-2.719-11.3 .5313c-2.969 3.25-2.734 8.312 .5469 11.28L371.3 232H224c-22.06 0-40 17.94-40 40v72c0 4.406 3.578 8 7.1 8S200 348.4 200 344V272c0-13.22 10.77-24 24-24h147.3l-72.69 66.09c-3.281 2.969-3.516 8.031-.5469 11.28C299.7 327.1 301.8 328 304 328c1.922 0 3.844-.6875 5.375-2.094l88.04-80.08c.0469-.043-.0469 .043 0 0C398.1 244.4 400 242.3 400 240S398.1 235.6 397.4 234.2C397.4 234.1 397.5 234.2 397.4 234.2z"/>
</>],

]);

const DiamondTurnRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DiamondTurnRight.displayName = "DiamondTurnRight";

export default DiamondTurnRight;