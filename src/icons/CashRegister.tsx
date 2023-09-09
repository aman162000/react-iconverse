
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M.0003 448V378.4C.0003 373.6 .3626 368.8 1.084 364.1L23.76 214.4C28.5 183.1 55.39 160 87.03 160H424.1C456.6 160 483.5 183.1 488.2 214.4L510.9 364.1C511.6 368.8 512 373.6 512 378.4V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448H.0003zM80 448H432C440.8 448 448 440.8 448 432C448 423.2 440.8 416 432 416H80C71.16 416 64 423.2 64 432C64 440.8 71.16 448 80 448zM112 216C98.75 216 88 226.7 88 240C88 253.3 98.75 264 112 264C125.3 264 136 253.3 136 240C136 226.7 125.3 216 112 216zM208 264C221.3 264 232 253.3 232 240C232 226.7 221.3 216 208 216C194.7 216 184 226.7 184 240C184 253.3 194.7 264 208 264zM160 296C146.7 296 136 306.7 136 320C136 333.3 146.7 344 160 344C173.3 344 184 333.3 184 320C184 306.7 173.3 296 160 296zM304 264C317.3 264 328 253.3 328 240C328 226.7 317.3 216 304 216C290.7 216 280 226.7 280 240C280 253.3 290.7 264 304 264zM256 296C242.7 296 232 306.7 232 320C232 333.3 242.7 344 256 344C269.3 344 280 333.3 280 320C280 306.7 269.3 296 256 296zM400 264C413.3 264 424 253.3 424 240C424 226.7 413.3 216 400 216C386.7 216 376 226.7 376 240C376 253.3 386.7 264 400 264zM352 296C338.7 296 328 306.7 328 320C328 333.3 338.7 344 352 344C365.3 344 376 333.3 376 320C376 306.7 365.3 296 352 296z"/><path className="fa-secondary" d="M288 0C305.7 0 320 14.33 320 32V96C320 113.7 305.7 128 288 128H208V160H144V128H64C46.33 128 32 113.7 32 96V32C32 14.33 46.33 0 64 0H288zM96 48C87.16 48 80 55.16 80 64C80 72.84 87.16 80 96 80H256C264.8 80 272 72.84 272 64C272 55.16 264.8 48 256 48H96zM136 240C136 253.3 125.3 264 112 264C98.75 264 88 253.3 88 240C88 226.7 98.75 216 112 216C125.3 216 136 226.7 136 240zM184 240C184 226.7 194.7 216 208 216C221.3 216 232 226.7 232 240C232 253.3 221.3 264 208 264C194.7 264 184 253.3 184 240zM184 320C184 333.3 173.3 344 160 344C146.7 344 136 333.3 136 320C136 306.7 146.7 296 160 296C173.3 296 184 306.7 184 320zM280 240C280 226.7 290.7 216 304 216C317.3 216 328 226.7 328 240C328 253.3 317.3 264 304 264C290.7 264 280 253.3 280 240zM280 320C280 333.3 269.3 344 256 344C242.7 344 232 333.3 232 320C232 306.7 242.7 296 256 296C269.3 296 280 306.7 280 320zM376 240C376 226.7 386.7 216 400 216C413.3 216 424 226.7 424 240C424 253.3 413.3 264 400 264C386.7 264 376 253.3 376 240zM376 320C376 333.3 365.3 344 352 344C338.7 344 328 333.3 328 320C328 306.7 338.7 296 352 296C365.3 296 376 306.7 376 320z"/>
</>],
['light',<>
	<path d="M136 256C136 269.3 125.3 280 112 280C98.75 280 88 269.3 88 256C88 242.7 98.75 232 112 232C125.3 232 136 242.7 136 256zM184 256C184 242.7 194.7 232 208 232C221.3 232 232 242.7 232 256C232 269.3 221.3 280 208 280C194.7 280 184 269.3 184 256zM184 336C184 349.3 173.3 360 160 360C146.7 360 136 349.3 136 336C136 322.7 146.7 312 160 312C173.3 312 184 322.7 184 336zM280 256C280 242.7 290.7 232 304 232C317.3 232 328 242.7 328 256C328 269.3 317.3 280 304 280C290.7 280 280 269.3 280 256zM280 336C280 349.3 269.3 360 256 360C242.7 360 232 349.3 232 336C232 322.7 242.7 312 256 312C269.3 312 280 322.7 280 336zM376 256C376 242.7 386.7 232 400 232C413.3 232 424 242.7 424 256C424 269.3 413.3 280 400 280C386.7 280 376 269.3 376 256zM376 336C376 349.3 365.3 360 352 360C338.7 360 328 349.3 328 336C328 322.7 338.7 312 352 312C365.3 312 376 322.7 376 336zM272 0C298.5 0 320 21.49 320 48V80C320 106.5 298.5 128 272 128H192V160H424.5C456.3 160 483.3 183.4 487.8 214.9L511.4 379.5C511.8 382.5 512 385.5 512 388.5V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V388.5C0 385.5 .215 382.5 .6432 379.5L24.15 214.9C28.65 183.4 55.66 160 87.51 160H160V128H80C53.49 128 32 106.5 32 80V48C32 21.49 53.49 0 80 0L272 0zM272 32H80C71.16 32 64 39.16 64 48V80C64 88.84 71.16 96 80 96H272C280.8 96 288 88.84 288 80V48C288 39.16 280.8 32 272 32zM64 480H448C465.7 480 480 465.7 480 448V416H32V448C32 465.7 46.33 480 64 480zM424.5 192H87.51C71.58 192 58.08 203.7 55.83 219.5L32.32 384H479.7L456.2 219.5C453.9 203.7 440.4 192 424.5 192H424.5z"/>
</>],
['regular',<>
	<path d="M136 256C136 269.3 125.3 280 112 280C98.75 280 88 269.3 88 256C88 242.7 98.75 232 112 232C125.3 232 136 242.7 136 256zM184 256C184 242.7 194.7 232 208 232C221.3 232 232 242.7 232 256C232 269.3 221.3 280 208 280C194.7 280 184 269.3 184 256zM184 336C184 349.3 173.3 360 160 360C146.7 360 136 349.3 136 336C136 322.7 146.7 312 160 312C173.3 312 184 322.7 184 336zM280 256C280 242.7 290.7 232 304 232C317.3 232 328 242.7 328 256C328 269.3 317.3 280 304 280C290.7 280 280 269.3 280 256zM280 336C280 349.3 269.3 360 256 360C242.7 360 232 349.3 232 336C232 322.7 242.7 312 256 312C269.3 312 280 322.7 280 336zM376 256C376 242.7 386.7 232 400 232C413.3 232 424 242.7 424 256C424 269.3 413.3 280 400 280C386.7 280 376 269.3 376 256zM376 336C376 349.3 365.3 360 352 360C338.7 360 328 349.3 328 336C328 322.7 338.7 312 352 312C365.3 312 376 322.7 376 336zM288 0C305.7 0 320 14.33 320 32V96C320 113.7 305.7 128 288 128H208V160H424.5C456.3 160 483.3 183.4 487.8 214.9L511.4 379.5C511.8 382.5 512 385.5 512 388.5V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V388.5C0 385.5 .215 382.5 .6432 379.5L24.15 214.9C28.65 183.4 55.66 160 87.51 160H144V128H64C46.33 128 32 113.7 32 96V32C32 14.33 46.33 0 64 0L288 0zM96 48C87.16 48 80 55.16 80 64C80 72.84 87.16 80 96 80H256C264.8 80 272 72.84 272 64C272 55.16 264.8 48 256 48H96zM64 464H448C456.8 464 464 456.8 464 448V432H48V448C48 456.8 55.16 464 64 464zM424.5 208H87.51C79.54 208 72.79 213.9 71.67 221.7L48.49 384H463.5L440.3 221.7C439.2 213.9 432.5 208 424.5 208V208z"/>
</>],
['solid',<>
	<path d="M288 0C305.7 0 320 14.33 320 32V96C320 113.7 305.7 128 288 128H208V160H424.1C456.6 160 483.5 183.1 488.2 214.4L510.9 364.1C511.6 368.8 512 373.6 512 378.4V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V378.4C0 373.6 .3622 368.8 1.083 364.1L23.76 214.4C28.5 183.1 55.39 160 87.03 160H143.1V128H63.1C46.33 128 31.1 113.7 31.1 96V32C31.1 14.33 46.33 0 63.1 0L288 0zM96 48C87.16 48 80 55.16 80 64C80 72.84 87.16 80 96 80H256C264.8 80 272 72.84 272 64C272 55.16 264.8 48 256 48H96zM80 448H432C440.8 448 448 440.8 448 432C448 423.2 440.8 416 432 416H80C71.16 416 64 423.2 64 432C64 440.8 71.16 448 80 448zM112 216C98.75 216 88 226.7 88 240C88 253.3 98.75 264 112 264C125.3 264 136 253.3 136 240C136 226.7 125.3 216 112 216zM208 264C221.3 264 232 253.3 232 240C232 226.7 221.3 216 208 216C194.7 216 184 226.7 184 240C184 253.3 194.7 264 208 264zM160 296C146.7 296 136 306.7 136 320C136 333.3 146.7 344 160 344C173.3 344 184 333.3 184 320C184 306.7 173.3 296 160 296zM304 264C317.3 264 328 253.3 328 240C328 226.7 317.3 216 304 216C290.7 216 280 226.7 280 240C280 253.3 290.7 264 304 264zM256 296C242.7 296 232 306.7 232 320C232 333.3 242.7 344 256 344C269.3 344 280 333.3 280 320C280 306.7 269.3 296 256 296zM400 264C413.3 264 424 253.3 424 240C424 226.7 413.3 216 400 216C386.7 216 376 226.7 376 240C376 253.3 386.7 264 400 264zM352 296C338.7 296 328 306.7 328 320C328 333.3 338.7 344 352 344C365.3 344 376 333.3 376 320C376 306.7 365.3 296 352 296z"/>
</>],
['thin',<>
	<path d="M256 56C260.4 56 264 59.58 264 64C264 68.42 260.4 72 256 72H96C91.58 72 88 68.42 88 64C88 59.58 91.58 56 96 56H256zM96 240C96 231.2 103.2 224 112 224C120.8 224 128 231.2 128 240C128 248.8 120.8 256 112 256C103.2 256 96 248.8 96 240zM224 240C224 248.8 216.8 256 208 256C199.2 256 192 248.8 192 240C192 231.2 199.2 224 208 224C216.8 224 224 231.2 224 240zM144 320C144 311.2 151.2 304 160 304C168.8 304 176 311.2 176 320C176 328.8 168.8 336 160 336C151.2 336 144 328.8 144 320zM320 240C320 248.8 312.8 256 304 256C295.2 256 288 248.8 288 240C288 231.2 295.2 224 304 224C312.8 224 320 231.2 320 240zM240 320C240 311.2 247.2 304 256 304C264.8 304 272 311.2 272 320C272 328.8 264.8 336 256 336C247.2 336 240 328.8 240 320zM416 240C416 248.8 408.8 256 400 256C391.2 256 384 248.8 384 240C384 231.2 391.2 224 400 224C408.8 224 416 231.2 416 240zM336 320C336 311.2 343.2 304 352 304C360.8 304 368 311.2 368 320C368 328.8 360.8 336 352 336C343.2 336 336 328.8 336 320zM272 128H184V160H424.5C456.3 160 483.3 183.4 487.8 214.9L511.4 379.5C511.8 382.5 512 385.5 512 388.5V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V388.5C0 385.5 .215 382.5 .6432 379.5L24.15 214.9C28.65 183.4 55.66 160 87.51 160H168V128H80C53.49 128 32 106.5 32 80V48C32 21.49 53.49 0 80 0H272C298.5 0 320 21.49 320 48V80C320 106.5 298.5 128 272 128V128zM48 48V80C48 97.67 62.33 112 80 112H272C289.7 112 304 97.67 304 80V48C304 30.33 289.7 16 272 16H80C62.33 16 48 30.33 48 48zM87.51 176C63.62 176 43.37 193.6 39.99 217.2L16.48 381.8C16.38 382.5 16.29 383.3 16.22 384H495.8C495.7 383.3 495.6 382.5 495.5 381.8L472 217.2C468.6 193.6 448.4 176 424.5 176H87.51zM16 400V448C16 474.5 37.49 496 64 496H448C474.5 496 496 474.5 496 448V400H16z"/>
</>],

]);

const CashRegister: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CashRegister.displayName = "CashRegister";

export default CashRegister;
