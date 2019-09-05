// import React from 'react';
// import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
// import {
//   FacebookShareButton,
//   GooglePlusShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   RedditShareButton,
// } from 'react-share';

// // import './Share.scss';

// interface Props {
//   socialConfig: {
//     twitterHandle: `devglweems`;
//     config: {
//       url: string;
//       title: string;
//     };
//   };
//   tags: string[];
// }

// const Share = ({ socialConfig, tags }: Props) => (
//   <div className="post-social">
//     <FacebookShareButton
//       url={socialConfig.config.url}
//       className="button is-outlined is-rounded facebook"
//     >
//       <span className="icon">
//         <FaIcon icon={['fab', 'facebook-f']} />
//       </span>
//       <span className="text">Facebook</span>
//     </FacebookShareButton>
//     <TwitterShareButton
//       url={socialConfig.config.url}
//       className="button is-outlined is-rounded twitter"
//       title={socialConfig.config.title}
//       via={socialConfig.twitterHandle.split('@').join('')}
//       hashtags={tags}
//     >
//       <span className="icon">
//         <FaIcon icon={['fab', 'twitter']} />
//       </span>
//       <span className="text">Twitter</span>
//     </TwitterShareButton>
//     <GooglePlusShareButton
//       url={socialConfig.config.url}
//       className="button is-outlined is-rounded googleplus"
//     >
//       <span className="icon">
//         <FaIcon icon={['fab', 'google-plus-g']} />
//       </span>
//       <span className="text">Google+</span>
//     </GooglePlusShareButton>
//     <LinkedinShareButton
//       url={socialConfig.config.url}
//       className="button is-outlined is-rounded linkedin"
//       title={socialConfig.config.title}
//     >
//       <span className="icon">
//         <FaIcon icon={['fab', 'linkedin-in']} />
//       </span>
//       <span className="text">LinkedIn</span>
//     </LinkedinShareButton>
//     <RedditShareButton
//       url={socialConfig.config.url}
//       className="button is-outlined is-rounded reddit"
//       title={socialConfig.config.title}
//     >
//       <span className="icon">
//         <FaIcon icon={['fab', 'reddit-alien']} />
//       </span>
//       <span className="text">Reddit</span>
//     </RedditShareButton>
//     <WhatsappShareButton
//       url={socialConfig.config.url}
//       className="button is-outlined is-rounded whatsapp"
//       title={socialConfig.config.title}
//     >
//       <span className="icon">
//         <FaIcon icon={['fab', 'whatsapp']} />
//       </span>
//       <span className="text">WhatsApp</span>
//     </WhatsappShareButton>
//   </div>
// );

// export default Share;
