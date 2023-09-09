
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M296 0C309.3 0 320 10.75 320 24V40C320 40.42 319.1 40.85 319.1 41.27C334.9 45.7 349.2 51.66 362.6 58.94C362.9 58.63 363.2 58.31 363.5 58.01L374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2L453.1 148.5C453.7 148.8 453.4 149.1 453.1 149.4C460.3 162.8 466.3 177.1 470.7 192C471.2 192 471.6 192 472 192H488C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320H472C471.6 320 471.2 319.1 470.7 319.1C466.3 334.9 460.3 349.2 453.1 362.6C453.4 362.9 453.7 363.2 453.1 363.5L465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3L363.5 453.1C363.2 453.7 362.9 453.4 362.6 453.1C349.2 460.3 334.9 466.3 319.1 470.7C319.1 471.2 320 471.6 320 472V488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488V472C192 471.6 192 471.2 192 470.7C177.1 466.3 162.8 460.3 149.4 453.1C149.1 453.4 148.8 453.7 148.5 453.1L137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8L58.01 363.5C58.31 363.2 58.62 362.9 58.94 362.6C51.66 349.2 45.7 334.9 41.27 319.1C40.85 319.1 40.42 320 40 320H24C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192H40C40.42 192 40.85 192 41.27 192C45.7 177.1 51.66 162.8 58.94 149.4C58.62 149.1 58.31 148.8 58.01 148.5L46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.32 127.8 37.32 137.2 46.7L148.5 58.01C148.8 58.31 149.1 58.63 149.4 58.94C162.8 51.66 177.1 45.7 192 41.27C192 40.85 192 40.42 192 40V24C192 10.75 202.7 0 216 0H296zM256 128C185.3 128 128 185.3 128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128z"/><path className="fa-secondary" d="M128 256C128 185.3 185.3 128 256 128C326.7 128 384 185.3 384 256C384 326.7 326.7 384 256 384C185.3 384 128 326.7 128 256zM256 208C269.3 208 280 197.3 280 184C280 170.7 269.3 160 256 160C242.7 160 232 170.7 232 184C232 197.3 242.7 208 256 208zM164.7 226.3C160.6 238.9 167.5 252.5 180.1 256.6C192.7 260.7 206.3 253.8 210.3 241.2C214.4 228.6 207.5 215 194.9 210.9C182.3 206.8 168.8 213.7 164.7 226.3V226.3zM301.7 241.2C305.7 253.8 319.3 260.7 331.9 256.6C344.5 252.5 351.4 238.9 347.3 226.3C343.2 213.7 329.7 206.8 317.1 210.9C304.5 215 297.6 228.6 301.7 241.2V241.2zM312.4 333.7C323.2 325.9 325.5 310.9 317.7 300.1C309.9 289.4 294.9 287 284.2 294.8C273.5 302.6 271.1 317.6 278.9 328.4C286.7 339.1 301.7 341.5 312.4 333.7V333.7zM227.8 294.8C217.1 287 202.1 289.4 194.3 300.1C186.5 310.9 188.8 325.9 199.6 333.7C210.3 341.5 225.3 339.1 233.1 328.4C240.9 317.6 238.5 302.6 227.8 294.8V294.8z"/>
</>],
['light',<>
	<path d="M232 184C232 170.7 242.7 160 256 160C269.3 160 280 170.7 280 184C280 197.3 269.3 208 256 208C242.7 208 232 197.3 232 184zM194.9 210.9C207.5 215 214.4 228.6 210.4 241.2C206.3 253.8 192.7 260.7 180.1 256.6C167.5 252.5 160.6 238.9 164.7 226.3C168.8 213.7 182.3 206.8 194.9 210.9zM317.1 210.9C329.7 206.8 343.2 213.7 347.3 226.3C351.4 238.9 344.5 252.5 331.9 256.6C319.3 260.7 305.7 253.8 301.7 241.2C297.6 228.6 304.5 215 317.1 210.9V210.9zM278.9 328.4C271.1 317.6 273.5 302.6 284.2 294.8C294.9 287 309.9 289.4 317.7 300.1C325.5 310.9 323.2 325.9 312.4 333.7C301.7 341.5 286.7 339.1 278.9 328.4V328.4zM233.1 328.4C225.3 339.1 210.3 341.5 199.6 333.7C188.8 325.9 186.5 310.9 194.3 300.1C202.1 289.4 217.1 287 227.8 294.8C238.5 302.6 240.9 317.6 233.1 328.4V328.4zM416 256C416 344.4 344.4 416 256 416C167.6 416 96 344.4 96 256C96 167.6 167.6 96 256 96C344.4 96 416 167.6 416 256zM256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256C128 326.7 185.3 384 256 384zM183.4 35.59C188.9 14.92 207.7 0 229.8 0H282.2C304.2 0 323.1 14.92 328.6 35.59C339.6 39.22 350.3 43.65 360.5 48.82C379 38.1 402.9 40.86 418.5 56.44L455.6 93.52C471.1 109.1 473.9 132.1 463.2 151.5C468.3 161.7 472.8 172.4 476.4 183.4C497.1 188.9 511.1 207.7 511.1 229.8V282.2C511.1 304.3 497.1 323.1 476.4 328.6C472.8 339.6 468.3 350.3 463.2 360.5C473.9 379 471.1 402.9 455.6 418.5L418.5 455.6C402.9 471.1 379 473.9 360.5 463.2C350.3 468.3 339.6 472.8 328.6 476.4C323.1 497.1 304.2 512 282.2 512H229.8C207.7 512 188.9 497.1 183.4 476.4C172.4 472.8 161.7 468.3 151.5 463.2C132.1 473.9 109.1 471.1 93.51 455.6L56.44 418.5C40.85 402.9 38.09 379 48.82 360.5C43.65 350.3 39.22 339.6 35.59 328.6C14.92 323.1-.0038 304.3-.0038 282.2V229.8C-.0038 207.7 14.92 188.9 35.59 183.4C39.22 172.4 43.65 161.7 48.82 151.5C38.09 132.1 40.85 109.1 56.44 93.52L93.51 56.44C109.1 40.86 132.1 38.1 151.5 48.82C161.7 43.66 172.4 39.22 183.4 35.59L183.4 35.59zM229.8 32C221.5 32 214.6 38.26 213.9 46.46L212.5 60.43L201.9 63.39C186.5 67.72 171.8 73.87 158 81.59L148.5 86.97L137.6 78.03C131.3 72.79 121.1 73.24 116.1 79.07L79.07 116.1C73.24 121.1 72.79 131.3 78.03 137.6L86.97 148.5L81.59 158C73.87 171.8 67.72 186.5 63.39 201.9L60.43 212.5L46.46 213.9C38.26 214.7 31.1 221.5 31.1 229.8V282.2C31.1 290.5 38.26 297.4 46.46 298.1L60.43 299.5L63.39 310.1C67.72 325.5 73.87 340.2 81.59 353.1L86.97 363.5L78.03 374.4C72.79 380.7 73.24 390 79.07 395.9L116.1 432.9C121.1 438.8 131.3 439.2 137.6 433.1L148.5 425L158 430.4C171.8 438.1 186.5 444.3 201.9 448.6L212.5 451.6L213.9 465.5C214.6 473.7 221.5 480 229.8 480H282.2C290.5 480 297.3 473.7 298.1 465.5L299.5 451.6L310 448.6C325.5 444.3 340.2 438.1 353.1 430.4L363.5 425L374.4 433.1C380.7 439.2 390 438.8 395.8 432.9L432.9 395.9C438.8 390 439.2 380.7 433.1 374.4L425 363.5L430.4 353.1C438.1 340.2 444.3 325.5 448.6 310.1L451.6 299.5L465.5 298.1C473.7 297.4 479.1 290.5 479.1 282.2V229.8C479.1 221.5 473.7 214.7 465.5 213.9L451.6 212.5L448.6 201.1C444.3 186.5 438.1 171.8 430.4 158L425 148.5L433.1 137.6C439.2 131.3 438.8 121.1 432.9 116.1L395.8 79.07C390 73.24 380.7 72.8 374.4 78.03L363.5 86.97L353.1 81.59C340.2 73.87 325.5 67.72 310 63.38L299.5 60.43L298.1 46.46C297.3 38.26 290.5 32 282.2 32L229.8 32z"/>
</>],
['regular',<>
	<path d="M384 256C384 326.7 326.7 384 255.1 384C185.3 384 127.1 326.7 127.1 256C127.1 185.3 185.3 128 255.1 128C326.7 128 384 185.3 384 256zM255.1 160C242.7 160 231.1 170.7 231.1 184C231.1 197.3 242.7 208 255.1 208C269.3 208 280 197.3 280 184C280 170.7 269.3 160 255.1 160zM210.3 241.2C214.4 228.6 207.5 215 194.9 210.9C182.3 206.8 168.8 213.7 164.7 226.3C160.6 238.9 167.5 252.5 180.1 256.6C192.7 260.7 206.3 253.8 210.3 241.2V241.2zM347.3 226.3C343.2 213.7 329.7 206.8 317.1 210.9C304.5 215 297.6 228.6 301.7 241.2C305.7 253.8 319.3 260.7 331.9 256.6C344.5 252.5 351.4 238.9 347.3 226.3V226.3zM284.2 294.8C273.5 302.6 271.1 317.6 278.9 328.4C286.7 339.1 301.7 341.5 312.4 333.7C323.2 325.9 325.5 310.9 317.7 300.1C309.9 289.4 294.9 287 284.2 294.8V294.8zM199.6 333.7C210.3 341.5 225.3 339.1 233.1 328.4C240.9 317.6 238.5 302.6 227.8 294.8C217.1 287 202.1 289.4 194.3 300.1C186.5 310.9 188.8 325.9 199.6 333.7V333.7zM283.1 .001C310 .001 333.4 16.72 342.7 40.75C344.1 41.32 345.5 41.9 346.9 42.49C370.5 32.11 398.8 36.79 417.9 55.84L456.2 94.12C475.2 113.2 479.9 141.5 469.5 165.1C470.1 166.5 470.7 167.9 471.2 169.3C495.3 178.7 512 201.1 512 228.9V283.1C512 310 495.3 333.4 471.2 342.7C470.7 344.1 470.1 345.5 469.5 346.9C479.9 370.5 475.2 398.8 456.2 417.9L417.9 456.2C398.8 475.2 370.5 479.9 346.9 469.5C345.5 470.1 344.1 470.7 342.7 471.2C333.4 495.3 310 512 283.1 512H228.9C201.1 512 178.6 495.3 169.3 471.2C167.9 470.7 166.5 470.1 165.1 469.5C141.5 479.9 113.2 475.2 94.13 456.2L55.84 417.9C36.79 398.8 32.11 370.5 42.48 346.9C41.9 345.5 41.32 344.1 40.76 342.7C16.72 333.4 0 310 0 283.1V228.9C0 201.1 16.72 178.7 40.75 169.3C41.32 167.9 41.9 166.5 42.49 165.1C32.11 141.5 36.79 113.2 55.84 94.12L94.13 55.83C113.2 36.78 141.5 32.1 165.1 42.48C166.5 41.89 167.9 41.32 169.3 40.76C178.6 16.72 201.1 0 228.9 0L283.1 .001zM211.2 76.86L196.9 81.68C189.2 84.29 181.7 87.4 174.5 90.97L161 97.64L149.2 88.43C142.8 83.52 133.8 84.07 128.1 89.77L89.78 128.1C84.07 133.8 83.52 142.8 88.44 149.2L97.64 161L90.98 174.5C87.4 181.7 84.29 189.2 81.67 196.9L76.86 211.2L61.97 213.1C54.01 214.1 47.1 220.9 47.1 228.9V283.1C47.1 291.1 54.01 297.9 61.97 298.9L76.86 300.8L81.67 315.1C84.29 322.8 87.4 330.3 90.98 337.5L97.64 350.1L88.44 362.8C83.52 369.2 84.07 378.2 89.78 383.9L128.1 422.2C133.8 427.9 142.8 428.5 149.2 423.6L161 414.4L174.5 421C181.7 424.6 189.2 427.7 196.9 430.3L211.2 435.1L213.1 450C214.1 457.1 220.9 464 228.9 464H283.1C291.1 464 297.9 457.1 298.9 450L300.8 435.1L315.1 430.3C322.8 427.7 330.3 424.6 337.5 421L350.1 414.4L362.8 423.6C369.2 428.5 378.2 427.9 383.9 422.2L422.2 383.9C427.9 378.2 428.5 369.2 423.6 362.8L414.4 350.1L421 337.5C424.6 330.3 427.7 322.8 430.3 315.1L435.1 300.8L450 298.9C457.1 297.9 464 291.1 464 283.1V228.9C464 220.9 457.1 214.1 450 213.1L435.1 211.2L430.3 196.9C427.7 189.2 424.6 181.7 421 174.5L414.4 161L423.6 149.2C428.5 142.8 427.9 133.8 422.2 128.1L383.9 89.78C378.2 84.07 369.2 83.52 362.8 88.44L350.1 97.64L337.5 90.98C330.3 87.4 322.8 84.29 315.1 81.68L300.8 76.86L298.9 61.97C297.9 54.01 291.1 48 283.1 48H228.9C220.9 48 214.1 54.01 213.1 61.97L211.2 76.86z"/>
</>],
['solid',<>
	<path d="M232 184C232 170.7 242.7 160 256 160C269.3 160 280 170.7 280 184C280 197.3 269.3 208 256 208C242.7 208 232 197.3 232 184zM194.9 210.9C207.5 215 214.4 228.6 210.3 241.2C206.3 253.8 192.7 260.7 180.1 256.6C167.5 252.5 160.6 238.9 164.7 226.3C168.8 213.7 182.3 206.8 194.9 210.9zM317.1 210.9C329.7 206.8 343.2 213.7 347.3 226.3C351.4 238.9 344.5 252.5 331.9 256.6C319.3 260.7 305.7 253.8 301.7 241.2C297.6 228.6 304.5 215 317.1 210.9V210.9zM278.9 328.4C271.1 317.6 273.5 302.6 284.2 294.8C294.9 287 309.9 289.4 317.7 300.1C325.5 310.9 323.1 325.9 312.4 333.7C301.7 341.5 286.7 339.1 278.9 328.4V328.4zM233.1 328.4C225.3 339.1 210.3 341.5 199.6 333.7C188.8 325.9 186.5 310.9 194.3 300.1C202.1 289.4 217.1 287 227.8 294.8C238.5 302.6 240.9 317.6 233.1 328.4V328.4zM320 40C320 40.42 319.1 40.85 319.1 41.27C334.9 45.7 349.2 51.66 362.6 58.94C362.9 58.63 363.2 58.31 363.5 58.01L374.8 46.7C384.2 37.32 399.4 37.32 408.7 46.7L465.3 103.3C474.7 112.6 474.7 127.8 465.3 137.2L453.1 148.5C453.7 148.8 453.4 149.1 453.1 149.4C460.3 162.8 466.3 177.1 470.7 192C471.2 192 471.6 192 472 192H488C501.3 192 512 202.7 512 216V296C512 309.3 501.3 320 488 320H472C471.6 320 471.2 319.1 470.7 319.1C466.3 334.9 460.3 349.2 453.1 362.6C453.4 362.9 453.7 363.2 453.1 363.5L465.3 374.8C474.7 384.2 474.7 399.4 465.3 408.7L408.7 465.3C399.4 474.7 384.2 474.7 374.8 465.3L363.5 453.1C363.2 453.7 362.9 453.4 362.6 453.1C349.2 460.3 334.9 466.3 319.1 470.7C319.1 471.2 320 471.6 320 472V488C320 501.3 309.3 512 296 512H216C202.7 512 192 501.3 192 488V472C192 471.6 192 471.2 192 470.7C177.1 466.3 162.8 460.3 149.4 453.1C149.1 453.4 148.8 453.7 148.5 453.1L137.2 465.3C127.8 474.7 112.6 474.7 103.3 465.3L46.7 408.7C37.32 399.4 37.32 384.2 46.7 374.8L58.01 363.5C58.31 363.2 58.62 362.9 58.94 362.6C51.66 349.2 45.7 334.9 41.27 319.1C40.85 319.1 40.42 320 40 320H24C10.75 320 0 309.3 0 296V216C0 202.7 10.75 192 24 192H40C40.42 192 40.85 192 41.27 192C45.7 177.1 51.66 162.8 58.94 149.4C58.62 149.1 58.31 148.8 58.01 148.5L46.7 137.2C37.32 127.8 37.32 112.6 46.7 103.3L103.3 46.7C112.6 37.32 127.8 37.32 137.2 46.7L148.5 58.01C148.8 58.31 149.1 58.63 149.4 58.94C162.8 51.66 177.1 45.7 192 41.27C192 40.85 192 40.42 192 40V24C192 10.75 202.7 0 216 0H296C309.3 0 320 10.75 320 24V40zM256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256C128 326.7 185.3 384 256 384z"/>
</>],
['thin',<>
	<path d="M239.1 192C239.1 183.2 247.2 176 255.1 176C264.8 176 272 183.2 272 192C272 200.8 264.8 208 255.1 208C247.2 208 239.1 200.8 239.1 192zM200.1 221C208.5 223.7 213.1 232.8 210.3 241.2C207.6 249.6 198.6 254.2 190.2 251.4C181.8 248.7 177.2 239.7 179.9 231.3C182.6 222.9 191.7 218.3 200.1 221zM231.3 317.2C226.1 324.3 216.1 325.9 208.1 320.7C201.8 315.5 200.2 305.5 205.4 298.4C210.6 291.2 220.6 289.6 227.8 294.8C234.9 300 236.5 310 231.3 317.2zM280.7 317.2C275.5 310 277.1 300 284.2 294.8C291.4 289.6 301.4 291.2 306.6 298.4C311.8 305.5 310.2 315.5 303 320.7C295.9 325.9 285.9 324.3 280.7 317.2zM311.9 221C320.3 218.3 329.4 222.9 332.1 231.3C334.8 239.7 330.2 248.7 321.8 251.4C313.4 254.2 304.4 249.6 301.7 241.2C298.9 232.8 303.5 223.7 311.9 221zM400 256C400 335.5 335.5 400 256 400C176.5 400 112 335.5 112 256C112 176.5 176.5 112 256 112C335.5 112 400 176.5 400 256zM256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256C128 326.7 185.3 384 256 384zM187.8 41.51C191.6 17.82 212.1 0 236.5 0H275.5C300.8 0 321.1 19.2 324.5 44.24C335.6 48.12 346.3 52.86 356.6 58.39C376.1 41.9 405.1 43.06 423.3 61.22L450.8 88.74C469.1 107.1 470.1 136.6 453 156.1L451.1 158.3C455.5 167.6 459.2 177.2 462.3 187.1L465.9 187.3C491.9 189 512 210.6 512 236.5V275.5C512 301.4 491.9 322.1 465.9 324.7L459.6 325.1C456.4 333.1 452.8 342.5 448.6 350.8L453 355.9C470.1 375.4 469.1 404.9 450.8 423.3L423.3 450.8C404.9 469.1 375.4 470.1 355.9 453L350.8 448.6C342.5 452.8 333.1 456.4 325.1 459.6L324.7 465.9C322.1 491.9 301.4 512 275.5 512H236.5C210.6 512 189 491.9 187.3 465.9L187.1 462.3C177.2 459.2 167.6 455.5 158.3 451.1L156.1 453C136.6 470.1 107.1 469.1 88.74 450.8L61.22 423.3C43.06 405.1 41.9 376.1 58.39 356.6C52.86 346.3 48.12 335.6 44.24 324.5C19.21 321.9 .001 300.8 .001 275.5V236.5C.001 212.1 17.82 191.6 41.51 187.8C45.28 175.5 50.1 163.5 55.89 152.2C42.07 132.8 44.04 105.9 61.22 88.74L88.74 61.22C105.9 44.04 132.8 42.07 152.2 55.89C163.5 50.1 175.5 45.28 187.8 41.51L187.8 41.51zM236.5 16C218.1 16 204.4 29.61 203.3 47.12L202.8 53.88L197.4 55.4C182.5 59.51 168.4 65.26 155.1 72.43L150.2 75.08L145.6 71.02C132.4 59.46 112.5 60.12 100.1 72.53L72.53 100.1C60.12 112.5 59.46 132.4 71.02 145.6L75.08 150.2L72.43 155.1C65.26 168.4 59.51 182.5 55.4 197.4L53.88 202.8L47.12 203.3C29.61 204.4 16 218.1 16 236.5V275.5C16 293 29.61 307.6 47.12 308.7L56.08 309.3L57.75 314.5C62.16 328.2 67.98 341.3 75.05 353.6L77.91 358.5L71.02 366.4C59.46 379.6 60.12 399.5 72.53 411.9L100.1 439.5C112.5 451.9 132.4 452.5 145.6 440.1L155.8 432L160.6 434.4C172.1 440.2 184.2 444.9 196.8 448.5L202.3 449.1L203.3 464.9C204.4 482.4 218.1 496 236.5 496H275.5C293 496 307.6 482.4 308.7 464.9L309.9 447.8L315 446.1C326.6 442.3 337.7 437.6 348.2 431.9L353.1 429.3L366.4 440.1C379.6 452.5 399.5 451.9 411.9 439.5L439.5 411.9C451.9 399.5 452.5 379.6 440.1 366.4L429.3 353.1L431.9 348.2C437.6 337.7 442.3 326.6 446.1 315L447.8 309.9L464.9 308.7C482.4 307.6 496 293 496 275.5V236.5C496 218.1 482.4 204.4 464.9 203.3L449.1 202.3L448.5 196.8C444.9 184.2 440.2 172.1 434.4 160.6L432 155.8L440.1 145.6C452.5 132.4 451.9 112.5 439.5 100.1L411.9 72.53C399.5 60.12 379.6 59.46 366.4 71.02L358.5 77.91L353.6 75.05C341.3 67.98 328.2 62.16 314.5 57.75L309.3 56.09L308.7 47.12C307.6 29.61 293 15.1 275.5 15.1L236.5 16zM150.8 64.1L145.6 71.02z"/>
</>],

]);

const TireRugged: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TireRugged.displayName = "TireRugged";

export default TireRugged;
