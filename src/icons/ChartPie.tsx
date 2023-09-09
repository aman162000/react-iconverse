
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M527.4 240H304V16.58C304 7.555 310.1 0 320 0C443.7 0 544 100.3 544 224C544 233 536.4 240 527.4 240zM558.4 288C567.6 288 575 295.8 573.8 305C566.1 360.9 539.1 410.6 499.9 447.3C493.9 452.1 484.5 452.5 478.7 446.7L320 288H558.4z"/><path className="fa-secondary" d="M32 272C32 150.7 122.1 50.34 238.1 34.25C248.2 32.99 256 40.36 256 49.61V288L412.5 444.5C419.2 451.2 418.7 462.2 411 467.7C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272z"/>
</>],
['light',<>
	<path d="M320 240C311.2 240 304 232.8 304 224V15.47C304 7.074 310.5 .0432 318.9 .0026L320 0C443.7 0 544 100.3 544 224L543.1 225.1C543.1 233.5 536.9 240 528.5 240H320zM336 32.66V208H511.3C503.6 114.7 429.3 40.35 336 32.66V32.66zM256 49.61V288L412.5 444.5C419.2 451.2 418.7 462.2 411 467.7C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272C32 150.7 122.1 50.34 238.1 34.25C248.2 32.99 256 40.36 256 49.61V49.61zM233.4 310.6C227.4 304.6 224 296.5 224 288V69.56C132.3 91.22 64 173.7 64 272C64 386.9 157.1 480 272 480C309.6 480 344.9 470 375.3 452.6L233.4 310.6zM499.9 447.3C493.9 452.1 484.5 452.5 478.7 446.7L347.3 315.3C337.2 305.2 344.4 288 358.6 288H558.4C567.6 288 575 295.8 573.8 305C566.1 360.9 539.1 410.6 499.9 447.3V447.3zM538.4 320H397.3L489.6 412.3C513.1 386.6 530.2 354.1 538.4 320z"/>
</>],
['regular',<>
	<path d="M304 240V16.58C304 7.555 310.1 0 320 0C443.7 0 544 100.3 544 224C544 233 536.4 240 527.4 240H304zM493.1 192C479.1 120.5 423.5 64.04 352 50.9V192H493.1zM256 49.61V288L412.5 444.5C419.2 451.2 418.7 462.2 411 467.7C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272C32 150.7 122.1 50.34 238.1 34.25C248.2 32.99 256 40.36 256 49.61V49.61zM208 307.9V90.91C133.4 117.3 80 188.4 80 272C80 378 165.1 464 272 464C299.2 464 324.1 458.4 348.4 448.2L208 307.9zM558.4 288C567.6 288 575 295.8 573.8 305C566.1 360.9 539.1 410.6 499.9 447.3C493.9 452.1 484.5 452.5 478.7 446.7L320 288H558.4z"/>
</>],
['solid',<>
	<path d="M304 16.58C304 7.555 310.1 0 320 0C443.7 0 544 100.3 544 224C544 233 536.4 240 527.4 240H304V16.58zM32 272C32 150.7 122.1 50.34 238.1 34.25C248.2 32.99 256 40.36 256 49.61V288L412.5 444.5C419.2 451.2 418.7 462.2 411 467.7C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zM558.4 288C567.6 288 575 295.8 573.8 305C566.1 360.9 539.1 410.6 499.9 447.3C493.9 452.1 484.5 452.5 478.7 446.7L320 288H558.4z"/>
</>],
['thin',<>
	<path d="M320 240C311.2 240 304 232.8 304 224V15.47C304 7.074 310.5 .0432 318.9 .0026L320 0C443.7 0 544 100.3 544 224L543.1 225.1C543.1 233.5 536.9 240 528.5 240H320zM528 224C528 109.1 434.9 16 320 16V224H528zM256 49.61V288L412.5 444.5C419.2 451.2 418.7 462.2 411 467.7C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272C32 150.7 122.1 50.34 238.1 34.25C248.2 32.99 256 40.36 256 49.61V49.61zM244.7 299.3C241.7 296.3 240 292.2 240 288V50.27C131.5 65.78 48 159.2 48 272C48 395.7 148.3 496 272 496C319.9 496 364.3 480.1 400.7 455.3L244.7 299.3zM499.9 447.3C493.9 452.1 484.5 452.5 478.7 446.7L347.3 315.3C337.2 305.2 344.4 288 358.6 288H558.4C567.6 288 575 295.8 573.8 305C566.1 360.9 539.1 410.6 499.9 447.3V447.3zM489.6 435C525.7 401 550.4 355.3 557.7 304H358.6L489.6 435z"/>
</>],

]);

const ChartPie: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChartPie.displayName = "ChartPie";

export default ChartPie;