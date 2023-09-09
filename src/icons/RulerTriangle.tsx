
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M129.9 84.69L107.3 107.3C101.1 113.6 90.94 113.6 84.69 107.3C78.44 101.1 78.44 90.93 84.69 84.69L107.3 62.06L129.9 84.69zM209.9 164.7L187.3 187.3C181.1 193.6 170.9 193.6 164.7 187.3C158.4 181.1 158.4 170.9 164.7 164.7L187.3 142.1L209.9 164.7zM289.9 244.7L267.3 267.3C261.1 273.6 250.9 273.6 244.7 267.3C238.4 261.1 238.4 250.9 244.7 244.7L267.3 222.1L289.9 244.7zM369.9 324.7L347.3 347.3C341.1 353.6 330.9 353.6 324.7 347.3C318.4 341.1 318.4 330.9 324.7 324.7L347.3 302.1L369.9 324.7zM449.9 404.7L427.3 427.3C421.1 433.6 410.9 433.6 404.7 427.3C398.4 421.1 398.4 410.9 404.7 404.7L427.3 382.1L449.9 404.7z"/><path className="fa-secondary" d="M107.3 62.06L84.69 84.69C78.44 90.93 78.44 101.1 84.69 107.3C90.93 113.6 101.1 113.6 107.3 107.3L129.9 84.69L187.3 142.1L164.7 164.7C158.4 170.9 158.4 181.1 164.7 187.3C170.9 193.6 181.1 193.6 187.3 187.3L209.9 164.7L267.3 222.1L244.7 244.7C238.4 250.9 238.4 261.1 244.7 267.3C250.9 273.6 261.1 273.6 267.3 267.3L289.9 244.7L347.3 302.1L324.7 324.7C318.4 330.9 318.4 341.1 324.7 347.3C330.9 353.6 341.1 353.6 347.3 347.3L369.9 324.7L427.3 382.1L404.7 404.7C398.4 410.9 398.4 421.1 404.7 427.3C410.9 433.6 421.1 433.6 427.3 427.3L449.9 404.7L502.6 457.4C511.8 466.5 514.5 480.3 509.6 492.2C504.6 504.2 492.9 512 480 512H64C28.65 512 0 483.3 0 448V32C0 19.06 7.796 7.39 19.75 2.437C31.71-2.516 45.48 .2215 54.63 9.373L107.3 62.06zM128 256V384H256L128 256z"/>
</>],
['light',<>
	<path d="M121.9 241.2C127.9 238.7 134.7 240.1 139.3 244.7L267.3 372.7C271.9 377.3 273.3 384.1 270.8 390.1C268.3 396.1 262.5 400 256 400H128C119.2 400 112 392.8 112 384V256C112 249.5 115.9 243.7 121.9 241.2V241.2zM144 294.6V368H217.4L144 294.6zM77.26 13.26L498.7 434.7C507.2 443.2 512 454.7 512 466.7C512 491.7 491.7 512 466.7 512H64C28.65 512 0 483.3 0 448V45.25C0 20.26 20.26 0 45.25 0C57.26 0 68.77 4.768 77.25 13.25L77.26 13.26zM32 45.26V448C32 465.7 46.33 480 64 480H466.7C474.1 480 480 474.1 480 466.7C480 463.2 478.6 459.9 476.1 457.4L436.7 417.9L411.3 443.3C405.1 449.6 394.9 449.6 388.7 443.3C382.4 437.1 382.4 426.9 388.7 420.7L414.1 395.3L356.7 337.9L331.3 363.3C325.1 369.6 314.9 369.6 308.7 363.3C302.4 357.1 302.4 346.9 308.7 340.7L334.1 315.3L276.7 257.9L251.3 283.3C245.1 289.6 234.9 289.6 228.7 283.3C222.4 277.1 222.4 266.9 228.7 260.7L254.1 235.3L196.7 177.9L171.3 203.3C165.1 209.6 154.9 209.6 148.7 203.3C142.4 197.1 142.4 186.9 148.7 180.7L174.1 155.3L116.7 97.94L91.31 123.3C85.07 129.6 74.94 129.6 68.69 123.3C62.44 117.1 62.44 106.9 68.69 100.7L94.06 75.31L54.63 35.88C52.14 33.4 48.77 32 45.26 32C37.94 32 32 37.94 32 45.26L32 45.26z"/>
</>],
['regular',<>
	<path d="M256 384H128V256L256 384zM512 477.3V480C512 497.7 497.7 512 480 512H64C28.65 512 0 483.3 0 448V32C0 14.33 14.33 0 32 0H34.75C43.23 0 51.37 3.372 57.37 9.372L502.6 454.6C508.6 460.6 512 468.8 512 477.3zM64 464H444.1L377.4 397.3L363.3 411.3C357.1 417.6 346.9 417.6 340.7 411.3C334.4 405.1 334.4 394.9 340.7 388.7L354.7 374.6L297.4 317.3L283.3 331.3C277.1 337.6 266.9 337.6 260.7 331.3C254.4 325.1 254.4 314.9 260.7 308.7L274.7 294.6L217.4 237.3L203.3 251.3C197.1 257.6 186.9 257.6 180.7 251.3C174.4 245.1 174.4 234.9 180.7 228.7L194.7 214.6L137.4 157.3L123.3 171.3C117.1 177.6 106.9 177.6 100.7 171.3C94.44 165.1 94.44 154.9 100.7 148.7L114.7 134.6L47.1 67.88V448C47.1 456.8 55.16 464 63.1 464L64 464z"/>
</>],
['solid',<>
	<path d="M32 0H34.75C43.23 0 51.37 3.372 57.37 9.372L108.7 60.69L84.69 84.69C78.44 90.93 78.44 101.1 84.69 107.3C90.93 113.6 101.1 113.6 107.3 107.3L131.3 83.31L188.7 140.7L164.7 164.7C158.4 170.9 158.4 181.1 164.7 187.3C170.9 193.6 181.1 193.6 187.3 187.3L211.3 163.3L268.7 220.7L244.7 244.7C238.4 250.9 238.4 261.1 244.7 267.3C250.9 273.6 261.1 273.6 267.3 267.3L291.3 243.3L348.7 300.7L324.7 324.7C318.4 330.9 318.4 341.1 324.7 347.3C330.9 353.6 341.1 353.6 347.3 347.3L371.3 323.3L428.7 380.7L404.7 404.7C398.4 410.9 398.4 421.1 404.7 427.3C410.9 433.6 421.1 433.6 427.3 427.3L451.3 403.3L502.6 454.6C508.6 460.6 512 468.8 512 477.3V480C512 497.7 497.7 512 480 512H64C28.65 512 0 483.3 0 448V32C0 14.33 14.33 0 32 0zM128 256V384H256L128 256z"/>
</>],
['thin',<>
	<path d="M124.9 248.6C127.9 247.4 131.4 248.1 133.7 250.3L261.7 378.3C263.9 380.6 264.6 384.1 263.4 387.1C262.2 390.1 259.2 392 256 392H128C123.6 392 120 388.4 120 384V256C120 252.8 121.9 249.8 124.9 248.6V248.6zM136 275.3V376H236.7L136 275.3zM.0003 448V45.25C.0003 20.26 20.26 0 45.26 0C57.26 0 68.77 4.768 77.26 13.25L498.7 434.7C507.2 443.2 512 454.7 512 466.7C512 491.7 491.7 512 466.7 512H64C28.65 512 0 483.3 0 448L.0003 448zM16 45.25V448C16 474.5 37.49 496 64 496H466.7C482.9 496 496 482.9 496 466.7C496 458.1 492.9 451.5 487.4 446.1L442.3 400.1L413.7 429.7C410.5 432.8 405.5 432.8 402.3 429.7C399.2 426.5 399.2 421.5 402.3 418.3L431 389.7L362.3 320.1L333.7 349.7C330.5 352.8 325.5 352.8 322.3 349.7C319.2 346.5 319.2 341.5 322.3 338.3L351 309.7L282.3 240.1L253.7 269.7C250.5 272.8 245.5 272.8 242.3 269.7C239.2 266.5 239.2 261.5 242.3 258.3L271 229.7L202.3 160.1L173.7 189.7C170.5 192.8 165.5 192.8 162.3 189.7C159.2 186.5 159.2 181.5 162.3 178.3L191 149.7L122.3 80.97L93.66 109.7C90.53 112.8 85.47 112.8 82.34 109.7C79.22 106.5 79.22 101.5 82.34 98.34L111 69.66L65.94 24.57C60.46 19.08 53.01 16 45.26 16C29.1 16 16 29.1 16 45.25V45.25z"/>
</>],

]);

const RulerTriangle: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RulerTriangle.displayName = "RulerTriangle";

export default RulerTriangle;
