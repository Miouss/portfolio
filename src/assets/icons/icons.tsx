/* eslint-disable react/style-prop-object */
import { CSSProperties } from "react";

import {
  SiWindows,
  SiWindowsterminal,
  SiGithub,
  SiLinkedin,
  SiNotepadplusplus,
} from "react-icons/si";
import { GoProject } from "react-icons/go";
import { FaGlobe, FaWifi, FaPowerOff } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { TbSend } from "react-icons/tb";
import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import { RiSoundcloudLine } from "react-icons/ri";

import {
  TbPlayerPlay,
  TbPlayerPause,
  TbPlayerStop,
  TbPlayerSkipBack,
  TbPlayerSkipForward,
} from "react-icons/tb";

import {
  IoVolumeHighOutline,
  IoVolumeMediumOutline,
  IoVolumeLowOutline,
  IoVolumeOffOutline,
  IoVolumeMuteOutline,
} from "react-icons/io5";

import { ImMusic } from "react-icons/im";

import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";


export const ChevronRightIcon = (style?: CSSProperties) => (
  <BsChevronRight style={style} />
);
export const ChevronLeftIcon = (style?: CSSProperties) => (
  <BsChevronLeft style={style} />
);
export const VisibilityOnIcon = (style?: CSSProperties) => (
  <MdVisibility style={style} />
);
export const VisibilityOffIcon = (style?: CSSProperties) => (
  <MdVisibilityOff style={style} />
);
export const NowPlayingIcon = (style?: CSSProperties) => (
  <ImMusic style={style} />
);
export const PlayIcon = (style?: CSSProperties) => (
  <TbPlayerPlay style={style} />
);
export const PauseIcon = (style?: CSSProperties) => (
  <TbPlayerPause style={style} />
);
export const StopIcon = (style?: CSSProperties) => (
  <TbPlayerStop style={style} />
);
export const SkipBackIcon = (style?: CSSProperties) => (
  <TbPlayerSkipBack style={style} />
);
export const SkipForwardIcon = (style?: CSSProperties) => (
  <TbPlayerSkipForward style={style} />
);
export const VolumeMuteIcon = (style?: CSSProperties) => (
  <IoVolumeMuteOutline style={style} />
);
export const VolumeHighIcon = (style?: CSSProperties) => (
  <IoVolumeHighOutline style={style} />
);
export const VolumeMediumIcon = (style?: CSSProperties) => (
  <IoVolumeMediumOutline style={style} />
);
export const VolumeLowIcon = (style?: CSSProperties) => (
  <IoVolumeLowOutline style={style} />
);
export const VolumeZeroIcon = (style?: CSSProperties) => (
  <IoVolumeOffOutline style={style} />
);

export const PlaylistIcon = (style?: CSSProperties) => (
  <RiSoundcloudLine style={style} />
);
export const MailIcon = (style?: CSSProperties) => <BiMailSend style={style} />;
export const SendMailIcon = (style?: CSSProperties) => <TbSend style={style} />;
export const MailMinimizeIcon = (style?: CSSProperties) => (
  <HiOutlineChevronDoubleRight style={style} />
);
export const MailRefocusIcon = (style?: CSSProperties) => (
  <HiOutlineChevronDoubleLeft style={style} />
);
export const NotepadIcon = (style?: CSSProperties) => (
  <SiNotepadplusplus style={style} />
);

export const GithubIcon = (style?: CSSProperties) => <SiGithub style={style} />;
export const LinkedinIcon = (style?: CSSProperties) => (
  <SiLinkedin style={style} />
);
export const ProjectIcon = (style?: CSSProperties) => (
  <GoProject style={style} />
);
export const WindowsIcon = (style?: CSSProperties) => (
  <SiWindows style={style} />
);
export const TerminalIcon = (style?: CSSProperties) => (
  <SiWindowsterminal style={style} />
);
export const PowerIcon = (style?: CSSProperties) => (
  <FaPowerOff style={style} />
);
export const WifiIcon = (style?: CSSProperties) => <FaWifi style={style} />;
export const LangIcon = (style?: CSSProperties) => <FaGlobe style={style} />;

export const muiSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25" />
    <polygon fill="#0288d1" points="47,20 41,24 41,37 47,33" />
    <polygon fill="#0288d1" points="47,6 41,10 41,17 47,13" />
    <polygon fill="#0288d1" points="35,5 29,9 29,29 35,25" />
    <polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5" />
    <polygon fill="#0288d1" points="35,12 18,23 18,16 35,5" />
    <polygon fill="#0288d1" points="35,26 18,37 18,30 35,19" />
    <polygon fill="#0288d1" points="47,34 30,45 30,38 47,27" />
    <polygon fill="#29b6f6" points="30,37.765 18,30 18,37 30,44.765" />
  </svg>
);

