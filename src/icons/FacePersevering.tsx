
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M203.9 130.7C180.4 154.3 150 169.9 117.1 175.4L114.6 175.8C105.9 177.2 97.67 171.3 96.22 162.6C94.77 153.9 100.7 145.7 109.4 144.2L111.9 143.8C138.2 139.4 162.5 126.9 181.3 108.1L188.7 100.7C194.9 94.44 205.1 94.44 211.3 100.7C217.6 106.9 217.6 117.1 211.3 123.3L203.9 130.7zM300.7 123.3C294.4 117.1 294.4 106.9 300.7 100.7C306.9 94.44 317.1 94.44 323.3 100.7L330.7 108.1C349.5 126.9 373.8 139.4 400.2 143.8L402.6 144.2C411.3 145.7 417.2 153.9 415.8 162.6C414.3 171.3 406.1 177.2 397.4 175.8L394.9 175.4C361.1 169.9 331.6 154.3 308.1 130.7L300.7 123.3zM223.4 258.6C234.1 264.3 234.1 279.7 223.4 285.4L133.5 333.3C125.6 337.6 116 331.8 116 322.9C116 320.1 116.1 317.4 118.8 315.2L154.8 272L118.8 228.8C116.1 226.6 116 223.9 116 221.1C116 212.2 125.6 206.4 133.5 210.7L223.4 258.6zM393.2 228.8L357.2 272L393.2 315.2C395 317.4 396 320.1 396 322.9C396 331.8 386.4 337.6 378.5 333.3L288.6 285.4C277.9 279.7 277.9 264.3 288.6 258.6L378.5 210.7C386.4 206.4 396 212.2 396 221.1C396 223.9 395 226.6 393.2 228.8V228.8z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM316.1 410.7C322 417.3 332.1 417.8 338.7 411.9C345.3 405.1 345.8 395.9 339.9 389.3C323.8 371.4 295.7 352 255.1 352C216.3 352 188.2 371.4 172.1 389.3C166.2 395.9 166.7 405.1 173.3 411.9C179.9 417.8 189.1 417.3 195.9 410.7C207.6 397.7 227.5 384 255.1 384C284.5 384 304.4 397.7 316.1 410.7H316.1zM188.7 100.7L181.3 108.1C162.5 126.9 138.2 139.4 111.9 143.8L109.4 144.2C100.7 145.7 94.77 153.9 96.22 162.6C97.67 171.3 105.9 177.2 114.6 175.8L117.1 175.4C150 169.9 180.4 154.3 203.9 130.7L211.3 123.3C217.6 117.1 217.6 106.9 211.3 100.7C205.1 94.44 194.9 94.44 188.7 100.7V100.7zM308.1 130.7C331.6 154.3 361.1 169.9 394.9 175.4L397.4 175.8C406.1 177.2 414.3 171.3 415.8 162.6C417.2 153.9 411.3 145.7 402.6 144.2L400.2 143.8C373.8 139.4 349.5 126.9 330.7 108.1L323.3 100.7C317.1 94.44 306.9 94.44 300.7 100.7C294.4 106.9 294.4 117.1 300.7 123.3L308.1 130.7zM133.5 210.7C125.6 206.4 116 212.2 116 221.1C116 223.9 116.1 226.6 118.8 228.8L154.8 272L118.8 315.2C116.1 317.4 116 320.1 116 322.9C116 331.8 125.6 337.6 133.5 333.3L223.4 285.4C234.1 279.7 234.1 264.3 223.4 258.6L133.5 210.7zM396 221.1C396 212.2 386.4 206.4 378.5 210.7L288.6 258.6C277.9 264.3 277.9 279.7 288.6 285.4L378.5 333.3C386.4 337.6 396 331.8 396 322.9C396 320.1 395 317.4 393.2 315.2L357.2 272L393.2 228.8C395 226.6 396 223.9 396 221.1V221.1z"/>
</>],
['light',<>
	<path d="M256 384C227.5 384 207.6 397.7 195.9 410.7C189.1 417.3 179.9 417.8 173.3 411.9C166.7 405.1 166.2 395.9 172.1 389.3C188.2 371.4 216.3 352 256 352C295.7 352 323.8 371.4 339.9 389.3C345.8 395.9 345.3 405.1 338.7 411.9C332.1 417.8 322 417.3 316.1 410.7C304.4 397.7 284.5 384 256 384H256zM150.8 225.7L214.8 257.7C220.2 260.4 223.6 265.9 223.6 272C223.6 278.1 220.2 283.6 214.8 286.3L150.8 318.3C142.9 322.3 133.3 319.1 129.3 311.2C125.4 303.3 128.6 293.6 136.5 289.7L171.9 271.1L136.5 254.3C128.6 250.4 125.4 240.7 129.3 232.8C133.3 224.9 142.9 221.7 150.8 225.7V225.7zM340.1 272L375.5 289.7C383.4 293.6 386.6 303.3 382.7 311.2C378.7 319.1 369.1 322.3 361.2 318.3L297.2 286.3C291.8 283.6 288.4 278.1 288.4 272C288.4 265.9 291.8 260.4 297.2 257.7L361.2 225.7C369.1 221.7 378.7 224.9 382.7 232.8C386.6 240.7 383.4 250.4 375.5 254.3L340.1 272zM211.3 100.7C217.6 106.9 217.6 117.1 211.3 123.3L203.9 130.7C180.4 154.3 150 169.9 117.1 175.4L114.6 175.8C105.9 177.2 97.67 171.3 96.22 162.6C94.76 153.9 100.7 145.7 109.4 144.2L111.9 143.8C138.2 139.4 162.5 126.9 181.3 108.1L188.7 100.7C194.9 94.44 205.1 94.44 211.3 100.7zM300.7 123.3C294.4 117.1 294.4 106.9 300.7 100.7C306.9 94.44 317.1 94.44 323.3 100.7L330.7 108.1C349.5 126.9 373.8 139.4 400.2 143.8L402.6 144.2C411.3 145.7 417.2 153.9 415.8 162.6C414.3 171.3 406.1 177.2 397.4 175.8L394.9 175.4C361.1 169.9 331.6 154.3 308.1 130.7L300.7 123.3zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M256 392C237.6 392 224.9 400.5 217.5 408.4C208.5 418.1 193.3 418.6 183.6 409.5C173.9 400.5 173.4 385.3 182.5 375.6C196.7 360.3 221.4 344 256 344C290.6 344 315.3 360.3 329.5 375.6C338.6 385.3 338.1 400.5 328.4 409.5C318.7 418.6 303.5 418.1 294.5 408.4C287.1 400.5 274.4 392 256 392zM211.3 100.7C217.6 106.9 217.6 117.1 211.3 123.3L203.9 130.7C180.4 154.3 150 169.9 117.1 175.4L114.6 175.8C105.9 177.2 97.67 171.3 96.22 162.6C94.76 153.9 100.7 145.7 109.4 144.2L111.9 143.8C138.2 139.4 162.5 126.9 181.3 108.1L188.7 100.7C194.9 94.44 205.1 94.44 211.3 100.7zM300.7 123.3C294.4 117.1 294.4 106.9 300.7 100.7C306.9 94.44 317.1 94.44 323.3 100.7L330.7 108.1C349.5 126.9 373.8 139.4 400.2 143.8L402.6 144.2C411.3 145.7 417.2 153.9 415.8 162.6C414.3 171.3 406.1 177.2 397.4 175.8L394.9 175.4C361.1 169.9 331.6 154.3 308.1 130.7L300.7 123.3zM223.4 258.6C234.1 264.3 234.1 279.7 223.4 285.4L133.5 333.3C125.6 337.6 116 331.8 116 322.9C116 320.1 116.1 317.4 118.8 315.2L154.8 272L118.8 228.8C116.1 226.6 116 223.9 116 221.1C116 212.2 125.6 206.4 133.5 210.7L223.4 258.6zM393.2 228.8L357.2 272L393.2 315.2C395 317.4 396 320.1 396 322.9C396 331.8 386.4 337.6 378.5 333.3L288.6 285.4C277.9 279.7 277.9 264.3 288.6 258.6L378.5 210.7C386.4 206.4 396 212.2 396 221.1C396 223.9 395 226.6 393.2 228.8V228.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM316.1 410.7C322 417.3 332.1 417.8 338.7 411.9C345.3 405.1 345.8 395.9 339.9 389.3C323.8 371.4 295.7 352 255.1 352C216.3 352 188.2 371.4 172.1 389.3C166.2 395.9 166.7 405.1 173.3 411.9C179.9 417.8 189.1 417.3 195.9 410.7C207.6 397.7 227.5 384 255.1 384C284.5 384 304.4 397.7 316.1 410.7H316.1zM188.7 100.7L181.3 108.1C162.5 126.9 138.2 139.4 111.9 143.8L109.4 144.2C100.7 145.7 94.77 153.9 96.22 162.6C97.67 171.3 105.9 177.2 114.6 175.8L117.1 175.4C150 169.9 180.4 154.3 203.9 130.7L211.3 123.3C217.6 117.1 217.6 106.9 211.3 100.7C205.1 94.44 194.9 94.44 188.7 100.7V100.7zM308.1 130.7C331.6 154.3 361.1 169.9 394.9 175.4L397.4 175.8C406.1 177.2 414.3 171.3 415.8 162.6C417.2 153.9 411.3 145.7 402.6 144.2L400.2 143.8C373.8 139.4 349.5 126.9 330.7 108.1L323.3 100.7C317.1 94.44 306.9 94.44 300.7 100.7C294.4 106.9 294.4 117.1 300.7 123.3L308.1 130.7zM133.5 210.7C125.6 206.4 116 212.2 116 221.1C116 223.9 116.1 226.6 118.8 228.8L154.8 272L118.8 315.2C116.1 317.4 116 320.1 116 322.9C116 331.8 125.6 337.6 133.5 333.3L223.4 285.4C234.1 279.7 234.1 264.3 223.4 258.6L133.5 210.7zM396 221.1C396 212.2 386.4 206.4 378.5 210.7L288.6 258.6C277.9 264.3 277.9 279.7 288.6 285.4L378.5 333.3C386.4 337.6 396 331.8 396 322.9C396 320.1 395 317.4 393.2 315.2L357.2 272L393.2 228.8C395 226.6 396 223.9 396 221.1V221.1z"/>
</>],
['thin',<>
	<path d="M256 384C224.7 384 202.7 399.1 189.9 413.4C186.1 416.6 181.9 416.9 178.6 413.9C175.4 410.1 175.1 405.9 178.1 402.6C193.1 385.1 219.1 368 256 368C292.9 368 318.9 385.1 333.9 402.6C336.9 405.9 336.6 410.1 333.4 413.9C330.1 416.9 325 416.6 322.1 413.4C309.3 399.1 287.3 384 256 384V384zM205.7 98.34C208.8 101.5 208.8 106.5 205.7 109.7L198.3 117C175.9 139.4 147 154.3 115.8 159.5L113.3 159.9C108.1 160.6 104.8 157.7 104.1 153.3C103.4 148.1 106.3 144.8 110.7 144.1L113.2 143.7C141.1 139 166.9 125.8 186.1 105.7L194.3 98.34C197.5 95.22 202.5 95.22 205.7 98.34V98.34zM306.3 109.7C303.2 106.5 303.2 101.5 306.3 98.34C309.5 95.22 314.5 95.22 317.7 98.34L325 105.7C345.1 125.8 370.9 139 398.8 143.7L401.3 144.1C405.7 144.8 408.6 148.1 407.9 153.3C407.2 157.7 403 160.6 398.7 159.9L396.2 159.5C364.1 154.3 336.1 139.4 313.7 117L306.3 109.7zM128.8 228.4C130.8 224.5 135.6 222.9 139.6 224.8L219.6 264.8C222.3 266.2 224 268.1 224 272C224 275 222.3 277.8 219.6 279.2L139.6 319.2C135.6 321.1 130.8 319.5 128.8 315.6C126.9 311.6 128.5 306.8 132.4 304.8L198.1 272L132.4 239.2C128.5 237.2 126.9 232.4 128.8 228.4V228.4zM372.4 224.8C376.4 222.9 381.2 224.5 383.2 228.4C385.1 232.4 383.5 237.2 379.6 239.2L313.9 271.1L379.6 304.8C383.5 306.8 385.1 311.6 383.2 315.6C381.2 319.5 376.4 321.1 372.4 319.2L292.4 279.2C289.7 277.8 288 275 288 271.1C288 268.1 289.7 266.2 292.4 264.8L372.4 224.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const FacePersevering: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FacePersevering.displayName = "FacePersevering";

export default FacePersevering;
