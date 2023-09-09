
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M381.1 289.6C378.2 298.3 369.5 304 360 304h-208c-9.547 0-18.19-5.656-22-14.41c-3.812-8.75-2.078-18.94 4.407-25.94l104-112c9.094-9.75 26.09-9.75 35.19 0l104 112C384.1 270.7 385.8 280.8 381.1 289.6z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM381.1 289.6C378.2 298.3 369.5 304 360 304h-208c-9.547 0-18.19-5.656-22-14.41c-3.812-8.75-2.078-18.94 4.407-25.94l104-112c9.094-9.75 26.09-9.75 35.19 0l104 112C384.1 270.7 385.8 280.8 381.1 289.6z"/>
</>],
['light',<>
	<path d="M278.7 169.4c-12.49-12.5-32.86-12.5-45.35 0l-95.95 96C117.4 285.5 131.5 320 159.1 320h192c28.36 0 42.73-34.5 22.61-54.63L278.7 169.4zM160 288l96-96l96 96H160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M273.6 159.7C269.1 154.8 262.7 152 256 152S242.9 154.8 238.4 159.7l-96 104c-6.469 7-8.188 17.19-4.375 25.91C141.8 298.3 150.5 304 160 304h192c9.531 0 18.16-5.656 21.1-14.38c3.813-8.719 2.094-18.91-4.375-25.91L273.6 159.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM381.1 289.6C378.2 298.3 369.5 304 360 304h-208c-9.547 0-18.19-5.656-22-14.41c-3.812-8.75-2.078-18.94 4.407-25.94l104-112c9.094-9.75 26.09-9.75 35.19 0l104 112C384.1 270.7 385.8 280.8 381.1 289.6z"/>
</>],
['thin',<>
	<path d="M277.7 169.8C272.2 163.6 264.3 160 256 160S239.8 163.6 234.3 169.8L144.7 272.2C137.3 280.7 135.5 292.8 140.2 303.1C144.8 313.4 155.1 320 166.4 320h179.2c11.28 0 21.57-6.633 26.22-16.89c4.672-10.31 2.871-22.44-4.594-30.91L277.7 169.8zM357.3 296.5C355.2 301.1 350.6 304 345.6 304H166.4c-5.025 0-9.576-2.926-11.65-7.5C152.7 291.9 153.4 286.5 156.8 282.8l89.6-102.4C248.8 177.6 252.3 176 256 176s7.199 1.602 9.625 4.375l89.6 102.4C358.6 286.5 359.3 291.9 357.3 296.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleCaretUp: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleCaretUp.displayName = "CircleCaretUp";

export default CircleCaretUp;