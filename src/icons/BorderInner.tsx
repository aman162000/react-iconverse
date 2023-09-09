
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H192V64C192 46.33 206.3 32 224 32C241.7 32 256 46.33 256 64V224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H256V448C256 465.7 241.7 480 224 480C206.3 480 192 465.7 192 448V288z"/><path className="fa-secondary" d="M416 416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480C398.3 480 384 465.7 384 448C384 430.3 398.3 416 416 416zM416 320C433.7 320 448 334.3 448 352C448 369.7 433.7 384 416 384C398.3 384 384 369.7 384 352C384 334.3 398.3 320 416 320zM32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320zM448 160C448 177.7 433.7 192 416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128C433.7 128 448 142.3 448 160zM32 128C49.67 128 64 142.3 64 160C64 177.7 49.67 192 32 192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128zM448 64C448 81.67 433.7 96 416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32C433.7 32 448 46.33 448 64zM64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64zM32 416C49.67 416 64 430.3 64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416zM352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32C337.7 32 352 46.33 352 64zM320 416C337.7 416 352 430.3 352 448C352 465.7 337.7 480 320 480C302.3 480 288 465.7 288 448C288 430.3 302.3 416 320 416zM160 64C160 81.67 145.7 96 128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32C145.7 32 160 46.33 160 64zM128 416C145.7 416 160 430.3 160 448C160 465.7 145.7 480 128 480C110.3 480 96 465.7 96 448C96 430.3 110.3 416 128 416z"/>
</>],
['light',<>
	<path d="M224 480C215.2 480 208 472.8 208 464V272H16C7.164 272 0 264.8 0 256C0 247.2 7.164 240 16 240H208V48C208 39.16 215.2 32 224 32C232.8 32 240 39.16 240 48V240H432C440.8 240 448 247.2 448 256C448 264.8 440.8 272 432 272H240V464C240 472.8 232.8 480 224 480zM8 448C8 434.7 18.75 424 32 424C45.25 424 56 434.7 56 448C56 461.3 45.25 472 32 472C18.75 472 8 461.3 8 448zM392 448C392 434.7 402.7 424 416 424C429.3 424 440 434.7 440 448C440 461.3 429.3 472 416 472C402.7 472 392 461.3 392 448zM8 352C8 338.7 18.75 328 32 328C45.25 328 56 338.7 56 352C56 365.3 45.25 376 32 376C18.75 376 8 365.3 8 352zM392 352C392 338.7 402.7 328 416 328C429.3 328 440 338.7 440 352C440 365.3 429.3 376 416 376C402.7 376 392 365.3 392 352zM440 160C440 173.3 429.3 184 416 184C402.7 184 392 173.3 392 160C392 146.7 402.7 136 416 136C429.3 136 440 146.7 440 160zM8 160C8 146.7 18.75 136 32 136C45.25 136 56 146.7 56 160C56 173.3 45.25 184 32 184C18.75 184 8 173.3 8 160zM440 64C440 77.25 429.3 88 416 88C402.7 88 392 77.25 392 64C392 50.75 402.7 40 416 40C429.3 40 440 50.75 440 64zM56 64C56 77.25 45.25 88 32 88C18.75 88 8 77.25 8 64C8 50.75 18.75 40 32 40C45.25 40 56 50.75 56 64zM344 64C344 77.25 333.3 88 320 88C306.7 88 296 77.25 296 64C296 50.75 306.7 40 320 40C333.3 40 344 50.75 344 64zM296 448C296 434.7 306.7 424 320 424C333.3 424 344 434.7 344 448C344 461.3 333.3 472 320 472C306.7 472 296 461.3 296 448zM152 64C152 77.25 141.3 88 128 88C114.7 88 104 77.25 104 64C104 50.75 114.7 40 128 40C141.3 40 152 50.75 152 64zM104 448C104 434.7 114.7 424 128 424C141.3 424 152 434.7 152 448C152 461.3 141.3 472 128 472C114.7 472 104 461.3 104 448z"/>
</>],
['regular',<>
	<path d="M384 448C384 430.3 398.3 416 416 416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480C398.3 480 384 465.7 384 448zM384 352C384 334.3 398.3 320 416 320C433.7 320 448 334.3 448 352C448 369.7 433.7 384 416 384C398.3 384 384 369.7 384 352zM0 352C0 334.3 14.33 320 32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384C14.33 384 0 369.7 0 352zM448 160C448 177.7 433.7 192 416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128C433.7 128 448 142.3 448 160zM0 160C0 142.3 14.33 128 32 128C49.67 128 64 142.3 64 160C64 177.7 49.67 192 32 192C14.33 192 0 177.7 0 160zM448 64C448 81.67 433.7 96 416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32C433.7 32 448 46.33 448 64zM64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64zM0 448C0 430.3 14.33 416 32 416C49.67 416 64 430.3 64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448zM352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32C337.7 32 352 46.33 352 64zM288 448C288 430.3 302.3 416 320 416C337.7 416 352 430.3 352 448C352 465.7 337.7 480 320 480C302.3 480 288 465.7 288 448zM160 64C160 81.67 145.7 96 128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32C145.7 32 160 46.33 160 64zM96 448C96 430.3 110.3 416 128 416C145.7 416 160 430.3 160 448C160 465.7 145.7 480 128 480C110.3 480 96 465.7 96 448zM224 480C210.7 480 200 469.3 200 456V280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H200V56C200 42.75 210.7 32 224 32C237.3 32 248 42.75 248 56V232H424C437.3 232 448 242.7 448 256C448 269.3 437.3 280 424 280H248V456C248 469.3 237.3 480 224 480z"/>
</>],
['solid',<>
	<path d="M32 416C49.67 416 64 430.3 64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416zM128 416C145.7 416 160 430.3 160 448C160 465.7 145.7 480 128 480C110.3 480 96 465.7 96 448C96 430.3 110.3 416 128 416zM128 32C145.7 32 160 46.33 160 64C160 81.67 145.7 96 128 96C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32zM320 480C302.3 480 288 465.7 288 448C288 430.3 302.3 416 320 416C337.7 416 352 430.3 352 448C352 465.7 337.7 480 320 480zM320 32C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96C302.3 96 288 81.67 288 64C288 46.33 302.3 32 320 32zM416 480C398.3 480 384 465.7 384 448C384 430.3 398.3 416 416 416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480zM416 96C398.3 96 384 81.67 384 64C384 46.33 398.3 32 416 32C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96zM32 32C49.67 32 64 46.33 64 64C64 81.67 49.67 96 32 96C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32zM416 384C398.3 384 384 369.7 384 352C384 334.3 398.3 320 416 320C433.7 320 448 334.3 448 352C448 369.7 433.7 384 416 384zM32 320C49.67 320 64 334.3 64 352C64 369.7 49.67 384 32 384C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320zM416 192C398.3 192 384 177.7 384 160C384 142.3 398.3 128 416 128C433.7 128 448 142.3 448 160C448 177.7 433.7 192 416 192zM32 128C49.67 128 64 142.3 64 160C64 177.7 49.67 192 32 192C14.33 192 0 177.7 0 160C0 142.3 14.33 128 32 128zM0 256C0 238.3 14.33 224 32 224H192V64C192 46.33 206.3 32 224 32C241.7 32 256 46.33 256 64V224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H256V448C256 465.7 241.7 480 224 480C206.3 480 192 465.7 192 448V288H32C14.33 288 0 273.7 0 256z"/>
</>],
['thin',<>
	<path d="M216 264H8C3.582 264 0 260.4 0 256C0 251.6 3.582 248 8 248H216V40C216 35.58 219.6 32 224 32C228.4 32 232 35.58 232 40V248H440C444.4 248 448 251.6 448 256C448 260.4 444.4 264 440 264H232V472C232 476.4 228.4 480 224 480C219.6 480 216 476.4 216 472V264zM16 448C16 439.2 23.16 432 32 432C40.84 432 48 439.2 48 448C48 456.8 40.84 464 32 464C23.16 464 16 456.8 16 448zM400 448C400 439.2 407.2 432 416 432C424.8 432 432 439.2 432 448C432 456.8 424.8 464 416 464C407.2 464 400 456.8 400 448zM16 352C16 343.2 23.16 336 32 336C40.84 336 48 343.2 48 352C48 360.8 40.84 368 32 368C23.16 368 16 360.8 16 352zM400 352C400 343.2 407.2 336 416 336C424.8 336 432 343.2 432 352C432 360.8 424.8 368 416 368C407.2 368 400 360.8 400 352zM432 160C432 168.8 424.8 176 416 176C407.2 176 400 168.8 400 160C400 151.2 407.2 144 416 144C424.8 144 432 151.2 432 160zM16 160C16 151.2 23.16 144 32 144C40.84 144 48 151.2 48 160C48 168.8 40.84 176 32 176C23.16 176 16 168.8 16 160zM432 64C432 72.84 424.8 80 416 80C407.2 80 400 72.84 400 64C400 55.16 407.2 48 416 48C424.8 48 432 55.16 432 64zM48 64C48 72.84 40.84 80 32 80C23.16 80 16 72.84 16 64C16 55.16 23.16 48 32 48C40.84 48 48 55.16 48 64zM336 64C336 72.84 328.8 80 320 80C311.2 80 304 72.84 304 64C304 55.16 311.2 48 320 48C328.8 48 336 55.16 336 64zM304 448C304 439.2 311.2 432 320 432C328.8 432 336 439.2 336 448C336 456.8 328.8 464 320 464C311.2 464 304 456.8 304 448zM144 64C144 72.84 136.8 80 128 80C119.2 80 112 72.84 112 64C112 55.16 119.2 48 128 48C136.8 48 144 55.16 144 64zM112 448C112 439.2 119.2 432 128 432C136.8 432 144 439.2 144 448C144 456.8 136.8 464 128 464C119.2 464 112 456.8 112 448z"/>
</>],

]);

const BorderInner: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BorderInner.displayName = "BorderInner";

export default BorderInner;
