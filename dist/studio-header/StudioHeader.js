import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Responsive from 'react-responsive';
import { AppContext } from '@edx/frontend-platform/react';
import { ensureConfig } from '@edx/frontend-platform';
import fapotImage from '../images/fapot_Header_1_0.png';
import MobileHeader from './MobileHeader';
import HeaderBody from './HeaderBody';
ensureConfig(['STUDIO_BASE_URL', 'SITE_NAME', 'LOGOUT_URL', 'LOGIN_URL', 'LOGO_URL'], 'Studio Header component');
const StudioHeader = _ref => {
  let {
    number,
    org,
    title,
    isHiddenMainMenu,
    mainMenuDropdowns,
    outlineLink
  } = _ref;
  const {
    authenticatedUser,
    config
  } = useContext(AppContext);
  const props = {
    logo: config.LOGO_URL,
    logoAltText: `Studio ${config.SITE_NAME}`,
    number,
    org,
    title,
    username: authenticatedUser?.username,
    isAdmin: authenticatedUser?.administrator,
    authenticatedUserAvatar: authenticatedUser?.avatar,
    studioBaseUrl: config.STUDIO_BASE_URL,
    logoutUrl: config.LOGOUT_URL,
    isHiddenMainMenu,
    mainMenuDropdowns,
    outlineLink
  };
  const fullNameTH = 'หอภาพยนตร์ (องค์การมหาชน)';
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "studio-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-skip sr-only sr-only-focusable",
    href: "#main"
  }, "Skip to content"), /*#__PURE__*/React.createElement(Responsive, {
    maxWidth: 841
  }, /*#__PURE__*/React.createElement(MobileHeader, props)), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 842
  }, /*#__PURE__*/React.createElement(HeaderBody, props)), /*#__PURE__*/React.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "banner-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: fapotImage,
    alt: fullNameTH
  })))), /*#__PURE__*/React.createElement("div", {
    className: "allocate-space"
  }));
};
StudioHeader.propTypes = {
  number: PropTypes.string,
  org: PropTypes.string,
  title: PropTypes.string.isRequired,
  isHiddenMainMenu: PropTypes.bool,
  mainMenuDropdowns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    buttonTitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      href: PropTypes.string,
      title: PropTypes.string
    }))
  })),
  outlineLink: PropTypes.string
};
StudioHeader.defaultProps = {
  number: '',
  org: '',
  isHiddenMainMenu: false,
  mainMenuDropdowns: [],
  outlineLink: null
};
export default StudioHeader;
//# sourceMappingURL=StudioHeader.js.map