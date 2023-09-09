
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 101.6C0 80.82 16.82 64 37.57 64H176C237.9 64 288 114.1 288 176C288 200.2 280.3 222.6 267.3 240.9C298.9 260.7 320 295.9 320 336C320 397.9 269.9 448 208 448H41.74C18.69 448 0 429.3 0 406.3V101.6zM176 224C202.5 224 224 202.5 224 176C224 149.5 202.5 128 176 128H64V224H176zM64 288V384H208C234.5 384 256 362.5 256 336C256 309.5 234.5 288 208 288H64z"/><path className="fa-secondary" d="M176 32V64H112V32C112 14.33 126.3 0 144 0C161.7 0 176 14.33 176 32zM176 288V384H112V288H176zM176 128V224H112V128H176zM112 448H176V480C176 497.7 161.7 512 144 512C126.3 512 112 497.7 112 480V448z"/>
</>],
['light',<>
	<path d="M160 16V64H184C241.4 64 288 110.6 288 168C288 199.3 274.1 227.4 252.2 246.5C291.8 261.2 320 299.3 320 344C320 401.4 273.4 448 216 448H160V496C160 504.8 152.8 512 144 512C135.2 512 128 504.8 128 496V448H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H128V16C128 7.164 135.2 0 144 0C152.8 0 160 7.164 160 16V16zM128 96H37.57C34.49 96 32 98.49 32 101.6V240H128V96zM184 240C223.8 240 256 207.8 256 168C256 128.2 223.8 96 184 96H160V240H184zM128 272H32V406.3C32 411.6 36.36 416 41.74 416H128V272zM216 416C255.8 416 288 383.8 288 344C288 304.2 255.8 272 216 272H160V416H216z"/>
</>],
['regular',<>
	<path d="M160 24V64H180C239.6 64 288 112.4 288 172C288 199.5 277.7 224.6 260.8 243.6C295.9 261.5 320 297.9 320 340C320 399.6 271.6 448 212 448H160V488C160 501.3 149.3 512 136 512C122.7 512 112 501.3 112 488V448H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H112V24C112 10.75 122.7 0 136 0C149.3 0 160 10.75 160 24V24zM112 112H48V232H112V112zM180 232C213.1 232 240 205.1 240 172C240 138.9 213.1 112 180 112H160V232H180zM112 280H48V400H112V280zM212 400C245.1 400 272 373.1 272 340C272 306.9 245.1 280 212 280H160V400H212z"/>
</>],
['solid',<>
	<path d="M176 32V64C237.9 64 288 114.1 288 176C288 200.2 280.3 222.6 267.3 240.9C298.9 260.7 320 295.9 320 336C320 397.9 269.9 448 208 448H176V480C176 497.7 161.7 512 144 512C126.3 512 112 497.7 112 480V448H41.74C18.69 448 0 429.3 0 406.3V101.6C0 80.82 16.82 64 37.57 64H112V32C112 14.33 126.3 0 144 0C161.7 0 176 14.33 176 32V32zM112 128H64V224H112V128zM224 176C224 149.5 202.5 128 176 128V224C202.5 224 224 202.5 224 176zM112 288H64V384H112V288zM208 384C234.5 384 256 362.5 256 336C256 309.5 234.5 288 208 288H176V384H208z"/>
</>],
['thin',<>
	<path d="M144 8V64H172C227.2 64 272 108.8 272 164C272 200.5 252.5 232.4 223.3 249.9C269.3 258.9 304 299.4 304 348C304 403.2 259.2 448 204 448H144V504C144 508.4 140.4 512 136 512C131.6 512 128 508.4 128 504V448H53.57C32.82 448 16 431.2 16 410.4V97.39C16 78.95 30.95 64 49.39 64H128V8C128 3.582 131.6 0 136 0C140.4 0 144 3.582 144 8V8zM128 80H49.39C39.79 80 32 87.79 32 97.39V248H128V80zM172 248C218.4 248 256 210.4 256 164C256 117.6 218.4 80 172 80H144V248H172zM128 264H32V410.4C32 422.3 41.66 432 53.57 432H128V264zM204 432C250.4 432 288 394.4 288 348C288 301.6 250.4 264 204 264H144V432H204z"/>
</>],

]);

const BahtSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BahtSign.displayName = "BahtSign";

export default BahtSign;
