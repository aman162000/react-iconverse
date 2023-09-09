
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 288C183.2 288 176 295.2 176 304V315.3C190.1 321.5 200 335.6 200 352C200 374.1 182.1 392 160 392C137.9 392 120 374.1 120 352C120 335.6 129.9 321.5 144 315.3V304C144 277.5 165.5 256 192 256H240V160H196.7C190.5 174.1 176.4 184 160 184C137.9 184 120 166.1 120 144C120 121.9 137.9 104 160 104C176.4 104 190.5 113.9 196.7 128H240V56H272V128H320C346.5 128 368 149.5 368 176V187.3C382.1 193.5 392 207.6 392 224C392 246.1 374.1 264 352 264C329.9 264 312 246.1 312 224C312 207.6 321.9 193.5 336 187.3V176C336 167.2 328.8 160 320 160H272V352H339.3C345.5 337.9 359.6 328 376 328C398.1 328 416 345.9 416 368C416 390.1 398.1 408 376 408C359.6 408 345.5 398.1 339.3 384H272V456H240V288H192zM160 160C168.8 160 176 152.8 176 144C176 135.2 168.8 128 160 128C151.2 128 144 135.2 144 144C144 152.8 151.2 160 160 160zM160 368C168.8 368 176 360.8 176 352C176 343.2 168.8 336 160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368zM368 224C368 215.2 360.8 208 352 208C343.2 208 336 215.2 336 224C336 232.8 343.2 240 352 240C360.8 240 368 232.8 368 224zM376 384C384.8 384 392 376.8 392 368C392 359.2 384.8 352 376 352C367.2 352 360 359.2 360 368C360 376.8 367.2 384 376 384z"/><path className="fa-secondary" d="M184 0C214.9 0 240 25.07 240 56V128H196.7C190.5 113.9 176.4 104 160 104C137.9 104 120 121.9 120 144C120 166.1 137.9 184 160 184C176.4 184 190.5 174.1 196.7 160H240V256H192C165.5 256 144 277.5 144 304V315.3C129.9 321.5 120 335.6 120 352C120 374.1 137.9 392 160 392C182.1 392 200 374.1 200 352C200 335.6 190.1 321.5 176 315.3V304C176 295.2 183.2 288 192 288H240V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V384H339.3C345.5 398.1 359.6 408 376 408C398.1 408 416 390.1 416 368C416 345.9 398.1 328 376 328C359.6 328 345.5 337.9 339.3 352H272V160H320C328.8 160 336 167.2 336 176V187.3C321.9 193.5 312 207.6 312 224C312 246.1 329.9 264 352 264C374.1 264 392 246.1 392 224C392 207.6 382.1 193.5 368 187.3V176C368 149.5 346.5 128 320 128H272V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93z"/>
</>],
['light',<>
	<path d="M122.7 471.1C121.8 471.1 120.9 472 120 472C71.4 472 32 432.6 32 384C32 376.4 32.97 369 34.79 361.1C13.56 344.4 0 317.8 0 288C0 262.9 9.646 240 25.4 222.1C24.48 218.1 24 213.1 24 208C24 178.4 40.12 152.5 64.04 138.7C64.01 137.8 64 136.9 64 136C64 102.4 84.73 73.63 114.1 61.79C122.3 26.37 154.1 0 192 0C218.2 0 241.4 12.57 256 31.99C270.6 12.57 293.8 0 320 0C357.9 0 389.7 26.37 397.9 61.79C427.3 73.63 448 102.4 448 136C448 136.9 447.1 137.8 447.1 138.7C471.9 152.5 488 178.4 488 208C488 213.1 487.5 218.1 486.6 222.1C502.4 240 512 262.9 512 288C512 317.8 498.4 344.4 477.2 361.1C479 369 480 376.4 480 384C480 432.6 440.6 472 392 472C391.1 472 390.2 471.1 389.3 471.1C375.5 495.9 349.6 512 320 512C293.8 512 270.6 499.4 256 480C241.4 499.4 218.2 512 192 512C162.4 512 136.5 495.9 122.7 471.1zM192 32C167 32 146.5 51.08 144.2 75.44L143.2 86.69L132.2 89.46C111.4 94.71 96 113.6 96 136C96 139.1 96.3 142.2 96.87 145.2L99.41 158.3L86.87 163.1C68.79 170 55.1 187.6 55.1 208C55.1 213.2 56.84 218.3 58.37 222.1L61.65 232.1L53.74 239.9C40.38 251.7 31.1 268.9 31.1 288C31.1 310.9 44.01 331 62.16 342.3L73.75 349.6L68.42 362.2C65.58 368.8 63.1 376.2 63.1 384C63.1 414.9 89.07 440 119.1 440C123.3 440 126.5 439.7 129.5 439.2L142.5 436.1L147.2 449.2C154.1 467.3 171.6 480 191.1 480C218.5 480 239.1 458.5 239.1 432V304H191.1C184.7 304 178.5 308.9 176.6 315.6C190.4 321.9 199.1 335.8 199.1 352C199.1 374.1 182.1 392 159.1 392C137.9 392 119.1 374.1 119.1 352C119.1 335.5 129.1 321.3 144.2 315.2C146.6 290.1 167.1 272 191.1 272H239.1V160H212.7C206.5 174.1 192.4 184 175.1 184C153.9 184 135.1 166.1 135.1 144C135.1 121.9 153.9 104 175.1 104C192.4 104 206.5 113.9 212.7 128H239.1V80C239.1 53.49 218.5 32 191.1 32L192 32zM272 352H331.3C337.5 337.9 351.6 328 368 328C390.1 328 408 345.9 408 368C408 390.1 390.1 408 368 408C351.6 408 337.5 398.1 331.3 384H272V432C272 458.5 293.5 480 320 480C340.4 480 357.9 467.2 364.8 449.2L369.5 436.1L382.5 439.2C385.5 439.7 388.7 440 392 440C422.9 440 448 414.9 448 384C448 376.2 446.4 368.8 443.6 362.2L438.2 349.6L449.8 342.3C467.1 331 480 310.9 480 287.1C480 268.9 471.6 251.7 458.3 239.9L450.3 232.1L453.6 222.1C455.2 218.3 456 213.2 456 207.1C456 187.6 443.2 170 425.1 163.1L412.6 158.3L415.1 145.2C415.7 142.2 416 139.1 416 135.1C416 113.6 400.6 94.71 379.8 89.46L368.8 86.69L367.8 75.44C365.5 51.08 344.1 31.1 320 31.1C293.5 31.1 272 53.49 272 79.1V127.1H320C346.5 127.1 368 149.5 368 175.1V187.3C382.1 193.5 392 207.6 392 223.1C392 246.1 374.1 263.1 352 263.1C329.9 263.1 312 246.1 312 223.1C312 207.6 321.9 193.5 336 187.3V175.1C336 167.2 328.8 159.1 320 159.1H272L272 352zM176 160C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128C167.2 128 160 135.2 160 144C160 152.8 167.2 160 176 160zM160 368C168.8 368 176 360.8 176 352C176 343.2 168.8 336 160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368zM368 224C368 215.2 360.8 208 352 208C343.2 208 336 215.2 336 224C336 232.8 343.2 240 352 240C360.8 240 368 232.8 368 224zM368 384C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352C359.2 352 352 359.2 352 368C352 376.8 359.2 384 368 384z"/>
</>],
['regular',<>
	<path d="M32 376C32 375.5 32 374.9 32.01 374.4C12.24 354.2 0 326.6 0 295.1C0 268.2 10.12 242.8 26.84 223.3C24.99 215.8 24 208 24 199.1C24 167.4 40.26 138.6 65.13 121.2C69.59 92.34 86.91 67.74 111.1 53.41C124.5 22 155.7 0 192 0C217.2 0 239.1 10.61 256 27.6C272 10.61 294.8 0 320 0C356.3 0 387.5 22 400.9 53.41C425.1 67.74 442.4 92.34 446.9 121.2C471.7 138.6 488 167.4 488 199.1C488 208 487 215.8 485.2 223.3C501.9 242.8 512 268.2 512 295.1C512 326.6 499.8 354.2 479.1 374.4C479.1 374.7 479.1 374.9 479.1 375.2C480 375.5 480 375.7 480 376C480 423.3 445.9 462.5 400.9 470.5C384.5 495.5 356.2 512 324 512C297 512 272.8 500.4 256 481.1C239.2 500.4 214.1 512 188 512C155.8 512 127.5 495.5 111.1 470.5C66.14 462.5 32 423.3 32 376zM232 287.1H192C183.2 287.1 176 295.2 176 303.1V315.3C190.1 321.5 200 335.6 200 352C200 374.1 182.1 392 160 392C137.9 392 120 374.1 120 352C120 335.6 129.9 321.5 144 315.3V303.1C144 277.5 165.5 255.1 192 255.1H232V159.1H212.7C206.5 174.1 192.4 183.1 176 183.1C153.9 183.1 136 166.1 136 143.1C136 121.9 153.9 103.1 176 103.1C192.4 103.1 206.5 113.9 212.7 127.1H232V87.1C232 65.91 214.1 47.1 192 47.1C169.9 47.1 152 65.91 152 87.1L152 88.66C131.3 92.13 115.2 108.8 112.4 129.7C112.1 131.8 112 133.9 112 135.1C112 141.7 112.1 147.2 114.8 152.3C107 153.1 99.77 155.8 93.53 159.9C81.99 167.6 73.95 180.1 72.31 194.5C72.1 196.3 72 198.2 72 199.1C72 214.5 78.47 227.6 88.69 236.4C73.18 242.4 60.62 254.4 53.74 269.5C50.05 277.6 47.1 286.5 47.1 296C47.1 319.9 61.12 340.8 80.55 351.8C82.08 352.6 83.65 353.4 85.25 354.2C84.65 355.3 84.1 356.5 83.59 357.7C81.28 363.4 80 369.5 80 376C80 397.8 94.59 416.3 114.6 422.1C118.8 423.3 123.3 424 128 424C133.6 424 139 423 144 421.3C144.3 430.8 147.6 439.6 153 446.7C161.1 457.2 173.7 464 188 464C210.1 464 229.8 446.4 231.8 424H232L232 287.1zM320 47.1C297.9 47.1 280 65.91 280 87.1V127.1H320C346.5 127.1 368 149.5 368 175.1V187.3C382.1 193.5 392 207.6 392 223.1C392 246.1 374.1 263.1 352 263.1C329.9 263.1 312 246.1 312 223.1C312 207.6 321.9 193.5 336 187.3V175.1C336 167.2 328.8 159.1 320 159.1H280V319.1H331.3C337.5 305.9 351.6 295.1 368 295.1C390.1 295.1 408 313.9 408 336C408 358.1 390.1 376 368 376C351.6 376 337.5 366.1 331.3 352H280V424H280.2C282.2 446.4 301 464 324 464C338.3 464 350.9 457.2 358.1 446.7C364.4 439.6 367.7 430.8 367.1 421.3C372.1 423 378.4 424 384 424C388.7 424 393.2 423.3 397.4 422.1C417.4 416.3 432 397.8 432 376C432 369.5 430.7 363.4 428.4 357.7C427.9 356.5 427.4 355.3 426.8 354.2C428.4 353.4 429.9 352.6 431.4 351.8C450.9 340.8 464 319.9 464 296C464 286.5 461.9 277.6 458.3 269.5C451.4 254.4 438.8 242.4 423.3 236.4C433.5 227.6 440 214.5 440 199.1C440 198.2 439.9 196.3 439.7 194.5C438.1 180.1 430 167.6 418.5 159.9C412.2 155.8 404.1 153.1 397.2 152.3C399 147.2 400 141.7 400 135.1C400 133.9 399.9 131.8 399.6 129.7C396.8 108.8 380.7 92.13 359.1 88.66L360 88C360 65.91 342.1 48 320 48L320 47.1zM176 159.1C184.8 159.1 192 152.8 192 143.1C192 135.2 184.8 127.1 176 127.1C167.2 127.1 160 135.2 160 143.1C160 152.8 167.2 159.1 176 159.1zM160 368C168.8 368 176 360.8 176 352C176 343.2 168.8 336 160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368zM368 223.1C368 215.2 360.8 207.1 352 207.1C343.2 207.1 336 215.2 336 223.1C336 232.8 343.2 239.1 352 239.1C360.8 239.1 368 232.8 368 223.1zM368 352C376.8 352 384 344.8 384 336C384 327.2 376.8 319.1 368 319.1C359.2 319.1 352 327.2 352 336C352 344.8 359.2 352 368 352z"/>
</>],
['solid',<>
	<path d="M184 0C214.9 0 240 25.07 240 56V128H212.7C206.5 113.9 192.4 104 176 104C153.9 104 136 121.9 136 144C136 166.1 153.9 184 176 184C192.4 184 206.5 174.1 212.7 160H240V256H192C165.5 256 144 277.5 144 304V315.3C129.9 321.5 120 335.6 120 352C120 374.1 137.9 392 160 392C182.1 392 200 374.1 200 352C200 335.6 190.1 321.5 176 315.3V304C176 295.2 183.2 288 192 288H240V456C240 486.9 214.9 512 184 512C155.1 512 131.3 490.1 128.3 461.9C123.1 463.3 117.6 464 112 464C76.65 464 48 435.3 48 400C48 392.6 49.27 385.4 51.59 378.8C21.43 367.4 0 338.2 0 304C0 272.1 18.71 244.5 45.77 231.7C37.15 220.8 32 206.1 32 192C32 161.3 53.59 135.7 82.41 129.4C80.84 123.9 80 118 80 112C80 82.06 100.6 56.92 128.3 49.93C131.3 21.86 155.1 0 184 0zM144 352C144 343.2 151.2 336 160 336C168.8 336 176 343.2 176 352C176 360.8 168.8 368 160 368C151.2 368 144 360.8 144 352zM176 128C184.8 128 192 135.2 192 144C192 152.8 184.8 160 176 160C167.2 160 160 152.8 160 144C160 135.2 167.2 128 176 128zM383.7 49.93C411.4 56.92 432 82.06 432 112C432 118 431.2 123.9 429.6 129.4C458.4 135.7 480 161.3 480 192C480 206.1 474.9 220.8 466.2 231.7C493.3 244.5 512 272.1 512 304C512 338.2 490.6 367.4 460.4 378.8C462.7 385.4 464 392.6 464 400C464 435.3 435.3 464 400 464C394.4 464 388.9 463.3 383.7 461.9C380.7 490.1 356.9 512 328 512C297.1 512 272 486.9 272 456V384H331.3C337.5 398.1 351.6 408 368 408C390.1 408 408 390.1 408 368C408 345.9 390.1 328 368 328C351.6 328 337.5 337.9 331.3 352H272V160H320C328.8 160 336 167.2 336 176V187.3C321.9 193.5 312 207.6 312 224C312 246.1 329.9 264 352 264C374.1 264 392 246.1 392 224C392 207.6 382.1 193.5 368 187.3V176C368 149.5 346.5 128 320 128H272V56C272 25.07 297.1 0 328 0C356.9 0 380.7 21.86 383.7 49.93zM368 224C368 232.8 360.8 240 352 240C343.2 240 336 232.8 336 224C336 215.2 343.2 208 352 208C360.8 208 368 215.2 368 224zM384 368C384 376.8 376.8 384 368 384C359.2 384 352 376.8 352 368C352 359.2 359.2 352 368 352C376.8 352 384 359.2 384 368z"/>
</>],
['thin',<>
	<path d="M137.9 48.28C144.1 20.53 170.1 0 200 0C224.1 0 245.1 13.32 256 32.99C266.9 13.32 287.9 0 312 0C341.9 0 367 20.53 374.1 48.28C406.6 51.33 432 78.7 432 112C432 118.7 430.1 125.1 429.1 131.1C458.6 140.2 480 167.6 480 200C480 212.4 476.9 224.1 471.3 234.3C495.6 248 512 274.1 512 304C512 337.3 491.6 365.9 462.6 377.9C463.5 382.5 464 387.2 464 392C464 431.8 431.8 464 392 464C388.3 464 384.8 463.7 381.2 463.2C372.1 491.4 346.9 512 316 512C290 512 267.4 497.4 256 476C244.5 497.4 221.1 512 196 512C165.1 512 139 491.4 130.8 463.2C127.2 463.7 123.7 464 120 464C80.24 464 48 431.8 48 392C48 387.2 48.47 382.5 49.38 377.9C20.39 365.9 0 337.3 0 304C0 274.1 16.41 248 40.69 234.3C35.15 224.1 32 212.4 32 200C32 167.6 53.44 140.2 82.91 131.1C81.02 125.1 80 118.7 80 112C80 78.7 105.4 51.33 137.9 48.28V48.28zM152.5 57.14L151.5 64.04L144 64C117.5 64 96 85.49 96 112C96 119.7 97.78 126.9 100.1 133.3L105.8 142.1L95.05 144.7C68.38 148.1 47.1 172.1 47.1 200C47.1 212.3 51.95 223.6 58.66 232.9L64.59 241L55.28 244.9C32.19 254.6 15.1 277.4 15.1 304C15.1 332.8 35.04 357.2 61.25 365.2L68.95 367.6L66.54 375.3C64.89 380.5 63.1 386.2 63.1 392C63.1 422.9 89.07 448 119.1 448C125.1 448 130 447.3 134.7 446.1L143.3 443.7L144.7 452.5C148.7 477.2 170.2 496 195.1 496C223.6 496 246.1 474.6 247.9 447.5L247.1 445.7V288H191.1C178.7 288 167.1 298.7 167.1 312V321C181.8 324.6 191.1 337.1 191.1 352C191.1 369.7 177.7 384 159.1 384C142.3 384 127.1 369.7 127.1 352C127.1 337.1 138.2 324.6 151.1 321V312C151.1 289.9 169.9 272 191.1 272H247.1V152H206.1C203.4 165.8 190.9 176 175.1 176C158.3 176 143.1 161.7 143.1 144C143.1 126.3 158.3 112 175.1 112C190.9 112 203.4 122.2 206.1 136H247.1V64C247.1 37.49 226.5 16 199.1 16C175.8 16 155.8 33.88 152.5 57.14H152.5zM264 152V360H337C340.6 346.2 353.1 336 368 336C385.7 336 400 350.3 400 368C400 385.7 385.7 400 368 400C353.1 400 340.6 389.8 337 376H264V445.7L264.1 447.5C265.9 474.6 288.4 496 316 496C341.8 496 363.3 477.2 367.3 452.5L368.7 443.7L377.3 446.1C381.1 447.3 386.9 448 392 448C422.9 448 448 422.9 448 392C448 386.2 447.1 380.5 445.5 375.3L443 367.6L450.7 365.2C476.1 357.2 496 332.8 496 304C496 277.4 479.8 254.6 456.7 244.9L447.4 241L453.3 232.9C460 223.6 464 212.3 464 200C464 172.1 443.6 148.1 416.1 144.7L406.2 142.1L411 133.3C414.2 126.9 416 119.7 416 112C416 85.49 394.5 64 368 64L360.5 64.04L359.5 57.14C356.2 33.88 336.2 16 312 16C285.5 16 264 37.49 264 64V136H320C342.1 136 360 153.9 360 176V193C373.8 196.6 384 209.1 384 224C384 241.7 369.7 256 352 256C334.3 256 320 241.7 320 224C320 209.1 330.2 196.6 344 193V176C344 162.7 333.3 152 320 152H264zM176 160C184.8 160 192 152.8 192 144C192 135.2 184.8 128 176 128C167.2 128 160 135.2 160 144C160 152.8 167.2 160 176 160zM160 368C168.8 368 176 360.8 176 352C176 343.2 168.8 336 160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368zM368 224C368 215.2 360.8 208 352 208C343.2 208 336 215.2 336 224C336 232.8 343.2 240 352 240C360.8 240 368 232.8 368 224zM368 384C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352C359.2 352 352 359.2 352 368C352 376.8 359.2 384 368 384z"/>
</>],

]);

const BrainCircuit: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BrainCircuit.displayName = "BrainCircuit";

export default BrainCircuit;
