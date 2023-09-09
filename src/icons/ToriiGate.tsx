
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M71.37 23.79C87.68 29.23 104.8 32 121.1 32H390C407.2 32 424.3 29.23 440.6 23.79L512 0V80C512 106.5 490.5 128 464 128H48C21.49 128 0 106.5 0 80V0L71.37 23.79zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H480z"/><path className="fa-secondary" d="M128 128V192H64V128H128zM288 128V192H224V128H288zM448 128V192H384V128H448zM64 480V256H128V480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480zM384 480V256H448V480C448 497.7 433.7 512 416 512C398.3 512 384 497.7 384 480z"/>
</>],
['light',<>
	<path d="M16 288C7.164 288 0 280.8 0 272C0 263.2 7.164 256 16 256H64V176C28.65 176 0 147.3 0 112V0L71.37 23.79C87.68 29.23 104.8 32 121.1 32H390C407.2 32 424.3 29.23 440.6 23.79L512 0V112C512 147.3 483.3 176 448 176V256H496C504.8 256 512 263.2 512 272C512 280.8 504.8 288 496 288H448V496C448 504.8 440.8 512 432 512C423.2 512 416 504.8 416 496V288H96V496C96 504.8 88.84 512 80 512C71.16 512 64 504.8 64 496V288H16zM64 144H448C465.7 144 480 129.7 480 112V44.4L450.8 54.15C431.2 60.67 410.7 64 390 64H121.1C101.3 64 80.83 60.67 61.25 54.15L32 44.4V112C32 129.7 46.33 144 64 144V144zM240 176H96V256H240V176zM416 256V176H272V256H416z"/>
</>],
['regular',<>
	<path d="M0 112V0L71.37 23.79C87.68 29.23 104.8 32 121.1 32H390C407.2 32 424.3 29.23 440.6 23.79L512 0V112C512 147.3 483.3 176 448 176V240H488C501.3 240 512 250.7 512 264C512 277.3 501.3 288 488 288H448V488C448 501.3 437.3 512 424 512C410.7 512 400 501.3 400 488V288H112V488C112 501.3 101.3 512 88 512C74.75 512 64 501.3 64 488V288H24C10.75 288 0 277.3 0 264C0 250.7 10.75 240 24 240H64V176C28.65 176 0 147.3 0 112zM64 128H448C456.8 128 464 120.8 464 112V66.6L455.8 69.33C434.6 76.4 412.4 80 390 80H121.1C99.61 80 77.4 76.4 56.19 69.33L48 66.6V112C48 120.8 55.16 128 64 128V128zM112 240H232V176H112V240zM280 176V240H400V176H280z"/>
</>],
['solid',<>
	<path d="M0 80V0L71.37 23.79C87.68 29.23 104.8 32 121.1 32H390C407.2 32 424.3 29.23 440.6 23.79L512 0V80C512 106.5 490.5 128 464 128H448V192H384V128H288V192H224V128H128V192H64V128H48C21.49 128 0 106.5 0 80zM32 288C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H448V480C448 497.7 433.7 512 416 512C398.3 512 384 497.7 384 480V288H128V480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480V288H32z"/>
</>],
['thin',<>
	<path d="M448 160H432V240H504C508.4 240 512 243.6 512 248C512 252.4 508.4 256 504 256H432V504C432 508.4 428.4 512 424 512C419.6 512 416 508.4 416 504V256H96V504C96 508.4 92.42 512 88 512C83.58 512 80 508.4 80 504V256H8C3.582 256 0 252.4 0 248C0 243.6 3.582 240 8 240H80V160H64C28.65 160 0 131.3 0 96V0L71.37 23.79C87.68 29.23 104.8 32 121.1 32H390C407.2 32 424.3 29.23 440.6 23.79L512 0V96C512 131.3 483.3 160 448 160zM64 144H448C474.5 144 496 122.5 496 96V22.2L445.7 38.97C427.7 44.95 408.1 48 390 48H121.1C103 48 84.25 44.95 66.31 38.97L16 22.2V96C16 122.5 37.49 144 64 144V144zM96 240H248V160H96V240zM264 160V240H416V160H264z"/>
</>],

]);

const ToriiGate: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ToriiGate.displayName = "ToriiGate";

export default ToriiGate;