
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208zM328 328C341.3 328 352 338.7 352 352C352 365.3 341.3 376 328 376H184C170.7 376 160 365.3 160 352C160 338.7 170.7 328 184 328H328z"/><path className="fa-secondary" d="M215.1 3.115C229 1.062 242.4 0 255.1 0C269.6 0 282.1 1.062 296 3.115C313.5 5.858 325.4 22.24 322.7 39.69C319.9 57.15 303.5 69.08 286.1 66.34C276.3 64.8 266.3 64 255.1 64C245.7 64 235.7 64.8 225.9 66.34C208.5 69.08 192.1 57.15 189.3 39.69C186.6 22.24 198.5 5.858 215.1 3.115V3.115zM150.2 55.94C160.6 70.23 157.4 90.24 143.2 100.6C126.9 112.5 112.5 126.9 100.6 143.2C90.24 157.4 70.22 160.6 55.94 150.2C41.65 139.8 38.49 119.8 48.89 105.5C64.68 83.8 83.8 64.68 105.5 48.89C119.8 38.49 139.8 41.65 150.2 55.94V55.94zM361.8 55.94C372.2 41.65 392.2 38.49 406.5 48.89C428.2 64.68 447.3 83.8 463.1 105.5C473.5 119.8 470.4 139.8 456.1 150.2C441.8 160.6 421.8 157.4 411.4 143.2C399.5 126.9 385.1 112.5 368.8 100.6C354.6 90.24 351.4 70.23 361.8 55.94V55.94zM472.3 189.3C489.8 186.6 506.1 198.5 508.9 215.1C510.9 229 512 242.4 512 256C512 269.6 510.9 282.1 508.9 296C506.1 313.5 489.8 325.4 472.3 322.7C454.8 319.9 442.9 303.5 445.7 286.1C447.2 276.3 448 266.3 448 256C448 245.7 447.2 235.7 445.7 225.9C442.9 208.5 454.8 192.1 472.3 189.3V189.3zM39.69 189.3C57.15 192.1 69.08 208.5 66.34 225.9C64.8 235.7 64 245.7 64 256C64 266.3 64.8 276.3 66.34 286.1C69.08 303.5 57.15 319.9 39.69 322.7C22.24 325.4 5.858 313.5 3.115 296C1.062 282.1 0 269.6 0 256C0 242.4 1.062 229 3.115 215.1C5.858 198.5 22.24 186.6 39.69 189.3V189.3zM55.94 361.8C70.22 351.4 90.24 354.6 100.6 368.8C112.5 385.1 126.9 399.5 143.2 411.4C157.4 421.8 160.6 441.8 150.2 456.1C139.8 470.4 119.8 473.5 105.5 463.1C83.8 447.3 64.68 428.2 48.89 406.5C38.49 392.2 41.65 372.2 55.94 361.8V361.8zM456.1 361.8C470.4 372.2 473.5 392.2 463.1 406.5C447.3 428.2 428.2 447.3 406.5 463.1C392.2 473.5 372.2 470.4 361.8 456.1C351.4 441.8 354.6 421.8 368.8 411.4C385.1 399.5 399.5 385.1 411.4 368.8C421.8 354.6 441.8 351.4 456.1 361.8V361.8zM189.3 472.3C192.1 454.8 208.5 442.9 225.9 445.7C235.7 447.2 245.7 448 255.1 448C266.3 448 276.3 447.2 286.1 445.7C303.5 442.9 319.9 454.8 322.7 472.3C325.4 489.8 313.5 506.1 296 508.9C282.1 510.9 269.6 512 255.1 512C242.4 512 229 510.9 215.1 508.9C198.5 506.1 186.6 489.8 189.3 472.3z"/>
</>],
['light',<>
	<path d="M305.9 4.872C314.6 6.587 320.2 15 318.5 23.67C316.8 32.34 308.4 37.98 299.7 36.26C285.6 33.47 270.1 32 256 32C241 32 226.4 33.47 212.3 36.26C203.6 37.98 195.2 32.34 193.5 23.67C191.8 15 197.4 6.587 206.1 4.872C222.2 1.674 238.9 0 256 0C273.1 0 289.8 1.674 305.9 4.872V4.872zM468.9 113.8C473.8 121.1 471.8 131 464.5 135.9C457.1 140.9 447.2 138.9 442.3 131.6C425.9 107.1 404.9 86.08 380.4 69.72C373.1 64.8 371.1 54.87 376.1 47.52C380.1 40.18 390.9 38.21 398.2 43.13C426.2 61.81 450.2 85.84 468.9 113.8L468.9 113.8zM69.72 131.6C64.8 138.9 54.87 140.9 47.52 135.9C40.18 131 38.21 121.1 43.13 113.8C61.81 85.84 85.84 61.81 113.8 43.13C121.1 38.21 131 40.18 135.9 47.52C140.9 54.87 138.9 64.8 131.6 69.72C107.1 86.08 86.08 107.1 69.72 131.6L69.72 131.6zM32 256C32 270.1 33.47 285.6 36.26 299.7C37.98 308.4 32.34 316.8 23.67 318.5C15 320.2 6.587 314.6 4.872 305.9C1.674 289.8 0 273.1 0 256C0 238.9 1.674 222.2 4.872 206.1C6.587 197.4 15 191.8 23.67 193.5C32.34 195.2 37.98 203.6 36.26 212.3C33.47 226.4 32 241 32 256V256zM512 256C512 273.1 510.3 289.8 507.1 305.9C505.4 314.6 496.1 320.2 488.3 318.5C479.7 316.8 474 308.4 475.7 299.7C478.5 285.6 480 270.1 480 256C480 241 478.5 226.4 475.7 212.3C474 203.6 479.7 195.2 488.3 193.5C496.1 191.8 505.4 197.4 507.1 206.1C510.3 222.2 512 238.9 512 256zM131.6 442.3C138.9 447.2 140.9 457.1 135.9 464.5C131 471.8 121.1 473.8 113.8 468.9C85.84 450.2 61.81 426.2 43.13 398.2C38.21 390.9 40.18 380.1 47.52 376.1C54.87 371.1 64.8 373.1 69.72 380.4C86.08 404.9 107.1 425.9 131.6 442.3L131.6 442.3zM398.2 468.9C390.9 473.8 380.1 471.8 376.1 464.5C371.1 457.1 373.1 447.2 380.4 442.3C404.9 425.9 425.9 404.9 442.3 380.4C447.2 373.1 457.1 371.1 464.5 376.1C471.8 380.1 473.8 390.9 468.9 398.2C450.2 426.2 426.2 450.2 398.2 468.9L398.2 468.9zM256 480C270.1 480 285.6 478.5 299.7 475.7C308.4 474 316.8 479.7 318.5 488.3C320.2 496.1 314.6 505.4 305.9 507.1C289.8 510.3 273.1 512 256 512C238.9 512 222.2 510.3 206.1 507.1C197.4 505.4 191.8 496.1 193.5 488.3C195.2 479.7 203.6 474 212.3 475.7C226.4 478.5 241 480 256 480zM152.4 208C152.4 194.7 163.1 184 176.4 184C189.6 184 200.4 194.7 200.4 208C200.4 221.3 189.6 232 176.4 232C163.1 232 152.4 221.3 152.4 208zM360.4 208C360.4 221.3 349.6 232 336.4 232C323.1 232 312.4 221.3 312.4 208C312.4 194.7 323.1 184 336.4 184C349.6 184 360.4 194.7 360.4 208zM328 336C336.8 336 344 343.2 344 352C344 360.8 336.8 368 328 368H184C175.2 368 168 360.8 168 352C168 343.2 175.2 336 184 336H328z"/>
</>],
['regular',<>
	<path d="M296 3.115C309.1 5.173 318.1 17.46 316 30.55C313.1 43.64 301.7 52.59 288.6 50.53C277.1 48.87 267.1 47.1 255.1 47.1C244.9 47.1 234 48.87 223.4 50.53C210.3 52.59 198 43.64 195.1 30.55C193.9 17.46 202.9 5.172 215.1 3.115C229 1.063 242.4 0 255.1 0C269.6 0 282.1 1.063 296 3.115V3.115zM87.7 133.7C79.9 144.5 64.89 146.8 54.17 139C43.45 131.2 41.09 116.2 48.89 105.5C64.68 83.8 83.8 64.68 105.5 48.89C116.2 41.09 131.2 43.45 139 54.17C146.8 64.89 144.5 79.9 133.7 87.7C116.1 100.5 100.5 116.1 87.7 133.7L87.7 133.7zM463.1 105.5C470.9 116.2 468.5 131.2 457.8 139C447.1 146.8 432.1 144.5 424.3 133.7C411.5 116.1 395.9 100.5 378.2 87.7C367.5 79.9 365.2 64.89 372.1 54.17C380.8 43.45 395.8 41.09 406.5 48.89C428.2 64.68 447.3 83.8 463.1 105.5L463.1 105.5zM47.1 256C47.1 267.1 48.87 277.1 50.53 288.6C52.59 301.7 43.64 313.1 30.55 316C17.46 318.1 5.172 309.1 3.115 296C1.063 282.1 0 269.6 0 256C0 242.4 1.063 229 3.115 215.1C5.173 202.9 17.46 193.9 30.55 195.1C43.64 198 52.59 210.3 50.53 223.4C48.87 234 47.1 244.9 47.1 256V256zM512 256C512 269.6 510.9 282.1 508.9 296C506.8 309.1 494.5 318.1 481.4 316C468.4 313.1 459.4 301.7 461.5 288.6C463.1 277.1 464 267.1 464 256C464 244.9 463.1 234 461.5 223.4C459.4 210.3 468.4 198 481.4 195.1C494.5 193.9 506.8 202.9 508.9 215.1C510.9 229 512 242.4 512 256V256zM133.7 424.3C144.5 432.1 146.8 447.1 139 457.8C131.2 468.5 116.2 470.9 105.5 463.1C83.8 447.3 64.68 428.2 48.89 406.5C41.09 395.8 43.45 380.8 54.17 372.1C64.89 365.2 79.9 367.5 87.7 378.3C100.5 395.9 116.1 411.5 133.7 424.3L133.7 424.3zM406.5 463.1C395.8 470.9 380.8 468.5 372.1 457.8C365.2 447.1 367.5 432.1 378.2 424.3C395.9 411.5 411.5 395.9 424.3 378.2C432.1 367.5 447.1 365.2 457.8 372.1C468.5 380.8 470.9 395.8 463.1 406.5C447.3 428.2 428.2 447.3 406.5 463.1L406.5 463.1zM255.1 464C267.1 464 277.1 463.1 288.6 461.5C301.7 459.4 313.1 468.4 316 481.4C318.1 494.5 309.1 506.8 296 508.9C282.1 510.9 269.6 512 255.1 512C242.4 512 229 510.9 215.1 508.9C202.9 506.8 193.9 494.5 195.1 481.4C198 468.4 210.3 459.4 223.4 461.5C234 463.1 244.9 464 255.1 464zM144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208zM328 328C341.3 328 352 338.7 352 352C352 365.3 341.3 376 328 376H183.1C170.7 376 159.1 365.3 159.1 352C159.1 338.7 170.7 328 183.1 328H328z"/>
</>],
['solid',<>
	<path d="M215.1 3.115C229 1.062 242.4 0 255.1 0C269.6 0 282.1 1.062 296 3.115C313.5 5.858 325.4 22.24 322.7 39.69C319.9 57.15 303.5 69.08 286.1 66.34C276.3 64.8 266.3 64 255.1 64C245.7 64 235.7 64.8 225.9 66.34C208.5 69.08 192.1 57.15 189.3 39.69C186.6 22.24 198.5 5.858 215.1 3.115V3.115zM150.2 55.94C160.6 70.23 157.4 90.24 143.2 100.6C126.9 112.5 112.5 126.9 100.6 143.2C90.24 157.4 70.22 160.6 55.94 150.2C41.65 139.8 38.49 119.8 48.89 105.5C64.68 83.8 83.8 64.68 105.5 48.89C119.8 38.49 139.8 41.65 150.2 55.94V55.94zM361.8 55.94C372.2 41.65 392.2 38.49 406.5 48.89C428.2 64.68 447.3 83.8 463.1 105.5C473.5 119.8 470.4 139.8 456.1 150.2C441.8 160.6 421.8 157.4 411.4 143.2C399.5 126.9 385.1 112.5 368.8 100.6C354.6 90.24 351.4 70.23 361.8 55.94V55.94zM472.3 189.3C489.8 186.6 506.1 198.5 508.9 215.1C510.9 229 512 242.4 512 256C512 269.6 510.9 282.1 508.9 296C506.1 313.5 489.8 325.4 472.3 322.7C454.8 319.9 442.9 303.5 445.7 286.1C447.2 276.3 448 266.3 448 256C448 245.7 447.2 235.7 445.7 225.9C442.9 208.5 454.8 192.1 472.3 189.3V189.3zM39.69 189.3C57.15 192.1 69.08 208.5 66.34 225.9C64.8 235.7 64 245.7 64 256C64 266.3 64.8 276.3 66.34 286.1C69.08 303.5 57.15 319.9 39.69 322.7C22.24 325.4 5.858 313.5 3.115 296C1.062 282.1 0 269.6 0 256C0 242.4 1.062 229 3.115 215.1C5.858 198.5 22.24 186.6 39.69 189.3V189.3zM55.94 361.8C70.23 351.4 90.24 354.6 100.6 368.8C112.5 385.1 126.9 399.5 143.2 411.4C157.4 421.8 160.6 441.8 150.2 456.1C139.8 470.4 119.8 473.5 105.5 463.1C83.8 447.3 64.68 428.2 48.89 406.5C38.49 392.2 41.65 372.2 55.94 361.8V361.8zM456.1 361.8C470.4 372.2 473.5 392.2 463.1 406.5C447.3 428.2 428.2 447.3 406.5 463.1C392.2 473.5 372.2 470.4 361.8 456.1C351.4 441.8 354.6 421.8 368.8 411.4C385.1 399.5 399.5 385.1 411.4 368.8C421.8 354.6 441.8 351.4 456.1 361.8V361.8zM189.3 472.3C192.1 454.8 208.5 442.9 225.9 445.7C235.7 447.2 245.7 448 255.1 448C266.3 448 276.3 447.2 286.1 445.7C303.5 442.9 319.9 454.8 322.7 472.3C325.4 489.8 313.5 506.1 296 508.9C282.1 510.9 269.6 512 255.1 512C242.4 512 229 510.9 215.1 508.9C198.5 506.1 186.6 489.8 189.3 472.3zM144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM328 328C341.3 328 352 338.7 352 352C352 365.3 341.3 376 328 376H183.1C170.7 376 159.1 365.3 159.1 352C159.1 338.7 170.7 328 183.1 328H328z"/>
</>],
['thin',<>
	<path d="M312.1 6.367C317.3 7.347 319.1 11.63 319 15.94C318 20.25 313.7 22.95 309.4 21.97C292.3 18.06 274.4 16 256 16C237.6 16 219.7 18.06 202.6 21.97C198.3 22.95 193.1 20.25 192.1 15.94C192 11.63 194.7 7.347 199 6.367C217.3 2.199 236.4 0 256 0C275.6 0 294.6 2.199 312.1 6.367V6.367zM52.75 128.3C50.4 132 45.46 133.2 41.72 130.8C37.98 128.5 36.86 123.5 39.21 119.8C59.69 87.27 87.27 59.69 119.8 39.21C123.5 36.86 128.5 37.98 130.8 41.72C133.2 45.46 132 50.4 128.3 52.75C97.82 71.95 71.95 97.82 52.75 128.3V128.3zM472.8 119.8C475.1 123.5 474 128.5 470.3 130.8C466.5 133.2 461.6 132 459.2 128.3C440.1 97.82 414.2 71.95 383.7 52.75C379.1 50.4 378.8 45.46 381.2 41.72C383.5 37.98 388.5 36.86 392.2 39.21C424.7 59.69 452.3 87.27 472.8 119.8V119.8zM16 256C16 274.4 18.06 292.3 21.97 309.4C22.95 313.7 20.25 318 15.94 319C11.63 319.1 7.347 317.3 6.367 312.1C2.199 294.7 0 275.6 0 256C0 236.4 2.199 217.3 6.367 199C7.347 194.7 11.63 192 15.94 192.1C20.25 193.1 22.95 198.3 21.97 202.6C18.06 219.7 16 237.6 16 256V256zM512 256C512 275.6 509.8 294.7 505.6 312.1C504.7 317.3 500.4 319.1 496.1 319C491.8 318 489.1 313.7 490 309.4C493.9 292.3 496 274.4 496 256C496 237.6 493.9 219.7 490 202.6C489.1 198.3 491.8 193.1 496.1 192.1C500.4 192 504.7 194.7 505.6 199C509.8 217.3 512 236.4 512 256V256zM128.3 459.2C132 461.6 133.2 466.5 130.8 470.3C128.5 474 123.5 475.1 119.8 472.8C87.27 452.3 59.69 424.7 39.21 392.2C36.86 388.5 37.98 383.5 41.72 381.2C45.46 378.8 50.4 379.1 52.75 383.7C71.95 414.2 97.82 440.1 128.3 459.2zM392.2 472.8C388.5 475.1 383.5 474 381.2 470.3C378.8 466.5 379.1 461.6 383.7 459.2C414.2 440.1 440.1 414.2 459.2 383.7C461.6 379.1 466.5 378.8 470.3 381.2C474 383.5 475.1 388.5 472.8 392.2C452.3 424.7 424.7 452.3 392.2 472.8zM256 496C274.4 496 292.3 493.9 309.4 490C313.7 489.1 318 491.8 319 496.1C319.1 500.4 317.3 504.7 312.1 505.6C294.6 509.8 275.6 512 256 512C236.4 512 217.3 509.8 199 505.6C194.7 504.7 192 500.4 192.1 496.1C193.1 491.8 198.3 489.1 202.6 490C219.7 493.9 237.6 496 256 496V496zM160.4 208C160.4 199.2 167.5 192 176.4 192C185.2 192 192.4 199.2 192.4 208C192.4 216.8 185.2 224 176.4 224C167.5 224 160.4 216.8 160.4 208zM352.4 208C352.4 216.8 345.2 224 336.4 224C327.5 224 320.4 216.8 320.4 208C320.4 199.2 327.5 192 336.4 192C345.2 192 352.4 199.2 352.4 208zM328 344C332.4 344 336 347.6 336 352C336 356.4 332.4 360 328 360H184C179.6 360 176 356.4 176 352C176 347.6 179.6 344 184 344H328z"/>
</>],

]);

const FaceDotted: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceDotted.displayName = "FaceDotted";

export default FaceDotted;