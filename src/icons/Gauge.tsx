
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 292.7C303.5 302.1 320 325.1 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352C192 325.1 208.5 302.1 232 292.7V88C232 74.75 242.7 64 256 64C269.3 64 280 74.75 280 88V292.7z"/><path className="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7zM144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176zM96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224zM416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288zM368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112z"/>
</>],
['light',<>
	<path d="M192 352C192 322.2 212.4 297.1 239.1 290L239.1 95.1C239.1 87.16 247.2 79.1 255.1 79.1C264.8 79.1 272 87.16 272 95.1L272 290C299.6 297.1 320 322.2 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352V352zM256 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 256 320C238.3 320 224 334.3 224 352C224 369.7 238.3 384 256 384zM120 144C120 130.7 130.7 120 144 120C157.3 120 168 130.7 168 144C168 157.3 157.3 168 144 168C130.7 168 120 157.3 120 144zM120 256C120 269.3 109.3 280 96 280C82.75 280 72 269.3 72 256C72 242.7 82.75 232 96 232C109.3 232 120 242.7 120 256zM392 256C392 242.7 402.7 232 416 232C429.3 232 440 242.7 440 256C440 269.3 429.3 280 416 280C402.7 280 392 269.3 392 256zM392 144C392 157.3 381.3 168 368 168C354.7 168 344 157.3 344 144C344 130.7 354.7 120 368 120C381.3 120 392 130.7 392 144zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"/>
</>],
['regular',<>
	<path d="M312 352C312 382.9 286.9 408 256 408C225.1 408 200 382.9 200 352C200 329.7 213.1 310.4 231.1 301.4V119.1C231.1 106.7 242.7 95.1 255.1 95.1C269.3 95.1 280 106.7 280 119.1V301.4C298.9 310.4 312 329.7 312 352V352zM128 160C128 142.3 142.3 128 160 128C177.7 128 192 142.3 192 160C192 177.7 177.7 192 160 192C142.3 192 128 177.7 128 160zM144 256C144 273.7 129.7 288 112 288C94.33 288 80 273.7 80 256C80 238.3 94.33 224 112 224C129.7 224 144 238.3 144 256zM368 256C368 238.3 382.3 224 400 224C417.7 224 432 238.3 432 256C432 273.7 417.7 288 400 288C382.3 288 368 273.7 368 256zM384 160C384 177.7 369.7 192 352 192C334.3 192 320 177.7 320 160C320 142.3 334.3 128 352 128C369.7 128 384 142.3 384 160zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7zM144 176C161.7 176 176 161.7 176 144C176 126.3 161.7 112 144 112C126.3 112 112 126.3 112 144C112 161.7 126.3 176 144 176zM96 224C78.33 224 64 238.3 64 256C64 273.7 78.33 288 96 288C113.7 288 128 273.7 128 256C128 238.3 113.7 224 96 224zM416 288C433.7 288 448 273.7 448 256C448 238.3 433.7 224 416 224C398.3 224 384 238.3 384 256C384 273.7 398.3 288 416 288zM368 112C350.3 112 336 126.3 336 144C336 161.7 350.3 176 368 176C385.7 176 400 161.7 400 144C400 126.3 385.7 112 368 112z"/>
</>],
['thin',<>
	<path d="M192 352C192 319.4 216.4 292.4 247.1 288.5V79.1C247.1 75.58 251.6 71.1 255.1 71.1C260.4 71.1 264 75.58 264 79.1V288.5C295.6 292.4 320 319.4 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352zM256 400C282.5 400 304 378.5 304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400zM128 128C128 119.2 135.2 112 144 112C152.8 112 160 119.2 160 128C160 136.8 152.8 144 144 144C135.2 144 128 136.8 128 128zM112 240C112 248.8 104.8 256 96 256C87.16 256 80 248.8 80 240C80 231.2 87.16 224 96 224C104.8 224 112 231.2 112 240zM400 240C400 231.2 407.2 224 416 224C424.8 224 432 231.2 432 240C432 248.8 424.8 256 416 256C407.2 256 400 248.8 400 240zM384 128C384 136.8 376.8 144 368 144C359.2 144 352 136.8 352 128C352 119.2 359.2 112 368 112C376.8 112 384 119.2 384 128zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496z"/>
</>],

]);

const Gauge: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Gauge.displayName = "Gauge";

export default Gauge;
