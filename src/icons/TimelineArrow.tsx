
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M48 96C48 51.82 83.82 16 128 16C172.2 16 208 51.82 208 96C208 140.2 172.2 176 128 176C83.82 176 48 140.2 48 96zM128 120C141.3 120 152 109.3 152 96C152 82.75 141.3 72 128 72C114.7 72 104 82.75 104 96C104 109.3 114.7 120 128 120zM272 96C272 51.82 307.8 16 352 16C396.2 16 432 51.82 432 96C432 140.2 396.2 176 352 176C307.8 176 272 140.2 272 96zM352 120C365.3 120 376 109.3 376 96C376 82.75 365.3 72 352 72C338.7 72 328 82.75 328 96C328 109.3 338.7 120 352 120zM304 416C304 460.2 268.2 496 224 496C179.8 496 144 460.2 144 416C144 371.8 179.8 336 224 336C268.2 336 304 371.8 304 416zM224 392C210.7 392 200 402.7 200 416C200 429.3 210.7 440 224 440C237.3 440 248 429.3 248 416C248 402.7 237.3 392 224 392z"/><path className="fa-secondary" d="M352 175.1C363.4 175.1 374.2 173.6 384 169.3V223.1H530.7L489.4 182.6C476.9 170.1 476.9 149.9 489.4 137.4C501.9 124.9 522.1 124.9 534.6 137.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L534.6 374.6C522.1 387.1 501.9 387.1 489.4 374.6C476.9 362.1 476.9 341.9 489.4 329.4L530.7 288H256V342.7C246.2 338.4 235.4 336 224 336C212.6 336 201.8 338.4 192 342.7V288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H96V169.3C105.8 173.6 116.6 176 128 176C139.4 176 150.2 173.6 160 169.3V224H320V169.3C329.8 173.6 340.6 176 352 176V175.1z"/>
</>],
['light',<>
	<path d="M175.1 80C175.1 109.8 155.6 134.9 127.1 141.1V256H352V141.1C324.4 134.9 303.1 109.8 303.1 80C303.1 44.65 332.7 16 368 16C403.3 16 432 44.65 432 80C432 109.8 411.6 134.9 384 141.1V256H579.8L517.8 204.3C510.1 198.6 510.1 188.5 515.7 181.8C521.4 174.1 531.5 174.1 538.2 179.7L634.1 259.6C634.7 260.1 635.3 260.6 635.8 261.2C638.4 264 640 267.8 640 272C640 272.3 639.1 272.7 639.1 272.1C639.8 276.5 638.4 279.6 636.3 282.2C635.7 282.9 635 283.7 634.2 284.3L538.2 364.3C531.5 369.9 521.4 369 515.7 362.2C510.1 355.5 510.1 345.4 517.8 339.7L579.8 288H256V370C283.6 377.1 304 402.2 304 432C304 467.3 275.3 496 240 496C204.7 496 176 467.3 176 432C176 402.2 196.4 377.1 224 370V288H16C7.164 288 0 280.8 0 272C0 263.2 7.164 256 16 256H96V141.1C68.4 134.9 48 109.8 48 80C48 44.65 76.65 16 112 16C147.3 16 176 44.65 176 80H175.1zM111.1 48C94.33 48 79.1 62.33 79.1 80C79.1 97.67 94.33 112 111.1 112C129.7 112 143.1 97.67 143.1 80C143.1 62.33 129.7 48 111.1 48zM239.1 464C257.7 464 271.1 449.7 271.1 432C271.1 414.3 257.7 400 239.1 400C222.3 400 207.1 414.3 207.1 432C207.1 449.7 222.3 464 239.1 464zM368 48C350.3 48 336 62.33 336 80C336 97.67 350.3 112 368 112C385.7 112 400 97.67 400 80C400 62.33 385.7 48 368 48z"/>
</>],
['regular',<>
	<path d="M208 96C208 131.8 184.5 162.1 152 172.3V232H328V172.3C295.5 162.1 272 131.8 272 96C272 51.82 307.8 16 352 16C396.2 16 432 51.82 432 96C432 131.8 408.5 162.1 376 172.3V232H554.6L495.7 177.6C485.1 168.6 485.4 153.5 494.4 143.7C503.4 133.1 518.5 133.4 528.3 142.4L632.2 238.3C632.4 238.4 632.5 238.6 632.6 238.7C632.9 238.1 633.2 239.3 633.5 239.6C637.5 243.9 640 249.7 640 256C640 262.3 637.5 268.1 633.5 272.4C633.2 272.7 632.9 273 632.6 273.3C632.5 273.4 632.4 273.6 632.2 273.7L528.3 369.6C518.5 378.6 503.4 378 494.4 368.3C485.4 358.5 485.1 343.4 495.7 334.4L554.6 280H248V339.7C280.5 349.9 304 380.2 304 416C304 460.2 268.2 496 224 496C179.8 496 144 460.2 144 416C144 380.2 167.5 349.9 200 339.7V280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H104V172.3C71.54 162.1 48 131.8 48 96C48 51.82 83.82 16 128 16C172.2 16 208 51.82 208 96V96zM128 64C110.3 64 96 78.33 96 96C96 113.7 110.3 128 128 128C145.7 128 160 113.7 160 96C160 78.33 145.7 64 128 64zM224 448C241.7 448 256 433.7 256 416C256 398.3 241.7 384 224 384C206.3 384 192 398.3 192 416C192 433.7 206.3 448 224 448zM352 128C369.7 128 384 113.7 384 96C384 78.33 369.7 64 352 64C334.3 64 320 78.33 320 96C320 113.7 334.3 128 352 128z"/>
</>],
['solid',<>
	<path d="M160 224H320V169.3C291.7 156.1 272 128.8 272 96C272 51.82 307.8 16 352 16C396.2 16 432 51.82 432 96C432 128.8 412.3 156.1 384 169.3V224H530.7L489.4 182.6C476.9 170.1 476.9 149.9 489.4 137.4C501.9 124.9 522.1 124.9 534.6 137.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L534.6 374.6C522.1 387.1 501.9 387.1 489.4 374.6C476.9 362.1 476.9 341.9 489.4 329.4L530.7 288H256V342.7C284.3 355 304 383.2 304 416C304 460.2 268.2 496 224 496C179.8 496 144 460.2 144 416C144 383.2 163.7 355 192 342.7V288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H96V169.3C67.75 156.1 48 128.8 48 96C48 51.82 83.82 16 128 16C172.2 16 208 51.82 208 96C208 128.8 188.3 156.1 160 169.3V224zM128 120C141.3 120 152 109.3 152 96C152 82.75 141.3 72 128 72C114.7 72 104 82.75 104 96C104 109.3 114.7 120 128 120zM352 72C338.7 72 328 82.75 328 96C328 109.3 338.7 120 352 120C365.3 120 376 109.3 376 96C376 82.75 365.3 72 352 72zM224 440C237.3 440 248 429.3 248 416C248 402.7 237.3 392 224 392C210.7 392 200 402.7 200 416C200 429.3 210.7 440 224 440z"/>
</>],
['thin',<>
	<path d="M136 248H344V143.5C312.4 139.6 288 112.6 288 80C288 44.65 316.7 16 352 16C387.3 16 416 44.65 416 80C416 112.6 391.6 139.6 360 143.5V248H611.3L538.6 181.9C535.4 178.9 535.1 173.9 538.1 170.6C541.1 167.3 546.1 167.1 549.4 170.1L637.4 250.1C639 251.6 640 253.7 640 256C640 258.3 639 260.4 637.4 261.9L549.4 341.9C546.1 344.9 541.1 344.7 538.1 341.4C535.1 338.1 535.4 333.1 538.6 330.1L611.3 264H232V368.5C263.6 372.4 288 399.4 288 432C288 467.3 259.3 496 224 496C188.7 496 160 467.3 160 432C160 399.4 184.4 372.4 216 368.5V264H8C3.582 264 0 260.4 0 256C0 251.6 3.582 248 8 248H120V143.5C88.43 139.6 64 112.6 64 80C64 44.65 92.65 16 128 16C163.3 16 192 44.65 192 80C192 112.6 167.6 139.6 136 143.5V248zM128 128C154.5 128 176 106.5 176 80C176 53.49 154.5 32 128 32C101.5 32 80 53.49 80 80C80 106.5 101.5 128 128 128zM352 32C325.5 32 304 53.49 304 80C304 106.5 325.5 128 352 128C378.5 128 400 106.5 400 80C400 53.49 378.5 32 352 32zM224 384C197.5 384 176 405.5 176 432C176 458.5 197.5 480 224 480C250.5 480 272 458.5 272 432C272 405.5 250.5 384 224 384z"/>
</>],

]);

const TimelineArrow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TimelineArrow.displayName = "TimelineArrow";

export default TimelineArrow;