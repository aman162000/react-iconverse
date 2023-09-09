
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 160V0L384 160H224zM564.3 250.1C579.9 265.7 579.9 291.1 564.3 306.7L534.8 336.1L463.9 265.2L493.3 235.7C508.9 220.1 534.2 220.1 549.9 235.7L564.3 250.1zM311.9 417.1L441.2 287.8L512.2 358.8L382.9 488.1C378.8 492.2 373.7 495.1 368.1 496.5L307.9 511.5C302.4 512.9 296.7 511.3 292.7 507.3C288.7 503.3 287.1 497.6 288.5 492.1L303.5 431.9C304.9 426.3 307.8 421.2 311.9 417.1V417.1z"/><path className="fa-secondary" d="M0 64C0 28.65 28.65 0 64 0H224V160H384V299.5L289.3 394.3C281.1 402.5 275.3 412.7 272.5 423.1L257.4 484.1C255.1 493.5 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64z"/>
</>],
['light',<>
	<path d="M64 480H258.5L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H220.1C232.8 0 245.1 5.057 254.1 14.06L369.9 129.9C378.9 138.9 384 151.2 384 163.9V299.6L352 331.6V192H240C213.5 192 192 170.5 192 144V32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480H64zM347.3 152.6L231.4 36.69C229.4 34.62 226.8 33.18 224 32.48V144C224 152.8 231.2 160 240 160H351.5C350.8 157.2 349.4 154.6 347.3 152.6zM473.3 241.4C492.1 222.6 522.4 222.6 541.2 241.4L558.5 258.7C577.2 277.4 577.2 307.8 558.5 326.5L404.1 480.1C398.8 486.2 391.1 490.6 382.7 492.7L307.9 511.4C302.4 512.8 296.6 511.2 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L307.2 417.2C309.3 408.8 313.6 401 319.8 394.9L473.3 241.4zM518.6 263.1C512.3 257.7 502.2 257.7 495.9 263.1L471.2 288.8L511.1 328.7L535.9 303.9C542.1 297.7 542.1 287.5 535.9 281.3L518.6 263.1zM338.2 424.1L325.1 473.9L374.9 461.6C377.7 460.9 380.3 459.5 382.3 457.4L488.5 351.3L448.5 311.4L342.4 417.5C340.4 419.6 338.9 422.1 338.2 424.1L338.2 424.1z"/>
</>],
['regular',<>
	<path d="M64 464H262.5L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H229.5C246.5 0 262.7 6.743 274.7 18.75L365.3 109.3C377.3 121.3 384 137.5 384 154.5V299.6L336 347.6V160H256C238.3 160 224 145.7 224 128V48H64C55.16 48 48 55.16 48 64V448C48 456.8 55.16 464 64 464H64zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z"/>
</>],
['solid',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z"/>
</>],
['thin',<>
	<path d="M64 496H256C256 501.5 256.1 506.9 258.8 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H204.1C216.8 0 229.1 5.057 238.1 14.06L369.9 145.9C378.9 154.9 384 167.2 384 179.9V299.6L368 315.6V179.9C368 178.6 367.9 177.3 367.8 176H248C225.9 176 208 158.1 208 136V16.24C206.7 16.08 205.4 16 204.1 16H64C37.49 16 16 37.49 16 64V448C16 474.5 37.49 496 64 496V496zM361.1 160C360.3 159 359.5 158.1 358.6 157.3L226.7 25.37C225.9 24.5 224.1 23.68 224 22.93V136C224 149.3 234.7 160 248 160H361.1zM292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2L292.7 507.2zM304 495.8L364.1 480.8C366.9 480.1 369.5 478.7 371.6 476.6L514.4 333.7L466.1 285.4L323.2 428.3C321.2 430.3 319.7 432.9 319 435.7L304 495.8zM552.8 261.4L538.4 247C529.1 237.7 513.9 237.7 504.5 247L477.4 274.1L525.7 322.4L552.8 295.4C562.2 285.1 562.2 270.8 552.8 261.4L552.8 261.4zM364.6 482.8L368 496.3z"/>
</>],

]);

const FilePen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FilePen.displayName = "FilePen";

export default FilePen;
