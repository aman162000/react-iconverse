
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M240 48C240 74.51 218.5 96 192 96C165.5 96 144 74.51 144 48C144 21.49 165.5 0 192 0C218.5 0 240 21.49 240 48zM88 256.9L59.43 304.5C50.33 319.6 30.67 324.5 15.52 315.4C.3696 306.3-4.531 286.7 4.573 271.5L62.85 174.6C80.2 145.7 111.4 128 145.1 128H181C209.6 128 236.7 140.7 254.9 162.7L328.6 251.6C339.9 265.2 338 285.3 324.4 296.6C310.8 307.9 290.7 306 279.4 292.4L232 235.3V480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V352H152V480C152 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480L88 256.9z"/><path className="fa-secondary" d="M328 368C323.6 368 320 371.6 320 376V384C320 397.3 309.3 408 296 408C282.7 408 272 397.3 272 384V376C272 345.1 297.1 320 328 320C358.9 320 384 345.1 384 376V488C384 501.3 373.3 512 360 512C346.7 512 336 501.3 336 488V376C336 371.6 332.4 368 328 368z"/>
</>],
['light',<>
	<path d="M248 56C248 86.93 222.9 112 191.1 112C161.1 112 135.1 86.93 135.1 56C135.1 25.07 161.1 0 191.1 0C222.9 0 248 25.07 248 56zM191.1 32C178.7 32 167.1 42.75 167.1 56C167.1 69.25 178.7 80 191.1 80C205.3 80 216 69.25 216 56C216 42.75 205.3 32 191.1 32zM79.1 202.2L30.12 295.5C25.95 303.3 16.26 306.3 8.464 302.1C.6701 297.9-2.273 288.3 1.891 280.5L60.73 170.3C74.65 144.3 101.8 128 131.3 128H165.5C188.1 128 211.2 138.3 226.4 156.2L316.2 261.6C321.9 268.4 321.1 278.5 314.4 284.2C307.6 289.9 297.5 289.1 291.8 282.4L208 183.9V496C208 504.8 200.8 512 192 512C183.2 512 176 504.8 176 496V352H111.1V496C111.1 504.8 104.8 512 95.1 512C87.16 512 79.1 504.8 79.1 496V202.2zM111.1 320H176V161.2C172.6 160.4 169.1 160 165.5 160H131.3C124.5 160 117.1 161.4 111.1 164V320zM336 352C327.2 352 320 359.2 320 368V376C320 384.8 312.8 392 304 392C295.2 392 288 384.8 288 376V368C288 341.5 309.5 320 336 320C362.5 320 384 341.5 384 368V496C384 504.8 376.8 512 368 512C359.2 512 352 504.8 352 496V368C352 359.2 344.8 352 336 352z"/>
</>],
['regular',<>
	<path d="M240 48C240 74.51 218.5 96 192 96C165.5 96 144 74.51 144 48C144 21.49 165.5 0 192 0C218.5 0 240 21.49 240 48zM96 209.5L44.89 299.8C38.37 311.4 23.73 315.4 12.19 308.9C.6512 302.4-3.412 287.7 3.114 276.2L61.66 172.7C77.27 145.1 106.5 128 138.3 128H173.3C199.3 128 223.9 139.5 240.6 159.4L322.4 256.6C330.9 266.7 329.6 281.8 319.5 290.4C309.3 298.9 294.2 297.6 285.6 287.4L224 214.2V488C224 501.3 213.3 512 200 512C186.7 512 176 501.3 176 488V352H144V488C144 501.3 133.3 512 120 512C106.7 512 96 501.3 96 488V209.5zM176 176.1C175.1 176 174.2 176 173.3 176H144V304H176L176 176.1zM320 384C320 397.3 309.3 408 296 408C282.7 408 272 397.3 272 384V376C272 345.1 297.1 320 328 320C358.9 320 384 345.1 384 376V488C384 501.3 373.3 512 360 512C346.7 512 336 501.3 336 488V376C336 371.6 332.4 368 328 368C323.6 368 320 371.6 320 376V384z"/>
</>],
['solid',<>
	<path d="M240 48C240 74.51 218.5 96 192 96C165.5 96 144 74.51 144 48C144 21.49 165.5 0 192 0C218.5 0 240 21.49 240 48zM232 480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V352H152V480C152 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480V256.9L59.43 304.5C50.33 319.6 30.67 324.5 15.52 315.4C.3696 306.3-4.531 286.7 4.573 271.5L62.85 174.6C80.2 145.7 111.4 128 145.1 128H181C209.6 128 236.7 140.7 254.9 162.7L328.6 251.6C339.9 265.2 338 285.3 324.4 296.6C310.8 307.9 290.7 306 279.4 292.4L232 235.3L232 480zM320 384C320 397.3 309.3 408 296 408C282.7 408 272 397.3 272 384V376C272 345.1 297.1 320 328 320C358.9 320 384 345.1 384 376V488C384 501.3 373.3 512 360 512C346.7 512 336 501.3 336 488V376C336 371.6 332.4 368 328 368C323.6 368 320 371.6 320 376V384z"/>
</>],
['thin',<>
	<path d="M247.1 56C247.1 86.93 222.9 112 191.1 112C161.1 112 135.1 86.93 135.1 56C135.1 25.07 161.1 0 191.1 0C222.9 0 247.1 25.07 247.1 56zM191.1 16C169.9 16 151.1 33.91 151.1 56C151.1 78.09 169.9 96 191.1 96C214.1 96 231.1 78.09 231.1 56C231.1 33.91 214.1 16 191.1 16zM104 480C104 488.8 111.2 496 120 496C128.8 496 136 488.8 136 480V360C136 346.7 146.7 336 160 336C173.3 336 184 346.7 184 360V480C184 488.8 191.2 496 200 496C208.8 496 216 488.8 216 480V248C216 243.6 219.6 240 224 240C228.4 240 232 243.6 232 248V480C232 497.7 217.7 512 200 512C182.3 512 168 497.7 168 480V360C168 355.6 164.4 352 160 352C155.6 352 152 355.6 152 360V480C152 497.7 137.7 512 120 512C102.3 512 88 497.7 88 480V248C88 243.6 91.59 240 96 240C100.4 240 104 243.6 104 248V480zM328 336C314.7 336 304 346.7 304 360V376C304 380.4 300.4 384 296 384C291.6 384 288 380.4 288 376V360C288 337.9 305.9 320 328 320C350.1 320 368 337.9 368 360V504C368 508.4 364.4 512 360 512C355.6 512 352 508.4 352 504V360C352 346.7 341.3 336 328 336zM23.21 315.5C21.29 319.5 16.5 321.1 12.53 319.2C8.546 317.3 6.877 312.5 8.797 308.5L76.26 168.7C88.27 143.8 113.5 128 141.1 128H184.8C208.9 128 231.4 140.1 244.7 160.2L326.7 283.6C329.1 287.3 328.1 292.2 324.4 294.7C320.7 297.1 315.8 296.1 313.3 292.4L231.4 169C221 153.4 203.5 144 184.8 144H141.1C119.6 144 100 156.3 90.67 175.7L23.21 315.5z"/>
</>],

]);

const PersonCane: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PersonCane.displayName = "PersonCane";

export default PersonCane;