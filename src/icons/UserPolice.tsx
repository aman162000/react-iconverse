
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 352h-32l-64 64l-64-64H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 409.3 390.7 352 320 352zM358.5 437.3l-15.81 15.37l3.736 21.71c.6719 3.926-3.469 6.852-6.939 5.029L320 469.2l-19.54 10.25c-3.471 1.836-7.611-1.104-6.939-5.029l3.736-21.71l-15.81-15.37c-2.844-2.76-1.27-7.58 2.648-8.146L305.9 426l9.764-19.76c1.766-3.566 6.834-3.521 8.582 0L334.1 426l21.85 3.18C359.8 429.7 361.4 434.6 358.5 437.3zM78.54 102.4v44.04C119.1 164.9 169.4 176 223.1 176s104.9-11.08 145.5-29.55V102.4l21.96-22.3c4.564-4.635 7.129-10.93 7.129-17.48c0-11.35-7.602-21.24-18.44-23.99l-148.3-37.67c-5.096-1.295-10.43-1.295-15.52 0l-148.3 37.67C57.06 41.39 49.46 51.28 49.46 62.62c0 6.555 2.564 12.85 7.129 17.48L78.54 102.4zM191.1 61.08l30-12.5C221.9 48.26 223.2 48 224 48c.8281 0 2.122 .2559 2.884 .5723l30 12.5c2.779 1.152 4.609 3.889 4.609 6.92C261.5 107.1 232.1 128 223.1 128C216.1 128 186.5 108.2 186.5 67.1C186.5 64.96 188.3 62.23 191.1 61.08z"/><path className="fa-secondary" d="M346 155.5C349.5 167.1 351.1 179.2 351.1 192c0 70.75-57.22 128-127.1 128S96 262.8 96 192c0-12.79 2.488-24.87 5.998-36.5C137.9 168.3 179.3 176 223.1 176S310.1 168.3 346 155.5z"/>
</>],
['light',<>
	<path d="M77.33 102.4v22.46c0 13.04 7.713 25.22 19.96 29.7C134.3 168.1 177.6 176 223.1 176c46.44 0 89.74-7.877 126.7-21.42c12.24-4.482 19.96-16.66 19.96-29.7V102.4l22.14-22.3C397.4 75.48 400 69.2 400 62.64c0-11.35-7.664-21.23-18.59-23.98C235.7 1.979 229.2 0 225.5 0C225 0 224.6 .0293 224 .0293c-.5938 0-1.002-.0273-1.443-.0273c-3.787 0-10.05 1.922-155.1 38.66C55.66 41.41 48 51.29 48 62.64c0 6.555 2.584 12.84 7.188 17.48L77.33 102.4zM224 141.4C215.4 134.9 200.7 119.4 196.9 92.96l27.11-11.3l27.1 11.29C247.4 119.4 232.7 134.1 224 141.4zM162.7 47.43c37.47-9.465 55.46-14.01 61.33-15.31c5.906 1.312 137.2 34.44 137.2 34.44L338.7 89.23v13.19l1.043 22.12c-22.57 8.262-47.45 13.71-73.23 16.71C276.4 125.9 284 105.6 284 79.99c0-4.852-2.928-9.229-7.375-11.07l-48-20.01C227.4 48.41 225.3 48 224 48c-1.322 0-3.382 .4082-4.61 .916l-48 20.01C166.9 70.77 164 75.14 164 79.99c0 25.68 7.637 45.93 17.51 61.27C155.8 138.3 131.2 132.9 109.3 124.9V89.23L86.82 66.56L162.7 47.43zM335.8 192c-7.975 0-14.77 5.793-15.9 13.62C313.2 252.1 272.7 288 223.1 288c-48.71 0-89.16-35.87-95.86-82.38C127 197.8 120.3 192 112.3 192C102.5 192 94.78 200.6 96.16 210.2C105.1 272.2 159 320 223.1 320s118.9-47.8 127.8-109.8C353.2 200.6 345.6 192 335.8 192zM320 352h-32l-64 64l-64-64H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 409.3 390.7 352 320 352zM336 480v-16H352c8.844 0 16-7.156 16-16s-7.156-16-16-16h-16V416c0-8.844-7.156-16-16-16s-16 7.156-16 16v16H288c-8.844 0-16 7.156-16 16s7.156 16 16 16h16V480H32c0-52.94 43.06-96 96-96h18.74L224 461.3L301.3 384H320c52.94 0 96 43.06 96 96H336z"/>
</>],
['regular',<>
	<path d="M78.54 102.4v44.04C119.1 164.9 169.4 176 223.1 176s104.9-11.08 145.5-29.55V102.4l21.96-22.3c4.564-4.635 7.129-10.93 7.129-17.48c0-11.35-7.602-21.24-18.44-23.99l-148.3-37.67c-5.096-1.295-10.43-1.295-15.52 0l-148.3 37.67C57.06 41.39 49.46 51.28 49.46 62.62c0 6.555 2.564 12.85 7.129 17.48L78.54 102.4zM191.1 61.08l30-12.5C221.9 48.26 223.2 48 224 48c.8281 0 2.122 .2559 2.884 .5723l30 12.5c2.779 1.152 4.609 3.889 4.609 6.92C261.5 107.1 232.1 128 223.1 128C216.1 128 186.5 108.2 186.5 67.1C186.5 64.96 188.3 62.23 191.1 61.08zM224 272c-41.23 0-74.9-31.51-79.15-71.64C128.1 197.1 112 192.8 96.45 187.5C96.4 189.1 96 190.5 96 192c0 70.69 57.31 128 127.1 128s127.1-57.31 127.1-128c0-1.525-.3579-2.941-.4106-4.453C336 192.8 319.9 197.1 303.2 200.4C298.9 240.5 265.2 272 224 272zM320 352h-32l-64 64l-64-64H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 409.3 390.7 352 320 352zM49.61 464C57.04 427.5 89.37 400 128 400h12.12l64 64H49.61zM355.6 464l10.98-10.67c2.844-2.76 1.27-7.58-2.648-8.146L342.1 442l-9.764-19.76c-1.748-3.521-6.816-3.566-8.582 0L313.9 442l-21.85 3.18c-3.918 .5664-5.492 5.387-2.648 8.146L300.4 464h-56.54l64-64H320c38.63 0 70.96 27.53 78.39 64H355.6z"/>
</>],
['solid',<>
	<path d="M78.54 102.4v28.04C119.1 148.9 169.4 160 224 160s104.9-11.08 145.5-29.55V102.4l21.96-22.3c4.564-4.635 7.129-10.93 7.129-17.48c0-11.35-7.602-21.24-18.44-23.99l-148.3-37.67c-5.096-1.295-10.43-1.295-15.52 0l-148.3 37.67C57.06 41.39 49.46 51.28 49.46 62.62c0 6.555 2.564 12.85 7.129 17.48L78.54 102.4zM191.1 61.08l30-12.5C221.9 48.26 223.2 48 224 48c.8281 0 2.122 .2559 2.884 .5723l30 12.5c2.779 1.152 4.609 3.889 4.609 6.92C261.5 107.1 232.1 128 223.1 128C216.1 128 186.5 108.2 186.5 67.1C186.5 64.96 188.3 62.23 191.1 61.08zM97.97 172.4C96.98 178.9 96 185.3 96 192c0 70.69 57.3 128 127.1 128s127.1-57.31 127.1-128c0-6.705-.9399-13.15-1.934-19.57C311.2 185.2 268.4 192 224 192C179.6 192 136.8 185.2 97.97 172.4zM320 352h-32l-64 64l-64-64H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 409.3 390.7 352 320 352zM358.5 437.3l-15.81 15.37l3.736 21.71c.6719 3.926-3.469 6.852-6.939 5.029L320 469.2l-19.54 10.25c-3.471 1.836-7.611-1.104-6.939-5.029l3.736-21.71l-15.81-15.37c-2.844-2.76-1.27-7.58 2.648-8.146L305.9 426l9.764-19.76c1.766-3.566 6.834-3.521 8.582 0L334.1 426l21.85 3.18C359.8 429.7 361.4 434.6 358.5 437.3z"/>
</>],
['thin',<>
	<path d="M69.93 112.2v26.75c0 3.156 1.848 6 4.727 7.312C118.3 165.7 169.8 176 223.6 176s105.4-10.31 148.1-29.78c2.881-1.312 4.727-4.156 4.727-7.312V112.2l19.62-19.62c6.104-6.094 9.484-14.22 9.484-22.88c0-14.88-10.08-27.78-24.54-31.38l-148.6-37.06c-6.322-1.625-13.08-1.625-19.41 0L65.36 38.28c-14.46 3.594-24.54 16.5-24.54 31.38c0 8.656 3.381 16.78 9.484 22.88L69.93 112.2zM69.24 53.78l148.6-37.06c3.789-.9375 7.795-.9375 11.64 0l148.6 37.06c7.293 1.844 12.39 8.375 12.39 15.88c0 4.375-1.691 8.469-4.789 11.56l-21.97 21.97c-1.502 1.5-2.348 3.531-2.348 5.656v24.81C320.8 150.9 273.3 160 223.6 160C173.1 160 126.5 150.9 85.95 133.7V108.8c0-2.125-.8438-4.156-2.348-5.656L61.63 81.22C58.53 78.13 56.84 74.03 56.84 69.66C56.84 62.16 61.95 55.63 69.24 53.78zM335.8 192c0 61.75-50.28 112-112.1 112C161.8 304 111.5 253.8 111.5 192c0-4.406-3.6-8-8.012-8C99.04 184 95.44 187.6 95.44 192c0 70.59 57.5 128 128.2 128s128.3-57.41 128.3-128c0-4.406-3.715-8-8.127-8C339.4 184 335.8 187.6 335.8 192zM320 352h-32l-64 64l-64-64H128c-70.69 0-128 57.31-128 128c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 409.3 390.7 352 320 352zM416 496H32c-8.822 0-16-7.178-16-16c0-61.76 50.24-112 112-112h25.37L224 438.6L294.6 368H320c61.76 0 112 50.24 112 112C432 488.8 424.8 496 416 496zM224 136c13.22 0 45.5-23.83 45.5-68c0-6.281-3.75-11.89-9.562-14.31l-29.84-12.44c-3.5-1.531-8.844-1.469-12.03-.0625l-30 12.5C182.3 56.11 178.5 61.72 178.5 68C178.5 112.2 210.8 136 224 136zM223.8 55.97L253.5 68c0 34.83-24.69 51.31-29.25 52.02C219.2 119.3 194.7 102.8 194.5 68.34L223.8 55.97zM373.1 413.3l-17.69-2.578l-7.938-15.98c-2.156-4.391-6.578-7.125-11.48-7.125c0 0 .0313 0 0 0c-4.875 .0156-9.266 2.766-11.39 7.125l-7.938 15.98l-17.66 2.578c-4.875 .7031-8.844 4.031-10.34 8.703c-1.531 4.656-.2813 9.672 3.25 13.09l12.78 12.44l-3 17.53c-.8438 4.844 1.094 9.641 5.062 12.52c2.25 1.641 4.875 2.469 7.531 2.469c2.031 0 4.062-.5 5.938-1.5L336 470.2l15.81 8.297c4.25 2.281 9.438 1.938 13.47-.9844c3.969-2.891 5.906-7.672 5.062-12.47l-3-17.56l12.78-12.44c3.531-3.422 4.781-8.438 3.25-13.09C381.9 417.3 377.9 413.1 373.1 413.3zM350.2 441.9l3.312 19.42L336 452.2l-17.47 9.172l3.312-19.42l-14.12-13.75l19.53-2.844L336 407.6l8.75 17.69l19.53 2.844L350.2 441.9z"/>
</>],

]);

const UserPolice: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UserPolice.displayName = "UserPolice";

export default UserPolice;