export const mysqlSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0,0,256,256"
    fillRule="nonzero"
  >
    <g
      fill="#62aedc"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
    >
      <g transform="scale(10.66667,10.66667)">
        <path d="M3.125,1c-0.906,0 -1.62194,0.4805 -1.96094,1.3125c-0.107,0.257 -0.16111,0.52955 -0.16211,0.81055c-0.001,0.931 0.59898,1.68667 0.95898,2.13867c0.063,0.079 0.11969,0.14938 0.17969,0.23438l0.16211,0.21484c0.161,0.211 0.34434,0.45031 0.40234,0.57031c0.019,0.055 0.04412,0.15144 0.07813,0.27344c0.157,0.565 0.45002,1.61506 0.91602,2.41406c0.188,0.322 0.45258,0.72672 0.64258,1.01172c-0.127,0.636 -0.3418,1.80753 -0.3418,2.51953c0,1.25 0.25922,2.25388 0.82422,3.17188c0.209,0.328 0.84678,1.32813 1.92578,1.32813c0.383,0 1.01941,-0.14961 1.19141,-1.09961c0.765,0.987 2.05859,2.22461 4.05859,3.09961c0,0 -3.7492,-4.37456 -4.4082,-7.10156c0,0 -0.71717,0.72694 -1.32617,2.21094c-0.182,-0.458 -0.26562,-0.97438 -0.26562,-1.60937c0,-0.627 0.27581,-2.02862 0.38281,-2.51562l0.09375,-0.42383l-0.24609,-0.35742c-0.004,-0.007 -0.50773,-0.73423 -0.80273,-1.24023c-0.336,-0.576 -0.5838,-1.46731 -0.7168,-1.94531c-0.065,-0.233 -0.11606,-0.40163 -0.16406,-0.51562c-0.175,-0.379 -0.43125,-0.71186 -0.65625,-1.00586l-0.125,-0.16602c-0.063,-0.091 -0.14623,-0.19645 -0.24023,-0.31445c-0.183,-0.23 -0.52367,-0.65859 -0.51367,-0.93359l0.11133,-0.07812l0.00195,-0.00391c0.795,0 1.81908,0.56434 2.20508,0.77734c0.126,0.069 0.21858,0.11667 0.26758,0.13867l0.17383,0.07617l0.3418,0.01172c0.447,0.01 1.80563,0.04178 2.76562,0.42578c1.751,0.7 2.71912,1.40069 3.70312,2.67969c2.324,3.022 3.18145,6.93561 3.18945,6.97461l0.125,0.56445l0.54688,0.17773c0.019,0.007 1.54956,0.51847 2.97656,1.85547c-1.795,0.444 -2.41992,1.31836 -2.41992,1.31836c0,0 0.476,0.928 2.75,2.375c1.375,0.875 2.125,1.5 3.25,2.625c0,0 -1.12431,-2.50019 -2.69531,-4.49219c1.196,-0.383 2.66602,-0.58203 2.66602,-0.58203l-0.91016,-1.26172c-1.498,-2.077 -3.50689,-3.1252 -4.46289,-3.5332c-0.332,-1.266 -1.33469,-4.51623 -3.42969,-7.24023c-1.199,-1.559 -2.47487,-2.49131 -4.54688,-3.32031c-1.227,-0.49 -2.70238,-0.54845 -3.35938,-0.56445c-0.575,-0.316 -1.85272,-1.00586 -3.13672,-1.00586zM7.1875,5c0,0 -0.4375,0 -0.9375,0.125l1.375,1.87305c0.375,-0.498 0.375,-1.08008 0.375,-1.08008c0,0 -0.2495,-0.66797 -0.8125,-0.91797z"></path>
      </g>
    </g>
  </svg>
);

export const nodejsSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      fill="#388e3c"
      d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076M42.451 24.013l-.818.452c-.031.017-.049.048-.049.082v.906c0 .034.019.065.049.082l.818.453c.031.017.068.017.099 0l.818-.453c.03-.017.049-.048.049-.082v-.906c0-.034-.019-.065-.05-.082l-.818-.452C42.534 24.004 42.517 24 42.5 24S42.466 24.004 42.451 24.013"
    />
    <path
      fill="#37474f"
      d="M35.751,13.364l-2.389-1.333c-0.075-0.042-0.167-0.041-0.241,0.003 c-0.074,0.044-0.12,0.123-0.12,0.209L33,20.295l-2.203-1.219C30.705,19.025,30.602,19,30.5,19c-0.102,0-0.205,0.025-0.297,0.076 h0.001l-4.907,2.715C25.113,21.892,25,22.08,25,22.282v5.433c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C35.887,28.106,36,27.918,36,27.715V13.788C36,13.612,35.904,13.45,35.751,13.364z M32.866,26.458l-2.23,1.235c-0.083,0.046-0.186,0.046-0.269,0l-2.231-1.235C28.051,26.412,28,26.326,28,26.234v-2.47 c0-0.092,0.051-0.177,0.135-0.224l2.231-1.234h-0.001c0.042-0.023,0.088-0.034,0.135-0.034c0.047,0,0.093,0.012,0.135,0.034 l2.23,1.234C32.949,23.587,33,23.673,33,23.765v2.47C33,26.326,32.949,26.412,32.866,26.458z"
    />
    <path
      fill="#2e7d32"
      d="M17.204,19.122L12,27.762c0,0.203,0.113,0.39,0.297,0.492l4.908,2.717 c0.183,0.101,0.41,0.101,0.593,0L23,22.329c0-0.203-0.113-0.39-0.297-0.492l-4.906-2.715c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
    />
    <path
      fill="#4caf50"
      d="M17.204,19.122l-4.907,2.715C12.113,21.938,12,22.126,12,22.329l5.204,8.642 c0.183,0.101,0.41,0.101,0.593,0l4.907-2.717C22.887,28.152,23,27.965,23,27.762l-5.203-8.64c-0.092-0.051-0.195-0.076-0.297-0.076 c-0.103,0-0.205,0.025-0.297,0.076"
    />
    <path
      fill="#37474f"
      d="M47.703 21.791l-4.906-2.715C42.705 19.025 42.602 19 42.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C37.114 21.892 37 22.084 37 22.294v5.411c0 .209.114.402.297.503l4.908 2.717c.184.102.409.102.593 0l2.263-1.253c.207-.115.206-.412-.002-.526l-4.924-2.687C40.052 26.412 40 26.325 40 26.231v-2.466c0-.092.05-.177.13-.221l2.235-1.236h-.001c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237c.08.044.13.129.13.221v2.012c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88C48 22.085 47.886 21.892 47.703 21.791zM10.703 21.791l-4.906-2.715C5.705 19.025 5.602 19 5.5 19c-.102 0-.205.025-.297.076h.001l-4.907 2.715C.114 21.892 0 22.084 0 22.294v7.465c0 .086.046.166.121.209.075.042.167.042.242-.001l2.398-1.393C2.909 28.488 3 28.329 3 28.157v-4.393c0-.092.05-.177.13-.221l2.235-1.236H5.365c.042-.023.088-.034.135-.034.047 0 .093.012.135.034l2.235 1.237C7.95 23.588 8 23.673 8 23.765v4.393c0 .172.091.331.24.417l2.398 1.393c.075.043.167.043.242.001C10.954 29.925 11 29.845 11 29.759v-7.464C11 22.085 10.886 21.892 10.703 21.791z"
    />
  </svg>
);

