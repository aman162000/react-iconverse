
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 288C444.2 288 496 237.1 496 237.1C496 228.8 495.4 220.6 494.3 212.6C581.1 235.5 640 275 640 320C640 390.7 496.7 448 320 448C143.3 448 0 390.7 0 320C0 275 58.01 235.5 145.7 212.6C144.6 220.6 144 228.8 144 237.1C144 237.1 195.8 288 320 288zM320 352C306.7 352 296 362.7 296 376C296 389.3 306.7 400 320 400C333.3 400 344 389.3 344 376C344 362.7 333.3 352 320 352zM128 352C141.3 352 152 341.3 152 328C152 314.7 141.3 304 128 304C114.7 304 104 314.7 104 328C104 341.3 114.7 352 128 352zM512 304C498.7 304 488 314.7 488 328C488 341.3 498.7 352 512 352C525.3 352 536 341.3 536 328C536 314.7 525.3 304 512 304z"/><path className="fa-secondary" d="M496 237.1C496 237.1 444.2 288 320 288C195.8 288 144 237.1 144 237.1C144 141.5 222.8 64 320 64C417.2 64 496 141.5 496 237.1z"/>
</>],
['light',<>
	<path d="M151.1 312C151.1 325.3 141.3 336 127.1 336C114.7 336 103.1 325.3 103.1 312C103.1 298.7 114.7 288 127.1 288C141.3 288 151.1 298.7 151.1 312zM344 360C344 373.3 333.3 384 319.1 384C306.7 384 295.1 373.3 295.1 360C295.1 346.7 306.7 336 319.1 336C333.3 336 344 346.7 344 360zM488 312C488 298.7 498.7 288 512 288C525.3 288 536 298.7 536 312C536 325.3 525.3 336 512 336C498.7 336 488 325.3 488 312zM589.9 225C619.3 245.6 640 272.3 640 304C640 327.2 628.8 347.9 611.4 365.2C594.1 382.4 569.8 397.2 541.2 409.3C483.8 433.4 405.5 448 320 448C234.4 448 156.2 433.4 98.83 409.3C70.16 397.2 45.91 382.4 28.6 365.2C11.23 347.9 0 327.2 0 304C0 272.3 20.74 245.6 50.13 225C79.45 204.5 120 188.1 167.2 176.9C187.7 110.2 249.7 64 320 64C390.3 64 452.3 110.2 472.8 176.9C519.1 188.1 560.5 204.5 589.9 225H589.9zM176.6 238.3L164.9 249.3C162.4 246.7 160.9 243.3 160.6 239.7C159.8 230.1 159.8 220.7 160.5 211.6C122.2 221.9 90.77 235.6 68.48 251.2C42.89 269.1 32 287.5 32 304C32 316.2 37.79 329.2 51.18 342.5C64.63 355.9 84.91 368.7 111.2 379.8C163.9 401.9 237.7 416 320 416C402.3 416 476.1 401.9 528.8 379.8C555.1 368.7 575.4 355.9 588.8 342.5C602.2 329.2 608 316.2 608 304C608 287.5 597.1 269.1 571.5 251.2C549.2 235.6 517.8 221.9 479.5 211.6C480.2 220.7 480.2 230.1 479.4 239.7C479.1 243.3 477.6 246.7 475.1 249.3L463.4 238.3C475.1 249.3 475.1 249.3 475.1 249.3L475.1 249.3L475 249.4L474.1 249.4L474.8 249.6C474.6 249.8 474.4 250 474.2 250.2C473.7 250.7 473 251.3 472.2 252C470.6 253.5 468.3 255.5 465.2 257.7C459 262.3 449.9 268 437.5 273.7C412.5 285.1 374.4 296 320 296C265.6 296 227.5 285.1 202.5 273.7C190.1 268 180.1 262.3 174.8 257.7C171.7 255.5 169.4 253.5 167.8 252C166.1 251.3 166.3 250.7 165.8 250.2C165.6 250 165.4 249.8 165.2 249.6L165 249.4L164.1 249.4L164.9 249.3C164.9 249.3 164.9 249.3 176.6 238.3H176.6zM451.8 227.3L451.9 227.3L451.9 227.3L451.8 227.4L451.8 227.3zM319.1 96C249.4 96 189.1 154.3 192.1 230.7C192.6 231.1 193.2 231.5 193.8 231.1C198.3 235.2 205.5 239.9 215.8 244.6C236.5 254 270 264 319.1 264C369.1 264 403.5 254 424.2 244.6C434.5 239.9 441.7 235.2 446.2 231.1C446.8 231.5 447.4 231.1 447.9 230.7C450.9 154.3 390.6 96 319.1 96H319.1z"/>
</>],
['regular',<>
	<path d="M152 312C152 325.3 141.3 336 128 336C114.7 336 104 325.3 104 312C104 298.7 114.7 288 128 288C141.3 288 152 298.7 152 312zM344 352C344 365.3 333.3 376 320 376C306.7 376 296 365.3 296 352C296 338.7 306.7 328 320 328C333.3 328 344 338.7 344 352zM488 312C488 298.7 498.7 288 512 288C525.3 288 536 298.7 536 312C536 325.3 525.3 336 512 336C498.7 336 488 325.3 488 312zM587.2 223.1C616.6 242.9 640 270.2 640 304.5C640 329.7 627.3 351.3 609.3 368.4C591.4 385.5 566.8 399.8 538.3 411.3C481.2 434.3 404 448 320 448C235.1 448 158.8 434.3 101.7 411.3C73.24 399.8 48.6 385.5 30.69 368.4C12.72 351.3 0 329.7 0 304.5C0 270.2 23.36 242.9 52.8 223.1C80.57 204.5 117.9 189.6 160.6 179.1C183.2 110.9 247.4 64 320 64C392.6 64 456.8 110.9 479.4 179.1C522.1 189.6 559.4 204.5 587.2 223.1zM176.6 246.3L159.1 262.8C155.4 258.8 153.1 253.7 152.6 248.4C152.2 242.5 151.9 236.8 152 231.1C121.1 240 97.41 250.1 79.54 262.1C55.43 279.1 48 293.9 48 304.5C48 312.4 51.84 322.2 63.83 333.7C75.88 345.2 94.58 356.6 119.7 366.8C169.7 386.1 240.6 400 320 400C399.4 400 470.3 386.1 520.3 366.8C545.4 356.6 564.1 345.2 576.2 333.7C588.2 322.2 592 312.4 592 304.5C592 293.9 584.6 279.1 560.5 262.1C542.6 250.1 518 240 487.1 231.1C488.1 236.8 487.8 242.5 487.4 248.4C486.9 253.7 484.6 258.8 480.9 262.8L463.4 246.3C480.9 262.8 480.9 262.7 480.9 262.8L480.9 262.8L480.8 262.9L480.7 262.1L480.5 263.2C480.3 263.4 480 263.7 479.8 263.1C479.2 264.5 478.5 265.2 477.6 266C475.7 267.6 473.2 269.7 469.9 272.2C463.4 277 453.8 283.1 440.8 288.1C414.7 300.9 375.5 311.1 320 311.1C264.5 311.1 225.3 300.9 199.2 288.1C186.2 283.1 176.6 277 170.1 272.2C166.8 269.7 164.3 267.6 162.4 266C161.5 265.2 160.8 264.5 160.2 263.1C159.1 263.7 159.7 263.4 159.5 263.2L159.3 262.1L159.2 262.9L159.1 262.8L159.1 262.8C159.1 262.7 159.1 262.8 176.6 246.3L176.6 246.3zM439.1 234.6C440.8 164.7 384.1 112 320 112C255 112 199.2 164.7 200 234.6C204.1 237.5 210.4 241.4 219.1 245.3C238.7 254.3 271.1 264 320 264C368.9 264 401.3 254.3 420.9 245.3C429.6 241.4 435.9 237.5 439.1 234.6V234.6z"/>
</>],
['solid',<>
	<path d="M500.9 214.4C584.9 237.5 640 276.2 640 320C640 390.7 496.7 448 320 448C143.3 448 0 390.7 0 320C0 276.2 55.08 237.5 139.1 214.4C154.8 128.8 229.9 64 320 64C410.2 64 485.2 128.8 500.9 214.4V214.4zM320 112C260.8 112 210.4 149.9 191.7 202.7C186.7 216.9 184 232.1 184 248C184 248 224 288 320 288C416 288 456 248 456 248C456 232.1 453.3 216.9 448.3 202.7C429.6 149.9 379.2 112 320 112V112zM320 400C333.3 400 344 389.3 344 376C344 362.7 333.3 352 320 352C306.7 352 296 362.7 296 376C296 389.3 306.7 400 320 400zM128 304C114.7 304 104 314.7 104 328C104 341.3 114.7 352 128 352C141.3 352 152 341.3 152 328C152 314.7 141.3 304 128 304zM512 352C525.3 352 536 341.3 536 328C536 314.7 525.3 304 512 304C498.7 304 488 314.7 488 328C488 341.3 498.7 352 512 352z"/>
</>],
['thin',<>
	<path d="M168 236.7L162.2 242.2C160.1 240.9 160.2 239.2 160 237.4C151.6 139.7 229.1 64 320 64C410.9 64 488.4 139.7 479.1 237.4C479.8 239.2 479 240.9 477.8 242.2L472 236.7C477.8 242.2 477.8 242.2 477.8 242.2L477.7 242.2L477.7 242.3L477.5 242.4L477 242.9C476.6 243.3 476 243.9 475.3 244.5C473.8 245.9 471.5 247.7 468.5 249.9C462.4 254.3 453.3 259.1 440.7 265.6C415.5 276.9 376.4 288 320 288C263.6 288 224.5 276.9 199.3 265.6C186.7 259.1 177.6 254.3 171.5 249.9C168.5 247.7 166.2 245.9 164.7 244.5C163.1 243.9 163.4 243.3 162.1 242.9L162.5 242.4L162.3 242.3L162.3 242.2L162.2 242.2C162.2 242.2 162.2 242.2 167.1 236.7L168 236.7zM464.3 232.9C469.1 146.7 401.1 80 320 80C238.9 80 170 146.7 175.7 232.9C176.9 233.9 178.6 235.3 180.9 236.1C186.1 240.7 194.2 245.9 205.8 251C228.9 261.4 265.8 272 320 272C374.2 272 411.1 261.4 434.2 251C445.8 245.8 453.9 240.7 459.1 236.1C461.4 235.3 463.1 233.9 464.3 232.9V232.9zM96 312C96 294.3 110.3 280 128 280C145.7 280 160 294.3 160 312C160 329.7 145.7 344 128 344C110.3 344 96 329.7 96 312zM128 296C119.2 296 112 303.2 112 312C112 320.8 119.2 328 128 328C136.8 328 144 320.8 144 312C144 303.2 136.8 296 128 296zM288 360C288 342.3 302.3 328 320 328C337.7 328 352 342.3 352 360C352 377.7 337.7 392 320 392C302.3 392 288 377.7 288 360zM320 344C311.2 344 304 351.2 304 360C304 368.8 311.2 376 320 376C328.8 376 336 368.8 336 360C336 351.2 328.8 344 320 344zM544 312C544 329.7 529.7 344 512 344C494.3 344 480 329.7 480 312C480 294.3 494.3 280 512 280C529.7 280 544 294.3 544 312zM512 328C520.8 328 528 320.8 528 312C528 303.2 520.8 296 512 296C503.2 296 496 303.2 496 312C496 320.8 503.2 328 512 328zM45.87 249.4C26.04 266.8 16 285.3 16 303.1C16 320.1 23.46 336.1 38.26 351.4C53.1 366.7 74.95 380.8 102.6 392.8C157.8 416.9 234.7 432 320 432C405.3 432 482.2 416.9 537.4 392.8C565 380.8 586.9 366.7 601.7 351.4C616.5 336.1 624 320.1 624 303.1C624 285.3 613.1 266.8 594.1 249.4C574.3 232.1 545.3 216.6 509.4 204.4C505.2 202.9 503 198.4 504.4 194.2C505.9 190 510.4 187.8 514.6 189.2C551.7 201.9 582.7 218.2 604.7 237.4C626.6 256.5 640 279.1 640 303.1C640 325.4 630 345.2 613.2 362.5C596.5 379.8 572.6 394.9 543.8 407.5C486.1 432.6 406.1 448 320 448C233 448 153.9 432.6 96.19 407.5C67.35 394.9 43.52 379.8 26.78 362.5C9.1 345.2 0 325.4 0 303.1C0 279.1 13.44 256.5 35.34 237.4C57.25 218.2 88.29 201.9 125.4 189.2C129.6 187.8 134.1 190 135.6 194.2C136.1 198.4 134.8 202.9 130.6 204.4C94.66 216.6 65.7 232.1 45.87 249.4H45.87z"/>
</>],

]);

const Ufo: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Ufo.displayName = "Ufo";

export default Ufo;