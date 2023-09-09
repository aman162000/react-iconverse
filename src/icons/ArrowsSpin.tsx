
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M257.1 95.53C245.8 95.53 234.7 96.72 224 98.97V33.97C234.8 32.36 245.9 31.53 257.1 31.53C315.3 31.53 368.3 53.72 408.2 90.11L437.6 60.69C447.7 50.61 464.9 57.75 464.9 72V177.4C464.9 186.2 457.7 193.4 448.9 193.4H343.5C329.3 193.4 322.1 176.1 332.2 166.1L362.9 135.4C334.7 110.6 297.7 95.53 257.1 95.53L257.1 95.53zM182.1 348.2L153.1 377.1C181.1 401.1 217.4 415.5 257.1 415.5C267.7 415.5 278 414.5 288 412.6V477.4C277.9 478.8 267.6 479.5 257.1 479.5C199.8 479.5 147.4 457.1 107.8 422.5L76.69 453.6C66.61 463.7 49.37 456.5 49.37 442.3V336.9C49.37 328.1 56.54 320.9 65.37 320.9H170.7C184.1 320.9 192.1 338.1 182.1 348.2H182.1zM35.47 288H100.4z"/><path className="fa-secondary" d="M177.4 49.38C186.2 49.38 193.4 56.54 193.4 65.38V170.7C193.4 185 176.1 192.1 166.1 182.1L135.5 151.5C111.6 179.5 97.14 215.8 97.14 255.5C97.14 266.7 98.27 277.5 100.4 288H35.47C33.93 277.4 33.14 266.6 33.14 255.5C33.14 198.2 54.71 145.8 90.18 106.2L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38H177.4zM348.2 332.2L377.2 361.2C402.1 333.1 417.1 296.1 417.1 255.5C417.1 244.7 416.1 234.2 414 224H478.9C480.4 234.3 481.1 244.8 481.1 255.5C481.1 313.7 458.9 366.7 422.6 406.6L453.6 437.6C463.7 447.7 456.5 464.9 442.3 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V343.5C320.9 329.3 338.1 322.1 348.2 332.2L348.2 332.2z"/>
</>],
['light',<>
	<path d="M257.1 79.53C245.8 79.53 234.7 80.6 223.1 82.65V50.16C234.8 48.43 245.9 47.53 257.1 47.53C310.9 47.53 359.9 67.94 396.8 101.4L423.9 74.35C439 59.23 464.9 69.93 464.9 91.32V177.4C464.9 186.2 457.7 193.4 448.9 193.4H362.8C341.5 193.4 330.8 167.5 345.9 152.4L374.2 124.1C343.1 96.37 302.1 79.53 257.1 79.53V79.53zM432.9 161.4V110.6L382.2 161.4H432.9zM81.14 255.5C81.14 266.6 82.16 277.5 84.13 288H51.66C49.1 277.4 49.14 266.6 49.14 255.5C49.14 202.6 68.93 154.2 101.5 117.5L74.34 90.35C59.22 75.23 69.93 49.38 91.31 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V151.4C193.4 172.8 167.5 183.5 152.4 168.4L124.2 140.2C97.37 171.1 81.14 211.4 81.14 255.5H81.14zM161.4 81.38H110.6L161.4 132.1V81.38zM433.1 255.5C433.1 244.8 432.2 234.2 430.3 224H462.8C464.3 234.3 465.1 244.8 465.1 255.5C465.1 309.3 444.7 358.3 411.2 395.2L439.9 423.9C455 439.1 444.3 464.9 422.1 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V362.8C320.9 341.5 346.8 330.8 361.9 345.9L388.6 372.6C416.3 341.5 433.1 300.5 433.1 255.5H433.1zM403.6 432.9L352.9 382.2V432.9H403.6zM288 461.3C277.9 462.8 267.6 463.5 257.1 463.5C204.2 463.5 155.8 443.7 119.1 411.2L90.34 439.9C75.22 455.1 49.37 444.3 49.37 422.1V336.9C49.37 328.1 56.54 320.9 65.37 320.9H151.4C172.8 320.9 183.5 346.8 168.4 361.9L141.8 388.5C172.7 415.3 213 431.5 257.1 431.5C267.7 431.5 277.1 430.6 288 428.8V461.3zM81.37 403.7L132.1 352.9H81.37V403.7z"/>
</>],
['regular',<>
	<path d="M257.1 87.53C245.8 87.53 234.7 88.66 223.1 90.8V42.06C234.8 40.39 245.9 39.53 257.1 39.53C313.1 39.53 364.1 60.83 402.5 95.77L437.6 60.69C447.7 50.61 464.9 57.75 464.9 72V177.4C464.9 186.2 457.7 193.4 448.9 193.4H343.5C329.3 193.4 322.1 176.1 332.2 166.1L368.5 129.8C338.9 103.5 299.9 87.53 257.1 87.53V87.53zM89.14 255.5C89.14 266.6 90.22 277.5 92.27 288H43.56C41.96 277.4 41.14 266.6 41.14 255.5C41.14 200.4 61.82 150 95.85 111.9L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V170.7C193.4 185 176.1 192.1 166.1 182.1L129.9 145.9C104.5 175.3 89.14 213.6 89.14 255.5L89.14 255.5zM182.1 348.2L147.5 382.8C176.9 408.2 215.2 423.5 257.1 423.5C267.7 423.5 277.1 422.6 288 420.7V469.3C277.9 470.8 267.6 471.5 257.1 471.5C201.1 471.5 151.6 450.9 113.5 416.8L76.69 453.6C66.61 463.7 49.37 456.5 49.37 442.3V336.9C49.37 328.1 56.54 320.9 65.37 320.9H170.7C184.1 320.9 192.1 338.1 182.1 348.2V348.2zM348.2 332.2L382.9 366.9C409.2 337.3 425.1 298.3 425.1 255.5C425.1 244.8 424.1 234.2 422.2 224H470.9C472.4 234.3 473.1 244.8 473.1 255.5C473.1 311.5 451.8 362.5 416.9 400.9L453.6 437.6C463.7 447.7 456.5 464.9 442.3 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V343.5C320.9 329.3 338.1 322.1 348.2 332.2V332.2z"/>
</>],
['solid',<>
	<path d="M257.1 95.53C245.8 95.53 234.7 96.72 223.1 98.97V33.97C234.8 32.36 245.9 31.53 257.1 31.53C315.3 31.53 368.3 53.72 408.2 90.11L437.6 60.69C447.7 50.61 464.9 57.75 464.9 72V177.4C464.9 186.2 457.7 193.4 448.9 193.4H343.5C329.3 193.4 322.1 176.1 332.2 166.1L362.9 135.4C334.7 110.6 297.7 95.53 257.1 95.53L257.1 95.53zM97.14 255.5C97.14 266.7 98.27 277.5 100.4 288H35.47C33.93 277.4 33.14 266.6 33.14 255.5C33.14 198.2 54.71 145.8 90.18 106.2L60.69 76.69C50.61 66.61 57.74 49.38 71.1 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V170.7C193.4 185 176.1 192.1 166.1 182.1L135.5 151.5C111.6 179.5 97.14 215.8 97.14 255.5V255.5zM182.1 348.2L153.1 377.1C181.1 401.1 217.4 415.5 257.1 415.5C267.7 415.5 278 414.5 288 412.6V477.4C277.9 478.8 267.6 479.5 257.1 479.5C199.8 479.5 147.4 457.1 107.8 422.5L76.69 453.6C66.61 463.7 49.37 456.5 49.37 442.3V336.9C49.37 328.1 56.54 320.9 65.37 320.9H170.7C184.1 320.9 192.1 338.1 182.1 348.2H182.1zM348.2 332.2L377.2 361.2C402.1 333.1 417.1 296.1 417.1 255.5C417.1 244.7 416.1 234.2 414 224H478.9C480.4 234.3 481.1 244.8 481.1 255.5C481.1 313.7 458.9 366.7 422.6 406.6L453.6 437.6C463.7 447.7 456.5 464.9 442.3 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V343.5C320.9 329.3 338.1 322.1 348.2 332.2L348.2 332.2z"/>
</>],
['thin',<>
	<path d="M107.2 123.2L74.34 90.35C59.22 75.23 69.93 49.38 91.31 49.38H177.4C186.2 49.38 193.4 56.54 193.4 65.38V151.4C193.4 172.8 167.5 183.5 152.4 168.4L118.5 134.5C90.26 166.9 73.14 209.2 73.14 255.5C73.14 266.6 74.11 277.5 75.99 288H59.76C58.03 277.4 57.14 266.6 57.14 255.5C57.14 204.8 76.04 158.4 107.2 123.2L107.2 123.2zM85.66 79.03L118.2 111.6L118.3 111.6L119.1 112.5L163.7 157.1C168.8 162.1 177.4 158.6 177.4 151.4V65.37H91.31C84.18 65.37 80.62 73.99 85.66 79.03H85.66zM257.1 71.53C245.8 71.53 234.7 72.55 223.1 74.51V58.26C234.8 56.47 245.8 55.53 257.1 55.53C308.7 55.53 355.7 75.05 391.2 107.1L423.9 74.35C439 59.23 464.9 69.93 464.9 91.32V177.4C464.9 186.2 457.7 193.4 448.9 193.4H362.8C341.5 193.4 330.8 167.5 345.9 152.4L379.8 118.4C347.3 89.26 304.3 71.53 257.1 71.53V71.53zM435.2 85.66L357.2 163.7C352.1 168.8 355.7 177.4 362.8 177.4H448.9V91.32C448.9 84.19 440.3 80.62 435.2 85.66V85.66zM441.1 255.5C441.1 244.8 440.2 234.2 438.4 224H454.7C456.3 234.3 457.1 244.8 457.1 255.5C457.1 307.1 437.6 354.1 405.6 389.6L439.9 423.9C455 439.1 444.3 464.9 422.1 464.9H336.9C328.1 464.9 320.9 457.7 320.9 448.9V362.8C320.9 341.5 346.8 330.8 361.9 345.9L394.2 378.2C423.4 345.7 441.1 302.7 441.1 255.5V255.5zM394.3 401.1L392.9 399.5L350.6 357.2C345.5 352.2 336.9 355.7 336.9 362.8V448.9H422.1C430.1 448.9 433.7 440.3 428.6 435.2L394.4 401L394.3 401.1zM287.1 453.2C277.9 454.7 267.6 455.5 257.1 455.5C206.4 455.5 160.1 436.6 124.8 405.5L90.34 439.9C75.22 455.1 49.37 444.3 49.37 422.1V336.9C49.37 328.1 56.53 320.9 65.37 320.9H151.4C172.8 320.9 183.5 346.8 168.4 361.9L136.1 394.1C168.5 422.4 210.8 439.5 257.1 439.5C267.7 439.5 277.1 438.6 288 436.1L287.1 453.2zM65.37 336.9V422.1C65.37 430.1 73.99 433.7 79.03 428.6L157.1 350.6C162.1 345.5 158.6 336.9 151.4 336.9H65.37z"/>
</>],

]);

const ArrowsSpin: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ArrowsSpin.displayName = "ArrowsSpin";

export default ArrowsSpin;
