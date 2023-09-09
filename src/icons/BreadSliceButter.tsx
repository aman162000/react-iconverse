
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 176.1C511.6 183.9 509.8 190.6 506.7 196.8C503.5 203 499.2 208.5 493.8 212.9C488.5 217.3 482.3 220.6 475.6 222.5C468.1 224.4 461.1 224.9 455.1 224H448V448C448 456.5 444.6 464.6 438.6 470.6C432.6 476.6 424.5 480 416 480H96C87.51 480 79.37 476.6 73.37 470.6C67.37 464.6 64 456.5 64 448V224H56.9C50.03 224.9 43.04 224.4 36.38 222.5C29.71 220.6 23.51 217.3 18.17 212.9C12.83 208.5 8.457 203 5.33 196.8C2.203 190.6 .3885 183.9 0 176.1C0 112 96 32 256 32C416 32 512 112 512 176.1H512zM333.2 269.2C333.2 260.8 329.9 252.6 323.9 246.6L278.6 201.4C272.6 195.4 264.5 192 256 192C247.5 192 239.4 195.4 233.4 201.4L188.1 246.6C182.1 252.6 178.8 260.8 178.8 269.2C178.8 277.7 182.1 285.9 188.1 291.9L233.4 337.2C239.4 343.2 247.5 346.5 256 346.5C264.5 346.5 272.6 343.2 278.6 337.2L323.9 291.9C329.9 285.9 333.2 277.7 333.2 269.2z"/><path className="fa-secondary" d="M323.9 291.9L278.6 337.2C272.6 343.2 264.5 346.5 255.1 346.5C247.5 346.5 239.4 343.2 233.4 337.2L188.1 291.9C182.1 285.9 178.8 277.7 178.8 269.2C178.8 260.8 182.1 252.6 188.1 246.6L233.4 201.4C239.4 195.4 247.5 192 255.1 192C264.5 192 272.6 195.4 278.6 201.4L323.9 246.6C329.9 252.6 333.2 260.8 333.2 269.2C333.2 277.7 329.9 285.9 323.9 291.9z"/>
</>],
['light',<>
	<path d="M512 192.1C511.8 209.7 504.1 225.8 492.1 237.5C480.1 249.2 464.8 255.7 448 255.6V433.1C447.1 446.2 443.1 457.9 434.5 466.5C425.9 475.1 414.2 479.1 401.1 480H109.1C97.79 479.1 86.1 475.1 77.48 466.5C68.86 457.9 64.01 446.2 64 433.1V255.6C47.22 255.7 31.05 249.2 19.04 237.5C7.044 225.8 .1939 209.7 0 192.1C0 115.2 102.9 32 256 32C409.1 32 512 115.2 512 192.1zM480 192.1C480 140.3 400.2 64 256 64C111.8 64 32 140.3 32 192.1C32 211.5 47.01 224 69.34 224C76.41 224 83.19 226.8 88.19 231.8C93.19 236.8 96 243.6 96 250.7V433.1C96 437.7 97.47 441.3 100.1 443.9C102.7 446.5 106.3 447.1 109.1 448H401.1C403.8 448 405.6 447.6 407.3 446.9C409 446.2 410.6 445.2 411.9 443.9C413.2 442.6 414.2 441 414.9 439.3C415.6 437.6 416 435.8 416 433.1V250.7C416 243.6 418.8 236.8 423.8 231.8C428.8 226.8 435.6 224 442.7 224C464.1 224 480 211.5 480 192.1zM335.2 254C339.7 258.5 343.2 263.8 345.6 269.6C348 275.4 349.3 281.7 349.3 288C349.3 294.3 348 300.6 345.6 306.4C343.2 312.2 339.7 317.5 335.2 321.1L289.1 367.2C285.5 371.7 280.2 375.2 274.4 377.6C268.6 380 262.3 381.3 256 381.3C249.7 381.3 243.4 380 237.6 377.6C231.8 375.2 226.5 371.7 222 367.2L176.8 321.1C172.3 317.5 168.8 312.2 166.4 306.4C163.1 300.6 162.7 294.3 162.7 288C162.7 281.7 163.1 275.4 166.4 269.6C168.8 263.8 172.3 258.5 176.8 254L222 208.8C226.5 204.3 231.8 200.8 237.6 198.4C243.4 195.1 249.7 194.7 256 194.7C262.3 194.7 268.6 195.1 274.4 198.4C280.2 200.8 285.5 204.3 289.1 208.8L335.2 254zM316.1 294.1C316.9 292.2 317.3 290.1 317.3 288C317.3 285.9 316.9 283.8 316.1 281.9C315.2 279.9 314.1 278.2 312.6 276.7L267.3 231.4C265.8 229.9 264.1 228.8 262.1 227.9C260.2 227.1 258.1 226.7 256 226.7C253.9 226.7 251.8 227.1 249.9 227.9C247.9 228.8 246.2 229.9 244.7 231.4L199.4 276.7C197.9 278.2 196.8 279.9 195.9 281.9C195.1 283.8 194.7 285.9 194.7 288C194.7 290.1 195.1 292.2 195.9 294.1C196.8 296.1 197.9 297.8 199.4 299.3L244.7 344.6C246.2 346.1 247.9 347.2 249.9 348.1C251.8 348.9 253.9 349.3 256 349.3C258.1 349.3 260.2 348.9 262.1 348.1C264.1 347.2 265.8 346.1 267.3 344.6L312.6 299.3C314.1 297.8 315.2 296.1 316.1 294.1z"/>
</>],
['regular',<>
	<path d="M323.9 265.4C329.9 271.4 333.2 279.5 333.2 288C333.2 296.5 329.9 304.6 323.9 310.6L278.6 355.9C272.6 361.9 264.5 365.2 255.1 365.2C247.5 365.2 239.4 361.9 233.4 355.9L188.1 310.6C182.1 304.6 178.8 296.5 178.8 288C178.8 279.5 182.1 271.4 188.1 265.4L233.4 220.1C239.4 214.1 247.5 210.8 255.1 210.8C264.5 210.8 272.6 214.1 278.6 220.1L323.9 265.4zM511.1 192C512.5 208.4 506.5 224.4 495.2 236.4C483.1 248.4 468.4 255.4 451.1 256H447.1V432C447.1 444.7 442.9 456.9 433.9 465.9C424.9 474.9 412.7 480 399.1 480H111.1C99.27 480 87.06 474.9 78.06 465.9C69.05 456.9 63.1 444.7 63.1 432V256H59.1C43.57 255.4 28.03 248.4 16.79 236.4C5.541 224.4-.4955 208.4-.0034 192C-.0034 96.29 132.4 32 255.1 32C379.6 32 511.1 96.29 511.1 192zM461.2 202.4C463.4 199.4 464.4 195.7 463.1 192C463.1 132.4 358.2 80 255.1 80C153.8 80 47.1 132.4 47.1 192C47.58 195.7 48.58 199.4 50.82 202.4C53.05 205.4 56.33 207.4 59.1 208H111.1V432H399.1V208H451.1C455.7 207.4 458.9 205.4 461.2 202.4z"/>
</>],
['solid',<>
	<path d="M512 176.1C511.6 183.9 509.8 190.6 506.7 196.8C503.5 203 499.2 208.5 493.8 212.9C488.5 217.3 482.3 220.6 475.6 222.5C468.1 224.4 461.1 224.9 455.1 224H448V448C448 456.5 444.6 464.6 438.6 470.6C432.6 476.6 424.5 480 416 480H96C87.51 480 79.37 476.6 73.37 470.6C67.37 464.6 64 456.5 64 448V224H56.9C50.03 224.9 43.04 224.4 36.38 222.5C29.71 220.6 23.51 217.3 18.17 212.9C12.83 208.5 8.457 203 5.33 196.8C2.203 190.6 .3885 183.9 0 176.1C0 112 96 32 256 32C416 32 512 112 512 176.1H512zM333.2 288C333.2 279.5 329.9 271.4 323.9 265.4L278.6 220.1C272.6 214.1 264.5 210.8 256 210.8C247.5 210.8 239.4 214.1 233.4 220.1L188.1 265.4C182.1 271.4 178.8 279.5 178.8 288C178.8 296.5 182.1 304.6 188.1 310.6L233.4 355.9C239.4 361.9 247.5 365.2 256 365.2C264.5 365.2 272.6 361.9 278.6 355.9L323.9 310.6C329.9 304.6 333.2 296.5 333.2 288z"/>
</>],
['thin',<>
	<path d="M512 176.1C511.6 183.9 509.8 190.6 506.7 196.8C503.5 203 499.2 208.5 493.8 212.9C488.5 217.3 482.3 220.6 475.6 222.5C468.1 224.4 461.1 224.9 455.1 224H448V448C448 456.5 444.6 464.6 438.6 470.6C432.6 476.6 424.5 480 416 480H96C87.51 480 79.37 476.6 73.37 470.6C67.37 464.6 64 456.5 64 448V224H56.9C50.03 224.9 43.04 224.4 36.38 222.5C29.71 220.6 23.51 217.3 18.17 212.9C12.83 208.5 8.457 203 5.33 196.8C2.203 190.6 .3885 183.9 0 176.1C0 112 96 32 256 32C416 32 512 112 512 176.1H512zM496 176.1C496 124.3 410.5 48 256 48C101.5 48 16 124.3 16 176.1C16 195.5 32.42 208 56.9 208H80V448C80 452.2 81.69 456.3 84.69 459.3C87.69 462.3 91.76 464 96 464H416C420.2 464 424.3 462.3 427.3 459.3C430.3 456.3 432 452.2 432 448V208H455.1C479.6 208 496 195.5 496 176.1zM329.6 259.7C337.1 267.2 341.3 277.4 341.3 288C341.3 298.6 337.1 308.8 329.6 316.3L284.3 361.6C276.8 369.1 266.6 373.3 256 373.3C245.4 373.3 235.2 369.1 227.7 361.6L182.4 316.3C174.9 308.8 170.7 298.6 170.7 288C170.7 277.4 174.9 267.2 182.4 259.7L227.7 214.4C235.2 206.9 245.4 202.7 256 202.7C266.6 202.7 276.8 206.9 284.3 214.4L329.6 259.7zM318.2 304.1C320.4 302.7 322.2 300.1 323.4 297.2C324.6 294.3 325.2 291.2 325.2 288C325.2 284.8 324.6 281.7 323.4 278.8C322.2 275.9 320.4 273.3 318.2 271L272.1 225.8C270.7 223.6 268.1 221.8 265.2 220.6C262.3 219.4 259.2 218.7 256 218.7C252.8 218.7 249.7 219.4 246.8 220.6C243.9 221.8 241.3 223.6 239 225.8L193.8 271C191.6 273.3 189.8 275.9 188.6 278.8C187.4 281.7 186.8 284.8 186.8 288C186.8 291.2 187.4 294.3 188.6 297.2C189.8 300.1 191.6 302.7 193.8 304.1L239 350.2C241.3 352.4 243.9 354.2 246.8 355.4C249.7 356.6 252.9 357.2 256 357.2C259.2 357.2 262.3 356.6 265.2 355.4C268.1 354.2 270.7 352.4 272.1 350.2L318.2 304.9V304.1z"/>
</>],

]);

const BreadSliceButter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BreadSliceButter.displayName = "BreadSliceButter";

export default BreadSliceButter;