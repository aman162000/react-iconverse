
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V336C512 371.3 483.3 400 448 400H64C28.65 400 0 371.3 0 336V256C0 229.3 16.36 206.4 39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32V32zM165.4 96C151.8 96 139.7 104.6 135.2 117.4L109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4zM208 272C199.2 272 192 279.2 192 288V320C192 328.8 199.2 336 208 336H304C312.8 336 320 328.8 320 320V288C320 279.2 312.8 272 304 272H208zM72 304H104C117.3 304 128 293.3 128 280C128 266.7 117.3 256 104 256H72C58.75 256 48 266.7 48 280C48 293.3 58.75 304 72 304zM408 256C394.7 256 384 266.7 384 280C384 293.3 394.7 304 408 304H440C453.3 304 464 293.3 464 280C464 266.7 453.3 256 440 256H408z"/><path className="fa-secondary" d="M135.2 117.4C139.7 104.6 151.8 96 165.4 96H346.6C360.2 96 372.3 104.6 376.8 117.4L402.9 192H109.1L135.2 117.4zM32 448V391.4C41.41 396.9 52.34 400 64 400H128V448C128 465.7 113.7 480 96 480H64C46.33 480 32 465.7 32 448zM384 448V400H448C459.7 400 470.6 396.9 480 391.4V448C480 465.7 465.7 480 448 480H416C398.3 480 384 465.7 384 448z"/>
</>],
['light',<>
	<path d="M82.99 89.01C93.14 55.17 124.3 32 159.6 32H352.4C387.7 32 418.9 55.17 429 89.01L463.7 204.7C492.6 221.2 512 252.3 512 288V352C512 375.7 499.1 396.4 480 407.4V464C480 472.8 472.8 480 464 480C455.2 480 448 472.8 448 464V416H64V464C64 472.8 56.84 480 48 480C39.16 480 32 472.8 32 464V407.4C12.87 396.4 0 375.7 0 352V288C0 252.3 19.44 221.2 48.29 204.7L82.99 89.01zM159.6 64C138.4 64 119.7 77.9 113.6 98.21L85.33 192.6C88.83 192.2 92.39 192 95.1 192H416C419.6 192 423.2 192.2 426.7 192.6L398.4 98.21C392.3 77.9 373.6 64 352.4 64H159.6zM74.73 227.9L74.27 227.8C49.62 236.7 31.1 260.3 31.1 288H79.1C88.84 288 95.1 295.2 95.1 304C95.1 312.8 88.84 320 79.1 320H31.1V352C31.1 369.7 46.33 384 63.1 384H159.1V352C159.1 334.3 174.3 320 191.1 320H320C337.7 320 352 334.3 352 352V384H448C465.7 384 480 369.7 480 352V320H432C423.2 320 416 312.8 416 304C416 295.2 423.2 288 432 288H480C480 260.3 462.4 236.7 437.7 227.8L437.3 227.9L437.2 227.6C430.5 225.3 423.4 224 416 224H95.1C88.58 224 81.46 225.3 74.83 227.6L74.73 227.9zM320 384V352H191.1V384H320z"/>
</>],
['regular',<>
	<path d="M165.4 32H346.6C383.1 32 417.3 55.63 429.7 90.93L463.9 188.8C492.6 205.4 512 236.4 512 272V336C512 359.7 499.1 380.4 480 391.4V456C480 469.3 469.3 480 456 480C442.7 480 432 469.3 432 456V400H80V456C80 469.3 69.25 480 56 480C42.75 480 32 469.3 32 456V391.4C12.87 380.4 0 359.7 0 336V272C0 236.4 19.35 205.4 48.1 188.8L82.35 90.93C94.7 55.63 128 32 165.4 32V32zM165.4 80C148.4 80 133.3 90.74 127.7 106.8L103.4 176H408.6L384.3 106.8C378.7 90.74 363.6 80 346.6 80H165.4zM50.73 256H104C117.3 256 128 266.7 128 280C128 293.3 117.3 304 104 304H48V336C48 344.8 55.16 352 64 352H192V320C192 302.3 206.3 288 224 288H288C305.7 288 320 302.3 320 320V352H448C456.8 352 464 344.8 464 336V304H408C394.7 304 384 293.3 384 280C384 266.7 394.7 256 408 256H461.3C454.7 237.4 436.9 224 416 224H96C75.1 224 57.32 237.4 50.73 256V256z"/>
</>],
['solid',<>
	<path d="M165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V336C512 359.7 499.1 380.4 480 391.4V448C480 465.7 465.7 480 448 480H416C398.3 480 384 465.7 384 448V400H128V448C128 465.7 113.7 480 96 480H64C46.33 480 32 465.7 32 448V391.4C12.87 380.4 0 359.7 0 336V256C0 229.3 16.36 206.4 39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32V32zM165.4 96C151.8 96 139.7 104.6 135.2 117.4L109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4zM208 272C199.2 272 192 279.2 192 288V320C192 328.8 199.2 336 208 336H304C312.8 336 320 328.8 320 320V288C320 279.2 312.8 272 304 272H208zM72 304H104C117.3 304 128 293.3 128 280C128 266.7 117.3 256 104 256H72C58.75 256 48 266.7 48 280C48 293.3 58.75 304 72 304zM408 256C394.7 256 384 266.7 384 280C384 293.3 394.7 304 408 304H440C453.3 304 464 293.3 464 280C464 266.7 453.3 256 440 256H408z"/>
</>],
['thin',<>
	<path d="M192 312C192 298.7 202.7 288 216 288H296C309.3 288 320 298.7 320 312V328C320 341.3 309.3 352 296 352H216C202.7 352 192 341.3 192 328V312zM208 312V328C208 332.4 211.6 336 216 336H296C300.4 336 304 332.4 304 328V312C304 307.6 300.4 304 296 304H216C211.6 304 208 307.6 208 312zM167.6 32H344.4C376.2 32 404.2 52.86 413.3 83.31L446.3 193.3C483.7 200 512 232.7 512 272V352C512 372.9 498.6 390.7 480 397.3V472C480 476.4 476.4 480 472 480C467.6 480 464 476.4 464 472V400H48V472C48 476.4 44.42 480 40 480C35.58 480 32 476.4 32 472V397.3C13.36 390.7 0 372.9 0 352V272C0 232.7 28.32 200 65.66 193.3L98.65 83.31C107.8 52.86 135.8 32 167.6 32V32zM167.6 48C142.9 48 121.1 64.22 113.1 87.91L82.75 192H429.2L398 87.91C390.9 64.22 369.1 48 344.4 48H167.6zM18.02 256H72C85.25 256 96 266.7 96 280V312C96 325.3 85.25 336 72 336H16V352C16 369.7 30.33 384 48 384H464C481.7 384 496 369.7 496 352V336H440C426.7 336 416 325.3 416 312V280C416 266.7 426.7 256 440 256H493.1C486.9 228.4 461.8 208 432 208H80C50.18 208 25.12 228.4 18.02 256V256zM496 320V272H440C435.6 272 432 275.6 432 280V312C432 316.4 435.6 320 440 320H496zM80 312V280C80 275.6 76.42 272 72 272H16V320H72C76.42 320 80 316.4 80 312z"/>
</>],

]);

const CarRear: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CarRear.displayName = "CarRear";

export default CarRear;