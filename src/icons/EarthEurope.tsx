
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 210.3V206.1C192 197.1 195.6 188.4 201.9 182.1L219.9 164.1C222.5 161.5 224 157.9 224 154.2C224 148.1 227.9 142.7 233.6 140.8L260.2 131.9C267.9 129.4 275 124.1 280.8 119.2L300.7 99.31C302.8 97.19 304 94.31 304 91.31C304 85.06 298.9 79.1 292.7 79.1H291.7C289.3 79.1 286.9 80.72 284.9 82.06L243.1 109.9C241.1 111.3 238.7 111.1 236.3 111.1C229.5 111.1 224 106.5 224 99.72V91.15C224 84.19 227.5 77.68 233.3 73.81L328.4 10.39C434.5 41.63 512 139.8 512 255.1C512 278.1 509.2 299.5 503.9 319.1H446.6C432.1 319.1 418.2 314.2 408 303.1L389.7 285.7C386 282 384 277.1 384 271.1C384 266.9 386 261.1 389.7 258.3L397.2 250.8C398.1 249 400 246.6 400 243.1C400 241.4 398.1 238.1 397.2 237.2L390.6 230.6C386.4 226.4 380.6 223.1 374.6 223.1H363.3C357.1 223.1 352 218.9 352 212.7C352 209.7 353.2 206.8 355.3 204.7L360 199.1C365.1 194.9 372.1 191.1 379.3 191.1H400C408.8 191.1 416 184.8 416 175.1C416 167.2 408.8 159.1 400 159.1H370.6C360.3 159.1 352 168.3 352 178.6C352 186.6 346.9 193.7 339.3 196.2L318.1 203.3C310.7 205.8 307.1 214.3 310.7 221.3L311.8 223.6C315.6 231.1 310.1 239.1 301.7 239.1C298.1 239.1 294.7 238.3 292.6 235.5L276.3 213.7C273.6 210.1 269.4 207.1 264.8 207.1C259.4 207.1 254.5 211.1 252 215.9L248 223.1C243.1 233.8 232.9 239.1 221.9 239.1C205.6 239.1 192 226.7 192 210.3H192zM272 511.5V477.3C272 452.3 251.7 432 226.7 432C214.7 432 203.2 427.2 194.7 418.7L178.7 402.7C166.7 390.7 160 374.5 160 357.5V354.3C160 332.9 170.7 312.9 188.5 301L215.9 282.7C226.4 275.7 238.7 272 251.4 272H272.3C287.6 272 302.4 277.5 313.1 287.4L340.5 310.2C347.9 316.5 357.4 320 367.1 320C377.9 320 388.3 324.3 395.1 331.1L400 336C410.2 346.2 424.1 352 438.6 352H493.4C457.3 441.1 372.5 505.3 272 511.5V511.5zM187.3 100.7C193.6 106.9 193.6 117.1 187.3 123.3L155.3 155.3C149.1 161.6 138.9 161.6 132.7 155.3C126.4 149.1 126.4 138.9 132.7 132.7L164.7 100.7C170.9 94.44 181.1 94.44 187.3 100.7V100.7z"/><path className="fa-secondary" d="M221.9 240C232.9 240 243.1 233.8 248 224L252 215.9C254.5 211.1 259.4 208 264.8 208C269.4 208 273.6 210.1 276.3 213.7L292.6 235.5C294.7 238.3 298.1 240 301.7 240C310.1 240 315.6 231.1 311.8 223.6L310.7 221.3C307.1 214.3 310.7 205.8 318.1 203.3L339.3 196.2C346.9 193.7 352 186.6 352 178.6C352 168.3 360.3 160 370.6 160H400C408.8 160 416 167.2 416 176C416 184.8 408.8 192 400 192H379.3C372.1 192 365.1 194.9 360 200L355.3 204.7C353.2 206.8 352 209.7 352 212.7C352 218.9 357.1 224 363.3 224H374.6C380.6 224 386.4 226.4 390.6 230.6L397.2 237.2C398.1 238.1 400 241.4 400 244C400 246.6 398.1 249 397.2 250.8L389.7 258.3C386 261.1 384 266.9 384 272C384 277.1 386 282 389.7 285.7L408 304C418.2 314.2 432.1 320 446.6 320H503.9C501.1 330.1 497.6 341.7 493.4 352H438.6C424.1 352 410.2 346.2 400 336L395.1 331.1C388.3 324.3 377.9 320 367.1 320C357.4 320 347.9 316.5 340.5 310.2L313.1 287.4C302.4 277.5 287.6 272 272.3 272H251.4C238.7 272 226.4 275.7 215.9 282.7L188.5 301C170.7 312.9 160 332.9 160 354.3V357.5C160 374.5 166.7 390.7 178.7 402.7L194.7 418.7C203.2 427.2 214.7 432 226.7 432C251.7 432 272 452.3 272 477.3V511.5C266.7 511.8 261.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C281.2 0 305.5 3.627 328.4 10.39L233.3 73.81C227.5 77.68 224 84.19 224 91.16V99.72C224 106.5 229.5 112 236.3 112C238.7 112 241.1 111.3 243.1 109.9L284.9 82.06C286.9 80.72 289.3 80 291.7 80H292.7C298.9 80 304 85.07 304 91.31C304 94.31 302.8 97.19 300.7 99.31L280.8 119.2C275 124.1 267.9 129.4 260.2 131.9L233.6 140.8C227.9 142.7 224 148.1 224 154.2C224 157.9 222.5 161.5 219.9 164.1L201.9 182.1C195.6 188.4 192 197.1 192 206.1V210.3C192 226.7 205.6 240 221.9 240V240zM187.3 123.3C193.6 117.1 193.6 106.9 187.3 100.7C181.1 94.44 170.9 94.44 164.7 100.7L132.7 132.7C126.4 138.9 126.4 149.1 132.7 155.3C138.9 161.6 149.1 161.6 155.3 155.3L187.3 123.3z"/>
</>],
['light',<>
	<path d="M187.3 100.7C193.6 106.9 193.6 117.1 187.3 123.3L155.3 155.3C149.1 161.6 138.9 161.6 132.7 155.3C126.4 149.1 126.4 138.9 132.7 132.7L164.7 100.7C170.9 94.44 181.1 94.44 187.3 100.7V100.7zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM477.7 288C479.2 277.5 480 266.9 480 256C480 141.8 394.5 47.54 284.1 33.74L279.6 51.58C294.6 47.81 310.7 53.66 319.6 66.88C332.3 85.57 325.6 111.1 305.4 121.2L246.2 150.8C242.4 152.7 240 156.6 240 160.9C240 169.7 236.5 178.1 230.3 184.4L211.6 203C209.3 205.3 208 208.5 208 211.7V213.3C208 219.2 212.8 224 218.7 224C222 224 225.2 222.4 227.2 219.7L237.9 205.4C244.3 196.1 254.2 192 264.7 192C273.6 192 282.2 195.5 288.4 201.8L291.3 204.7C293.9 207.3 298.1 207.3 300.7 204.7L332.8 172.6C345.8 159.6 368 168.8 368 187.1V196.6C368 202.9 373.1 208 379.4 208H383.1C406.6 208 419.6 235.1 404.1 253.4C401.3 258 401.9 264.8 406.5 268.6L422.4 281.8C427.2 285.8 433.2 288 439.4 288H477.7zM470.7 320H439.4C425.7 320 412.4 315.2 401.9 306.4L386 293.2C370.1 279.9 366.2 257.5 375.7 239.8C358.7 238.4 344.5 227.2 338.8 211.9L323.3 227.3C308.2 242.4 283.8 242.4 268.7 227.3L265.8 224.4C265.5 224.2 265.1 224 264.8 224C264.3 224 263.8 224.2 263.5 224.6L252.8 238.9C244.7 249.7 232.1 256 218.7 256C195.1 256 176 236.9 176 213.3V211.7C176 199.1 180.7 188.7 188.1 180.4L207.6 161.7C207.9 161.5 208 161.2 208 160.9C208 144.5 217.3 129.5 231.9 122.1L291.1 92.57C293.1 91.13 294.9 87.48 293.1 84.81C291.6 82.61 288.7 81.83 286.4 82.1L278.3 86.94C260 95.84 239.7 79.35 244.6 59.63L251.5 32.05C129.9 34.44 32 133.8 32 256C32 378.6 130.6 478.3 252.8 479.1C247.1 470.5 238.1 464 226.7 464C210.5 464 194.9 457.5 183.4 446.1L167.4 430.1C152.4 415.1 144 394.7 144 373.5V370.3C144 343.5 157.4 318.5 179.6 303.7L207 285.4C220.1 276.7 235.6 272 251.4 272H272.3C291.4 272 309.9 278.8 324.4 291.3L350.1 314C355.4 317.9 361.2 320 367.1 320C382.2 320 396.6 325.1 407.3 336.6L411.3 340.7C418.6 347.9 428.4 352 438.6 352H458.4C463.3 341.7 467.4 331 470.7 320V320zM439.8 384H438.6C419.9 384 401.9 376.6 388.7 363.3L384.6 359.3C379.1 354.6 373.7 352 367.1 352C353.5 352 340.4 347.1 330.1 338.3L303.6 315.6C294.9 308.1 283.8 303.1 272.3 303.1H251.4C241.9 303.1 232.6 306.8 224.8 312.1L197.4 330.3C184 339.2 176 354.2 176 370.3V373.5C176 386.2 181.1 398.4 190.1 407.4L206.1 423.4C211.5 428.9 218.1 432 226.7 432C255.3 432 279.3 451.5 286.1 477.1C349.7 469.5 404.8 434.3 439.8 384L439.8 384z"/>
</>],
['regular',<>
	<path d="M155.3 155.3C149.1 161.6 138.9 161.6 132.7 155.3C126.4 149.1 126.4 138.9 132.7 132.7L164.7 100.7C170.9 94.44 181.1 94.44 187.3 100.7C193.6 106.9 193.6 117.1 187.3 123.3L155.3 155.3zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 464C261.8 464 267.5 463.8 273.1 463.3C272.4 461 272 458.5 272 456C272 442.7 261.3 432 248 432H226.7C214.7 432 203.2 427.2 194.7 418.7L178.7 402.7C166.7 390.7 160 374.5 160 357.5V354.3C160 332.9 170.7 312.9 188.5 301L215.9 282.7C226.4 275.7 238.7 272 251.4 272H272.3C287.6 272 302.4 277.5 313.1 287.4L340.5 310.2C347.9 316.5 357.4 320 367.1 320C377.9 320 388.3 324.3 395.1 331.1L409.4 345.4C413.6 349.6 419.4 352 425.4 352C430.2 352 434.7 353.5 438.4 356.1C444.7 344.7 449.9 332.6 453.1 320H446.6C432.1 320 418.2 314.2 408 304L389.7 285.7C386 282 384 277.1 384 272C384 266.9 386 261.1 389.7 258.3L397.2 250.8C398.1 249 400 246.6 400 244C400 241.4 398.1 238.1 397.2 237.2L390.6 230.6C386.4 226.4 380.6 224 374.6 224H363.3C357.1 224 352 218.9 352 212.7C352 209.7 353.2 206.8 355.3 204.7L360 200C365.1 194.9 372.1 192 379.3 192H400C408.8 192 416 184.8 416 176C416 167.2 408.8 160 400 160H370.6C360.3 160 352 168.3 352 178.6C352 186.6 346.9 193.7 339.3 196.2L318.1 203.3C310.7 205.8 307.1 214.3 310.7 221.3L311.8 223.6C315.6 231.1 310.1 240 301.7 240C298.1 240 294.7 238.3 292.6 235.5L276.3 213.7C273.6 210.1 269.4 208 264.8 208C259.4 208 254.5 211.1 252 215.9L248 224C243.1 233.8 232.9 240 221.9 240C205.6 240 192 226.7 192 210.3V206.1C192 197.1 195.6 188.4 201.9 182.1L219.9 164.1C222.5 161.5 224 157.9 224 154.2C224 148.1 227.9 142.7 233.6 140.8L260.2 131.9C267.9 129.4 275 124.1 280.8 119.2L300.7 99.31C302.8 97.19 304 94.31 304 91.31C304 85.07 298.9 80 292.7 80H291.7C289.3 80 286.9 80.72 284.9 82.06L243.1 109.9C241.1 111.3 238.7 112 236.3 112C229.5 112 224 106.5 224 99.72V90.67C224 83.95 227.2 77.63 232.5 73.6L266.3 48.25C262.9 48.09 259.5 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464V464z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM266.3 48.25L232.5 73.6C227.2 77.63 224 83.95 224 90.67V99.72C224 106.5 229.5 112 236.3 112C238.7 112 241.1 111.3 243.1 109.9L284.9 82.06C286.9 80.72 289.3 80 291.7 80H292.7C298.9 80 304 85.07 304 91.31C304 94.31 302.8 97.19 300.7 99.31L280.8 119.2C275 124.1 267.9 129.4 260.2 131.9L233.6 140.8C227.9 142.7 224 148.1 224 154.2C224 157.9 222.5 161.5 219.9 164.1L201.9 182.1C195.6 188.4 192 197.1 192 206.1V210.3C192 226.7 205.6 240 221.9 240C232.9 240 243.1 233.8 248 224L252 215.9C254.5 211.1 259.4 208 264.8 208C269.4 208 273.6 210.1 276.3 213.7L292.6 235.5C294.7 238.3 298.1 240 301.7 240C310.1 240 315.6 231.1 311.8 223.6L310.7 221.3C307.1 214.3 310.7 205.8 318.1 203.3L339.3 196.2C346.9 193.7 352 186.6 352 178.6C352 168.3 360.3 160 370.6 160H400C408.8 160 416 167.2 416 176C416 184.8 408.8 192 400 192H379.3C372.1 192 365.1 194.9 360 200L355.3 204.7C353.2 206.8 352 209.7 352 212.7C352 218.9 357.1 224 363.3 224H374.6C380.6 224 386.4 226.4 390.6 230.6L397.2 237.2C398.1 238.1 400 241.4 400 244C400 246.6 398.1 249 397.2 250.8L389.7 258.3C386 261.1 384 266.9 384 272C384 277.1 386 282 389.7 285.7L408 304C418.2 314.2 432.1 320 446.6 320H453.1C460.5 299.8 464 278.3 464 256C464 144.6 376.4 53.64 266.3 48.25V48.25zM438.4 356.1C434.7 353.5 430.2 352 425.4 352C419.4 352 413.6 349.6 409.4 345.4L395.1 331.1C388.3 324.3 377.9 320 367.1 320C357.4 320 347.9 316.5 340.5 310.2L313.1 287.4C302.4 277.5 287.6 271.1 272.3 271.1H251.4C238.7 271.1 226.4 275.7 215.9 282.7L188.5 301C170.7 312.9 160 332.9 160 354.3V357.5C160 374.5 166.7 390.7 178.7 402.7L194.7 418.7C203.2 427.2 214.7 432 226.7 432H248C261.3 432 272 442.7 272 456C272 458.5 272.4 461 273.1 463.3C344.5 457.5 405.6 415.7 438.4 356.1L438.4 356.1zM164.7 100.7L132.7 132.7C126.4 138.9 126.4 149.1 132.7 155.3C138.9 161.6 149.1 161.6 155.3 155.3L187.3 123.3C193.6 117.1 193.6 106.9 187.3 100.7C181.1 94.44 170.9 94.44 164.7 100.7V100.7z"/>
</>],
['thin',<>
	<path d="M149.7 149.7C146.5 152.8 141.5 152.8 138.3 149.7C135.2 146.5 135.2 141.5 138.3 138.3L170.3 106.3C173.5 103.2 178.5 103.2 181.7 106.3C184.8 109.5 184.8 114.5 181.7 117.7L149.7 149.7zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 316.5 491 372 456 415.8V416H455.9C408.9 474.5 336.8 512 256 512C114.6 512 0 397.4 0 256zM256 496C258.7 496 261.3 495.1 264 495.9V477.3C264 456.7 247.3 440 226.7 440C212.6 440 199.1 434.4 189.1 424.4L173.1 408.4C159.6 394.9 152 376.6 152 357.5V354.3C152 330.2 164 307.7 184.1 294.3L211.4 276.1C223.3 268.2 237.2 264 251.4 264H272.3C289.5 264 306.1 270.1 319.2 281.3L345.7 304.1C351.7 309.2 359.3 312 367.1 312C380 312 392.5 317.1 401.6 326.3L415 339.7C417.8 342.5 421.5 344 425.4 344C442.3 344 456 357.7 456 374.6V388.7C468.4 370.1 478.2 349.7 485 328H446.6C430 328 414.1 321.4 402.3 309.7L384 291.3C378.9 286.2 376 279.2 376 272C376 264.8 378.9 257.8 384 252.7L391.5 245.2C391.8 244.9 392 244.4 392 244C392 243.6 391.8 243.1 391.5 242.8L384.1 236.3C382.2 233.5 378.5 232 374.6 232H363.3C352.6 232 344 223.4 344 212.7C344 207.6 346 202.7 349.7 199L354.3 194.3C360.1 187.7 369.9 184 379.3 184H400C404.4 184 408 180.4 408 176C408 171.6 404.4 168 400 168H372.5C367.9 168 363.6 170.6 361.6 174.8C359.4 179.2 356.1 182.9 351.1 185.6L318.9 207.7C316.3 209.4 315.4 212.9 316.8 215.7L318.1 220C325.4 232.9 316 248 301.7 248C295.6 248 289.9 245.1 286.2 240.3L269.9 218.5C268.7 216.9 266.8 216 264.8 216C262.5 216 260.3 217.4 259.2 219.5L255.2 227.6C248.9 240.1 235.9 248 221.9 248C201.2 248 184 231.2 184 210.3V206.1C184 194.9 188.4 184.3 196.3 176.4L214.2 158.5C215.4 157.3 216 155.8 216 154.2C216 144.7 222.1 136.2 231.1 133.2L257.6 124.4C264.2 122.2 270.2 118.4 275.2 113.5L295 93.66C295.7 93.04 296 92.19 296 91.31C296 89.48 294.5 88 292.7 88H291.7C290.9 88 290 88.25 289.3 88.72L247.5 116.6C244.2 118.8 240.3 120 236.3 120C225.1 120 216 110.9 216 99.72V91.16C216 81.51 220.8 72.51 228.8 67.16L299.6 19.96C285.5 17.36 270.9 16 256 16C123.5 16 16 123.5 16 256C16 388.6 123.5 496 256 496L256 496zM280 477.3V494.8C344.1 488.4 400.8 456.9 440 410.1V374.6C440 366.6 433.4 360 425.4 360C417.2 360 409.5 356.8 403.7 351L390.3 337.6C384.1 331.5 375.8 328 367.1 328C355.4 328 344.2 323.8 335.3 316.2L308.8 293.5C298.6 284.8 285.7 280 272.3 280H251.4C240.3 280 229.5 283.3 220.3 289.4L192.9 307.7C177.4 318 168 335.5 168 354.3V357.5C168 372.3 173.9 386.6 184.4 397.1L200.4 413.1C207.4 420.1 216.9 424 226.7 424C256.2 424 280 447.8 280 477.3H280zM446.6 312H489.4C493.7 294 496 275.3 496 256C496 145.1 421.1 53.27 321 24.92L237.7 80.47C234.1 82.85 232 86.86 232 91.16V99.72C232 102.1 233.9 103.1 236.3 103.1C237.1 103.1 237.1 103.7 238.7 103.3L280.5 75.41C283.8 73.18 287.7 71.1 291.7 71.1H292.7C303.4 71.1 312 80.65 312 91.31C312 96.44 309.1 101.3 306.3 104.1L286.5 124.8C279.8 131.5 271.7 136.5 262.7 139.5L236.2 148.4C233.7 149.2 231.1 151.5 231.1 154.2C231.1 160 229.7 165.6 225.5 169.8L207.6 187.7C202.7 192.6 199.1 199.2 199.1 206.1V210.3C199.1 222.2 209.9 231.1 221.9 231.1C229.9 231.1 237.3 227.5 240.8 220.4L244.9 212.3C248.7 204.8 256.4 199.1 264.8 199.1C271.9 199.1 278.5 203.3 282.7 208.9L299 230.7C299.6 231.5 300.6 231.1 301.7 231.1C304.1 231.1 305.8 229.4 304.6 227.2L302.5 222.9C297.5 212.8 300.7 200.6 310.1 194.3L343.1 172.3C344.9 171.1 346.3 169.5 347.2 167.6C352 158 361.8 152 372.5 152H400C413.3 152 424 162.7 424 176C424 189.3 413.3 200 400 200H379.3C374.2 200 369.3 202 365.7 205.7L360.1 210.3C360.3 210.1 360 211.8 360 212.7C360 214.5 361.5 216 363.3 216H374.6C382.7 216 390.5 219.2 396.3 224.1L402.8 231.5C406.1 234.8 408 239.3 408 243.1C408 248.7 406.1 253.2 402.8 256.5L395.3 263.1C393.2 266.1 392 268.1 392 271.1C392 275 393.2 277.9 395.3 279.1L413.7 298.3C422.4 307.1 434.3 311.1 446.6 311.1L446.6 312z"/>
</>],

]);

const EarthEurope: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EarthEurope.displayName = "EarthEurope";

export default EarthEurope;
