
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416zM511.1 288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288z"/><path className="fa-secondary" d="M504.1 7.029C514.3 16.4 514.3 31.6 504.1 40.97L416.1 128.1C407.6 138.3 392.4 138.3 383 128.1C373.7 119.6 373.7 104.4 383 95.03L471 7.029C480.4-2.343 495.6-2.343 504.1 7.029V7.029zM345 277.4C329.1 303.9 320 334.9 320 368C320 369 320 370.1 320 371.1C290.9 375.6 260 366.6 237.6 344.1L225.4 331.9L193.5 363.8C221.1 366.5 249.7 378.8 271.5 400.7L294.2 423.3L271.5 445.9C234 483.4 173.3 483.4 135.8 445.9L123.5 433.7L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L78.29 388.5L67.88 378C30.39 340.6 30.39 279.8 67.88 242.3L90.51 219.6L113.1 242.3C134.1 263.3 146.3 289.7 149.7 317.1L180.1 286.6L169.7 276.2C132.2 238.7 132.2 177.9 169.7 140.5L192.3 117.8L214.1 140.5C235.1 161.4 248.1 187.9 251.5 215.3L281.9 184.8L271.5 174.4C234 136.9 234 76.12 271.5 38.63L294.2 15.1L316.8 38.63C321.3 43.15 325.4 47.94 329.1 52.93L375 7.029C384.4-2.343 399.6-2.343 408.1 7.029C418.3 16.4 418.3 31.6 408.1 40.97L350.7 99.2C355.9 120.7 355.4 143.2 349.3 164.5C369.6 158.7 391.1 157.1 411.7 162.4L471 103C480.4 93.66 495.6 93.66 504.1 103C514.3 112.4 514.3 127.6 504.1 136.1L458.8 183.1C463.3 186.3 467.6 189.8 471.7 193.7C426.4 199.9 386.5 223.5 359.1 257.4C352 253.3 345.4 248.3 339.4 242.3L327.2 230.1L295.3 261.1C312.5 263.6 329.5 268.8 345.1 277.4L345 277.4z"/>
</>],
['light',<>
	<path d="M364.4 170.1C381.2 169.1 398.1 171.3 414.2 176.9L468.5 122.5C474.8 116.3 484.9 116.2 491.2 122.5C497.4 128.7 497.4 138.9 491.2 145.1L444.3 191.1C446.9 193.7 449.5 195.6 451.9 197.6C438.9 200.9 426.5 205.7 414.9 211.8C379 194.1 334.4 200.1 304.6 229.1L338.5 263.9C341.6 266.1 344.9 269.7 348.4 272C341.5 282.6 335.8 293.1 331.2 305.1C294.4 283.9 245.9 288.7 214.1 320.5L248 354.4C267.5 373.9 296.4 378.2 320 367.3L320 367.1C320 379.1 321 389.9 322.1 400.4C315 403 306.8 404.5 298.6 404.1L304.6 410.1C310.8 417.2 310.8 427.3 304.6 433.6L270.7 467.5C233.2 505 172.4 505 134.9 467.5L100.1 433.6L27.48 507.1C21.23 513.4 11.1 513.4 4.851 507.1C-1.398 500.9-1.398 490.8 4.849 484.5L78.36 410.1L44.45 377.1C6.957 339.6 6.952 278.8 44.44 241.3L78.35 207.4C84.59 201.1 94.72 201.1 100.1 207.4L106.1 213.4C108.2 190.6 117.5 168.2 134.9 150.8L168.8 116.9C175.1 110.6 185.2 110.6 191.5 116.9L197.4 122.8C198.7 100.1 208 77.68 225.4 60.29L259.3 26.37C265.6 20.12 275.7 20.12 281.9 26.37L304.5 48.97C310.3 54.77 315.5 60.1 319.9 67.54L366.7 20.7C372.1 14.45 383.1 14.45 389.4 20.7C395.6 26.95 395.6 37.08 389.4 43.33L335 97.69C340.6 113.8 342.8 130.7 341.8 147.5L468.5 20.7C474.8 14.45 484.9 14.45 491.2 20.69C497.4 26.94 497.4 37.07 491.2 43.32L364.4 170.1zM191.4 162.1L180.1 150.8L157.5 173.4C132.6 198.4 132.6 238.9 157.6 263.9L191.5 297.8L191.8 297.5C228.9 259.1 228.8 199.5 191.4 162.1L191.4 162.1zM248 173.4L281.9 207.3C319.4 169.8 319.4 109.1 281.9 71.6L270.6 60.31L248 82.91C223 107.9 223 148.4 248 173.4L248 173.4zM89.66 241.3L67.06 263.9C42.07 288.9 42.08 329.4 67.07 354.4L100.1 388.3C138.4 350.8 138.4 290.1 100.9 252.6L89.66 241.3zM259.3 410.1C221.9 373.5 161.1 373.5 123.6 410.1L157.5 444.9C182.5 469.9 223 469.9 248 444.9L270.6 422.3L259.3 410.1zM472 423.1C472 410.7 482.7 399.1 496 399.1C509.3 399.1 520 410.7 520 423.1C520 437.3 509.3 447.1 496 447.1C482.7 447.1 472 437.3 472 423.1V423.1zM495.1 287.1C504.8 287.1 511.1 295.2 511.1 303.1V367.1C511.1 376.8 504.8 383.1 495.1 383.1C487.2 383.1 479.1 376.8 479.1 367.1V303.1C479.1 295.2 487.2 287.1 495.1 287.1zM640 367.1C640 447.5 575.5 511.1 496 511.1C416.5 511.1 352 447.5 352 367.1C352 288.5 416.5 223.1 496 223.1C575.5 223.1 640 288.5 640 367.1zM496 255.1C434.1 255.1 384 306.1 384 367.1C384 429.9 434.1 479.1 496 479.1C557.9 479.1 608 429.9 608 367.1C608 306.1 557.9 255.1 496 255.1V255.1z"/>
</>],
['regular',<>
	<path d="M366.2 179.7C375.6 180.8 384.9 182.8 393.9 185.1L470.9 108.1C480.3 99.6 495.5 99.6 504.8 108.1C514.2 118.3 514.2 133.5 504.8 142.9L449.6 198.2C424.7 204.1 402.1 217 382.9 233.1C358.7 223 330.5 225.4 308.1 240.2L329.5 261.7C334.8 266.1 341.1 270.8 347.8 273.1C337.5 289 329.8 306.7 325.2 325.5C297.8 301.9 258.3 299.9 228.9 319.4L250.3 340.8C269.1 359.6 299.5 359.6 318.2 340.8L322.9 336.2C320.1 346.5 320 357.1 320 368C320 377.2 320.7 386.3 322.1 395.2C317.8 397 313.3 398.6 308.8 399.7C313.1 405.1 312.4 414.5 306.9 420.1L272.1 453.1C235.5 491.5 174.7 491.5 137.2 453.1L114.6 431.4L41.11 504.9C31.74 514.3 16.55 514.3 7.173 504.9C-2.198 495.5-2.198 480.3 7.173 470.1L80.69 397.4L58.09 374.8C20.6 337.3 20.6 276.5 58.09 239.1L92 205.1C97.53 199.6 106.1 198.1 112.3 203.2C116.5 187.3 124.8 172.3 137.3 159.9L171.2 125.1C176.7 120.4 185.3 119.8 191.5 124C195.7 108.2 203.1 93.14 216.4 80.69L250.3 46.77C256.6 40.52 266.7 40.52 272.1 46.77L295.6 69.37C297.5 71.27 299.3 73.23 301.1 75.22L369.1 7.17C378.5-2.203 393.7-2.203 403 7.17C412.4 16.54 412.4 31.74 403 41.11L326.1 118.1C329.2 127.1 331.2 136.4 332.3 145.8L470.9 7.17C480.3-2.203 495.5-2.203 504.8 7.17C514.2 16.54 514.2 31.74 504.8 41.11L366.2 179.7zM250.4 182.5L271.8 203.1C292.4 172.9 288.1 130.7 261.7 103.3L250.4 114.6C231.6 133.4 231.6 163.8 250.4 182.5V182.5zM171.2 261.7L192.7 283.2C213.2 252.1 209.8 209.9 182.5 182.5L171.2 193.8C152.5 212.6 152.5 242.1 171.2 261.7V261.7zM149.7 398.6L171.2 420C189.9 438.8 220.3 438.8 239 420L250.3 408.7C222.1 381.4 180.8 378 149.7 398.6V398.6zM103.3 261.7L92.03 272.1C73.28 291.7 73.28 322.1 92.03 340.9L113.5 362.3C134 331.3 130.6 289.1 103.3 261.7V261.7zM352 368C352 288.5 416.5 223.1 496 223.1C575.5 223.1 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368V368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464V464zM479.1 287.1V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V287.1C511.1 279.2 504.8 271.1 495.1 271.1C487.2 271.1 479.1 279.2 479.1 287.1z"/>
</>],
['solid',<>
	<path d="M416.1 128.1C407.6 138.3 392.4 138.3 383 128.1C373.7 119.6 373.7 104.4 383 95.03L471 7.03C480.4-2.343 495.6-2.343 504.1 7.03C514.3 16.4 514.3 31.6 504.1 40.97L416.1 128.1zM327.2 230.1L295.3 261.1C312.5 263.6 329.5 268.8 345 277.4C329.1 303.9 320 334.9 320 368C320 369 320 370.1 320 371.1C290.9 375.6 260 366.6 237.6 344.1L225.4 331.9L193.5 363.8C221.1 366.5 249.7 378.8 271.5 400.7L294.2 423.3L271.5 445.9C234 483.4 173.3 483.4 135.8 445.9L123.5 433.7L54.63 502.6C42.13 515.1 21.87 515.1 9.372 502.6C-3.124 490.1-3.124 469.9 9.372 457.4L78.29 388.5L67.88 378C30.39 340.6 30.39 279.8 67.88 242.3L90.51 219.6L113.1 242.3C134.1 263.3 146.3 289.7 149.7 317.1L180.1 286.6L169.7 276.2C132.2 238.7 132.2 177.9 169.7 140.5L192.3 117.8L214.1 140.5C235.1 161.4 248.1 187.9 251.5 215.3L281.9 184.8L271.5 174.4C234 136.9 234 76.12 271.5 38.63L294.2 15.1L316.8 38.63C321.3 43.15 325.4 47.94 329.1 52.93L375 7.029C384.4-2.343 399.6-2.343 408.1 7.029C418.3 16.4 418.3 31.6 408.1 40.97L350.7 99.2C355.9 120.7 355.4 143.2 349.3 164.5C369.6 158.7 391.1 157.1 411.7 162.4L471 103C480.4 93.66 495.6 93.66 504.1 103C514.3 112.4 514.3 127.6 504.1 136.1L458.8 183.1C463.3 186.3 467.6 189.8 471.7 193.7C426.4 199.9 386.5 223.5 359.1 257.4C352 253.3 345.4 248.3 339.4 242.3L327.2 230.1zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/>
</>],
['thin',<>
	<path d="M13.64 509.7C10.52 512.8 5.452 512.8 2.327 509.7C-.7967 506.6-.7967 501.5 2.327 498.4L498.4 2.32C501.5-.8045 506.6-.8045 509.7 2.32C512.8 5.444 512.8 10.51 509.7 13.63L13.64 509.7zM368.8 64.36C365.6 67.49 360.6 67.49 357.4 64.36C354.3 61.24 354.3 56.18 357.4 53.05L396.9 13.59C400 10.47 405.1 10.47 408.2 13.59C411.3 16.72 411.3 21.78 408.2 24.91L368.8 64.36zM458.1 154.6C455.8 157.7 450.8 157.7 447.6 154.6C444.5 151.4 444.5 146.4 447.6 143.2L487.1 103.8C490.2 100.7 495.3 100.7 498.4 103.8C501.5 106.9 501.5 111.1 498.4 115.1L458.1 154.6zM342.8 133.6C341.9 137.9 337.7 140.7 333.3 139.8C329 138.1 326.2 134.8 327.1 130.4C336.6 82.85 311.6 52.82 289.9 30.67C272.9 48.72 258.8 69.25 254.7 91.83C250.4 116.1 257.4 144.6 289.8 177.1C292.1 180.2 292.1 185.3 289.8 188.4C286.7 191.5 281.7 191.5 278.5 188.4C243.3 153.2 233.5 119.6 238.1 89C244.3 59.06 264.1 33.66 284.2 13.6C287.3 10.47 292.4 10.47 295.5 13.6L295.8 13.96C318.3 36.41 354.9 72.98 342.8 133.6V133.6zM230 246.3C229.2 250.6 224.9 253.4 220.6 252.6C216.3 251.7 213.5 247.5 214.3 243.2C223.9 195.6 198.9 165.6 177.2 143.4C160.2 161.5 146 181.1 141.1 204.6C137.6 228.9 144.7 257.4 177.1 289.8C180.2 292.9 180.2 297.1 177.1 301.1C173.1 304.2 168.9 304.2 165.8 301.1C130.6 265.9 120.7 232.4 126.2 201.7C131.6 171.8 151.4 146.4 171.4 126.3C174.6 123.2 179.6 123.2 182.7 126.3L183.1 126.7C205.6 149.1 242.1 185.7 230 246.3L230 246.3zM122.9 353.4C122.1 357.7 117.8 360.5 113.5 359.7C109.2 358.8 106.4 354.6 107.2 350.3C116.8 302.7 91.75 272.7 70.05 250.5C53.07 268.6 38.93 289.1 34.88 311.7C30.52 335.1 37.58 364.5 70.01 396.9C73.13 400 73.13 405.1 70.01 408.2C66.88 411.3 61.82 411.3 58.69 408.2C23.48 373 13.63 339.5 19.13 308.8C24.51 278.9 44.27 253.5 64.33 233.4C67.45 230.3 72.52 230.3 75.64 233.4L76 233.8C98.46 256.2 135 292.8 122.9 353.4V353.4zM283.8 430.4L284.2 430.7C287.3 433.9 287.3 438.9 284.2 442C264.1 462.1 238.7 481.9 208.8 487.2C178.2 492.7 144.6 482.9 109.4 447.7C106.3 444.6 106.3 439.5 109.4 436.4C112.5 433.2 117.6 433.2 120.7 436.4C153.2 468.8 181.7 475.9 205.1 471.5C228.5 467.4 249.1 453.3 267.1 436.3C244.1 414.6 214.1 389.6 167.4 399.1C163 400 158.8 397.2 157.1 392.9C157.1 388.5 159.9 384.3 164.2 383.4C224.8 371.3 261.4 407.9 283.8 430.4H283.8zM319.1 367.1C319.1 373.1 320.2 378.3 320.7 383.3C317.3 384.3 313.8 385.1 310.3 385.8C279.6 391.3 246.1 381.4 210.9 346.2C207.8 343.1 207.8 338 210.9 334.9C214 331.8 219.1 331.8 222.2 334.9C254.6 367.3 283.1 374.4 307.4 370C311.7 369.3 315.9 368.1 320 366.7L319.1 367.1zM331.2 306C314.4 297.3 294.1 292.6 268.8 297.7C264.5 298.5 260.3 295.7 259.4 291.4C258.6 287.1 261.4 282.8 265.7 281.1C294.8 276.2 318.4 281.6 337.5 291.3C335.2 296.1 333.1 301 331.2 306zM378.4 169.2C420.5 160.8 451 175.9 473.3 193.4C465.9 194.4 458.6 195.8 451.6 197.7C433.3 186.2 410.8 179.1 381.6 184.9C377.3 185.8 373 182.1 372.2 178.7C371.3 174.3 374.1 170.1 378.4 169.2zM323.6 233.5C320.5 230.4 320.5 225.3 323.6 222.2C326.8 219 331.8 219 334.9 222.2C346.3 233.6 357.2 241.8 367.7 247.6C363.9 251.5 360.4 255.6 357.1 259.9C346.1 253.5 334.1 244.8 323.6 233.5H323.6zM480 431.1C480 423.2 487.2 415.1 496 415.1C504.8 415.1 512 423.2 512 431.1C512 440.8 504.8 447.1 496 447.1C487.2 447.1 480 440.8 480 431.1zM495.1 279.1C500.4 279.1 503.1 283.6 503.1 287.1V383.1C503.1 388.4 500.4 391.1 495.1 391.1C491.6 391.1 487.1 388.4 487.1 383.1V287.1C487.1 283.6 491.6 279.1 495.1 279.1zM640 367.1C640 447.5 575.5 511.1 496 511.1C416.5 511.1 352 447.5 352 367.1C352 288.5 416.5 223.1 496 223.1C575.5 223.1 640 288.5 640 367.1zM496 239.1C425.3 239.1 368 297.3 368 367.1C368 438.7 425.3 495.1 496 495.1C566.7 495.1 624 438.7 624 367.1C624 297.3 566.7 239.1 496 239.1V239.1z"/>
</>],

]);

const WheatAwnCircleExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WheatAwnCircleExclamation.displayName = "WheatAwnCircleExclamation";

export default WheatAwnCircleExclamation;