export const reactSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="7" fill="#39c1d7" />
    <path
      fill="#1f212b"
      d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6	s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"
    />
    <path
      fill="#39c1d7"
      d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729	c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399	c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50	s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975	c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399	c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729	C82.026,60.029,88.5,55.376,88.5,50z M63.369,18.791c0.725-0.193,1.397-0.291,2.016-0.291c0.86,0,1.616,0.188,2.257,0.563	c3.092,1.806,3.723,8.42,1.42,17.411c-3.173-0.714-6.635-1.251-10.314-1.583c-2.159-3.113-4.405-5.947-6.668-8.429	C56.098,22.435,60.04,19.683,63.369,18.791z M60.755,56.299c-1.179,2.066-2.42,4.045-3.693,5.939C54.802,62.407,52.446,62.5,50,62.5	s-4.802-0.093-7.061-0.262c-1.273-1.894-2.514-3.873-3.693-5.939c-1.219-2.136-2.313-4.24-3.293-6.298	c0.98-2.058,2.074-4.162,3.293-6.299c1.18-2.067,2.42-4.046,3.694-5.94C45.199,37.593,47.554,37.5,50,37.5s4.801,0.093,7.061,0.262	c1.273,1.894,2.514,3.874,3.694,5.94c1.219,2.136,2.313,4.24,3.293,6.299C63.068,52.059,61.974,54.163,60.755,56.299z M65.644,53.545c1.041,2.461,1.901,4.83,2.597,7.082c-2.275,0.507-4.731,0.93-7.354,1.243c0.842-1.326,1.672-2.682,2.473-4.085	C64.171,56.366,64.928,54.951,65.644,53.545z M50,71.357c-1.636-1.809-3.269-3.812-4.864-5.979C46.728,65.455,48.348,65.5,50,65.5	s3.272-0.045,4.864-0.122C53.269,67.544,51.636,69.547,50,71.357z M39.112,61.87c-2.622-0.313-5.079-0.736-7.354-1.243	c0.696-2.252,1.556-4.622,2.597-7.082c0.716,1.406,1.474,2.821,2.284,4.24C37.441,59.189,38.27,60.545,39.112,61.87z M34.356,46.456	c-1.041-2.461-1.902-4.831-2.597-7.084c2.275-0.507,4.732-0.93,7.355-1.243c-0.843,1.326-1.672,2.683-2.473,4.086	C35.829,43.635,35.072,45.05,34.356,46.456z M50,28.644c1.636,1.809,3.269,3.812,4.864,5.979C53.272,34.545,51.652,34.5,50,34.5	s-3.272,0.045-4.864,0.122C46.731,32.456,48.364,30.453,50,28.644z M63.36,42.216c-0.801-1.404-1.631-2.76-2.473-4.086	c2.623,0.313,5.079,0.736,7.355,1.243c-0.696,2.253-1.556,4.622-2.597,7.084C64.928,45.05,64.171,43.635,63.36,42.216z M32.358,19.063C33,18.688,33.754,18.5,34.615,18.5c0.618,0,1.292,0.098,2.016,0.291c3.329,0.892,7.271,3.643,11.289,7.67	c-2.263,2.482-4.509,5.317-6.668,8.429c-3.679,0.332-7.142,0.869-10.314,1.583C28.635,27.482,29.266,20.868,32.358,19.063z M14.5,50	c0-3.596,5.401-7.44,14.335-9.901c0.969,3.159,2.241,6.486,3.806,9.901c-1.565,3.415-2.837,6.742-3.806,9.901	C19.901,57.44,14.5,53.596,14.5,50z M36.631,81.209c-1.733,0.462-3.17,0.371-4.273-0.271c-3.092-1.806-3.722-8.42-1.42-17.411	c3.172,0.714,6.635,1.251,10.313,1.583c2.159,3.113,4.405,5.947,6.668,8.43C43.902,77.566,39.96,80.317,36.631,81.209z M67.642,80.938c-1.103,0.644-2.539,0.734-4.273,0.271c-3.329-0.892-7.271-3.643-11.289-7.67c2.263-2.482,4.509-5.317,6.668-8.43	c3.679-0.332,7.141-0.869,10.313-1.583C71.365,72.518,70.734,79.132,67.642,80.938z M71.165,59.901	c-0.969-3.159-2.241-6.486-3.806-9.901c1.565-3.415,2.837-6.743,3.806-9.901C80.099,42.56,85.5,46.404,85.5,50	S80.099,57.44,71.165,59.901z"
    />
    <path
      fill="#1f212b"
      d="M34.595,85.002c-1.471,0-2.817-0.351-4.001-1.043c-4.632-2.705-5.783-10.276-3.178-20.811	C16.975,60.179,11,55.4,11,50s5.975-10.179,16.415-13.148c-2.604-10.535-1.453-18.106,3.179-20.811	c1.938-1.134,4.273-1.346,6.943-0.63c3.718,0.996,8.02,3.82,12.463,8.179c4.444-4.359,8.746-7.183,12.463-8.179	c2.669-0.714,5.005-0.502,6.944,0.63c4.631,2.705,5.782,10.276,3.178,20.811C83.025,39.821,89,44.6,89,50	s-5.975,10.179-16.415,13.148c2.604,10.535,1.454,18.105-3.178,20.811c-1.927,1.125-4.286,1.342-6.943,0.63	c-3.719-0.996-8.021-3.82-12.464-8.178c-4.443,4.358-8.745,7.183-12.463,8.178c-1.023,0.274-2.011,0.413-2.936,0.413	C34.599,85.002,34.597,85.002,34.595,85.002z M34.604,15.999c-1.301,0-2.474,0.302-3.507,0.906	c-4.224,2.467-5.194,10.008-2.595,20.173c0.067,0.264-0.089,0.534-0.352,0.606C18.038,40.472,12,45.077,12,50	s6.038,9.528,16.151,12.316c0.263,0.072,0.419,0.342,0.352,0.606c-2.6,10.165-1.63,17.707,2.594,20.173	c1.03,0.601,2.207,0.906,3.498,0.906c0.002,0,0.004,0,0.006,0c0.838,0,1.738-0.127,2.677-0.378c3.647-0.977,7.925-3.836,12.369-8.27	c0.195-0.194,0.511-0.194,0.706,0c4.444,4.433,8.722,7.292,12.369,8.27c2.394,0.639,4.485,0.461,6.181-0.528	c4.224-2.467,5.194-10.008,2.594-20.173c-0.067-0.264,0.089-0.534,0.352-0.606C81.962,59.528,88,54.923,88,50	s-6.038-9.528-16.151-12.316c-0.263-0.072-0.419-0.342-0.352-0.606c2.599-10.165,1.629-17.707-2.595-20.173	c-1.699-0.993-3.779-1.17-6.181-0.528c-3.647,0.977-7.924,3.836-12.369,8.27c-0.195,0.194-0.511,0.194-0.706,0	c-4.445-4.434-8.722-7.293-12.369-8.27C36.336,16.125,35.444,15.999,34.604,15.999z M65.386,81.999	c-0.663,0-1.379-0.102-2.146-0.307c-3.331-0.893-7.312-3.589-11.514-7.8c-0.188-0.189-0.195-0.493-0.016-0.69	c2.265-2.484,4.494-5.303,6.627-8.378c0.084-0.122,0.218-0.2,0.366-0.213c3.612-0.326,7.06-0.855,10.249-1.573	c0.261-0.059,0.527,0.101,0.594,0.364c2.336,9.123,1.703,16.008-1.652,17.967l0,0C67.175,81.789,66.336,81.999,65.386,81.999z M52.771,73.521c3.951,3.894,7.653,6.381,10.727,7.205c1.599,0.427,2.909,0.353,3.892-0.22l0,0	c2.855-1.668,3.357-8.073,1.306-16.387c-3.028,0.659-6.277,1.152-9.67,1.467C57.01,68.478,54.908,71.144,52.771,73.521z M34.614,81.999c-0.95,0-1.789-0.21-2.508-0.629c-3.355-1.96-3.989-8.845-1.652-17.968c0.067-0.262,0.333-0.419,0.594-0.364	c3.188,0.718,6.636,1.247,10.249,1.573c0.147,0.013,0.282,0.091,0.366,0.213c2.133,3.075,4.362,5.894,6.627,8.378	c0.18,0.197,0.173,0.501-0.016,0.69c-4.202,4.21-8.183,6.907-11.513,7.8h0C35.993,81.896,35.276,81.999,34.614,81.999z M31.304,64.119c-2.051,8.313-1.549,14.719,1.306,16.387c0.982,0.572,2.292,0.647,3.892,0.22l0,0	c3.074-0.824,6.776-3.312,10.727-7.205c-2.136-2.377-4.238-5.043-6.254-7.935C37.582,65.271,34.332,64.778,31.304,64.119z M50,71.856c-0.141,0-0.276-0.06-0.371-0.165c-1.663-1.839-3.31-3.864-4.896-6.018c-0.114-0.155-0.129-0.363-0.038-0.533	c0.091-0.17,0.261-0.274,0.465-0.263c3.306,0.161,6.374,0.161,9.68,0c0.2-0.012,0.374,0.093,0.465,0.263	c0.091,0.17,0.077,0.377-0.038,0.533c-1.586,2.153-3.233,4.178-4.896,6.018C50.276,71.796,50.141,71.856,50,71.856z M46.167,65.924	c1.251,1.655,2.537,3.226,3.833,4.684c1.297-1.458,2.582-3.028,3.833-4.684C51.221,66.024,48.779,66.024,46.167,65.924z M50,63	c-2.369,0-4.757-0.088-7.099-0.263c-0.153-0.011-0.292-0.092-0.378-0.22c-1.337-1.989-2.586-3.998-3.712-5.97	c-1.18-2.068-2.294-4.198-3.31-6.332c-0.065-0.136-0.065-0.294,0-0.43c1.016-2.134,2.13-4.264,3.31-6.332	c1.125-1.97,2.374-3.979,3.713-5.971c0.085-0.127,0.225-0.208,0.378-0.22c4.684-0.35,9.513-0.35,14.196,0	c0.153,0.011,0.292,0.092,0.378,0.22c1.339,1.992,2.588,4.001,3.713,5.971c1.18,2.068,2.294,4.198,3.31,6.332	c0.065,0.136,0.065,0.294,0,0.43c-1.016,2.134-2.13,4.264-3.31,6.332l0,0c-1.126,1.972-2.375,3.981-3.712,5.97	c-0.085,0.127-0.225,0.208-0.378,0.22C54.757,62.912,52.369,63,50,63z M43.218,61.757c4.479,0.322,9.085,0.322,13.563,0	c1.273-1.903,2.463-3.822,3.539-5.707c1.128-1.977,2.195-4.011,3.173-6.05c-0.978-2.039-2.045-4.074-3.173-6.05	c-1.075-1.883-2.265-3.802-3.54-5.708c-4.479-0.322-9.084-0.322-13.563,0c-1.274,1.906-2.465,3.825-3.54,5.708	c-1.128,1.977-2.195,4.011-3.173,6.05c0.978,2.039,2.045,4.074,3.173,6.05C40.755,57.936,41.945,59.854,43.218,61.757z M60.888,62.371c-0.17,0-0.331-0.087-0.423-0.233c-0.103-0.164-0.102-0.372,0.001-0.535c0.928-1.461,1.733-2.791,2.46-4.065	c0.764-1.338,1.528-2.758,2.273-4.219c0.088-0.173,0.273-0.276,0.463-0.272c0.194,0.007,0.367,0.125,0.443,0.305	c1.015,2.399,1.894,4.798,2.614,7.129c0.042,0.133,0.025,0.278-0.045,0.398c-0.07,0.121-0.188,0.207-0.324,0.237	c-2.35,0.525-4.841,0.946-7.403,1.252C60.927,62.37,60.907,62.371,60.888,62.371z M65.596,54.731	c-0.594,1.138-1.198,2.245-1.801,3.302c-0.583,1.022-1.216,2.079-1.92,3.209c1.97-0.262,3.89-0.593,5.727-0.987	C67.025,58.441,66.353,56.59,65.596,54.731z M39.112,62.371c-0.02,0-0.04-0.001-0.06-0.003C36.491,62.061,34,61.64,31.65,61.115	c-0.136-0.03-0.253-0.116-0.324-0.237c-0.07-0.121-0.086-0.265-0.045-0.398c0.72-2.332,1.599-4.73,2.614-7.129	c0.076-0.179,0.249-0.298,0.443-0.305c0.182-0.019,0.375,0.099,0.463,0.272c0.745,1.461,1.509,2.881,2.273,4.219	c0.728,1.274,1.533,2.604,2.46,4.065c0.104,0.163,0.104,0.371,0.001,0.535C39.443,62.284,39.283,62.371,39.112,62.371z M32.399,60.255c1.837,0.394,3.757,0.725,5.727,0.987c-0.705-1.13-1.337-2.187-1.92-3.209c-0.604-1.057-1.207-2.165-1.801-3.302	C33.647,56.59,32.975,58.441,32.399,60.255z M71.165,60.401c-0.215,0-0.412-0.139-0.478-0.354c-0.975-3.179-2.248-6.489-3.782-9.838	c-0.061-0.132-0.061-0.285,0-0.417c1.534-3.349,2.807-6.66,3.783-9.84c0.08-0.259,0.354-0.404,0.611-0.335	C80.367,42.116,86,46.094,86,50s-5.634,7.884-14.703,10.383C71.253,60.395,71.208,60.401,71.165,60.401z M67.909,50	c1.436,3.155,2.643,6.277,3.589,9.288C79.717,56.945,85,53.322,85,50s-5.283-6.945-13.502-9.288	C70.551,43.724,69.344,46.846,67.909,50z M28.835,60.401c-0.044,0-0.088-0.006-0.133-0.018C19.634,57.884,14,53.906,14,50	s5.633-7.884,14.702-10.383c0.258-0.069,0.531,0.076,0.611,0.335c0.976,3.18,2.249,6.491,3.783,9.84	c0.061,0.132,0.061,0.284,0,0.417c-1.535,3.35-2.807,6.66-3.782,9.838C29.248,60.262,29.05,60.401,28.835,60.401z M28.502,40.712	C20.283,43.055,15,46.678,15,50s5.283,6.945,13.502,9.288c0.947-3.011,2.153-6.132,3.589-9.288	C30.656,46.846,29.449,43.724,28.502,40.712z M65.645,46.957c-0.188,0-0.36-0.105-0.446-0.273c-0.757-1.488-1.501-2.869-2.272-4.22	l0,0c-0.726-1.272-1.531-2.602-2.461-4.066c-0.104-0.163-0.104-0.371-0.001-0.535c0.103-0.163,0.287-0.253,0.483-0.23	c2.563,0.307,5.054,0.728,7.404,1.252c0.136,0.03,0.253,0.116,0.324,0.237c0.07,0.121,0.086,0.265,0.045,0.398	c-0.721,2.336-1.601,4.735-2.614,7.131c-0.076,0.179-0.249,0.298-0.443,0.305C65.656,46.957,65.65,46.957,65.645,46.957z M63.794,41.968c0.611,1.07,1.205,2.158,1.801,3.302c0.756-1.856,1.428-3.709,2.005-5.525c-1.837-0.394-3.757-0.725-5.728-0.987	C62.58,39.89,63.212,40.947,63.794,41.968L63.794,41.968z M34.355,46.957c-0.006,0-0.012,0-0.018,0	c-0.194-0.007-0.367-0.125-0.443-0.305c-1.013-2.396-1.893-4.795-2.614-7.131c-0.042-0.133-0.025-0.278,0.045-0.398	c0.07-0.121,0.188-0.207,0.324-0.237c2.35-0.525,4.841-0.946,7.404-1.252c0.195-0.02,0.38,0.067,0.483,0.23	c0.103,0.164,0.102,0.372-0.001,0.535c-0.93,1.464-1.735,2.794-2.461,4.066c-0.771,1.351-1.515,2.731-2.272,4.22	C34.715,46.852,34.543,46.957,34.355,46.957z M32.399,39.745c0.577,1.816,1.25,3.669,2.005,5.525	c0.597-1.144,1.19-2.232,1.801-3.302c0.583-1.021,1.215-2.078,1.921-3.21C36.156,39.02,34.236,39.351,32.399,39.745z M69.063,36.974	c-0.037,0-0.073-0.004-0.11-0.012c-3.188-0.718-6.637-1.247-10.25-1.573c-0.147-0.013-0.282-0.091-0.366-0.213	c-2.133-3.076-4.363-5.894-6.627-8.377c-0.18-0.197-0.173-0.501,0.016-0.69c4.201-4.21,8.183-6.908,11.514-7.8h0	c1.869-0.5,3.438-0.387,4.654,0.322c3.355,1.96,3.989,8.845,1.653,17.968C69.489,36.823,69.287,36.974,69.063,36.974z M59.025,34.414c3.393,0.315,6.643,0.808,9.671,1.467c2.051-8.313,1.549-14.719-1.307-16.387c-0.979-0.571-2.291-0.646-3.891-0.22	c-3.074,0.824-6.777,3.312-10.728,7.206C54.907,28.855,57.009,31.521,59.025,34.414z M30.937,36.974	c-0.224,0-0.426-0.151-0.484-0.376c-2.336-9.123-1.703-16.007,1.652-17.967c0,0,0,0,0.001,0c1.216-0.709,2.787-0.822,4.653-0.322	c3.332,0.893,7.313,3.59,11.514,7.8c0.188,0.189,0.195,0.493,0.016,0.69c-2.264,2.483-4.494,5.302-6.627,8.377	c-0.084,0.122-0.218,0.2-0.366,0.213c-3.612,0.326-7.061,0.855-10.25,1.573C31.01,36.97,30.974,36.974,30.937,36.974z M32.61,19.494	c-2.855,1.668-3.357,8.074-1.307,16.387c3.028-0.659,6.278-1.152,9.671-1.467c2.017-2.893,4.118-5.559,6.254-7.935	c-3.951-3.894-7.653-6.382-10.728-7.206C34.907,18.848,33.593,18.922,32.61,19.494L32.61,19.494z M54.864,35.122	c-0.008,0-0.016,0-0.024,0c-3.306-0.161-6.373-0.161-9.679,0c-0.206,0.005-0.374-0.094-0.465-0.263	c-0.091-0.17-0.077-0.377,0.038-0.533c1.587-2.155,3.234-4.18,4.896-6.018c0.19-0.209,0.552-0.209,0.742,0	c1.661,1.837,3.308,3.862,4.896,6.018c0.114,0.155,0.129,0.363,0.038,0.533C55.217,35.021,55.047,35.122,54.864,35.122z M50,34	c1.242,0,2.527,0.026,3.833,0.077c-1.252-1.657-2.538-3.228-3.833-4.684c-1.295,1.457-2.581,3.027-3.833,4.684	C47.473,34.026,48.758,34,50,34z"
    />
  </svg>
);

