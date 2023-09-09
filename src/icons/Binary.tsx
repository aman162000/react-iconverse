
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M336 160H352C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224H256C238.3 224 224 209.7 224 192C224 174.3 238.3 160 256 160H272V76.4L266.1 78.36C249.4 83.95 231.2 74.89 225.6 58.12C220.1 41.35 229.1 23.23 245.9 17.64L293.9 1.642C303.6-1.61 314.4 .0261 322.7 6.04C331.1 12.05 336 21.71 336 32L336 160zM111.1 448H127.1C145.7 448 159.1 462.3 159.1 480C159.1 497.7 145.7 512 127.1 512H31.1C14.33 512-.0003 497.7-.0003 480C-.0003 462.3 14.33 448 31.1 448H47.1V364.4L42.12 366.4C25.35 371.9 7.231 362.9 1.642 346.1C-3.947 329.4 5.114 311.2 21.88 305.6L69.88 289.6C79.64 286.4 90.37 288 98.71 294C107.1 300.1 112 309.7 112 320L111.1 448z"/><path className="fa-secondary" d="M128 0C163.3 0 192 28.65 192 64V160C192 195.3 163.3 224 128 224H64C28.65 224 0 195.3 0 160V64C0 28.65 28.65 0 64 0H128zM64 160H128V64H64V160zM320 288C355.3 288 384 316.7 384 352V448C384 483.3 355.3 512 320 512H256C220.7 512 192 483.3 192 448V352C192 316.7 220.7 288 256 288H320zM256 448H320V352H256V448z"/>
</>],
['light',<>
	<path d="M320 192H368C376.8 192 384 199.2 384 208C384 216.8 376.8 224 368 224H240C231.2 224 224 216.8 224 208C224 199.2 231.2 192 240 192H288V38.2L261.1 47.18C252.7 49.97 243.6 45.44 240.8 37.06C238 28.68 242.6 19.62 250.9 16.82L298.9 .8212C303.8-.8051 309.2 .0128 313.4 3.02C317.5 6.028 320 10.86 320 16V192zM96 480H144C152.8 480 160 487.2 160 496C160 504.8 152.8 512 144 512H16C7.164 512 0 504.8 0 496C0 487.2 7.164 480 16 480H64V326.2L37.06 335.2C28.68 337.1 19.62 333.4 16.82 325.1C14.03 316.7 18.56 307.6 26.94 304.8L74.94 288.8C79.82 287.2 85.18 288 89.36 291C93.53 294 95.1 298.9 95.1 304L96 480zM0 80C0 35.82 35.82 .0004 80 .0004H112C156.2 .0004 192 35.82 192 80V144C192 188.2 156.2 224 112 224H80C35.82 224 0 188.2 0 144V80zM80 32C53.49 32 32 53.49 32 80V144C32 170.5 53.49 192 80 192H112C138.5 192 160 170.5 160 144V80C160 53.49 138.5 32 112 32H80zM304 288C348.2 288 384 323.8 384 368V432C384 476.2 348.2 512 304 512H272C227.8 512 192 476.2 192 432V368C192 323.8 227.8 288 272 288H304zM224 432C224 458.5 245.5 480 272 480H304C330.5 480 352 458.5 352 432V368C352 341.5 330.5 320 304 320H272C245.5 320 224 341.5 224 368V432z"/>
</>],
['regular',<>
	<path d="M328 176H360C373.3 176 384 186.7 384 200C384 213.3 373.3 224 360 224H248C234.7 224 224 213.3 224 200C224 186.7 234.7 176 248 176H280V57.3L263.6 62.77C251 66.96 237.4 60.16 233.2 47.59C229 35.01 235.8 21.42 248.4 17.23L296.4 1.232C303.7-1.208 311.8 .0196 318 4.53C324.3 9.041 328 16.29 328 24V176zM104 464H136C149.3 464 160 474.7 160 488C160 501.3 149.3 512 136 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H56V345.3L39.59 350.8C27.01 354.1 13.42 348.2 9.232 335.6C5.04 323 11.84 309.4 24.41 305.2L72.41 289.2C79.73 286.8 87.77 288 94.03 292.5C100.3 297 104 304.3 104 312V464zM0 72C0 32.24 32.24 .0001 72 .0001H120C159.8 .0001 192 32.24 192 72V152C192 191.8 159.8 224 120 224H72C32.24 224 0 191.8 0 152V72zM72 48C58.75 48 48 58.75 48 72V152C48 165.3 58.75 176 72 176H120C133.3 176 144 165.3 144 152V72C144 58.75 133.3 48 120 48H72zM312 288C351.8 288 384 320.2 384 360V440C384 479.8 351.8 512 312 512H264C224.2 512 192 479.8 192 440V360C192 320.2 224.2 288 264 288H312zM240 440C240 453.3 250.7 464 264 464H312C325.3 464 336 453.3 336 440V360C336 346.7 325.3 336 312 336H264C250.7 336 240 346.7 240 360V440z"/>
</>],
['solid',<>
	<path d="M336 160H352C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224H256C238.3 224 224 209.7 224 192C224 174.3 238.3 160 256 160H272V76.4L266.1 78.36C249.4 83.95 231.2 74.89 225.6 58.12C220.1 41.35 229.1 23.23 245.9 17.64L293.9 1.642C303.6-1.61 314.4 .0261 322.7 6.04C331.1 12.05 336 21.71 336 32L336 160zM111.1 448H127.1C145.7 448 159.1 462.3 159.1 480C159.1 497.7 145.7 512 127.1 512H31.1C14.33 512-.0003 497.7-.0003 480C-.0003 462.3 14.33 448 31.1 448H47.1V364.4L42.12 366.4C25.35 371.9 7.231 362.9 1.642 346.1C-3.947 329.4 5.114 311.2 21.88 305.6L69.88 289.6C79.64 286.4 90.37 288 98.71 294C107.1 300.1 112 309.7 112 320L111.1 448zM-.0003 64C-.0003 28.65 28.65 .0001 63.1 .0001H127.1C163.3 .0001 191.1 28.65 191.1 64V160C191.1 195.3 163.3 224 127.1 224H63.1C28.65 224-.0003 195.3-.0003 160V64zM127.1 64H63.1V160H127.1V64zM320 288C355.3 288 384 316.7 384 352V448C384 483.3 355.3 512 320 512H256C220.7 512 191.1 483.3 191.1 448V352C191.1 316.7 220.7 288 256 288H320zM256 448H320V352H256V448z"/>
</>],
['thin',<>
	<path d="M312 208H376C380.4 208 384 211.6 384 216C384 220.4 380.4 224 376 224H232C227.6 224 224 220.4 224 216C224 211.6 227.6 208 232 208H296V19.54L242.8 39.49C238.7 41.04 234.1 38.95 232.5 34.81C230.1 30.67 233.1 26.06 237.2 24.51L301.2 .5094C303.6-.4118 306.4-.0698 308.6 1.425C310.7 2.919 312 5.376 312 8V208zM88 496H152C156.4 496 160 499.6 160 504C160 508.4 156.4 512 152 512H8C3.582 512 0 508.4 0 504C0 499.6 3.582 496 8 496H72V307.5L18.81 327.5C14.67 329 10.06 326.9 8.509 322.8C6.958 318.7 9.054 314.1 13.19 312.5L77.19 288.5C79.65 287.6 82.4 287.9 84.56 289.4C86.71 290.9 88 293.4 88 296V496zM16 64C16 28.65 44.65 0 80 0H112C147.3 0 176 28.65 176 64V160C176 195.3 147.3 224 112 224H80C44.65 224 16 195.3 16 160V64zM80 16C53.49 16 32 37.49 32 64V160C32 186.5 53.49 208 80 208H112C138.5 208 160 186.5 160 160V64C160 37.49 138.5 16 112 16H80zM304 288C339.3 288 368 316.7 368 352V448C368 483.3 339.3 512 304 512H272C236.7 512 208 483.3 208 448V352C208 316.7 236.7 288 272 288H304zM224 448C224 474.5 245.5 496 272 496H304C330.5 496 352 474.5 352 448V352C352 325.5 330.5 304 304 304H272C245.5 304 224 325.5 224 352V448z"/>
</>],

]);

const Binary: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Binary.displayName = "Binary";

export default Binary;
