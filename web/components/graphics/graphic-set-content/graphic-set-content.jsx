const GraphicSetContent = ({ content }) => {
  let contentEl = "";
  switch (content) {
    case "architect":
      contentEl = (
        <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 90 90">
          {/* <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> */}
          <g id="icon_architect" className="_H-fit">
            <path
              className="_svg-Primary"
              d="M50,5A20,20,0,1,0,70,25,20,20,0,0,0,50,5Zm0,34A14,14,0,1,1,64,25,14,14,0,0,1,50,39Z"
            />
            <path
              className="_svg-Primary"
              d="M39.08,57.56A39,39,0,0,0,11.35,89.8,6,6,0,0,1,5.4,95H5A45,45,0,0,1,43.26,50.51l.05.25A6,6,0,0,1,39.08,57.56Z"
            />
            <path
              className="_svg-Primary"
              d="M56.69,50.76l.05-.25A45,45,0,0,1,95,95h-.4a6,6,0,0,1-5.95-5.2A39,39,0,0,0,60.92,57.56,6,6,0,0,1,56.69,50.76Z"
            />
          </g>
        </svg>
      );
      break;

    case "client":
      contentEl = (
        <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="5 5 90 90">
          {/* <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"> */}
          <g id="icon_client" className="_H-fit">
            <path
              className="_svg-Primary"
              d="M50,5A20,20,0,1,0,70,25,20,20,0,0,0,50,5Zm0,34A14,14,0,1,1,64,25,14,14,0,0,1,50,39Z"
            />
            <path className="_svg-Primary" d="M53,95H47V63a3,3,0,0,1,6,0Z" />
            <path className="_svg-Primary" d="M47,50.08V56a3,3,0,0,0,6,0V50.08A54.59,54.59,0,0,0,47,50.08Z" />
            <path
              className="_svg-Primary"
              d="M39.08,57.56A39,39,0,0,0,11.35,89.8,6,6,0,0,1,5.4,95H5A45,45,0,0,1,43.26,50.51l.05.25A6,6,0,0,1,39.08,57.56Z"
            />
            <path
              className="_svg-Primary"
              d="M56.69,50.76l.05-.25A45,45,0,0,1,95,95h-.4a6,6,0,0,1-5.95-5.2A39,39,0,0,0,60.92,57.56,6,6,0,0,1,56.69,50.76Z"
            />
          </g>
        </svg>
      );
      break;

    case "project-brief":
      contentEl = (
        <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
          <g id="icon_project-brief" className="_H-fit">
            <path className="_svg-Primary" d="M94,77a6,6,0,0,0,6,6h6a3,3,0,0,1,0,6H5v6H106a9,9,0,0,0,0-18Z" />
            <path
              className="_svg-Primary"
              d="M115,17A12,12,0,0,0,103,5H94V74h6V11h3a6,6,0,0,1,6,6V74.38a12,12,0,0,1,6,3.68Z"
            />
            <polygon className="_svg-Primary" points="5 86 11 86 11 20 91 20 91 14 5 14 5 86" />
            <polygon className="_svg-Primary" points="38 29 32.35 29 26 29 26 32 38 32 38 29" />
            <circle className="_svg-Primary" cx="21.5" cy="30.5" r="1.5" />
            <polygon className="_svg-Primary" points="38 41 32.35 41 26 41 26 44 38 44 38 41" />
            <circle className="_svg-Primary" cx="21.5" cy="42.5" r="1.5" />
            <polygon className="_svg-Primary" points="38 53 32.35 53 26 53 26 56 38 56 38 53" />
            <circle className="_svg-Primary" cx="21.5" cy="54.5" r="1.5" />
            <polygon className="_svg-Primary" points="56 35 32.35 35 26 35 26 38 56 38 56 35" />
            <polygon className="_svg-Primary" points="56 47 32.35 47 26 47 26 50 56 50 56 47" />
            <polygon className="_svg-Primary" points="56 59 32.35 59 26 59 26 62 56 62 56 59" />
          </g>
        </svg>
      );
      break;

    case "project-design":
      contentEl = (
        <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 100">
          <g id="icon_project-design" className="_H-fit">
            <polygon className="_svg-Primary" points="11 20 11 86 5 86 5 14 91 14 91 20 11 20" />
            <path
              className="_svg-Primary"
              d="M100,74H94V5h9a12,12,0,0,1,12,12V78.06a12,12,0,0,0-6-3.68V17a6,6,0,0,0-6-6h-3Z"
            />
            <path
              className="_svg-Primary"
              d="M38.56,35.5a7.5,7.5,0,1,0,7.5,7.5A7.5,7.5,0,0,0,38.56,35.5Zm0,12a4.5,4.5,0,1,1,4.5-4.5A4.49,4.49,0,0,1,38.56,47.5Z"
            />
            <path
              className="_svg-Primary"
              d="M39.31,62.11h1.54l.4,1.5H39.31v.75a.75.75,0,0,1-1.5,0v-.75h-2l.4-1.5h1.55v-.75a.75.75,0,0,1,1.5,0Z"
            />
            <path className="_svg-Primary" d="M47.49,63.71h3.13a.75.75,0,0,0,0-1.5H47.09Z" />
            <path className="_svg-Primary" d="M29.62,63.71H26.49a.75.75,0,0,1,0-1.5H30Z" />
            <path
              className="_svg-Primary"
              d="M29.19,81.86v.76a.38.38,0,1,1-.75,0v-.76a.74.74,0,0,1-.37-.65v-5.8a1.23,1.23,0,0,1,0-.19l6.08-22.68a10.28,10.28,0,0,0,2.88.85l-7.51,28A.74.74,0,0,1,29.19,81.86Z"
            />
            <path
              className="_svg-Primary"
              d="M40.06,32.61V27.5a1.5,1.5,0,0,0-3,0v5.11A10.06,10.06,0,0,1,40.06,32.61Z"
            />
            <path
              className="_svg-Primary"
              d="M47.92,81.86v.76a.38.38,0,0,0,.38.38.37.37,0,0,0,.37-.38v-.76a.73.73,0,0,0,.38-.65v-5.8a.63.63,0,0,0,0-.19L43,52.54a10.48,10.48,0,0,1-2.88.85l7.5,28A.78.78,0,0,0,47.92,81.86Z"
            />
            <path className="_svg-Primary" d="M106,83a3,3,0,0,1,0,6H5v6H106a9,9,0,0,0,0-18H94a6,6,0,0,0,6,6Z" />
          </g>
        </svg>
      );
      break;

    case "arrows-expand":
      contentEl = (
        <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g id="icon_arrows-expand" className="_H-fit">
            <g id="arrow-top-right">
              <path className="_svg-primary" d="M89,39V11H61a6,6,0,0,1-6-6H89a6,6,0,0,1,6,6V45A6,6,0,0,1,89,39Z" />
              <polygon className="_svg-primary" points="76.52 15 85 15 53.54 46.46 53.54 37.98 76.52 15" />
            </g>
            <g id="arrow-bottom-left">
              <path className="_svg-primary" d="M39,89H11V61a6,6,0,0,0-6-6V89a6,6,0,0,0,6,6H45A6,6,0,0,0,39,89Z" />
              <polygon className="_svg-primary" points="47.17 61.31 47.17 52.83 15 85 23.48 85 47.17 61.31" />
            </g>
          </g>
        </svg>
      );
      break;

    case "arrows-minimize":
      contentEl = (
        <svg className="_H-fit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <g id="icon_arrows-expand" className="_H-fit">
            <g id="arrow1">
              <path className="_svg-primary" d="M89,39H61V11a6,6,0,0,0-6-6V39a6,6,0,0,0,6,6H95A6,6,0,0,0,89,39Z" />
              <polygon className="_svg-primary" points="95 13.48 95 5 65 35 73.48 35 95 13.48" />
            </g>
            <g id="arrow2">
              <path className="_svg-primary" d="M11,61H39V89a6,6,0,0,0,6,6V61a6,6,0,0,0-6-6H5A6,6,0,0,0,11,61Z" />
              <polygon className="_svg-primary" points="26.52 65 35 65 5 95 5 86.52 26.52 65" />
            </g>
          </g>
        </svg>
      );
      break;

    default:
      break;
  }

  return contentEl;
};

export default GraphicSetContent;
