
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448z"/><path className="fa-secondary" d="M416 320C433.7 320 448 334.3 448 352C448 369.7 433.7 384 416 384C398.3 384 384 369.7 384 352C384 334.3 398.3 320 416 320zM32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320zM256 352C256 369.7 241.7 384 224 384C206.3 384 192 369.7 192 352C192 334.3 206.3 320 224 320C241.7 320 256 334.3 256 352zM416 128C433.7 128 448 142.3 448 160C448 177.7 433.7 192 416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128zM64 160C64 177.7 49.67 192 32 192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128C49.67 128 64 142.3 64 160zM224 128C241.7 128 256 142.3 256 160C256 177.7 241.7 192 224 192C206.3 192 192 177.7 192 160C192 142.3 206.3 128 224 128zM448 256C448 273.7 433.7 288 416 288C398.3 288 384 273.7 384 256C384 238.3 398.3 224 416 224C433.7 224 448 238.3 448 256zM32 224C49.67 224 64 238.3 64 256C64 273.7 49.67 288 32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224zM256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256zM416 32C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32zM64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64zM224 32C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96C206.3 96 192 81.67 192 64C192 46.33 206.3 32 224 32zM352 256C352 273.7 337.7 288 320 288C302.3 288 288 273.7 288 256C288 238.3 302.3 224 320 224C337.7 224 352 238.3 352 256zM320 32C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32zM160 64C160 81.67 145.7 96 128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32C145.7 32 160 46.33 160 64zM128 224C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224z"/>
</>],
['light',<>
	<path d="M448 464C448 472.8 440.8 480 432 480H16C7.164 480 0 472.8 0 464C0 455.2 7.164 448 16 448H432C440.8 448 448 455.2 448 464zM440 352C440 365.3 429.3 376 416 376C402.7 376 392 365.3 392 352C392 338.7 402.7 328 416 328C429.3 328 440 338.7 440 352zM32 328C45.25 328 56 338.7 56 352C56 365.3 45.25 376 32 376C18.75 376 8 365.3 8 352C8 338.7 18.75 328 32 328zM248 352C248 365.3 237.3 376 224 376C210.7 376 200 365.3 200 352C200 338.7 210.7 328 224 328C237.3 328 248 338.7 248 352zM416 136C429.3 136 440 146.7 440 160C440 173.3 429.3 184 416 184C402.7 184 392 173.3 392 160C392 146.7 402.7 136 416 136zM56 160C56 173.3 45.25 184 32 184C18.75 184 8 173.3 8 160C8 146.7 18.75 136 32 136C45.25 136 56 146.7 56 160zM224 136C237.3 136 248 146.7 248 160C248 173.3 237.3 184 224 184C210.7 184 200 173.3 200 160C200 146.7 210.7 136 224 136zM440 256C440 269.3 429.3 280 416 280C402.7 280 392 269.3 392 256C392 242.7 402.7 232 416 232C429.3 232 440 242.7 440 256zM32 232C45.25 232 56 242.7 56 256C56 269.3 45.25 280 32 280C18.75 280 8 269.3 8 256C8 242.7 18.75 232 32 232zM248 256C248 269.3 237.3 280 224 280C210.7 280 200 269.3 200 256C200 242.7 210.7 232 224 232C237.3 232 248 242.7 248 256zM416 40C429.3 40 440 50.75 440 64C440 77.25 429.3 88 416 88C402.7 88 392 77.25 392 64C392 50.75 402.7 40 416 40zM56 64C56 77.25 45.25 88 32 88C18.75 88 8 77.25 8 64C8 50.75 18.75 40 32 40C45.25 40 56 50.75 56 64zM224 40C237.3 40 248 50.75 248 64C248 77.25 237.3 88 224 88C210.7 88 200 77.25 200 64C200 50.75 210.7 40 224 40zM344 256C344 269.3 333.3 280 320 280C306.7 280 296 269.3 296 256C296 242.7 306.7 232 320 232C333.3 232 344 242.7 344 256zM320 40C333.3 40 344 50.75 344 64C344 77.25 333.3 88 320 88C306.7 88 296 77.25 296 64C296 50.75 306.7 40 320 40zM152 64C152 77.25 141.3 88 128 88C114.7 88 104 77.25 104 64C104 50.75 114.7 40 128 40C141.3 40 152 50.75 152 64zM128 232C141.3 232 152 242.7 152 256C152 269.3 141.3 280 128 280C114.7 280 104 269.3 104 256C104 242.7 114.7 232 128 232z"/>
</>],
['regular',<>
	<path d="M448 456C448 469.3 437.3 480 424 480H24C10.75 480 0 469.3 0 456C0 442.7 10.75 432 24 432H424C437.3 432 448 442.7 448 456zM448 352C448 369.7 433.7 384 416 384C398.3 384 384 369.7 384 352C384 334.3 398.3 320 416 320C433.7 320 448 334.3 448 352zM32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320zM256 352C256 369.7 241.7 384 224 384C206.3 384 192 369.7 192 352C192 334.3 206.3 320 224 320C241.7 320 256 334.3 256 352zM416 128C433.7 128 448 142.3 448 160C448 177.7 433.7 192 416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128zM64 160C64 177.7 49.67 192 32 192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128C49.67 128 64 142.3 64 160zM224 128C241.7 128 256 142.3 256 160C256 177.7 241.7 192 224 192C206.3 192 192 177.7 192 160C192 142.3 206.3 128 224 128zM448 256C448 273.7 433.7 288 416 288C398.3 288 384 273.7 384 256C384 238.3 398.3 224 416 224C433.7 224 448 238.3 448 256zM32 224C49.67 224 64 238.3 64 256C64 273.7 49.67 288 32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224zM256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256zM416 32C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32zM64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64zM224 32C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96C206.3 96 192 81.67 192 64C192 46.33 206.3 32 224 32zM352 256C352 273.7 337.7 288 320 288C302.3 288 288 273.7 288 256C288 238.3 302.3 224 320 224C337.7 224 352 238.3 352 256zM320 32C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32zM160 64C160 81.67 145.7 96 128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32C145.7 32 160 46.33 160 64zM128 224C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224z"/>
</>],
['solid',<>
	<path d="M448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448zM448 352C448 369.7 433.7 384 416 384C398.3 384 384 369.7 384 352C384 334.3 398.3 320 416 320C433.7 320 448 334.3 448 352zM32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320zM256 352C256 369.7 241.7 384 224 384C206.3 384 192 369.7 192 352C192 334.3 206.3 320 224 320C241.7 320 256 334.3 256 352zM416 128C433.7 128 448 142.3 448 160C448 177.7 433.7 192 416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128zM64 160C64 177.7 49.67 192 32 192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128C49.67 128 64 142.3 64 160zM224 128C241.7 128 256 142.3 256 160C256 177.7 241.7 192 224 192C206.3 192 192 177.7 192 160C192 142.3 206.3 128 224 128zM448 256C448 273.7 433.7 288 416 288C398.3 288 384 273.7 384 256C384 238.3 398.3 224 416 224C433.7 224 448 238.3 448 256zM32 224C49.67 224 64 238.3 64 256C64 273.7 49.67 288 32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224zM256 256C256 273.7 241.7 288 224 288C206.3 288 192 273.7 192 256C192 238.3 206.3 224 224 224C241.7 224 256 238.3 256 256zM416 32C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32zM64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64zM224 32C241.7 32 256 46.33 256 64C256 81.67 241.7 96 224 96C206.3 96 192 81.67 192 64C192 46.33 206.3 32 224 32zM352 256C352 273.7 337.7 288 320 288C302.3 288 288 273.7 288 256C288 238.3 302.3 224 320 224C337.7 224 352 238.3 352 256zM320 32C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32zM160 64C160 81.67 145.7 96 128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32C145.7 32 160 46.33 160 64zM128 224C145.7 224 160 238.3 160 256C160 273.7 145.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224z"/>
</>],
['thin',<>
	<path d="M8 464H440C444.4 464 448 467.6 448 472C448 476.4 444.4 480 440 480H8C3.582 480 0 476.4 0 472C0 467.6 3.582 464 8 464zM32 336C40.84 336 48 343.2 48 352C48 360.8 40.84 368 32 368C23.16 368 16 360.8 16 352C16 343.2 23.16 336 32 336zM432 352C432 360.8 424.8 368 416 368C407.2 368 400 360.8 400 352C400 343.2 407.2 336 416 336C424.8 336 432 343.2 432 352zM224 336C232.8 336 240 343.2 240 352C240 360.8 232.8 368 224 368C215.2 368 208 360.8 208 352C208 343.2 215.2 336 224 336zM48 160C48 168.8 40.84 176 32 176C23.16 176 16 168.8 16 160C16 151.2 23.16 144 32 144C40.84 144 48 151.2 48 160zM416 144C424.8 144 432 151.2 432 160C432 168.8 424.8 176 416 176C407.2 176 400 168.8 400 160C400 151.2 407.2 144 416 144zM240 160C240 168.8 232.8 176 224 176C215.2 176 208 168.8 208 160C208 151.2 215.2 144 224 144C232.8 144 240 151.2 240 160zM32 240C40.84 240 48 247.2 48 256C48 264.8 40.84 272 32 272C23.16 272 16 264.8 16 256C16 247.2 23.16 240 32 240zM432 256C432 264.8 424.8 272 416 272C407.2 272 400 264.8 400 256C400 247.2 407.2 240 416 240C424.8 240 432 247.2 432 256zM224 240C232.8 240 240 247.2 240 256C240 264.8 232.8 272 224 272C215.2 272 208 264.8 208 256C208 247.2 215.2 240 224 240zM48 64C48 72.84 40.84 80 32 80C23.16 80 16 72.84 16 64C16 55.16 23.16 48 32 48C40.84 48 48 55.16 48 64zM416 48C424.8 48 432 55.16 432 64C432 72.84 424.8 80 416 80C407.2 80 400 72.84 400 64C400 55.16 407.2 48 416 48zM240 64C240 72.84 232.8 80 224 80C215.2 80 208 72.84 208 64C208 55.16 215.2 48 224 48C232.8 48 240 55.16 240 64zM128 240C136.8 240 144 247.2 144 256C144 264.8 136.8 272 128 272C119.2 272 112 264.8 112 256C112 247.2 119.2 240 128 240zM144 64C144 72.84 136.8 80 128 80C119.2 80 112 72.84 112 64C112 55.16 119.2 48 128 48C136.8 48 144 55.16 144 64zM320 48C328.8 48 336 55.16 336 64C336 72.84 328.8 80 320 80C311.2 80 304 72.84 304 64C304 55.16 311.2 48 320 48zM336 256C336 264.8 328.8 272 320 272C311.2 272 304 264.8 304 256C304 247.2 311.2 240 320 240C328.8 240 336 247.2 336 256z"/>
</>],

]);

const BorderBottom: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BorderBottom.displayName = "BorderBottom";

export default BorderBottom;