export const reduxSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path
      fill="#7e57c2"
      d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
    />
    <path
      fill="#7e57c2"
      d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
    />
    <path
      fill="#7e57c2"
      d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
    />
  </svg>
);

export const expressSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z" />
  </svg>
);

export const phpSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <defs>
      <clipPath id="A">
        <path d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162" />
      </clipPath>
      <radialGradient
        cx="0"
        cy="0"
        fx="0"
        fy="0"
        gradientTransform="matrix(363.05789,0,0,-363.05789,177.52002,256.30713)"
        gradientUnits="userSpaceOnUse"
        id="B"
        r="1"
        spreadMethod="pad"
      >
        <stop offset="0" stopColor="#aeb2d5" />
        <stop offset=".3" stopColor="#aeb2d5" />
        <stop offset=".75" stopColor="#484c89" />
        <stop offset="1" stopColor="#484c89" />
      </radialGradient>
      <clipPath id="C">
        <path d="M0 324h576V0H0v324z" />
      </clipPath>
      <clipPath id="D">
        <path d="M0 324h576V0H0v324z" />
      </clipPath>
    </defs>
    <g transform="matrix(.05787 0 0 -.057079 -.666665 24.945283)">
      <g clipPath="url(#A)">
        <path
          d="M11.52 162C11.52 81.677 135.307 16.56 288 16.56S564.48 81.677 564.48 162 440.693 307.44 288 307.44 11.52 242.322 11.52 162"
          fill="url(#B)"
        />
      </g>
      <g clipPath="url(#C)">
        <path
          d="M288 27.36c146.73 0 265.68 60.28 265.68 134.64S434.73 296.64 288 296.64 22.32 236.36 22.32 162 141.27 27.36 288 27.36"
          fill="#777bb3"
        />
      </g>
      <g clipPath="url(#D)">
        <path d="M161.734 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.862 11.573 22.353 1.903 9.806 1.178 16.653-2.154 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zM98.67 77.557c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.63 2.48l28.328 145.75a3 3 0 0 0 2.945 2.427h61.054c19.188 0 33.47-5.2 42.447-15.487 9.025-10.33 11.812-24.772 8.283-42.92-1.436-7.394-3.906-14.26-7.34-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93h-24.722l-7.06-36.322a3 3 0 0 0-2.944-2.428H98.67z" />
        <path
          d="M159.224 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.628-2.914 3.124-9.058 1.435-17.767-1.898-9.75-5.416-16.663-10.458-20.545-5.162-3.974-13.554-5.988-24.94-5.988H149.7l9.523 49zm28.83 35H127a6 6 0 0 1-5.889-4.855L92.783 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.588 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.354 13.984 5.752 5.292 10.5 11.232 14.08 17.657s6.17 13.594 7.668 21.302c3.715 19.104.697 34.402-8.97 45.466-9.572 10.958-24.614 16.514-44.706 16.514m-45.633-90h19.313c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.1 10.832 1.144 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.856-61m45.633 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75L127 226.307h61.055"
          fill="#fff"
        />
        <path d="M311.583 116.307c-.896 0-1.745.4-2.314 1.092s-.802 1.6-.63 2.48l12.53 64.49c1.192 6.133.898 10.535-.827 12.395-1.056 1.137-4.228 3.044-13.607 3.044h-22.702l-15.755-81.072a3 3 0 0 0-2.945-2.428h-31.5a3 3 0 0 0-2.945 3.572l28.328 145.75a3 3 0 0 0 2.945 2.427h31.5a3 3 0 0 0 2.945-3.572l-6.836-35.178h24.422c18.605 0 31.22-3.28 38.57-10.028 7.5-6.884 9.827-17.89 6.947-32.72l-13.18-67.825a3 3 0 0 0-2.945-2.428h-32z" />
        <path
          d="M293.66 271.057h-31.5a6 6 0 0 1-5.89-4.855l-28.328-145.75a6 6 0 0 1 5.89-7.144h31.5a6 6 0 0 1 5.89 4.855l15.283 78.645h20.23c9.363 0 11.328-2 11.407-2.086.568-.61 1.315-3.44.082-9.78l-12.53-64.49a6 6 0 0 1 5.89-7.144h32a6 6 0 0 1 5.89 4.855l13.18 67.825c3.093 15.92.447 27.864-7.86 35.5-7.928 7.28-21.208 10.82-40.6 10.82h-20.784l6.143 31.605a6 6 0 0 1-5.89 7.145m0-6l-7.53-38.75h28.062c17.657 0 29.836-3.082 36.54-9.238s8.71-16.14 6.032-29.938l-13.18-67.824h-32l12.53 64.488c1.426 7.336.902 12.34-1.574 15.008s-7.746 4.004-15.805 4.004H281.56l-16.226-83.5h-31.5l28.328 145.75h31.5"
          fill="#fff"
        />
        <path d="M409.55 145.307c12.065 0 21.072 2.225 26.77 6.61 5.638 4.34 9.532 11.86 11.574 22.353 1.903 9.806 1.178 16.653-2.155 20.348-3.407 3.774-10.773 5.688-21.893 5.688h-19.28l-10.69-55h15.673zm-63.062-67.75c-.895 0-1.745.4-2.314 1.092a3 3 0 0 0-.631 2.48l28.328 145.75a3 3 0 0 0 2.946 2.427h61.053c19.19 0 33.47-5.2 42.448-15.487 9.025-10.33 11.81-24.77 8.283-42.92-1.438-7.394-3.907-14.26-7.342-20.41-3.44-6.155-7.984-11.85-13.51-16.93-6.616-6.192-14.104-10.682-22.236-13.324-8.003-2.607-18.28-3.93-30.548-3.93H388.24l-7.057-36.322a3 3 0 0 0-2.946-2.428h-31.75z" />
        <path
          d="M407.04 197.307h16.808c13.42 0 18.083-2.945 19.667-4.7 2.63-2.914 3.125-9.058 1.435-17.766-1.898-9.75-5.417-16.664-10.458-20.546-5.162-3.974-13.554-5.988-24.94-5.988h-12.033l9.522 49zm28.83 35h-61.054a6 6 0 0 1-5.889-4.855L340.6 81.7a6 6 0 0 1 5.889-7.144h31.75a6 6 0 0 1 5.89 4.855l6.587 33.895h22.25c12.582 0 23.174 1.372 31.48 4.077 8.54 2.775 16.4 7.48 23.356 13.986 5.752 5.29 10.488 11.23 14.078 17.655s6.17 13.594 7.668 21.302c3.715 19.105.697 34.403-8.97 45.467-9.572 10.957-24.613 16.513-44.706 16.513m-45.632-90h19.312c12.8 0 22.336 2.41 28.6 7.234s10.492 12.875 12.688 24.157c2.102 10.832 1.145 18.476-2.87 22.93s-12.06 6.68-24.12 6.68h-21.754l-11.855-61m45.632 84c18.367 0 31.766-4.82 40.188-14.46s10.957-23.098 7.597-40.375c-1.383-7.117-3.722-13.624-7.015-19.52s-7.602-11.293-12.922-16.184c-6.34-5.933-13.383-10.16-21.133-12.68-7.75-2.525-17.62-3.782-29.62-3.782h-27.196l-7.53-38.75h-31.75l28.328 145.75h61.054"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);

