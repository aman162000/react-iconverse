
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M164.1 166.3C170.7 167.5 180.7 169.5 185.1 170.7C195.8 173.5 202.2 184.5 199.3 195.1C196.5 205.8 185.5 212.2 174.9 209.3C171 208.3 157.5 205.7 153.1 204.1C140.9 203.1 130.1 204.7 124.5 207.6C118.2 210.4 116.7 213.7 116.3 215.7C115.7 219.1 116.3 220.3 116.5 220.7C116.7 221.2 117.5 222.4 120.1 224.2C126.2 228.4 135.8 231.4 149.1 235.7L150.8 235.9C162.9 239.6 179.1 244.4 191.2 253.3C197.9 258.1 204.2 264.7 208.1 273.7C212.1 282.8 212.9 292.8 211.1 303.2C207.8 322.2 195.2 335.2 179.4 341.9C174.6 343.1 169.4 345.5 164.1 346.5V352C164.1 363.1 155.1 372.1 143.1 372.1C132.9 372.1 123.9 363.1 123.9 352V345.6C114.4 343.4 101.1 339.2 94.11 336.5C92.39 335.9 90.89 335.4 89.68 334.1C79.2 331.5 73.53 320.2 77.02 309.7C80.51 299.2 91.84 293.5 102.3 297C104.3 297.7 106.5 298.4 108.7 299.2C118.2 302.4 128.9 306 134.9 307C147.7 309 157.6 307.7 163.7 305.1C169.2 302.8 171.1 299.8 171.7 296.3C172.4 292.3 171.8 290.5 171.4 289.7C171.1 288.8 170.2 287.4 167.7 285.6C161.8 281.3 152.4 278.2 138.4 273.9L136.2 273.3C124.5 269.8 109.2 265.2 97.62 257.3C90.1 252.8 84.47 246.6 80.32 237.8C76.08 228.9 75.14 219 76.9 208.8C80.07 190.5 93.06 177.9 108 171.1C112.1 168.9 118.3 167.2 123.9 166V160C123.9 148.9 132.9 139.9 143.1 139.9C155.1 139.9 164.1 148.9 164.1 160L164.1 166.3zM495.1 192C504.8 192 511.1 199.2 511.1 208C511.1 216.8 504.8 224 495.1 224H271.1C263.2 224 255.1 216.8 255.1 208C255.1 199.2 263.2 192 271.1 192H495.1z"/><path className="fa-secondary" d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"/>
</>],
['light',<>
	<path d="M464 288C472.8 288 480 295.2 480 304C480 312.8 472.8 320 464 320H272C263.2 320 256 312.8 256 304C256 295.2 263.2 288 272 288H464zM256 208C256 199.2 263.2 192 272 192H464C472.8 192 480 199.2 480 208C480 216.8 472.8 224 464 224H272C263.2 224 256 216.8 256 208zM159.1 169.6C165.9 170.6 178.1 173.2 184.1 174.5C192.7 176.8 197.7 185.6 195.5 194.1C193.2 202.7 184.4 207.7 175.9 205.5C171.9 204.4 158.2 201.7 153.8 201C140.9 199 130.1 200.6 122.9 203.9C115.7 207.2 112.1 211.4 112.4 214.1C111.7 219.1 112.3 221.2 112.9 222.4C113.5 223.8 114.8 225.5 117.8 227.5C124.6 232.1 134.9 235.3 148.8 239.5L149.4 239.7C161.7 243.4 177.3 248.1 188.9 256.5C195.1 261.1 200.9 267.1 204.5 275.3C208.1 283.6 208.8 292.8 207.2 302.5C204.1 319.1 192.6 331.9 177.9 338.2C172.3 340.6 166.3 342.2 160 343.1V352C160 360.8 152.8 368 144 368C135.2 368 128 360.8 128 352V342.4C118.6 340.6 104.4 335.8 95.55 332.7C93.78 332.1 92.22 331.6 90.95 331.2C82.56 328.4 78.03 319.3 80.82 310.9C83.61 302.6 92.67 298 101.1 300.8C102.1 301.5 105.1 302.2 107.2 302.9C116.7 306.1 127.9 309.9 134.3 310.1C147.6 313.1 158.3 311.8 165.3 308.8C171.8 306 174.7 302.1 175.6 297C176.4 292.4 175.8 289.7 175.1 288.1C174.4 286.4 172.9 284.5 170 282.4C163.5 277.6 153.3 274.3 139.6 270.1L137.5 269.5C125.7 265.9 110.9 261.5 99.87 254C93.65 249.8 87.7 244 83.93 236.1C80.1 228 79.2 219 80.85 209.5C83.73 192.8 95.57 181.2 109.7 174.8C115.3 172.2 121.5 170.4 128 169.3V160C128 151.2 135.2 144 144 144C152.8 144 160 151.2 160 160L159.1 169.6zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM32 128V384C32 401.7 46.33 416 64 416H512C529.7 416 544 401.7 544 384V128C544 110.3 529.7 96 512 96H64C46.33 96 32 110.3 32 128z"/>
</>],
['regular',<>
	<path d="M456 272C469.3 272 480 282.7 480 296C480 309.3 469.3 320 456 320H280C266.7 320 256 309.3 256 296C256 282.7 266.7 272 280 272H456zM256 200C256 186.7 266.7 176 280 176H456C469.3 176 480 186.7 480 200C480 213.3 469.3 224 456 224H280C266.7 224 256 213.3 256 200zM180.1 166.3C186.7 167.5 196.7 169.5 201.1 170.7C211.8 173.5 218.2 184.5 215.3 195.1C212.5 205.8 201.5 212.2 190.9 209.3C187 208.3 173.5 205.7 169.1 204.1C156.9 203.1 146.1 204.7 140.5 207.6C134.2 210.4 132.7 213.7 132.3 215.7C131.7 219.1 132.3 220.3 132.5 220.7C132.7 221.2 133.5 222.4 136.1 224.2C142.2 228.4 151.8 231.4 165.1 235.7L166.8 235.9C178.9 239.6 195.1 244.4 207.2 253.3C213.9 258.1 220.2 264.7 224.1 273.7C228.1 282.8 228.9 292.8 227.1 303.2C223.8 322.2 211.2 335.2 195.4 341.9C190.6 343.1 185.4 345.5 180.1 346.5V352C180.1 363.1 171.1 372.1 159.1 372.1C148.9 372.1 139.9 363.1 139.9 352V345.6C130.4 343.4 117.1 339.2 110.1 336.5C108.4 335.9 106.9 335.4 105.7 334.1C95.2 331.5 89.53 320.2 93.02 309.7C96.51 299.2 107.8 293.5 118.3 297C120.3 297.7 122.5 298.4 124.7 299.2C134.2 302.4 144.9 306 150.9 307C163.7 309 173.6 307.7 179.7 305.1C185.2 302.8 187.1 299.8 187.7 296.3C188.4 292.3 187.8 290.5 187.4 289.7C187.1 288.8 186.2 287.4 183.7 285.6C177.8 281.3 168.4 278.2 154.4 273.9L152.2 273.3C140.5 269.8 125.2 265.2 113.6 257.3C107 252.8 100.5 246.6 96.32 237.8C92.08 228.9 91.15 219 92.91 208.8C96.07 190.5 109.1 177.9 124 171.1C128.1 168.9 134.3 167.2 139.9 166V159.1C139.9 148.9 148.9 139.9 160 139.9C171.1 139.9 180.1 148.9 180.1 159.1L180.1 166.3zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM48 128V384C48 392.8 55.16 400 64 400H512C520.8 400 528 392.8 528 384V128C528 119.2 520.8 112 512 112H64C55.16 112 48 119.2 48 128z"/>
</>],
['solid',<>
	<path d="M512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM272 192C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224H496C504.8 224 512 216.8 512 208C512 199.2 504.8 192 496 192H272zM272 320H496C504.8 320 512 312.8 512 304C512 295.2 504.8 288 496 288H272C263.2 288 256 295.2 256 304C256 312.8 263.2 320 272 320zM164.1 160C164.1 148.9 155.1 139.9 143.1 139.9C132.9 139.9 123.9 148.9 123.9 160V166C118.3 167.2 112.1 168.9 108 171.1C93.06 177.9 80.07 190.5 76.91 208.8C75.14 219 76.08 228.9 80.32 237.8C84.47 246.6 91 252.8 97.63 257.3C109.2 265.2 124.5 269.8 136.2 273.3L138.4 273.9C152.4 278.2 161.8 281.3 167.7 285.6C170.2 287.4 171.1 288.8 171.4 289.7C171.8 290.5 172.4 292.3 171.7 296.3C171.1 299.8 169.2 302.8 163.7 305.1C157.6 307.7 147.7 309 134.9 307C128.9 306 118.2 302.4 108.7 299.2C106.5 298.4 104.3 297.7 102.3 297C91.84 293.5 80.51 299.2 77.02 309.7C73.53 320.2 79.2 331.5 89.68 334.1C90.89 335.4 92.39 335.9 94.11 336.5C101.1 339.2 114.4 343.4 123.9 345.6V352C123.9 363.1 132.9 372.1 143.1 372.1C155.1 372.1 164.1 363.1 164.1 352V346.5C169.4 345.5 174.6 343.1 179.4 341.9C195.2 335.2 207.8 322.2 211.1 303.2C212.9 292.8 212.1 282.8 208.1 273.7C204.2 264.7 197.9 258.1 191.2 253.3C179.1 244.4 162.9 239.6 150.8 235.9L149.1 235.7C135.8 231.4 126.2 228.4 120.1 224.2C117.5 222.4 116.7 221.2 116.5 220.7C116.3 220.3 115.7 219.1 116.3 215.7C116.7 213.7 118.2 210.4 124.5 207.6C130.1 204.7 140.9 203.1 153.1 204.1C157.5 205.7 171 208.3 174.9 209.3C185.5 212.2 196.5 205.8 199.3 195.1C202.2 184.5 195.8 173.5 185.1 170.7C180.7 169.5 170.7 167.5 164.1 166.3L164.1 160z"/>
</>],
['thin',<>
	<path d="M472 304C476.4 304 480 307.6 480 312C480 316.4 476.4 320 472 320H264C259.6 320 256 316.4 256 312C256 307.6 259.6 304 264 304H472zM256 216C256 211.6 259.6 208 264 208H472C476.4 208 480 211.6 480 216C480 220.4 476.4 224 472 224H264C259.6 224 256 220.4 256 216zM151.1 176.6C153.8 176.8 155.6 177 157.5 177.3C162.3 178.1 176.9 180.9 182.1 182.3C186.3 183.4 188.9 187.8 187.7 192.1C186.6 196.3 182.2 198.9 177.9 197.7C173.5 196.6 159.5 193.8 155 193.1C140.9 190.9 128.5 192.6 119.6 196.6C110.7 200.7 105.7 206.8 104.5 213.6C103.6 219 104.2 222.9 105.6 225.8C107 228.8 109.5 231.6 113.3 234.1C121.3 239.5 132.9 243 146.3 247.1L146.5 247.1C159.2 250.1 173.7 255.4 184.2 262.1C189.6 266.9 194.3 271.9 197.1 278.5C199.1 285.1 200.7 292.7 199.3 301.1C196.8 315.5 187.4 325.4 174.7 330.9C167.1 333.8 160.3 335.4 151.1 335.9V352C151.1 356.4 148.4 360 143.1 360C139.6 360 135.1 356.4 135.1 352V335.4C134.2 335.2 132.4 334.1 130.5 334.7L130.5 334.7C121.9 333.3 107.8 328.5 98.43 325.3C96.57 324.6 94.89 324.1 93.47 323.6C89.28 322.2 87.01 317.7 88.41 313.5C89.81 309.3 94.34 307 98.53 308.4C100.3 308.1 102.2 309.7 104.3 310.4C113.8 313.6 125.9 317.7 133 318.9C147.3 321.1 159.6 319.9 168.4 316.2C176.1 312.5 182.1 306.5 183.5 298.4C184.5 292.5 183.9 288.2 182.4 284.9C181 281.6 178.5 278.6 174.8 275.9C166.9 270.2 155.3 266.5 141.9 262.5L140.2 261.1C128 258.3 114.4 254.2 104.4 247.4C98.95 243.7 94.15 238.1 91.16 232.7C88.15 226.3 87.32 219 88.73 210.9C91.05 197.5 100.6 187.7 112.1 182.1C119.8 178.1 127.6 177.1 136 176.4V160C136 155.6 139.6 152 144 152C148.4 152 152 155.6 152 160L151.1 176.6zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM16 128V384C16 410.5 37.49 432 64 432H512C538.5 432 560 410.5 560 384V128C560 101.5 538.5 80 512 80H64C37.49 80 16 101.5 16 128z"/>
</>],

]);

const MoneyCheckDollar: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MoneyCheckDollar.displayName = "MoneyCheckDollar";

export default MoneyCheckDollar;
