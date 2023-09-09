
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196V9.196z"/><path className="fa-secondary" d="M228.4 153.7L394.9 7.918C406.2-1.92 422.7-2.669 434.8 6.114C446.9 14.9 451.3 30.87 445.4 44.61L368.5 224H480C493.3 224 505.3 232.3 509.1 244.7C514.6 257.2 511.1 271.3 501.1 280.1L448.4 326.2L228.4 153.7zM138.9 231.9L154.8 217.1L243.7 288H160C146.7 288 134.7 279.7 130 267.3C125.4 254.8 128.9 240.7 138.9 231.9L138.9 231.9zM194.6 467.4L264.5 304.4L374.4 390.1L245.1 504.1C233.8 513.9 217.3 514.7 205.2 505.9C193.1 497.1 188.7 481.1 194.6 467.4V467.4z"/>
</>],
['light',<>
	<path d="M351.4 362.3L376.9 382.4L237.1 505.8C232.6 509.8 226.7 512 220.6 512C203.4 512 191.4 494.9 197.2 478.7L263.5 292.1L290 313.9L236.6 463.6L351.4 362.3zM216.7 256L257.2 288H153.8C139.6 288 128 276.4 128 262.2C128 254.8 131.2 247.8 136.7 242.9L166.5 216.4L192 236.5L170.1 256H216.7zM289.2 150.1L263.7 129.1L402.8 6.288C407.4 2.237 413.3 0 419.4 0C436.6 0 448.6 17.05 442.8 33.27L376.5 219L349.1 198.1L403.4 48.65L289.2 150.1zM512 251C512 258.8 508.7 266.2 502.9 271.3L474.4 296.4L448.9 276.2L471.8 256H423.3L382.8 224H484.1C499.9 224 512 236.1 512 251zM633.9 483.4C640.9 488.9 642 498.1 636.6 505.9C631.1 512.9 621 514 614.1 508.6L6.086 28.56C-.8493 23.08-2.033 13.02 3.443 6.087C8.918-.849 18.98-2.033 25.91 3.443L633.9 483.4z"/>
</>],
['regular',<>
	<path d="M227.9 153.3L399.1 6.894C404.3 2.445 410.9 .0003 417.7 .0003C436.8 .0003 450.6 18.26 445.4 36.61L391.8 224H477.1C496.4 224 512 239.6 512 258.9C512 269.2 507.5 278.9 499.7 285.6L450.2 327.6L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L227.9 153.3zM266.4 183.5L337.5 239.3L381.6 84.99L266.4 183.5zM379.3 272L411.6 297.3L441.5 272H379.3zM336.5 361.1L374.9 391.4L240.9 505.2C235.7 509.6 229.1 512 222.3 512C203.2 512 189.4 493.7 194.6 475.4L247.4 290.9L288.1 322.1L258.3 427.5L336.5 361.1zM153.5 216.9L243.7 288H161.7C143.1 288 128 272.9 128 254.3C128 244.4 132.3 235 139.8 228.6L153.5 216.9z"/>
</>],
['solid',<>
	<path d="M228.4 153.7L394.9 7.918C406.2-1.92 422.7-2.669 434.8 6.114C446.9 14.9 451.3 30.87 445.4 44.61L368.5 224H480C493.3 224 505.3 232.3 509.1 244.7C514.6 257.2 511.1 271.3 501.1 280.1L448.4 326.2L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L228.4 153.7zM138.9 231.9L154.8 217.1L243.7 288H160C146.7 288 134.7 279.7 130 267.3C125.4 254.8 128.9 240.7 138.9 231.9L138.9 231.9zM194.6 467.4L264.5 304.4L374.4 390.1L245.1 504.1C233.8 513.9 217.3 514.7 205.2 505.9C193.1 497.1 188.7 481.1 194.6 467.4V467.4z"/>
</>],
['thin',<>
	<path d="M356.1 376.3L368.9 386.3L234.1 505.7C229.5 509.8 223.7 512 217.6 512C199.7 512 187.7 493.7 194.7 477.3L267.9 306.6L280.9 316.9L209.4 483.6C206.9 489.5 211.2 496 217.6 496C219.8 496 221.9 495.2 223.5 493.8L356.1 376.3zM224.1 272L244.3 288H151.3C138.5 288 128 277.5 128 264.7C128 257.1 130.8 251.7 135.8 247.2L162.5 223.4L175.3 233.5L146.5 259.2C144.9 260.6 144 262.6 144 264.7C144 268.7 147.3 272 151.3 272H224.1zM284.4 136.1L271.6 126.1L405.9 6.309C410.4 2.246 416.3 0 422.4 0C440.3 0 452.3 18.25 445.3 34.66L372.1 205.4L359.1 195.1L430.6 28.35C433.1 22.51 428.8 16 422.4 16C420.3 16 418.2 16.8 416.5 18.25L284.4 136.1zM512 248.6C512 255.6 508.1 262.3 503.7 266.9L478.4 289.3L465.7 279.3L493.1 254.1C494.1 253.3 496 250.1 496 248.6C496 243.8 492.2 240 487.4 240H415.9L395.7 224H487.4C501 224 512 234.1 512 248.6V248.6zM636.1 497.7C640.4 500.5 641 505.5 638.3 508.1C635.5 512.4 630.5 513 627 510.3L3.022 14.26C-.4365 11.51-1.012 6.482 1.738 3.023C4.487-.4358 9.52-1.011 12.98 1.739L636.1 497.7z"/>
</>],

]);

const BoltSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BoltSlash.displayName = "BoltSlash";

export default BoltSlash;