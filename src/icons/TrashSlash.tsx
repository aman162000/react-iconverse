
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196V9.196z"/><path className="fa-secondary" d="M195.6 128H512L497.2 364.4L195.6 128zM98.4 51.82C103.2 40.19 114.6 32 127.1 32H223.1L231.2 17.69C236.6 6.848 247.7 0 259.8 0H380.2C392.3 0 403.4 6.848 408.8 17.69L416 32H512C529.7 32 544 46.33 544 64C544 81.67 529.7 96 512 96H154.8L98.4 51.82zM149.2 466.1L132.5 200.4L487.1 480.5C481.2 498.1 463.5 512 442.9 512H197.1C171.7 512 150.8 492.3 149.2 466.1H149.2z"/>
</>],
['light',<>
	<path d="M509.7 96L494.3 312.1L463.9 288.1L477.6 96H220.6L180.1 64H207.1L233 22.56C241.8 8.526 257.2 0 273.7 0H366.3C382.8 0 398.2 8.526 406.1 22.56L432.9 64H528C536.8 64 544 71.16 544 80C544 88.84 536.8 96 528 96L509.7 96zM273.7 32C268.2 32 263.1 34.84 260.2 39.52L244.9 64H395.1L379.8 39.52C376.9 34.84 371.8 32 366.3 32H273.7zM452.9 442.5L481.1 465.4C474.4 492.5 449.5 512 420.4 512H219.6C186 512 158.1 486.1 155.8 452.6L137.2 193.3L171.2 220.1L187.7 450.3C188.9 467 202.8 480 219.6 480H420.4C437.2 480 451.1 467 452.3 450.3L452.9 442.5zM633.9 483.4C640.9 488.9 642 498.1 636.6 505.9C631.1 512.9 621 514 614.1 508.6L6.086 28.56C-.8493 23.08-2.033 13.02 3.443 6.087C8.918-.8486 18.98-2.032 25.91 3.443L633.9 483.4z"/>
</>],
['regular',<>
	<path d="M134.4 80H189.8L226.5 24.94C236.9 9.358 254.4 .0003 273.1 .0003H366.9C385.6 .0003 403.1 9.358 413.5 24.94L450.2 80H520C533.3 80 544 90.75 544 104C544 117.3 533.3 128 520 128H508.4L491.3 359.8L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L134.4 80zM195.6 128L445.8 324.1L460.3 128H195.6zM273.1 48C270.5 48 267.1 49.34 266.5 51.56L247.5 80H392.5L373.5 51.56C372 49.34 369.5 48 366.9 48H273.1zM155.6 452.7L137.2 204.1L188.3 244.4L203.5 449.2C204.1 457.5 211.1 464 219.4 464H420.6C428.9 464 435.9 457.5 436.5 449.2L437.2 440.4L479.2 473.6C469.3 496.3 446.7 512 420.6 512H219.4C185.9 512 158.1 486.2 155.6 452.7H155.6z"/>
</>],
['solid',<>
	<path d="M98.4 51.82C103.2 40.19 114.6 32 127.1 32H223.1L231.2 17.69C236.6 6.849 247.7 .0003 259.8 .0003H380.2C392.3 .0003 403.4 6.848 408.8 17.69L416 32H512C529.7 32 544 46.33 544 64C544 81.67 529.7 96 512 96H154.8L195.6 128H512L497.2 364.4L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L98.4 51.82zM149.2 466.1L132.5 200.4L487.1 480.5C481.2 498.1 463.5 512 442.9 512H197.1C171.7 512 150.8 492.3 149.2 466.1H149.2z"/>
</>],
['thin',<>
	<path d="M511.1 120.7L496.7 303.8L481.6 291.9L496 119.3C496.4 114.9 500.3 111.7 504.7 112C509.1 112.4 512.3 116.3 511.1 120.7L511.1 120.7zM467.1 463.8L480.7 474.6C472.1 496.5 452.1 512 427.8 512H212.2C183 512 158.8 489.7 156.4 460.6L134.8 201.5L151.1 215.1L172.3 459.3C174 480.1 191.4 496 212.2 496H427.8C447.1 496 463.4 482.3 467.1 463.8H467.1zM239.8 18.8C247.1 7.105 259.9 0 273.7 0H366.3C380.1 0 392.9 7.105 400.2 18.8L428.4 64H536C540.4 64 544 67.58 544 72C544 76.42 540.4 80 536 80H213.3L192.1 64H211.6L239.8 18.8zM273.7 16C265.5 16 257.8 20.26 253.4 27.28L230.4 64H409.6L386.6 27.28C382.2 20.26 374.5 16 366.3 16H273.7zM636.1 497.7C640.4 500.5 641 505.5 638.3 508.1C635.5 512.4 630.5 513 627 510.3L3.023 14.26C-.4355 11.51-1.011 6.482 1.739 3.023C4.488-.4358 9.521-1.011 12.98 1.739L636.1 497.7z"/>
</>],

]);

const TrashSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrashSlash.displayName = "TrashSlash";

export default TrashSlash;