export const electronSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <g fill="none" fillRule="evenodd">
      <circle fill="#2B2E3A" cx="128" cy="128" r="128" />
      <g fill="#9FEAF9" fillRule="nonzero">
        <path d="M100.502 71.69c-26.005-4.736-46.567.221-54.762 14.415-6.115 10.592-4.367 24.635 4.24 39.646a2.667 2.667 0 1 0 4.626-2.653c-7.752-13.522-9.261-25.641-4.247-34.326 6.808-11.791 25.148-16.213 49.187-11.835a2.667 2.667 0 0 0 .956-5.247zm-36.999 72.307c10.515 11.555 24.176 22.394 39.756 31.388 37.723 21.78 77.883 27.601 97.675 14.106a2.667 2.667 0 1 0-3.005-4.406c-17.714 12.078-55.862 6.548-92.003-14.318-15.114-8.726-28.343-19.222-38.478-30.36a2.667 2.667 0 1 0-3.945 3.59z" />
        <path d="M194.62 140.753c17.028-20.116 22.973-40.348 14.795-54.512-6.017-10.423-18.738-15.926-35.645-16.146a2.667 2.667 0 0 0-.069 5.333c15.205.198 26.165 4.939 31.096 13.48 6.792 11.765 1.49 29.807-14.248 48.399a2.667 2.667 0 1 0 4.071 3.446zm-43.761-68.175c-15.396 3.299-31.784 9.749-47.522 18.835-38.942 22.483-64.345 55.636-60.817 79.675a2.667 2.667 0 1 0 5.277-.775c-3.133-21.344 20.947-52.769 58.207-74.281 15.267-8.815 31.135-15.06 45.972-18.239a2.667 2.667 0 1 0-1.117-5.215z" />
        <path d="M87.77 187.753c8.904 24.86 23.469 40.167 39.847 40.167 11.945 0 22.996-8.143 31.614-22.478a2.667 2.667 0 1 0-4.571-2.748c-7.745 12.883-17.258 19.892-27.043 19.892-13.605 0-26.596-13.652-34.825-36.63a2.667 2.667 0 1 0-5.021 1.797zm81.322-4.863c4.61-14.728 7.085-31.718 7.085-49.423 0-44.179-15.463-82.263-37.487-92.042a2.667 2.667 0 0 0-2.164 4.874c19.643 8.723 34.317 44.866 34.317 87.168 0 17.177-2.397 33.63-6.84 47.83a2.667 2.667 0 1 0 5.09 1.593zm50.224-2.612c0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763 7.049 0 12.763-5.714 12.763-12.763zm-5.333 0a7.43 7.43 0 1 1-14.86 0 7.43 7.43 0 0 1 14.86 0zM48.497 193.041c7.05 0 12.764-5.714 12.764-12.763 0-7.049-5.715-12.763-12.764-12.763-7.048 0-12.763 5.714-12.763 12.763 0 7.049 5.715 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86z" />
        <path d="M127.617 54.444c7.049 0 12.763-5.714 12.763-12.763 0-7.049-5.714-12.763-12.763-12.763-7.049 0-12.763 5.714-12.763 12.763 0 7.049 5.714 12.763 12.763 12.763zm0-5.333a7.43 7.43 0 1 1 0-14.86 7.43 7.43 0 0 1 0 14.86zm1.949 93.382c-4.985 1.077-9.896-2.091-10.975-7.076a9.236 9.236 0 0 1 7.076-10.976c4.985-1.077 9.896 2.091 10.976 7.076 1.077 4.985-2.091 9.897-7.077 10.976z" />
      </g>
    </g>
  </svg>
);
