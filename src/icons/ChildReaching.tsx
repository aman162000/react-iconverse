
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M155.7 170.2C167.3 173.1 179.6 176 192.2 176C232.1 176 269.3 155.8 291 122.4L309.2 94.54C318.8 79.73 338.6 75.54 353.5 85.18C368.3 94.82 372.5 114.6 362.8 129.5L344.7 157.3C326.4 185.4 301.2 207.3 272 221.6V480C272 497.7 257.7 512 240 512C222.3 512 208 497.7 208 480V384H176V480C176 497.7 161.7 512 144 512C126.3 512 112 497.7 112 480V221.4C83.63 207.4 58.94 186.1 40.87 158.1L21.37 129.8C11.57 115 15.54 95.18 30.25 85.37C44.95 75.57 64.82 79.54 74.62 94.25L94.12 123.5C108.5 145 129.2 160.9 152.9 169.3C153.9 169.5 154.8 169.8 155.7 170.2L155.7 170.2z"/><path className="fa-secondary" d="M256 64C256 99.35 227.3 128 192 128C156.7 128 128 99.35 128 64C128 28.65 156.7 0 192 0C227.3 0 256 28.65 256 64z"/>
</>],
['light',<>
	<path d="M256 64C256 99.35 227.3 128 191.1 128C156.7 128 127.1 99.35 127.1 64C127.1 28.65 156.7 0 191.1 0C227.3 0 256 28.65 256 64zM191.1 32C174.3 32 159.1 46.33 159.1 64C159.1 81.67 174.3 96 191.1 96C209.7 96 224 81.67 224 64C224 46.33 209.7 32 191.1 32zM112 188C84.19 173.2 60.59 150.6 44.48 122.2L34.09 103.9C29.73 96.21 32.42 86.45 40.11 82.09C47.79 77.72 57.56 80.42 61.92 88.1L72.31 106.4C96.73 149.4 142.4 176 191.9 176C240.7 176 285.1 150 310.6 107.8L322.2 87.94C326.6 80.3 336.4 77.73 344.1 82.18C351.7 86.63 354.3 96.43 349.8 104.1L338.2 123.9C322.2 151.4 299.1 173.3 272 187.9V496C272 504.8 264.8 512 256 512C247.2 512 240 504.8 240 496V384H144V496C144 504.8 136.8 512 128 512C119.2 512 112 504.8 112 496L112 188zM144 201.1V352H240V201C224.6 205.6 208.4 208 191.9 208C175.4 208 159.3 205.6 144 201.1H144z"/>
</>],
['regular',<>
	<path d="M119.1 72C119.1 32.24 152.2 0 191.1 0C231.8 0 264 32.24 264 72C264 111.8 231.8 144 191.1 144C152.2 144 119.1 111.8 119.1 72zM191.1 96C205.3 96 216 85.25 216 72C216 58.75 205.3 48 191.1 48C178.7 48 167.1 58.75 167.1 72C167.1 85.25 178.7 96 191.1 96zM291.7 118.6L307.3 91.91C313.1 80.46 328.6 76.59 340.1 83.27C351.5 89.95 355.4 104.6 348.7 116.1L333.1 142.8C318.2 168.4 296.1 188.1 272 202.1V488C272 501.3 261.3 512 248 512C234.7 512 224 501.3 224 488V384H160V488C160 501.3 149.3 512 136 512C122.7 512 112 501.3 112 488V203.2C86.32 188.9 64.53 167.6 49.5 141.2L35.13 115.8C28.59 104.3 32.63 89.67 44.15 83.13C55.68 76.58 70.33 80.62 76.87 92.15L91.24 117.5C111.8 153.6 150.2 176 191.8 176C232.9 176 270.1 154.2 291.7 118.6H291.7zM224 336V220.8C213.5 222.9 202.7 224 191.8 224C181 224 170.4 222.9 160 220.9V336H224z"/>
</>],
['solid',<>
	<path d="M256 64C256 99.35 227.3 128 192 128C156.7 128 128 99.35 128 64C128 28.65 156.7 0 192 0C227.3 0 256 28.65 256 64zM155.7 170.2C167.3 173.1 179.6 176 192.2 176C232.1 176 269.3 155.8 291 122.4L309.2 94.54C318.8 79.73 338.6 75.54 353.5 85.18C368.3 94.82 372.5 114.6 362.8 129.5L344.7 157.3C326.4 185.4 301.2 207.3 272 221.6V480C272 497.7 257.7 512 240 512C222.3 512 208 497.7 208 480V384H176V480C176 497.7 161.7 512 144 512C126.3 512 112 497.7 112 480V221.4C83.63 207.4 58.94 186.1 40.87 158.1L21.37 129.8C11.57 115 15.54 95.18 30.25 85.37C44.95 75.57 64.82 79.54 74.62 94.25L94.12 123.5C108.5 145 129.2 160.9 152.9 169.3C153.9 169.5 154.8 169.8 155.7 170.2V170.2z"/>
</>],
['thin',<>
	<path d="M128 64C128 28.65 156.7 0 192 0C227.3 0 256 28.65 256 64C256 99.35 227.3 128 192 128C156.7 128 128 99.35 128 64zM192 112C218.5 112 240 90.51 240 64C240 37.49 218.5 16 192 16C165.5 16 144 37.49 144 64C144 90.51 165.5 112 192 112zM317 111.8L337.5 83.33C340.1 79.75 345.1 78.92 348.7 81.5C352.3 84.08 353.1 89.08 350.5 92.67L330 121.2C298.1 165.6 246.7 192 192 192C137.3 192 85.89 165.6 53.97 121.2L33.5 92.67C30.93 89.08 31.75 84.08 35.34 81.5C38.92 78.92 43.92 79.75 46.5 83.33L66.97 111.8C95.88 152.1 142.4 176 192 176C241.6 176 288.1 152.1 317 111.8zM128 480C128 488.8 135.2 496 143.1 496C152.8 496 159.1 488.8 159.1 480V400C159.1 382.3 174.3 368 191.1 368C209.7 368 224 382.3 224 400V480C224 488.8 231.2 496 239.1 496C248.8 496 255.1 488.8 255.1 480V232C255.1 227.6 259.6 224 263.1 224C268.4 224 271.1 227.6 271.1 232V480C271.1 497.7 257.7 512 239.1 512C222.3 512 208 497.7 208 480V400C208 391.2 200.8 384 191.1 384C183.2 384 175.1 391.2 175.1 400V480C175.1 497.7 161.7 512 143.1 512C126.3 512 112 497.7 112 480V232C112 227.6 115.6 224 120 224C124.4 224 128 227.6 128 232V480z"/>
</>],

]);

const ChildReaching: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChildReaching.displayName = "ChildReaching";

export default ChildReaching;