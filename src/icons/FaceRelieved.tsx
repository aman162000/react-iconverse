
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M207.2 74.94C209.1 83.32 205.4 92.39 197.1 95.18L190.7 97.29C167.1 105.2 146.8 120.7 132.1 141.4L125.3 152.9C120.4 160.2 110.5 162.2 103.1 157.3C95.77 152.4 93.79 142.5 98.69 135.1L106.3 123.7C124.1 97.02 150.2 77.06 180.6 66.93L186.9 64.82C195.3 62.03 204.4 66.56 207.2 74.94L207.2 74.94zM124.8 238.4C142.4 261.9 177.6 261.9 195.2 238.4C200.5 231.3 210.5 229.9 217.6 235.2C224.7 240.5 226.1 250.5 220.8 257.6C190.4 298.1 129.6 298.1 99.2 257.6C93.9 250.5 95.33 240.5 102.4 235.2C109.5 229.9 119.5 231.3 124.8 238.4V238.4zM316.8 238.4C334.4 261.9 369.6 261.9 387.2 238.4C392.5 231.3 402.5 229.9 409.6 235.2C416.7 240.5 418.1 250.5 412.8 257.6C382.4 298.1 321.6 298.1 291.2 257.6C285.9 250.5 287.3 240.5 294.4 235.2C301.5 229.9 311.5 231.3 316.8 238.4V238.4zM314.9 95.18C306.6 92.39 302 83.32 304.8 74.94C307.6 66.56 316.7 62.03 325.1 64.82L331.4 66.93C361.8 77.06 387.9 97.02 405.7 123.7L413.3 135.1C418.2 142.5 416.2 152.4 408.9 157.3C401.5 162.2 391.6 160.2 386.7 152.9L379 141.4C365.2 120.7 344.9 105.2 321.3 97.29L314.9 95.18z"/><path className="fa-secondary" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM187.3 356.7C181.1 350.4 170.9 350.4 164.7 356.7C158.4 362.9 158.4 373.1 164.7 379.3C182.6 397.2 213.1 416 255.1 416C298.9 416 329.4 397.2 347.3 379.3C353.6 373.1 353.6 362.9 347.3 356.7C341.1 350.4 330.9 350.4 324.7 356.7C311.6 369.7 288.9 384 255.1 384C223.1 384 200.4 369.7 187.3 356.7H187.3zM387.2 238.4C369.6 261.9 334.4 261.9 316.8 238.4C311.5 231.3 301.5 229.9 294.4 235.2C287.3 240.5 285.9 250.5 291.2 257.6C321.6 298.1 382.4 298.1 412.8 257.6C418.1 250.5 416.7 240.5 409.6 235.2C402.5 229.9 392.5 231.3 387.2 238.4zM102.4 235.2C95.33 240.5 93.9 250.5 99.2 257.6C129.6 298.1 190.4 298.1 220.8 257.6C226.1 250.5 224.7 240.5 217.6 235.2C210.5 229.9 200.5 231.3 195.2 238.4C177.6 261.9 142.4 261.9 124.8 238.4C119.5 231.3 109.5 229.9 102.4 235.2V235.2zM186.9 64.82L180.6 66.93C150.2 77.06 124.1 97.02 106.3 123.7L98.69 135.1C93.79 142.5 95.77 152.4 103.1 157.3C110.5 162.2 120.4 160.2 125.3 152.9L132.1 141.4C146.8 120.7 167.1 105.2 190.7 97.29L197.1 95.18C205.4 92.38 209.1 83.32 207.2 74.94C204.4 66.56 195.3 62.03 186.9 64.82L186.9 64.82zM321.3 97.29C344.9 105.2 365.2 120.7 379 141.4L386.7 152.9C391.6 160.2 401.5 162.2 408.9 157.3C416.2 152.4 418.2 142.5 413.3 135.1L405.7 123.7C387.9 97.02 361.8 77.06 331.4 66.93L325.1 64.82C316.7 62.03 307.6 66.56 304.8 74.94C302 83.33 306.6 92.39 314.9 95.18L321.3 97.29z"/>
</>],
['light',<>
	<path d="M256 376C288.9 376 311.6 361.7 324.7 348.7C330.9 342.4 341.1 342.4 347.3 348.7C353.6 354.9 353.6 365.1 347.3 371.3C329.4 389.2 298.9 408 256 408C213.1 408 182.6 389.2 164.7 371.3C158.4 365.1 158.4 354.9 164.7 348.7C170.9 342.4 181.1 342.4 187.3 348.7C200.4 361.7 223.1 376 256 376H256zM409.6 235.2C416.7 240.5 418.1 250.5 412.8 257.6C382.4 298.1 321.6 298.1 291.2 257.6C285.9 250.5 287.3 240.5 294.4 235.2C301.5 229.9 311.5 231.3 316.8 238.4C334.4 261.9 369.6 261.9 387.2 238.4C392.5 231.3 402.5 229.9 409.6 235.2V235.2zM124.8 238.4C142.4 261.9 177.6 261.9 195.2 238.4C200.5 231.3 210.5 229.9 217.6 235.2C224.7 240.5 226.1 250.5 220.8 257.6C190.4 298.1 129.6 298.1 99.2 257.6C93.9 250.5 95.33 240.5 102.4 235.2C109.5 229.9 119.5 231.3 124.8 238.4zM207.2 106.9C209.1 115.3 205.4 124.4 197.1 127.2L190.7 129.3C167.1 137.2 146.8 152.7 132.1 173.4L125.3 184.9C120.4 192.2 110.5 194.2 103.1 189.3C95.77 184.4 93.79 174.5 98.69 167.1L106.3 155.7C124.1 129 150.2 109.1 180.6 98.93L186.9 96.82C195.3 94.03 204.4 98.56 207.2 106.9L207.2 106.9zM314.9 127.2C306.6 124.4 302 115.3 304.8 106.9C307.6 98.56 316.7 94.03 325.1 96.82L331.4 98.93C361.8 109.1 387.9 129 405.7 155.7L413.3 167.1C418.2 174.5 416.2 184.4 408.9 189.3C401.5 194.2 391.6 192.2 386.7 184.9L379 173.4C365.2 152.7 344.9 137.2 321.3 129.3L314.9 127.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32z"/>
</>],
['regular',<>
	<path d="M256 368C286.4 368 307.2 354.9 319 343C328.4 333.7 343.6 333.7 352.1 343C362.3 352.4 362.3 367.6 352.1 376.1C333.9 396.1 301.4 416 256 416C210.6 416 178.1 396.1 159 376.1C149.7 367.6 149.7 352.4 159 343C168.4 333.7 183.6 333.7 192.1 343C204.8 354.9 225.6 368 256 368zM377 242.3C384.6 234.3 397.2 233.9 405.3 241.4C413.4 248.1 413.8 261.6 406.2 269.7C391.7 285.2 370.1 292 351.6 292C332.3 292 311.6 285.2 297 269.7C289.5 261.6 289.9 248.1 297.9 241.4C306 233.9 318.7 234.3 326.2 242.3C331.7 248.2 340.1 252 351.6 252C362.3 252 371.6 248.2 377 242.3zM134.2 242.3C139.7 248.2 148.1 252 159.6 252C170.3 252 179.6 248.2 185 242.3C192.6 234.3 205.2 233.9 213.3 241.4C221.4 248.1 221.8 261.6 214.2 269.7C199.7 285.2 178.1 292 159.6 292C140.3 292 119.6 285.2 105 269.7C97.48 261.6 97.89 248.1 105.9 241.4C114 233.9 126.7 234.3 134.2 242.3V242.3zM207.2 106.9C209.1 115.3 205.4 124.4 197.1 127.2L190.7 129.3C167.1 137.2 146.8 152.7 132.1 173.4L125.3 184.9C120.4 192.2 110.5 194.2 103.1 189.3C95.77 184.4 93.79 174.5 98.69 167.1L106.3 155.7C124.1 129 150.2 109.1 180.6 98.93L186.9 96.82C195.3 94.03 204.4 98.56 207.2 106.9L207.2 106.9zM314.9 127.2C306.6 124.4 302 115.3 304.8 106.9C307.6 98.56 316.7 94.03 325.1 96.82L331.4 98.93C361.8 109.1 387.9 129 405.7 155.7L413.3 167.1C418.2 174.5 416.2 184.4 408.9 189.3C401.5 194.2 391.6 192.2 386.7 184.9L379 173.4C365.2 152.7 344.9 137.2 321.3 129.3L314.9 127.2zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/>
</>],
['solid',<>
	<path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM187.3 356.7C181.1 350.4 170.9 350.4 164.7 356.7C158.4 362.9 158.4 373.1 164.7 379.3C182.6 397.2 213.1 416 255.1 416C298.9 416 329.4 397.2 347.3 379.3C353.6 373.1 353.6 362.9 347.3 356.7C341.1 350.4 330.9 350.4 324.7 356.7C311.6 369.7 288.9 384 255.1 384C223.1 384 200.4 369.7 187.3 356.7H187.3zM387.2 238.4C369.6 261.9 334.4 261.9 316.8 238.4C311.5 231.3 301.5 229.9 294.4 235.2C287.3 240.5 285.9 250.5 291.2 257.6C321.6 298.1 382.4 298.1 412.8 257.6C418.1 250.5 416.7 240.5 409.6 235.2C402.5 229.9 392.5 231.3 387.2 238.4zM102.4 235.2C95.33 240.5 93.9 250.5 99.2 257.6C129.6 298.1 190.4 298.1 220.8 257.6C226.1 250.5 224.7 240.5 217.6 235.2C210.5 229.9 200.5 231.3 195.2 238.4C177.6 261.9 142.4 261.9 124.8 238.4C119.5 231.3 109.5 229.9 102.4 235.2V235.2zM186.9 64.82L180.6 66.93C150.2 77.06 124.1 97.02 106.3 123.7L98.69 135.1C93.79 142.5 95.77 152.4 103.1 157.3C110.5 162.2 120.4 160.2 125.3 152.9L132.1 141.4C146.8 120.7 167.1 105.2 190.7 97.29L197.1 95.18C205.4 92.38 209.1 83.32 207.2 74.94C204.4 66.56 195.3 62.03 186.9 64.82L186.9 64.82zM321.3 97.29C344.9 105.2 365.2 120.7 379 141.4L386.7 152.9C391.6 160.2 401.5 162.2 408.9 157.3C416.2 152.4 418.2 142.5 413.3 135.1L405.7 123.7C387.9 97.02 361.8 77.06 331.4 66.93L325.1 64.82C316.7 62.03 307.6 66.56 304.8 74.94C302 83.33 306.6 92.39 314.9 95.18L321.3 97.29z"/>
</>],
['thin',<>
	<path d="M256 400C291.4 400 316.1 384.6 330.3 370.3C333.5 367.2 338.5 367.2 341.7 370.3C344.8 373.5 344.8 378.5 341.7 381.7C324.1 398.3 296.4 416 255.1 416C215.6 416 187 398.3 170.3 381.7C167.2 378.5 167.2 373.5 170.3 370.3C173.5 367.2 178.5 367.2 181.7 370.3C195.9 384.6 220.6 400 255.1 400H256zM392.7 244.1C394.8 240.2 399.7 238.9 403.5 241C407.4 243.2 408.8 248.1 406.6 251.9C393.5 275.3 373 287.1 351.6 287.1C330.2 287.1 309.8 275.3 296.7 251.9C294.5 248.1 295.9 243.2 299.7 241C303.6 238.9 308.4 240.2 310.6 244.1C321.5 263.4 337 272 351.6 272C366.2 272 381.8 263.4 392.7 244.1H392.7zM118.6 244.1C129.5 263.4 145 272 159.6 272C174.2 272 189.8 263.4 200.7 244.1C202.8 240.2 207.7 238.9 211.6 241C215.4 243.2 216.8 248.1 214.6 251.9C201.5 275.3 181 287.1 159.6 287.1C138.2 287.1 117.8 275.3 104.7 251.9C102.5 248.1 103.9 243.2 107.7 241C111.6 238.9 116.4 240.2 118.6 244.1H118.6zM199.6 93.47C200.1 97.66 198.7 102.2 194.5 103.6L188.2 105.7C162.9 114.1 141.1 130.8 126.3 152.1L118.7 164.4C116.2 168.1 111.2 169.1 107.6 166.7C103.9 164.2 102.9 159.2 105.3 155.6L112.1 144.1C129.8 118.9 154.4 100.1 183.1 90.52L189.5 88.41C193.7 87.01 198.2 89.28 199.6 93.47H199.6zM317.5 103.6C313.3 102.2 311 97.66 312.4 93.47C313.8 89.28 318.3 87.01 322.5 88.41L328.9 90.52C357.6 100.1 382.2 118.9 399 144.1L406.7 155.6C409.1 159.2 408.1 164.2 404.4 166.7C400.8 169.1 395.8 168.1 393.3 164.4L385.7 152.1C370.9 130.8 349.1 114.1 323.8 105.7L317.5 103.6zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16z"/>
</>],

]);

const FaceRelieved: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceRelieved.displayName = "FaceRelieved";

export default FaceRelieved;