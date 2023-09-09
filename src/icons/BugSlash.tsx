
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.112 9.194C13.29-1.238 28.37-3.067 38.81 5.11L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.194V9.194z"/><path className="fa-secondary" d="M239.1 162.8C247.7 160.1 255.7 160 263.1 160H376C393.1 160 409.2 164.1 423.5 171.4C424.1 170.7 424.7 170 425.4 169.4L489.4 105.4C501.9 92.88 522.1 92.88 534.6 105.4C547.1 117.9 547.1 138.1 534.6 150.6L470.6 214.6C469.1 215.3 469.3 215.9 468.6 216.5C474.7 228.5 478.6 241.9 479.7 256H544C561.7 256 576 270.3 576 288C576 305.7 561.7 320 544 320H480C480 329.9 479.1 339.5 477.4 348.9L239.1 162.8zM416 96V99.56C416 115.3 403.3 128 387.6 128H252.4C236.7 128 223.1 115.3 223.1 99.56V96C223.1 42.98 266.1 0 319.1 0C373 0 416 42.98 416 96zM160.3 256C161.1 245.1 163.3 236.3 166.7 227.3L303.1 335.5V479.2C269.5 475.8 238.2 461.4 213.7 439.6L150.6 502.6C138.1 515.1 117.9 515.1 105.4 502.6C92.88 490.1 92.88 469.9 105.4 457.4L169.4 393.4C171.2 391.5 173.3 389.9 175.4 388.6C165.5 367.8 160 344.6 160 320H96C78.33 320 64 305.7 64 288C64 270.3 78.33 256 96 256H160.3zM336 479.2V360.7L430.8 435.4C405.7 459.6 372.6 475.6 336 479.2z"/>
</>],
['light',<>
	<path d="M633.9 483.4C640.9 488.9 642 498.1 636.6 505.9C631.1 512.9 621 514 614.1 508.6L6.086 28.56C-.8493 23.08-2.033 13.02 3.443 6.086C8.918-.8493 18.98-2.033 25.91 3.443L633.9 483.4zM560 304H484.1L448 275.5V264C448 224.2 415.8 192 376 192H342.2L301.7 160H376C398.9 160 420.2 167.4 437.4 180L516.7 100.7C522.9 94.44 533.1 94.44 539.3 100.7C545.6 106.9 545.6 117.1 539.3 123.3L459.1 202.6C472.6 219.8 480 241.1 480 264V272H560C568.8 272 576 279.2 576 288C576 296.8 568.8 304 560 304H560zM411.4 409.7L436.6 429.6C407.4 460.6 365.1 480 320 480C273.4 480 231.5 460.1 202.3 428.4L123.3 507.3C117.1 513.6 106.9 513.6 100.7 507.3C94.44 501.1 94.44 490.9 100.7 484.7L182.9 402.5C168.4 378.4 160 350.2 160 320V304H80C71.16 304 64 296.8 64 288C64 279.2 71.16 272 80 272H160V264C160 247.1 163.6 232.8 170.1 219.2L196.2 239.8C193.5 247.4 192 255.5 192 264V320C192 385.3 240.9 439.1 304 447V324.9L336 350.2V447C365.4 443.3 391.6 429.7 411.4 409.7V409.7zM224 96C224 42.98 266.1 .0006 320 .0006C373 .0006 416 42.98 416 96V99.56C416 115.3 403.3 128 387.6 128H261.2L224 98.67V96zM256 96H384C384 60.65 355.3 32 320 32C284.7 32 256 60.65 256 96z"/>
</>],
['regular',<>
	<path d="M239.1 162.8C247.7 160.1 255.7 160 264 160H376C396 160 414.7 165.7 430.6 175.5L503 103C512.4 93.66 527.6 93.66 536.1 103C546.3 112.4 546.3 127.6 536.1 136.1L464.5 209.4C474.3 225.3 480 243.1 480 264H552C565.3 264 576 274.7 576 288C576 301.3 565.3 312 552 312H480V320C480 329.9 479.1 339.5 477.4 348.9L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L239.1 162.8zM297.7 208L432 313.3V264C432 233.1 406.9 208 376 208H297.7zM416 96V99.56C416 115.3 403.3 128 387.6 128H252.4C236.7 128 224 115.3 224 99.56V96C224 42.98 266.1 .001 320 .001C373 .001 416 42.98 416 96V96zM160 264C160 251.1 162.4 238.7 166.7 227.3L208.1 259.1C208 261.3 208 262.7 208 264V320C208 373.6 245.7 418.4 296 429.4V329.2L344 367V429.4C362.3 425.4 378.8 417 392.6 405.3L430.8 435.4C402.1 463 363 480 320 480C276.3 480 236.7 462.5 207.8 434.1L136.1 504.1C127.6 514.3 112.4 514.3 103 504.1C93.66 495.6 93.66 480.4 103 471L178.8 395.3C166.8 372.8 160 347.2 160 320V312H88C74.75 312 64 301.3 64 288C64 274.7 74.75 264 88 264H160z"/>
</>],
['solid',<>
	<path d="M239.1 162.8C247.7 160.1 255.7 160 264 160H376C393.1 160 409.2 164.1 423.5 171.4C424.1 170.7 424.7 170 425.4 169.4L489.4 105.4C501.9 92.88 522.1 92.88 534.6 105.4C547.1 117.9 547.1 138.1 534.6 150.6L470.6 214.6C469.1 215.3 469.3 215.9 468.6 216.5C474.7 228.5 478.6 241.9 479.7 256H544C561.7 256 576 270.3 576 288C576 305.7 561.7 320 544 320H480C480 329.9 479.1 339.5 477.4 348.9L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L239.1 162.8zM416 96V99.56C416 115.3 403.3 128 387.6 128H252.4C236.7 128 224 115.3 224 99.56V96C224 42.98 266.1 .001 320 .001C373 .001 416 42.98 416 96V96zM160.3 256C161.1 245.1 163.3 236.3 166.7 227.3L304 335.5V479.2C269.5 475.8 238.2 461.4 213.7 439.6L150.6 502.6C138.1 515.1 117.9 515.1 105.4 502.6C92.88 490.1 92.88 469.9 105.4 457.4L169.4 393.4C171.2 391.5 173.3 389.9 175.4 388.6C165.5 367.8 160 344.6 160 320H96C78.33 320 64 305.7 64 288C64 270.3 78.33 256 96 256H160.3zM336 479.2V360.7L430.8 435.4C405.7 459.6 372.7 475.6 336 479.2V479.2z"/>
</>],
['thin',<>
	<path d="M636.1 497.7C640.4 500.5 641 505.5 638.3 508.1C635.5 512.4 630.5 513 627 510.3L3.022 14.26C-.4365 11.51-1.012 6.481 1.738 3.022C4.487-.4365 9.52-1.012 12.98 1.738L636.1 497.7zM418.2 425.3L430.9 435.3C402.2 462.1 363.1 480 320 480C270.6 480 226.3 457.6 196.1 422.3L109.7 509.7C106.5 512.8 101.5 512.8 98.34 509.7C95.22 506.5 95.22 501.5 98.34 498.3L186.3 410.3C186.7 410 186.1 409.7 187.3 409.5C170.1 383.9 160 353.2 160 320V296H72C67.58 296 64 292.4 64 288C64 283.6 67.58 280 72 280H160V264C160 250.9 162.4 238.4 166.8 226.8L180.1 237.3C177.4 245.7 176 254.7 176 264V320C176 396.8 236.2 459.6 312 463.8V341.4L328 354.1V463.8C362.8 461.9 394.3 447.6 418.2 425.3zM387.6 128H274.1L253.8 112H387.6C394.4 112 400 106.4 400 99.56V96C400 51.82 364.2 16 320 16C275.8 16 240 51.82 240 96V99.56C240 100.1 240 100.7 240.1 101.2L224.3 88.69C228 39.09 269.4 .0006 320 .0006C373 .0006 416 42.98 416 96V99.56C416 115.3 403.3 128 387.6 128H387.6zM443.7 185L530.3 98.34C533.5 95.22 538.5 95.22 541.7 98.34C544.8 101.5 544.8 106.5 541.7 109.7L454.1 196.3C470.6 214.5 480 238.2 480 264V280H568C572.4 280 576 283.6 576 288C576 292.4 572.4 296 568 296H486.9L464 277.1V264C464 215.4 424.6 176 376 176H334.9L314.6 160H376C401.8 160 425.5 169.4 443.7 185L443.7 185z"/>
</>],

]);

const BugSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BugSlash.displayName = "BugSlash";

export default BugSlash;
